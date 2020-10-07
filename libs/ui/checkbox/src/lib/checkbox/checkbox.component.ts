import {
  FocusMonitor,
  FocusOrigin,
} from '@angular/cdk/a11y';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Inject,
  InjectionToken,
  Input,
  OnDestroy,
  Optional,
  Output,
  Provider,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { coerceBooleanProperty } from '@terminus/fe-utilities';

/**
 * Checkbox click action when the user clicks on the input element
 *
 * noop: Do not toggle checked or indeterminate.
 * check: Only toggle checked status, ignore indeterminate.
 * check-indeterminate: Toggle checked status, set indeterminate to false. Default behavior.
 * undefined: Same as `check-indeterminate`.
 */
export type TsCheckboxClickAction = 'noop' | 'check' | 'check-indeterminate' | undefined;

/**
 * Default `ts-checkbox` options that can be overridden
 */
export interface TsCheckboxDefaultOptions {
  clickAction?: TsCheckboxClickAction;
}

/**
 * A factory to generate the options for {@link TsCheckboxComponent}
 *
 * @internal
 *
 * NOTE: Lambdas are not supported so we are disabling the prefer-arrow rule
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function TS_CHECKBOX_DEFAULT_OPTIONS_FACTORY(): TsCheckboxDefaultOptions {
  return {
    clickAction: 'check-indeterminate',
  };
}
/**
 * Injection token to be used to override the default options for `ts-checkbox`
 */
export const TS_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken<TsCheckboxDefaultOptions>('ts-checkbox-default-options', {
  providedIn: 'root',
  factory: TS_CHECKBOX_DEFAULT_OPTIONS_FACTORY,
});

/**
 * The change event output by {@link TsCheckboxComponent}
 */
export class TsCheckboxChange {
  /**
   * The source of the TsCheckboxChange event
   */
  public source: TsCheckboxComponent;
  /**
   * The checked value of the checkbox
   */
  public checked: boolean;
}

/**
 * Provider Expression that allows ts-checkbox to register as a ControlValueAccessor.
 *
 * This allows it to support [(ngModel)].
 *
 * @internal
 */
export const TS_CHECKBOX_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TsCheckboxComponent),
  multi: true,
};

/**
 * Unique ID for each instance
 */
let nextUniqueId = 0;

/**
 * A standard checkbox input control.
 *
 * @example
 * <ts-checkbox
 *              [formControl]="myControl"
 *              [(ngModel]="myModel"
 *              id="my-id"
 *              [isChecked]="true"
 *              [isDisabled]="false"
 *              [isIndeterminate]="false"
 *              [isRequired]="false"
 *              tabIndex="-1"
 *              (inputChange)="myMethod($event)"
 *              (indeterminateChange)="myMethod($event)"
 * ></ts-checkbox>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-data-entry-checkbox</example-url>
 */
@Component({
  selector: 'ts-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  host: {
    'class': 'ts-checkbox',
    '[attr.tabindex]': 'null',
    '[class.ts-checkbox--indeterminate]': 'isIndeterminate',
    '[class.ts-checkbox--checked]': 'isChecked',
    '[class.ts-checkbox--disabled]': 'isDisabled',
  },
  providers: [TS_CHECKBOX_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsCheckbox',
})
export class TsCheckboxComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  /**
   * Define the default component ID
   */
  protected uid = `ts-checkbox-${nextUniqueId++}`;

  /**
   * Define the ID for the input element (needed for a11y)
   */
  public inputId = `${this.uid}-input`;

  /**
   * Determine the correct aria-checked state
   */
  public get ariaCheckedState(): 'true' | 'false' | 'mixed' {
    if (this.isChecked) {
      return 'true';
    }
    return this.isIndeterminate ? 'mixed' : 'false';
  }

  /**
   * The native `<input type="checkbox">` element
   */
  @ViewChild('input')
  public inputElement: ElementRef<HTMLInputElement>;

  /**
   * Attached to the aria-label attribute of the host element.
   *
   * In most cases, aria-labelledby will take precedence so this may be omitted.
   */
  @Input('aria-label')
  public ariaLabel = '';

  /**
   * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
   */
  @Input('aria-labelledby')
  public ariaLabelledby: string | null = null;

  /**
   * The 'aria-describedby' attribute is read after the element's label and field type
   */
  @Input('aria-describedby')
  public ariaDescribedby: string;

  /**
   * Define the form control for the checkbox
   */
  @Input()
  public formControl = new FormControl(false);

  /**
   * Whether the checkbox is checked
   */
  @Input()
  public set isChecked(value: boolean) {
    if (value !== this.isChecked) {
      this._isChecked = value;
      this.changeDetectorRef.markForCheck();
    }
  }
  public get isChecked(): boolean {
    return this._isChecked;
  }
  private _isChecked = false;

  /**
   * Whether the checkbox is disabled
   */
  @Input()
  public set isDisabled(value: boolean) {
    const newValue = value;

    // istanbul ignore else
    if (newValue !== this.isDisabled) {
      this._isDisabled = newValue;
      // istanbul ignore else
      if (this.formControl) {
        const action = this._isDisabled ? 'disable' : 'enable';
        this.formControl[action]();
      }
      this.changeDetectorRef.markForCheck();
    }
  }
  public get isDisabled(): boolean {
    return this._isDisabled;
  }
  private _isDisabled = false;

  /**
   * Define an ID for the component
   *
   * @param value
   */
  @HostBinding('attr.id')
  @Input()
  public set id(value: string) {
    this._id = value || this.uid;
    this.inputId = `${this._id}-input`;
  }
  public get id(): string {
    return this._id;
  }
  protected _id: string = this.uid;

  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to represent a checkbox with three states,
   * e.g. a checkbox that represents a nested list of check-able items. Note that whenever checkbox is manually clicked, indeterminate is
   * immediately set to false.
   */
  @Input()
  public set isIndeterminate(value: boolean) {
    const changed = value !== this._isIndeterminate;
    this._isIndeterminate = coerceBooleanProperty(value);

    // istanbul ignore else
    if (changed) {
      this.indeterminateChange.emit(this._isIndeterminate);
    }

    this.syncIndeterminate(this._isIndeterminate);
  }
  public get isIndeterminate(): boolean {
    return this._isIndeterminate;
  }
  private _isIndeterminate = false;

  /**
   * Define if the checkbox is required
   */
  @Input()
  public isRequired = false;

  /**
   * Name value will be applied to the input element if present
   */
  @Input()
  public name: string | null = null;

  /**
   * Define the tabindex
   */
  @Input()
  public tabIndex = 0;

  /**
   * Define the checkbox text content.
   *
   * NOTE: This will not display if any content is passed in through <ng-content>
   */
  @Input()
  public label = '';

  /**
   * The value attribute of the native input element
   */
  @Input()
  public value: string;

  /**
   * Emit an event on input change
   */
  @Output()
  public readonly inputChange = new EventEmitter<TsCheckboxChange>();

  /**
   * Emit a change when moving from the indeterminate state
   */
  @Output()
  public readonly indeterminateChange = new EventEmitter<boolean>();

  constructor(
    public elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef,
    private focusMonitor: FocusMonitor,
    @Optional() @Inject(TS_CHECKBOX_DEFAULT_OPTIONS) private options?: TsCheckboxDefaultOptions,
  ) {}

  public ngAfterViewInit(): void {
    this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
      // istanbul ignore else
      if (!focusOrigin) {
        // When a focused element becomes disabled, the browser *immediately* fires a blur event.
        // Angular does not expect events to be raised during change detection, so any state change
        // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
        // See https://github.com/angular/angular/issues/17793. To work around this, we defer
        // telling the form control it has been touched until the next tick.
        Promise.resolve().then(() => {
          this.onTouched();
          this.changeDetectorRef.markForCheck();
        });
      }
    });

    this.syncIndeterminate(this.isIndeterminate);
  }

  /**
   * Tear down the focus monitor
   */
  public ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
  }

  /**
   * Toggle the `checked` state of the checkbox
   */
  public toggle(): void {
    this.isChecked = !this.isChecked;
  }

  /**
   * Event handler for checkbox input element
   *
   * Toggles checked state if element is not disabled.
   * Do not toggle on (change) event since IE doesn't fire change event when indeterminate checkbox is clicked.
   *
   * @param event - The click event
   */
  public inputClick(event: Event): void {
    // We have to stop propagation for click events on the visual hidden input element. By default, when a user clicks on a label element,
    // a generated click event will be dispatched on the associated input element. Since we are using a label element as our root
    // container, the click event on the `checkbox` will be executed twice. The real click event will bubble up, and the generated click
    // event also tries to bubble up. This will lead to multiple click events. Preventing bubbling for the second event will solve that
    // issue.
    event.stopPropagation();

    // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
    if (!this.isDisabled && this.options.clickAction !== 'noop') {
      // When user manually click on the checkbox, `indeterminate` is set to false.
      if (this.isIndeterminate && this.options.clickAction !== 'check') {
        Promise.resolve().then(() => {
          this.isIndeterminate = false;
          this.indeterminateChange.emit(this.isIndeterminate);
        });
      }

      this.toggle();

      // Emit our custom change event if the native input emitted one.
      // It is important to only emit it, if the native input triggered one, because
      // we don't want to trigger a change event, when the `checked` variable changes for example.
      this.emitChangeEvent();
      // istanbul ignore else
    } else if (!this.isDisabled && this.options.clickAction === 'noop') {
      // Reset native input when clicked with noop. The native checkbox becomes checked after
      // click, reset it to be align with `checked` value of `ts-checkbox`.
      this.inputElement.nativeElement.checked = this.isChecked;
      this.inputElement.nativeElement.indeterminate = this.isIndeterminate;
    }
  }

  /**
   * Focus the checkbox
   *
   * @param origin - Where the focus originates
   * @param options - Optional focus options
   */
  public focus(origin: FocusOrigin = 'keyboard', options?: FocusOptions): void {
    this.focusMonitor.focusVia(this.inputElement, origin, options);
  }

  // Implemented as part of ControlValueAccessor.
  public writeValue(value: unknown) {
    this.isChecked = !!value;
  }

  // Implemented as part of ControlValueAccessor.
  public registerOnChange(fn: (value: unknown) => void) {
    this.controlValueAccessorChangeFn = fn;
  }

  // Implemented as part of ControlValueAccessor.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  // Implemented as part of ControlValueAccessor.
  public setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  /**
   * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
   *
   * @internal
   */
  public onTouched: () => unknown = () => {};

  /**
   * Stop propagation on interaction events
   *
   * @param event - The interaction event
   */
  public onInteractionEvent(event: Event): void {
    // We always have to stop propagation on the change event. Otherwise the change event, from the input element, will bubble up and emit
    // its event object to the `change` output.
    event.stopPropagation();
  }

  /**
   * Build and emit the checkbox change event
   */
  private emitChangeEvent(): void {
    const event = new TsCheckboxChange();
    event.source = this;
    event.checked = this.isChecked;
    this.controlValueAccessorChangeFn(this.isChecked);
    this.inputChange.emit(event);
  }

  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   *
   * @param value - The value to sync
   */
  private syncIndeterminate(value: boolean) {
    const nativeCheckbox = this.inputElement;

    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
      this.changeDetectorRef.markForCheck();
    }
  }

  /**
   * Define a placeholder for the CVA change function
   */
  private controlValueAccessorChangeFn: (value: unknown) => void = () => {};
}
