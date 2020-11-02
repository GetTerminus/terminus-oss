// NOTE: The radio button value is `any`
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FocusMonitor } from '@angular/cdk/a11y';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  InjectionToken,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Provider,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This allows it to support [(ngModel)] and
 * ngControl.
 *
 * @internal
 */
export const TS_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TsRadioGroupComponent),
  multi: true,
};

/**
 * Define the possible visual radio button formats for {@link TsRadioButtonComponent}
 */
export type TS_VISUAL_FORMATS
  = 'none'
  | 'visual'
  | 'visual-centered'
  | 'visual-small'
  | 'visual-small-centered'
  | 'segmented'
  | 'segmented-vertical'
;

/**
 * Injection token that can be used to inject instances of {@link TsRadioGroupComponent}.
 *
 * It serves as alternative token to the actual `TsRadioGroupComponent` class which could cause unnecessary retention of the class and its
 * component metadata.
 */
export const TS_RADIO_GROUP = new InjectionToken<TsRadioGroupComponent>('TsRadioGroupComponent');

/**
 * The change event as TsRadioChange. Used by {@link TsRadioGroupComponent}
 */
export class TsRadioChange {
  constructor(
    // The group that emit the change event
    public source: TsRadioButtonComponent,
    // The value of the TsRadioButton
    public value: any,
  ) {}
}

/**
 * Unique ID for each instance
 */
let nextUniqueId = 0;

/**
 * A collection of {@link TsRadioButtonComponent}s
 *
 * @example
 * <ts-radio-group
 *              fieldsetId="myFormId"
 *              fieldsetLegend="My radio group!"
 *              [formControl]="myForm.get('myRadioGroup')"
 *              [isDisabled]="true"
 *              [isRequired]="true"
 *              [name]="myInputName"
 *              [noValidationOrHint]="true"
 *              [value]="mySelectedOption"
 *              [validationFormControl]="myControl"
 *              [visualFormat]="visual-centered"
 *              (selectionChange)="doSomething($event)"
 * >
 *              <ts-radio-button value="one">One</ts-radio-button>
 *              <ts-radio-button value="two">Two</ts-radio-button>
 * </ts-radio-group>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-data-entry-radio-group</example-url>
 */
@Component({
  selector: 'ts-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  host: {
    'class': 'ts-radio-group',
    '[class.ts-radio-group--disabled]': 'isDisabled',
    '[class.ts-radio-group--required]': 'isRequired',
    '[class.ts-radio-group--default]': 'visualFormat === "none"',
    '[class.ts-radio-group--visual]': 'visualFormat.includes("visual")',
    '[class.ts-radio-group--visual-small]': 'visualFormat.includes("small")',
    '[class.ts-radio-group--visual-centered]': 'visualFormat.includes("centered")',
    '[class.ts-radio-group--segmented]': 'visualFormat.includes("segmented")',
    '[class.ts-radio-group--segmented-vertical]': 'visualFormat.includes("segmented-vertical")',
    'role': 'radiogroup',
  },
  providers: [
    TS_RADIO_GROUP_CONTROL_VALUE_ACCESSOR,
    {
      provide: TS_RADIO_GROUP,
      useExisting: TsRadioGroupComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsRadioGroup',
})
export class TsRadioGroupComponent implements AfterContentInit {
  /**
   * Define the default component UID
   */
  protected uid = `ts-radio-group-${nextUniqueId++}`;

  /**
   * Access all child radio buttons
   */
  @ContentChildren(forwardRef(() => TsRadioButtonComponent), { descendants: true })
  public radios: QueryList<TsRadioButtonComponent>;

  /**
   * Whether the `value` has been set to its initial value
   */
  private isInitialized = false;

  /**
   * Define an ID for the fieldset
   */
  @Input()
  public fieldsetId: string;

  /**
   * Define legend text for the fieldset
   */
  @Input()
  public fieldsetLegend: string;

  /**
   * Whether the radio group is disabled
   */
  @Input()
  public set isDisabled(value) {
    this._isDisabled = value;
    this.markRadiosForCheck();
  }
  public get isDisabled(): boolean {
    return this._isDisabled;
  }
  private _isDisabled = false;

  /**
   * Whether the radio group is required
   */
  @Input()
  public set isRequired(value: boolean) {
    this._isRequired = value;
    this.markRadiosForCheck();
  }
  public get isRequired(): boolean {
    return this._isRequired;
  }
  private _isRequired = false;

  /**
   * Name of the radio button group.
   *
   * All radio buttons inside this group will use this name.
   */
  @Input()
  public set name(value: string) {
    this._name = value;
    this.updateRadioButtonNames();
  }
  public get name(): string {
    return this._name;
  }
  private _name = `ts-radio-group-${nextUniqueId++}`;

  /**
   * Define whether a validation or a hint is needed
   */
  @Input()
  public noValidationOrHint = false;

  /**
   * Set the selected radio option
   *
   * @param selected - The selected radio option or null
   */
  public setSelected(selected: TsRadioButtonComponent | null): void {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this.checkSelectedRadioButton();
  }
  public get selected(): TsRadioButtonComponent | null {
    return this._selected;
  }
  public _selected: TsRadioButtonComponent | null = null;

  /**
   * Define an optional form control to be passed to {@link TsValidationMessagesComponent}
   */
  @Input()
  public validationFormControl: FormControl | undefined;

  /**
   * Value for the radio-group. Should equal the value of the selected radio button if there is a corresponding radio button with a
   * matching value. If there is not such a corresponding radio button, this value persists to be applied in case a new radio button is
   * added with a matching value.
   */
  @Input()
  public set value(newValue: any) {
    // istanbul ignore else
    if (this._value !== newValue) {
      // Set this before proceeding to ensure no circular loop occurs with selection.
      this._value = newValue;
      this.updateSelectedRadioFromValue();
      this.checkSelectedRadioButton();
    }
  }
  public get value(): any {
    return this._value;
  }
  private _value: any = null;

  /**
   * Use one of the visual formats available
   *
   * See {@link TS_VISUAL_FORMATS}
   */
  @Input()
  public set visualFormat(value: TS_VISUAL_FORMATS) {
    this._visualFormat = value ? value : 'none';
  }
  public get visualFormat(): TS_VISUAL_FORMATS {
    return this._visualFormat;
  }
  private _visualFormat: TS_VISUAL_FORMATS = 'none';

  /**
   * Emit event when a selection occurs. {@link TsRadioChange}
   */
  @Output()
  public readonly selectionChange = new EventEmitter<TsRadioChange>();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public elementRef: ElementRef,
  ) {}

  /**
   * Initialize properties once content children are available
   *
   * NOTE: This allows us to propagate relevant attributes to associated buttons.
   */
  public ngAfterContentInit(): void {
    // Mark this component as initialized in AfterContentInit because the initial value can possibly be set by NgModel on MatRadioGroup,
    // and it is possible that the OnInit of the NgModel occurs *after* the OnInit of the MatRadioGroup.
    this.isInitialized = true;
  }

  /**
   * Update the `selected` radio button from the internal _value state
   */
  private updateSelectedRadioFromValue(): void {
    // If the value already matches the selected radio, do nothing.
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;

    // istanbul ignore else
    if (this.radios && !isAlreadySelected) {
      this._selected = null;
      this.radios.forEach(radio => {
        radio.isChecked = this.value === radio.value;
        // istanbul ignore else
        if (radio.isChecked) {
          this._selected = radio;
        }
      });
    }
  }

  /**
   * Dispatch the selectionChange event with current selection and group value
   */
  public emitChangeEvent(): void {
    // istanbul ignore else
    if (this.isInitialized) {
      this.selectionChange.emit(new TsRadioChange(this.selected, this.value));
    }
  }

  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   *
   * @param value
   */
  public writeValue(value: any): void {
    this.value = value;
    this.changeDetectorRef.markForCheck();
  }

  /**
   * Registers a callback to be triggered when the model value changes.
   *
   * Implemented as part of ControlValueAccessor.
   *
   * @param fn - Callback to be registered.
   */
  public registerOnChange(fn: (value: any) => void): void {
    this.controlValueAccessorChangeFn = fn;
  }

  /**
   * Registers a callback to be triggered when the control is touched.
   *
   * Implemented as part of ControlValueAccessor.
   *
   * @param fn - Callback to be registered.
   */
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   *
   * @param isDisabled - Whether the control should be disabled.
   */
  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.changeDetectorRef.markForCheck();
  }

  /**
   * Mark this group as being "touched" (for ngModel)
   *
   * Meant to be called by the contained radio buttons upon their blur.
   */
  public touch(): void {
    // istanbul ignore else
    if (this.onTouched) {
      this.onTouched();
    }
  }

  /**
   * The method to be called in order to update ngModel
   *
   * @internal
   */
  public controlValueAccessorChangeFn: (value: any) => void = () => {};

  /**
   * onTouch function registered via registerOnTouch (ControlValueAccessor).
   *
   * @internal
   */
  public onTouched: () => any = () => {};

  /**
   * Mark all radios for change detection check
   */
  private markRadiosForCheck(): void {
    // istanbul ignore else
    if (this.radios) {
      this.radios.forEach(radio => radio.markForCheck());
    }
  }

  /**
   * Verify the selected state for the selected radio button
   */
  private checkSelectedRadioButton(): void {
    // istanbul ignore else
    if (this.selected && !this.selected.isChecked) {
      this._selected.isChecked = true;
    }
  }

  /**
   * Update the name for each radio button
   */
  private updateRadioButtonNames(): void {
    // istanbul ignore else
    if (this.radios) {
      this.radios.forEach(radio => {
        radio.name = this.name;
        radio.markForCheck();
      });
    }
  }
}

/**
 * Individual radio button for {@link TsRadioGroupComponent}
 *
 * @example
 * <ts-radio-button
 *              aria-label="My label"
 *              aria-labelledby="myId"
 *              aria-describedby="My description."
 *              id="myId"
 *              [isChecked]="true"
 *              [isDisabled]="true"
 *              [isRequired]="true"
 *              [label]="My label!"
 *              [name]="myInputName"
 *              tabIndex="1"
 *              [value]="foo"
 *              (selectionChange)="doSomething($event)"
 * >My Option!</ts-radio-button>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-data-entry-radio-group</example-url>
 */
@Component({
  selector: 'ts-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  host: {
    'class': 'ts-radio-button',
    '[class.ts-radio-button--checked]': 'isChecked',
    '[class.ts-radio-button--disabled]': 'isDisabled',
    // NOTE: Needs to be -1 so the `focus` event still fires
    '[attr.tabindex]': '-1',
    '[attr.id]': 'id',
    '[attr.aria-label]': 'null',
    '[attr.aria-labelledby]': 'null',
    '[attr.aria-describedby]': 'null',
    // NOTE: under normal conditions focus shouldn't land on this element, however it may be programmatically set, for example inside of a
    // focus trap, in this case we want to forward the focus to the native element.
    '(focus)': 'nativeInput.nativeElement.focus()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsRadioButton',
})
export class TsRadioButtonComponent implements OnInit, AfterViewInit, OnDestroy {
  /**
   * Define a custom UID
   */
  protected uid = `ts-radio-button-${++nextUniqueId}`;

  /**
   * ID of the native input element inside `<ts-radio-button>`
   */
  public get inputId(): string {
    return `${this.id}-input`;
  }

  /**
   * Unregister function for radioDispatcher
   */
  private readonly removeUniqueSelectionListener: () => void = () => {};

  /**
   * The native `<input type=radio>` element
   */
  @ViewChild('input')
  public nativeInput: ElementRef<HTMLInputElement>;

  /**
   * Define the 'aria-label' attribute on the underlying input element
   */
  @Input('aria-label')
  public ariaLabel: string;

  /**
   * The 'aria-labelledby' attribute takes precedence as the element's text alternative
   */
  @Input('aria-labelledby')
  public ariaLabelledby: string;

  /**
   * The 'aria-describedby' attribute is read after the element's label and field type
   */
  @Input('aria-describedby')
  public ariaDescribedby: string;

  /**
   * Define the unique ID
   */
  @Input()
  public set id(value: string) {
    this._id = value ? value : this.uid;
  }
  public get id(): string {
    return this._id;
  }
  private _id: string = this.uid;

  /**
   * Define if the radio button is checked
   */
  @Input()
  public set isChecked(value: boolean) {
    if (this._isChecked !== value) {
      this._isChecked = value;
      if (value && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.setSelected(this);
      } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
        // When unchecking the selected radio button, update the selected radio property on the group.
        this.radioGroup.setSelected(null);
      }

      // istanbul ignore else
      if (value) {
        // Notify all radio buttons with the same name to un-check.
        this.radioDispatcher.notify(this.id, this.name);
      }
      this.changeDetectorRef.markForCheck();
    }
  }
  public get isChecked(): boolean {
    return this._isChecked;
  }
  private _isChecked = false;

  /**
   * Define if the radio option should be disabled
   */
  @Input()
  public set isDisabled(value: boolean) {
    this.setDisabled(value);
  }
  public get isDisabled(): boolean {
    return this._isDisabled || (this.radioGroup !== null && this.radioGroup.isDisabled);
  }
  private _isDisabled = false;

  /**
   * Define if the radio option should be required
   */
  @Input()
  public set isRequired(value: boolean) {
    this._isRequired = value;
  }
  public get isRequired(): boolean {
    return this._isRequired || (this.radioGroup && this.radioGroup.isRequired);
  }
  private _isRequired = false;

  /**
   * Analog to HTML 'name' attribute used to group radios for unique selection
   */
  @Input()
  public name: string;

  /**
   * Define a custom tabindex for the radio button
   */
  @Input()
  public tabIndex = '-1';

  /**
   * Define the text content
   *
   * NOTE: This will be overridden if any content is passed in through <ng-content>
   */
  @Input()
  public textContent: string;

  /**
   * The value of this radio button
   */
  @Input()
  public set value(value: any) {
    // istanbul ignore else
    if (this._value !== value) {
      this._value = value;
      // istanbul ignore else
      if (this.radioGroup !== null) {
        // istanbul ignore else
        if (!this.isChecked) {
          // Update checked when the value changed to match the radio group's value
          this.isChecked = this.radioGroup.value === value;
        }
        if (this.isChecked) {
          this.radioGroup.setSelected(this);
        }
      }
    }
  }
  public get value(): any {
    return this._value;
  }
  private _value: any = null;

  /**
   * Event emitted when the checked state of this radio button changes.
   *
   * Change events are only emitted when the value changes due to user interaction with
   * the radio button (the same behavior as `<input type="radio">`).
   */
  @Output()
  public readonly selectionChange = new EventEmitter<TsRadioChange>();

  constructor(
    public elementRef: ElementRef,
    protected changeDetectorRef: ChangeDetectorRef,
    @Optional() private radioGroup: TsRadioGroupComponent,
    private focusMonitor: FocusMonitor,
    private radioDispatcher: UniqueSelectionDispatcher,
  ) {
    this.removeUniqueSelectionListener =
      radioDispatcher.listen((id: string, name: string) => {
        // istanbul ignore else
        if (id !== this.id && name === this.name) {
          this.isChecked = false;
        }
      });
  }

  /**
   * Set initial seeded values
   */
  public ngOnInit(): void {
    if (this.radioGroup) {
      // If the radio is inside a radio group, determine if it should be checked
      this.isChecked = this.radioGroup.value === this._value;
      // Copy name from parent radio group
      this.name = this.radioGroup.name;
    }
  }

  /**
   * Wire up listener to call `touch()` on the group when a button receives a blur event
   */
  public ngAfterViewInit(): void {
    this.focusMonitor
      .monitor(this.elementRef, true)
      .subscribe(focusOrigin => {
        if (!focusOrigin && this.radioGroup) {
          this.radioGroup.touch();
        }
      });
  }

  /**
   * Clean up any listeners
   */
  public ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this.removeUniqueSelectionListener();
  }

  /**
   * Stop event propagation on input clicks
   *
   * We have to stop propagation for click events on the visual hidden input element. By default, when a user clicks on a label element,
   * a generated click event will be dispatched on the associated input element. Since we are using a label element as our root container,
   * the click event on the `radio-button` will be executed twice. The real click event will bubble up, and the generated click event also
   * tries to bubble up. This will lead to multiple click events. Preventing bubbling for the second event will solve that issue.
   *
   * @param event - Click event
   */
  public onInputClick(event: Event): void {
    event.stopPropagation();
  }

  /**
   * Triggered when the radio button received a click or the input recognized any change.
   *
   * Clicking on a label element, will trigger a change event on the associated input.
   *
   * @param event - The change event
   */
  public onInputChange(event: Event): void {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();

    const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
    this.isChecked = true;
    this.emitChangeEvent();

    // istanbul ignore else
    if (this.radioGroup) {
      this.radioGroup.controlValueAccessorChangeFn(this.value);
      // istanbul ignore else
      if (groupValueChanged) {
        this.radioGroup.emitChangeEvent();
      }
    }
  }

  /**
   * Focus the underlying native radio button
   *
   * @param options - Optional focus options
   */
  public focus(options?: FocusOptions): void {
    this.focusMonitor.focusVia(this.nativeInput, 'keyboard', options);
  }

  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */
  public markForCheck(): void {
    // When group value changes, the button will not be notified. Use `markForCheck` to explicit
    // update radio button's status
    this.changeDetectorRef.markForCheck();
  }

  /**
   * Set the disabled state and mark for check if a change occurred
   *
   * @param value - The new disabled value
   */
  protected setDisabled(value: boolean): void {
    // istanbul ignore else
    if (this._isDisabled !== value) {
      this._isDisabled = value;
      this.changeDetectorRef.markForCheck();
    }
  }

  /**
   * Dispatch change event
   */
  private emitChangeEvent(): void {
    this.selectionChange.emit(new TsRadioChange(this, this.value));
  }
}
