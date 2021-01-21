import {
  FocusMonitor,
  FocusOrigin,
} from '@angular/cdk/a11y';
import {
  AfterContentInit,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Change event object emitted by a {@link TsToggleComponent}
 */
export class TsSlideToggleChange {
  constructor(
    // The source TsToggleComponent of the event
    public source: TsToggleComponent,
    // The new `isChecked` value of the TsToggleComponent
    public checked: boolean,
  ) {}
}

/**
 * The value accessor provider for {@link TsToggleComponent}
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TS_TOGGLE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TsToggleComponent),
  multi: true,
};

/**
 * Unique ID for each instance
 */
let nextUniqueId = 0;

/**
 * The is a toggle component
 *
 * @example
 * <ts-toggle
 *              arialLabel="Disable my thing"
 *              arialLabelledby="my-thing"
 *              [formControl]="myControl"
 *              id="my-id"
 *              [isChecked]="true"
 *              [isDisabled]="true"
 *              [isRequired]="true"
 *              labelPosition="before"
 *              name="My toggle"
 *              tabIndex="-1"
 *              (selectionChange)="myMethod($event)"
 * >My Toggle!</ts-toggle>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-data-entry-toggle</example-url>
 */
@Component({
  selector: 'ts-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  host: {
    'class': 'ts-toggle',
    '[id]': 'id',
    // Needs to be `-1` so it can still receive programmatic focus.
    '[attr.tabindex]': 'isDisabled ? null : -1',
    '[attr.aria-label]': 'null',
    '[attr.aria-labelledby]': 'null',
    '[class.ts-toggle--checked]': 'isChecked',
    '[class.ts-toggle--disabled]': 'isDisabled',
    '[class.ts-toggle--label-before]': 'labelPosition == "before"',
  },
  providers: [TS_TOGGLE_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsToggle',
})
export class TsToggleComponent implements AfterContentInit, OnDestroy {
  /**
   * Implemented as part of ControlValueAccessor
   *
   * @param _
   */
  private onChange = (_: unknown) => {};

  /**
   * Implemented as part of ControlValueAccessor
   */
  private onTouched = () => {};

  /**
   * Define the default component ID
   */
  protected uid = `ts-toggle-${nextUniqueId++}`;

  /**
   * Define the ID for the input element (needed for a11y)
   */
  public inputId = `${this.uid}-input`;

  /** Reference to the underlying input element. */
  @ViewChild('input')
  public inputElement: ElementRef<HTMLInputElement>;

  /**
   * Used to set the aria-label attribute on the underlying input element
   */
  @Input('aria-label')
  public ariaLabel: string | null = null;

  /**
   * Used to set the aria-labelledby attribute on the underlying input element
   */
  @Input('aria-labelledby')
  public ariaLabelledby: string | null = null;

  /**
   * Define the ID
   */
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
   * Allow the checked state to be set
   *
   * @param value
   */
  @Input()
  public set isChecked(value: boolean) {
    this._isChecked = value;
  }
  public get isChecked(): boolean {
    return this._isChecked;
  }
  private _isChecked = false;

  /**
   * Define if the toggle should be disabled
   */
  @Input()
  public isDisabled = false;

  /**
   * Define if the toggle is required
   */
  @Input()
  public isRequired = false;

  /**
   * Define the position of the label
   */
  @Input()
  public labelPosition: 'before' | 'after' = 'after';

  /**
   * Define the input name for the toggle
   */
  @Input()
  public name = 'toggle';

  /**
   * Define the tab index
   */
  @Input()
  public tabIndex: number | undefined;

  /**
   * Emit an event each time the toggle value changes
   */
  @Output()
  public readonly selectionChange = new EventEmitter<TsSlideToggleChange>();

  constructor(
    private focusMonitor: FocusMonitor,
    private changeDetectorRef: ChangeDetectorRef,
    public elementRef: ElementRef,
    @Attribute('tabindex') tabIndex: string,
  ) {
    this.tabIndex = parseInt(tabIndex, 10) || 0;
  }

  /**
   * Begin monitoring focus
   */
  public ngAfterContentInit(): void {
    this.focusMonitor
      .monitor(this.elementRef, true)
      .subscribe(focusOrigin => {
        // Only forward focus manually when it was received programmatically or through the
        // keyboard. We should not do this for mouse/touch focus for two reasons:
        // 1. It can prevent clicks from landing in Chrome (see #18269).
        // 2. They're already handled by the wrapping `label` element.
        if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
          this.inputElement.nativeElement.focus();
        } else if (!focusOrigin) {
          // When a focused element becomes disabled, the browser *immediately* fires a blur event.
          // Angular does not expect events to be raised during change detection, so any state
          // change (such as a form control's 'ng-touched') will cause a changed-after-checked
          // error. See https://github.com/angular/angular/issues/17793. To work around this,
          // we defer telling the form control it has been touched until the next tick.
          Promise.resolve().then(() => this.onTouched());
        }
      });
  }

  /**
   * Stop monitoring focus
   */
  public ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
  }

  /**
   * Method being called whenever the underlying input emits a change event
   *
   * @param event - The event object
   */
  public onChangeEvent(event: Event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the component's `change` output.
    event.stopPropagation();
    this.selectionChange.emit();

    // Sync the value from the underlying input element with the component instance.
    this.isChecked = this.inputElement.nativeElement.checked;

    // Emit our custom change event only if the underlying input emitted one. This ensures that
    // there is no change event, when the checked state changes programmatically.
    this.emitChangeEvent();
  }

  /**
   * Method being called whenever the slide-toggle has been clicked
   *
   * @param event - The event object
   */
  public onInputClick(event: Event) {
    // We have to stop propagation for click events on the visual hidden input element.
    // By default, when a user clicks on a label element, a generated click event will be
    // dispatched on the associated input element. Since we are using a label element as our
    // root container, the click event on the `slide-toggle` will be executed twice.
    // The real click event will bubble up, and the generated click event also tries to bubble up.
    // This will lead to multiple click events.
    // Preventing bubbling for the second event will solve that issue.
    event.stopPropagation();
  }

  /**
   * Implemented as part of ControlValueAccessor.
   *
   * @param value
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public writeValue(value: any): void {
    this.isChecked = !!value;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   *
   * @param fn
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Implemented as part of ControlValueAccessor
   *
   * @param fn
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Implemented as a part of ControlValueAccessor
   *
   * @param isDisabled
   */
  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.changeDetectorRef.markForCheck();
  }

  /**
   * Focuses the toggle input
   *
   * @param options
   * @param origin
   */
  public focus(options?: FocusOptions, origin?: FocusOrigin): void {
    if (origin) {
      this.focusMonitor.focusVia(this.inputElement, origin, options);
    } else {
      this.inputElement.nativeElement.focus(options);
    }
  }

  /**
   * Toggles the checked state
   */
  public toggle(): void {
    this.isChecked = !this.isChecked;
    this.onChange(this.isChecked);
  }

  /**
   * Emits a change event on the `change` output. Also notifies the FormControl about the change.
   */
  private emitChangeEvent() {
    this.onChange(this.isChecked);
    this.selectionChange.emit(new TsSlideToggleChange(this, this.isChecked));
  }
}
