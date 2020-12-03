import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Optional,
  Output,
  QueryList,
  Self,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import type {
  AfterViewInit,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  NgControl,
} from '@angular/forms';
import {
  BehaviorSubject,
  of,
} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';

import {
  coerceNumberProperty,
  hasRequiredControl,
  isArray,
  TsDocumentService,
  untilComponentDestroyed,
} from '@terminus/fe-utilities';
import {
  TsChipCollectionComponent,
  TsChipEvent,
} from '@terminus/ui-chip';
import {
  getOptionScrollPosition,
  TS_OPTION_PARENT_COMPONENT,
  TsOptgroupComponent,
  TsOptionComponent,
} from '@terminus/ui-option';
import { TsUILibraryError } from '@terminus/ui-utilities';

import {
  TsSelectionListPanelComponent,
  TsSelectionListPanelSelectedEvent,
} from '../selection-list-panel/selection-list-panel.component';
import {
  SELECTION_LIST_PANEL_MAX_HEIGHT,
  TsSelectionListTriggerDirective,
} from '../trigger/selection-list-trigger.directive';

// Unique ID for each instance
let nextUniqueId = 0;
const DEFAULT_MINIMUM_CHARACTER_COUNT = 2;
const DEFAULT_DEBOUNCE_DELAY = 200;

/**
 * The event object that is emitted when the select value has changed
 */
export class TsSelectionListChange<T = unknown> {
  constructor(
    public source: TsSelectionListComponent,
    public value: T,
  ) { }
}

export type TsSelectionListFormatter = (v: unknown) => string;
export type TsSelectionListComparator = (a: unknown, b: unknown) => boolean;

/**
 * A selection list (picklist/dropdown) that supports single or multiple selections and user input.
 *
 * @example
 * <ts-selection-list
 *              [allowMultiple]="allowMultiple"
 *              [displayFormatter]="formatterFunc"
 *              [valueComparator]="comparatorFunc"
 *              debounceDelay="300"
 *              errorMessage="Select at least 1 item"
 *              [formControl]="myFormControl"
 *              hint="Begin typing to search.."
 *              [isDisabled]="isDisabled"
 *              label="Select options:"
 *              name="product selections"
 *              options="[{}, {}, ...]"
 *              [showProgress]="true"
 *              (closed)="panelWasClosed($event)"
 *              (duplicateSelection)="duplicateWasSelected($event)"
 *              (opened)="panelWasOpened($event)"
 *              (optionSelected)="mySelected($event)"
 *              (optionDeselected)="myDeselected($event)"
 *              (queryChange)="myQueryChange($event)"
 *              (selectionChange)="mySelection($event)"
 * ></ts-selection-list>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-data-entry-selection-list</example-url>
 */
@Component({
  selector: 'ts-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss'],
  host: {
    'class': 'ts-selection-list',
    '[class.ts-selection-list--required]': 'isRequired',
    '[class.ts-selection-list--disabled]': 'isDisabled',
    '[class.ts-selection-list--single]': '!allowMultiple',
    '[class.ts-selection-list--multiple]': 'allowMultiple',
    '[attr.aria-owns]': 'panelOpen ? optionIds : null',
    '[attr.aria-required]': 'isRequired.toString()',
    '[attr.aria-multiselectable]': 'allowMultiple',
  },
  providers: [
    {
      provide: TS_OPTION_PARENT_COMPONENT,
      useExisting: TsSelectionListComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsSelectionList',
})
export class TsSelectionListComponent implements
  OnInit,
  AfterViewInit,
  OnDestroy {

  /**
   * Determine if the dropdown arrow icon should be visible
   */
  public showArrow: boolean;

  /**
   * Give the component an explicit name
   * TODO: remove once select & autocomplete have been removed https://github.com/GetTerminus/terminus-ui/issues/1678
   */
  public readonly componentName = 'TsSelectionListComponent';

  /**
   * Define the internal FormControl
   */
  public selectionListFormControl = new FormControl([]);

  /**
   * Store a reference to the document object
   */
  private document: Document;

  /**
   * Manages keyboard events for options in the panel.
   */
  private keyManager!: ActiveDescendantKeyManager<TsOptionComponent>;

  /**
   * The IDs of child options to be passed to the aria-owns attribute.
   */
  public optionIds = '';

  /**
   * Whether or not the overlay panel is open
   */
  public panelOpen = false;

  /**
   * Define the default component ID
   */
  public readonly uid = `ts-selection-list-${nextUniqueId++}`;

  /**
   * Management of the query string
   */
  public querySubject: BehaviorSubject<string> = new BehaviorSubject('');

  /**
   * Store the search query
   */
  public searchQuery = '';

  /**
   * Define access to the panel container
   *
   * NOTE: The renamed variable is required. If we pass `panelContainer` it will be an HTMLDivElement instead of an ElementRef.
   */
  @ViewChild('panelContainer', { static: true })
  public panelContainerElementRef!: ElementRef;

  /**
   * Access the panel
   */
  @ViewChild('auto', { static: true })
  public panel!: TsSelectionListPanelComponent;

  /**
   * Access the trigger
   */
  @ViewChild(TsSelectionListTriggerDirective)
  public trigger!: TsSelectionListTriggerDirective;

  /**
   * Access the chip list
   */
  @ViewChild('chipList')
  public chipList: TsChipCollectionComponent | undefined;

  /**
   * Access the actual HTMLInputElement
   */
  @ViewChild('input')
  public inputElement!: ElementRef<HTMLInputElement>;

  /**
   * Access a list of all the defined select options
   */
  @ContentChildren(TsOptionComponent, { descendants: true })
  public options!: QueryList<TsOptionComponent>;

  /**
   * Access all of the defined optgroups
   */
  @ContentChildren(TsOptgroupComponent)
  public optionGroups!: QueryList<TsOptgroupComponent>;

  /**
   * Determine the trigger display when no user input is allowed
   */
  public get staticTriggerDisplay(): string {
    const selection = this.ngControl.value[0];
    const display = selection ? this.displayFormatter(selection) : '';
    if (this.allowMultiple || !display) {
      return '';
    }
    return display;
  }

  /**
   * Define if multiple selections are allowed
   */
  @Input()
  public allowMultiple = false;

  /**
   * Define if should allow duplicate selections
   */
  @Input()
  public allowDuplicateSelections = false;

  /**
   * Define if the user is allowed to type to search/filter
   */
  @Input()
  public allowUserInput = true;

  /**
   * Define a debounce delay for the query stream
   *
   * @param value
   */
  @Input()
  public set debounceDelay(value: number) {
    this._debounceDelay = coerceNumberProperty(value, DEFAULT_DEBOUNCE_DELAY);
  }
  public get debounceDelay(): number {
    return this._debounceDelay;
  }
  private _debounceDelay = DEFAULT_DEBOUNCE_DELAY;

  /**
   * Define an error (validation) message
   */
  @Input()
  public errorMessage: string;

  /**
   * Define a hint for the input
   *
   * @param value
   */
  @Input()
  public hint: string;

  /**
   * Define an ID for the component
   *
   * @param value
   */
  @Input()
  public set id(value: string) {
    this._id = value || this.uid;
  }
  public get id(): string {
    return this._id;
  }
  protected _id: string = this.uid;

  /**
   * Define if the control should be disabled
   */
  @Input()
  public isDisabled = false;

  /**
   * Define if the control is required
   *
   * @param value
   */
  @Input()
  public set isRequired(value: boolean) {
    this._isRequired = value;
  }
  public get isRequired(): boolean {
    const ctrl = this.ngControl && this.ngControl.control;
    const requiredFormControl = !!ctrl && hasRequiredControl(ctrl);
    return this._isRequired || requiredFormControl;
  }
  private _isRequired = false;

  /**
   * Define a minimum character count for queries
   *
   * @param value
   */
  @Input()
  public set minimumCharacters(value: number) {
    this._minimumCharacters = coerceNumberProperty(value, DEFAULT_MINIMUM_CHARACTER_COUNT);
  }
  public get minimumCharacters(): number {
    return this._minimumCharacters;
  }
  private _minimumCharacters = DEFAULT_MINIMUM_CHARACTER_COUNT;

  /**
   * Define whether a validation or a hint needed.
   */
  @Input()
  public noValidationOrHint = false;

  /**
   * Define if the panel should reopen after a selection is made
   *
   * NOTE: Though it is technically 're-opening', it happens fast enough so that it doesn't appear to close at all.
   */
  @Input()
  public reopenAfterSelection = false;

  /**
   * Define if the input should currently be showing a progress spinner
   */
  @Input()
  public showProgress = false;

  /**
   * Define if validation messages should be shown immediately or on blur
   */
  @Input()
  public validateOnChange = false;

  /**
   * Value of the select control
   *
   * @param newValue
   */
  @Input()
  public set value(newValue: string | undefined) {
    // istanbul ignore else
    if (newValue !== this._value) {
      this._value = newValue;
    }
  }
  public get value(): string | undefined {
    return this._value;
  }
  private _value: string | undefined;

  /**
   * Define the placeholder/label
   */
  @Input()
  public label: string | undefined;

  /**
   * Define the name attribute value
   */
  @Input()
  public name: string | undefined;

  /**
   * Define the formatter for the selected items.
   *
   * @param value
   */
  @Input()
  public set displayFormatter(value: TsSelectionListFormatter) {
    this._displayFormatter = value ? value : v => v as string;
  }
  public get displayFormatter(): TsSelectionListFormatter {
    return this._displayFormatter;
  }
  private _displayFormatter: TsSelectionListFormatter = v => v as string;

  /**
   * Define the comparator for the values of the options
   *
   * @param a
   * @param b
   */
  @Input()
  public valueComparator: TsSelectionListComparator = (a: unknown, b: unknown) => a === b;

  /**
   * Emit when the backdrop is clicked
   */
  @Output()
  public readonly backdropClicked = new EventEmitter<void>();

  /**
   * Emit when the panel is closed
   */
  @Output()
  public readonly closed = new EventEmitter<void>();

  /**
   * Emit the option when a duplicate selection is made
   */
  @Output()
  public readonly duplicateSelection = new EventEmitter<TsSelectionListChange>();

  /**
   * Emit when the panel is opened
   */
  @Output()
  public readonly opened = new EventEmitter<void>();

  /**
   * Emit the selected option
   */
  @Output()
  public readonly optionSelected = new EventEmitter<TsSelectionListChange>();

  /**
   * Emit the deselected option
   */
  @Output()
  public readonly optionDeselected = new EventEmitter<TsSelectionListChange>();

  /**
   * Emit the new query
   */
  @Output()
  public readonly queryChange = new EventEmitter<string>();

  /**
   * Emit the current selections when any selection changes
   */
  @Output()
  public readonly selectionChange = new EventEmitter<TsSelectionListChange>();

  /**
   * Event that emits whenever the raw value of the select changes. This is here primarily to facilitate the two-way binding for the `value`
   * input.
   *
   * Needed for {@link TsFormFieldComponent}.
   */
  @Output()
  public readonly valueChange = new EventEmitter<string>();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private documentService: TsDocumentService,
    public elementRef: ElementRef,
    @Self() @Optional() public ngControl: NgControl,
  ) {
    this.document = this.documentService.document;

    // This is the assigned FormControl or NgModel
    // istanbul ignore else
    if (this.ngControl) {
      // Note: we provide the value accessor through here, instead of the `providers` to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }
  }


  /**
   * Seed initial values and set up watchers
   */
  public ngOnInit(): void {
    // Seed the control value
    // NOTE: When the consumer is using an ngModel, the value is not set on the first cycle.
    // We need to push it to the next event loop. When using a FormControl, the value is there on the first run.
    // eslint-disable-next-line dot-notation
    if (this.ngControl && this.ngControl['form']) {
      // istanbul ignore else
      if (this.ngControl.value && !isArray(this.ngControl.value)) {
        throw new TsUILibraryError(`TsSelectionListComponent: Form control values must be an array of values`);
      } else if (this.ngControl.value && this.ngControl.value.length) {
        this.selectionListFormControl.setValue(this.ngControl.value);
        if (!this.allowMultiple) {
          this.searchQuery = this.displayFormatter(this.ngControl.value[0]);
        }
      }

      // Support dynamic form control updates
      // istanbul ignore else
      if (this.ngControl.valueChanges) {
        this.ngControl.valueChanges
          .pipe(untilComponentDestroyed(this))
          .subscribe(newValue => {
            // istanbul ignore else
            if (newValue) {
              if (newValue[0]) {
                this.searchQuery = this.displayFormatter(newValue[0]);
              }

              if (this.allowMultiple) {
                this.selectionListFormControl.setValue(newValue, { emitEvent: false });
              } else {
                this.selectionListFormControl.setValue([newValue[0]], { emitEvent: false });
              }
              this.changeDetectorRef.detectChanges();
            }
          });
      }
    } else {
      // HACK: Wait until the next detection cycle to set the value from an ngModel.
      // NOTE: Using CDR.detectChanges causes errors in children that expect TsOptionComponent to exist.
      Promise.resolve().then(() => {
        // istanbul ignore else
        if (this.ngControl && this.ngControl.value) {
          if (!isArray(this.ngControl.value)) {
            throw new TsUILibraryError(`TsSelectionListComponent: ngModel must be an array of values`);
          }
          this.selectionListFormControl.setValue(this.ngControl.value);
          // istanbul ignore else
          if (!this.allowMultiple) {
            this.searchQuery = this.displayFormatter(this.ngControl.value[0]);
          }
        }
      });
    }

    // Propagate changes from form control
    this.selectionListFormControl.valueChanges.pipe(
      untilComponentDestroyed(this),
    ).subscribe(() => {
      this.propagateChanges();
    });
  }

  /**
   * Subscribe to panel events and query subject changes
   */
  public ngAfterViewInit(): void {
    // Initialize arrow icon based on options length
    Promise.resolve().then(() => {
      this.showArrow = !!this.options.length;
      this.changeDetectorRef.markForCheck();
    });
    // Subscribe to options change to determine arrow icon visibility
    this.options.changes.pipe(untilComponentDestroyed(this)).subscribe(v => {
      this.showArrow = !!v.length;
      this.changeDetectorRef.detectChanges();
    });
    // Seed any initial value into the query subject
    this.querySubject.next(this.inputElement.nativeElement.value);

    // Wire up listeners for panel events
    this.trigger.selectionListPanel.opened.pipe(untilComponentDestroyed(this)).subscribe(() => {
      this.opened.emit();
    });
    // Wire up listeners for panel opened event
    this.opened.pipe(untilComponentDestroyed(this)).subscribe(() => {
      // NOTE: setTimeout is added to resolve a timing issue. Promise.resolve().then does not work in this case.
      // Without setTimeout when opened event emitted, panel is still undefined.
      setTimeout(() => {
        this.scrollActiveOptionIntoView();
      });
    });
    this.trigger.selectionListPanel.closed.pipe(untilComponentDestroyed(this)).subscribe(() => {
      this.closed.emit();
    });
    this.trigger.backdropClicked.pipe(untilComponentDestroyed(this)).subscribe(() => {
      this.backdropClicked.emit();
    });

    // Take a stream of query changes
    this.querySubject.pipe(
      untilComponentDestroyed(this),
      debounceTime(this.debounceDelay),
      // If the query is shorter than allowed, convert to an empty string
      // eslint-disable-next-line deprecation/deprecation
      switchMap(query => ((query.length >= this.minimumCharacters) ? of(query) : of(''))),
      distinctUntilChanged(),
    ).subscribe((query: string) => {
      const inputValue = this.inputElement.nativeElement.value;

      // NOTE: If the input value is valid but the query is too short, an option was likely just selected and a new query has started
      if (query.length < this.minimumCharacters && inputValue.length >= this.minimumCharacters) {
        query = inputValue;
      }
      this.queryChange.emit(query);

      // istanbul ignore else
      if (!this.panelOpen) {
        this.open();
      }
    });
  }

  /**
   * Needed for untilComponentDestroyed
   */
  public ngOnDestroy(): void {}

  /**
   * Stub in onChange
   *
   * Needed for ControlValueAccessor (View -> model callback called when value changes)
   */
  // istanbul ignore next
  public onChange: (value: string) => void = () => { };

  /**
   * Stub in onTouched
   *
   * Needed for ControlValueAccessor (View -> model callback called when select has been touched)
   */
  // istanbul ignore next
  public onTouched = () => { };

  /**
   * Close the overlay panel
   */
  public close(): void {
    // istanbul ignore else
    if (this.trigger.panelOpen) {
      this.panelOpen = false;
      this.changeDetectorRef.markForCheck();
      this.onTouched();

      if (!this.allowMultiple) {
        const inputValue = this.inputElement.nativeElement.value;
        const controlValue = this.ngControl.value;
        // If the input value doesn't match the selection, then the user must have edited the input value
        // istanbul ignore else
        if (controlValue && inputValue !== ((controlValue && controlValue.length > 0) ? this.displayFormatter(controlValue[0]) : '')) {
          this.ngControl.value.length = 0;
        }
      }

      this.updateValueAndValidity();
    }
  }

  /**
   * Focus the native input element
   */
  public focusInput(): void {
    this.inputElement.nativeElement.focus();
  }

  /**
   * Open the overlay panel
   */
  public open(): void {
    if (this.isDisabled || !this.options.length || this.panelOpen) {
      return;
    }
    this.opened.emit();
  }

  /**
   * Sets the select's value. Part of the ControlValueAccessor interface required to integrate with Angular's core forms API.
   *
   * NOTE: Currently we are not using this, but it still must be present since this component is acting as a CVA.
   *
   * @param value - New value to be written to the model
   */
  public writeValue(value: string): void { }

  /**
   * Save a callback function to be invoked when the select's value changes from user input.
   * Part of the ControlValueAccessor interface required to integrate with Angular's core forms API.
   *
   * @param fn - Callback to be triggered when the value changes
   */
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  /**
   * Save a callback function to be invoked when the select is blurred by the user.
   * Part of the ControlValueAccessor interface required to integrate with Angular's core forms API.
   *
   * @param fn - Callback to be triggered when the component has been touched
   */
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  /**
   * Disables the select.
   * Part of the ControlValueAccessor interface required to integrate with Angular's core forms API.
   *
   * @param isDisabled - If the component is disabled
   */
  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.changeDetectorRef.markForCheck();
  }

  /**
   * Close the dropdown and reset the query when the user leaves the input
   *
   * @param event - The keyboard or mouse event
   */
  public handleInputBlur(event: KeyboardEvent | MouseEvent | FocusEvent): void {
    // NOTE(B$): cannot use dot syntax here since 'relatedTarget' doesn't exist on a KeyboardEvent
    // eslint-disable-next-line dot-notation
    const hasRelatedTarget = !!(event && event['relatedTarget']);
    // eslint-disable-next-line dot-notation
    const hasNodeName = !!(hasRelatedTarget && event['relatedTarget'].nodeName);

    if (hasRelatedTarget && hasNodeName) {
      // If the blur event comes from the user clicking an option, `event.relatedTarget.nodeName`
      // will be `TS-OPTION`.
      // istanbul ignore else
      // NOTE: TypeScript warns `Property 'nodeName' does not exist on type 'EventTarget'.`
      // eslint-disable-next-line dot-notation
      if (event['relatedTarget'].nodeName !== 'TS-OPTION') {
        if (this.allowMultiple) {
          this.resetAutocompleteQuery();
        }
        this.close();
        this.trigger.closePanel(true);
      }
    } else {
      // NOTE: The lonely if is the only way to correctly ignore 'else' coverage
      // istanbul ignore else
      // eslint-disable-next-line no-lonely-if
      if (this.trigger.panelOpen) {
        this.close();
        this.trigger.closePanel(true);
      }
    }

    // Mark this control as 'touched' to trigger any validations needed on blur
    this.onTouched();
    this.updateValueAndValidity();
  }

  /**
   * Select an item
   *
   * @param selection - The item to select
   */
  public selectItem(selection: TsSelectionListPanelSelectedEvent): void {
    const ctrlValue = this.selectionListFormControl.value || [];
    const isDuplicate = ctrlValue.findIndex(o => this.valueComparator(o, selection.option.value)) >= 0;

    // istanbul ignore else
    if (isDuplicate) {
      this.duplicateSelection.emit(new TsSelectionListChange(this, selection.option.value));
    }

    // Stop the flow if the selection already exists in the array and duplicates aren't allowed
    if (!this.allowDuplicateSelections && isDuplicate) {
      return;
    }

    if (this.allowMultiple) {
      // If supporting multiple selections, reset the input text value as long as the panel should NOT reopen
      // istanbul ignore else
      if (!this.reopenAfterSelection) {
        this.close();
        this.resetAutocompleteQuery();
      }

      // Update the form control
      const options = ctrlValue.concat(selection.option.value);
      this.selectionListFormControl.setValue(options);
    } else {
      // Update the form control
      this.selectionListFormControl.setValue([selection.option.value]);

      // In single selection mode, set the query input to the selection so the user can see what was selected
      this.inputElement.nativeElement.value = selection.option.viewValue;
    }

    // Update the panel position in case the addition of a chip causes the select height to change
    // istanbul ignore else
    if (this.trigger.overlayRef) {
      this.trigger.overlayRef.updatePosition();
      this.changeDetectorRef.detectChanges();
    }

    // Notify consumers about changes
    this.optionSelected.emit(new TsSelectionListChange(this, selection.option.value));
  }

  /**
   * Deselect an item
   *
   * @param option - The option to select
   */
  public deselectItem(option: TsChipEvent): void {
    // Find the key of the selection in the selectedOptions array
    const options = (this.selectionListFormControl.value || [])
      .filter(opt => !this.valueComparator(opt, option.chip.value));

    // Update the form control
    this.selectionListFormControl.setValue(options);

    // If the only chip was removed, re-focus the input
    // istanbul ignore else
    if (options.length === 0) {
      this.focusInput();
    }

    // HACK: For some reason, triggering change detection works in the selection method above, but not here. Same issue seems present in
    // TsOptionComponent where `setActiveStyles` works by calling the CDR but `setInactiveStyles` required a timeout.
    Promise.resolve().then(() => {
      // Update the panel position in case the removal of a chip causes the select height to change
      if (this.trigger.overlayRef) {
        this.trigger.overlayRef.updatePosition();
      }
    });

    // Notify consumers about changes
    this.optionDeselected.emit(new TsSelectionListChange(this, option));
  }

  /**
   * Function for tracking for-loops changes
   *
   * @param index - The item index
   * @returns The unique ID
   */
  public trackByFn(index): number {
    return index;
  }

  /**
   * Set up a key manager to listen to keyboard events on the overlay panel
   */
  private initKeyManager(): void {
    // We need to initialize with wrapping turned on
    this.keyManager = new ActiveDescendantKeyManager<TsOptionComponent>(this.options)
      .withTypeAhead()
      .withVerticalOrientation()
      .withHorizontalOrientation('ltr')
      .withWrap();

  }

  /**
   * Emit a change event to set the model value
   */
  private propagateChanges(): void {
    const valueToEmit = this.selectionListFormControl.value;
    this.value = valueToEmit;
    this.valueChange.emit(valueToEmit);
    this.onChange(valueToEmit);
    this.selectionChange.emit(new TsSelectionListChange(this, valueToEmit));
    this.changeDetectorRef.markForCheck();
  }

  /**
   * Call FormControl updateValueAndValidity function to ensure value and valid status get updated.
   */
  private updateValueAndValidity(): void {
    // istanbul ignore else
    if (this.ngControl && this.ngControl.control) {
      this.ngControl.control.updateValueAndValidity();
    }
  }

  /**
   * Reset input
   */
  private resetAutocompleteQuery(): void {
    // istanbul ignore else
    if (!this.keyManager) {
      this.initKeyManager();
    }
    // Deselect the option from the key manager
    this.keyManager.updateActiveItem(-1);
    this.inputElement.nativeElement.value = '';
  }

  /**
   * Scroll the active option into view
   */
  private scrollActiveOptionIntoView(): void {
    const ctrlValue = this.selectionListFormControl.value;
    if (ctrlValue.length === 0) {
      return;
    }
    const allOptions = this.trigger.selectionListPanel.options.toArray().map(o => o.value);
    const index = allOptions.findIndex(o => this.valueComparator(o, ctrlValue[ctrlValue.length - 1]));
    this.trigger.selectionListPanel.scrollTop = getOptionScrollPosition(
      index,
      this.trigger.itemHeight,
      this.trigger.selectionListPanel.scrollTop,
      SELECTION_LIST_PANEL_MAX_HEIGHT,
    );
    this.trigger.selectionListPanel.keyManager.setActiveItem(index);
  }
}
