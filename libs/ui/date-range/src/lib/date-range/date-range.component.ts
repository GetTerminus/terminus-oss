import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import type {
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { untilComponentDestroyed } from '@terminus/fe-utilities';

/**
 * Define the structure of the date range object used by {@link TsDateRangeComponent}
 */
export interface TsDateRange {
  /**
   * The start date of the range
   */
  start: Date | undefined;
  /**
   * The end date of the range
   */
  end: Date | undefined;
}

/**
 * This is the date-range UI Component
 *
 * @example
 * <ts-date-range
 *              [dateFormGroup]="myForm.get('dateRange')"
 *              [defaultStartDatepickerOpen]="true"
 *              [defaultEndDatepickerOpen]="true"
 *              endMinDate="{{ new Date(2017, 4, 1) }}"
 *              endMaxDate="{{ new Date(2017, 4, 30) }}"
 *              errorMessage="The date must be in the future"
 *              hint="Select a date"
 *              [isDisabled]="true"
 *              [noValidationOrHint]="true"
 *              startingView="year"
 *              startMinDate="{{ new Date(2017, 4, 1) }}"
 *              startMaxDate="{{ new Date(2017, 4, 30) }}"
 *              (startSelected)="myMethod($event)"
 *              (endSelected)="myMethod($event)"
 *              (dateRangeChange)="myMethod($event)"
 * ></ts-date-range>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-data-entry-date-range</example-url>
 */
@Component({
  selector: 'ts-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  host: { class: 'ts-date-range' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsDateRange',
})
export class TsDateRangeComponent implements OnInit, OnDestroy {
  /**
   * Getter to return the date range as an object
   *
   * @returns The current date range
   */
  private get dateRange(): TsDateRange {
    return {
      start: this.startDateControl.value,
      end: this.endDateControl.value,
    };
  }

  /**
   * Provide quick access to the endDate form control
   */
  public get endDateControl(): AbstractControl {
    const ctrl: AbstractControl | null = this.dateFormGroup ? this.dateFormGroup.get('endDate') : null;
    return ctrl ? ctrl : this.internalEndControl;
  }

  /**
   * Expose the minimum date for the endDate
   *
   * NOTE: `any` is used since we cannot seem to use union types in a BehaviorSubject and the value could be a Date or undefined
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public endMinDate$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  /**
   * Define the end date label
   */
  public endLabel = 'End date';

  /**
   * The internal FormControl to manage the end date
   */
  public internalEndControl = new FormControl();

  /**
   * The internal FormControl to manage the start date
   */
  public internalStartControl = new FormControl();

  /**
   * Define the separator between the two date inputs
   */
  public separator = '-';

  /**
   * Provide quick access to the startDate form control
   */
  public get startDateControl(): AbstractControl {
    const ctrl: AbstractControl | null = this.dateFormGroup ? this.dateFormGroup.get('startDate') : null;
    return ctrl ? ctrl : this.internalStartControl;
  }

  /**
   * Expose the maximum date for the startDate
   *
   * NOTE: `any` is used since we cannot seem to use union types in a BehaviorSubject and the value could be a Date or undefined
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public startMaxDate$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  /**
   * Define the start date label
   */
  public startLabel = 'Start date';

  /**
   * Define if the starting datepicker should default to it's opened state
   */
  @Input()
  public defaultStartDatepickerOpen = false;

  /**
   * Define if the ending datepicker should default to it's opened state
   */
  @Input()
  public defaultEndDatepickerOpen = false;

  /**
   * Define the form group to attach the date range to
   *
   * @param value
   */
  @Input()
  public set dateFormGroup(value: FormGroup | AbstractControl | undefined) {
    this._dateFormGroup = value;
  }
  public get dateFormGroup(): FormGroup | AbstractControl | undefined {
    return this._dateFormGroup;
  }
  private _dateFormGroup: FormGroup | AbstractControl | undefined;

  /**
   * Define the date locale
   */
  @Input()
  public dateLocale: string | undefined;

  /**
   * Define the max date for the end date
   */
  @Input()
  public endMaxDate: Date | undefined;

  /**
   * Define the min date for the end date
   */
  @Input()
  public endMinDate: Date | undefined;

  /**
   * Define an error message
   */
  @Input()
  public errorMessage: string;

  /**
   * Define a hint
   */
  @Input()
  public hint: string;

  /**
   * Define if the range should be disabled
   */
  @Input()
  public isDisabled = false;

  /**
   * Define if the hint and error message should be hidden
   */
  @Input()
  public noValidationOrHint = false;

  /**
   * Define the starting view for both datepickers
   */
  @Input()
  public startingView: 'month' | 'year' = 'month';

  /**
   * Define the max date for the starting date
   */
  @Input()
  public startMaxDate: Date | undefined;

  /**
   * Define the min date for the starting date
   */
  @Input()
  public startMinDate: Date | undefined;

  /**
   * Event emitted anytime the range is changed
   */
  @Output()
  public readonly dateRangeChange: EventEmitter<TsDateRange> = new EventEmitter();

  /**
   * Output the end date when selected
   */
  @Output()
  public readonly endSelected: EventEmitter<Date | undefined> = new EventEmitter();

  /**
   * Output the start date when selected
   */
  @Output()
  public readonly startSelected: EventEmitter<Date | undefined> = new EventEmitter();

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  /**
   * Seed initial date range values
   */
  public ngOnInit(): void {
    // Seed values from a passed in form group
    if (this.dateFormGroup) {
      this.initializeMinAndMax(this.dateFormGroup);
    }

    // istanbul ignore else
    if (!this.endDateControl.value) {
      this.startMaxDate$.next(this.startMaxDate);
    }

    // istanbul ignore else
    if (!this.startDateControl.value) {
      this.endMinDate$.next(this.endMinDate);
    }

    this.setUpFormControlSync();
  }

  /**
   * Needed for untilComponentDestroyed
   */
  public ngOnDestroy(): void {}

  /**
   * Set up subscriptions to sync the internal FormControl to the external FormControl
   */
  private setUpFormControlSync(): void {
    if (!this.dateFormGroup) {
      return;
    }

    const startCtrl = this.dateFormGroup.get('startDate');
    const endCtrl = this.dateFormGroup.get('endDate');

    if (!startCtrl || !endCtrl) {
      return;
    }

    this.changeDetectorRef.detectChanges();

    // HACK: This is to fix on an initial load, date range value isn't populating correctly.

    this.internalStartControl.setValue(startCtrl.value);
    this.internalEndControl.setValue(endCtrl.value);

    // START DATE
    startCtrl.valueChanges.pipe(untilComponentDestroyed(this)).subscribe(value => {
      this.internalStartControl.setValue(value);
      this.endMinDate$.next(value);
    });
    startCtrl.statusChanges.pipe(untilComponentDestroyed(this)).subscribe(() => {
      this.internalStartControl.setErrors(startCtrl.errors);
    });

    // END DATE
    endCtrl.valueChanges.pipe(untilComponentDestroyed(this)).subscribe(value => {
      this.internalEndControl.setValue(value);
      this.startMaxDate$.next(value);
    });
    endCtrl.statusChanges.pipe(untilComponentDestroyed(this)).subscribe(() => {
      this.internalEndControl.setErrors(endCtrl.errors);
    });

    this.changeDetectorRef.detectChanges();
  }

  /**
   * Set up initial min and max dates
   *
   * @param formGroup - The date form group
   */
  private initializeMinAndMax(formGroup: FormGroup | AbstractControl): void {
    const startControl: AbstractControl | null = formGroup.get('startDate');
    const endControl: AbstractControl | null = formGroup.get('endDate');
    const startControlValue: Date | undefined = startControl ? startControl.value /* istanbul ignore next - Unreachable */ : undefined;
    const endControlValue: Date | undefined = endControl ? endControl.value /* istanbul ignore next - Unreachable */ : undefined;
    const startValueToUse = startControlValue || this.endMinDate;
    const endValueToUse = endControlValue || this.endMinDate;

    this.endMinDate$.next(startValueToUse);
    this.startMaxDate$.next(endValueToUse);
  }

  /**
   * Emit the selected start date and date range
   *
   * @param date - The selected start date
   */
  public startDateSelected(date: Date): void {
    if (date) {
      this.endMinDate$.next(date);

      // Update the form value if a formGroup was passed in
      // istanbul ignore else
      if (this.dateFormGroup && this.startDateControl) {
        this.startDateControl.setValue(date);
      }

      this.startSelected.emit(date);
      this.dateRangeChange.emit(this.dateRange);
    } else {
      // If no startDate was selected, reset to the original endMinDate
      this.endMinDate$.next(this.endMinDate);
    }
  }

  /**
   * Emit the selected end date and date range
   *
   * @param date - The selected end date
   */
  public endDateSelected(date: Date): void {
    if (date) {
      this.startMaxDate$.next(date);

      // Update the form value if a formGroup was passed in
      // istanbul ignore else
      if (this.dateFormGroup && this.endDateControl) {
        this.endDateControl.setValue(date);
      }

      this.endSelected.emit(date);
      this.dateRangeChange.emit(this.dateRange);
    } else {
      // If no endDate was selected, reset to the original startMaxDate
      this.startMaxDate$.next(this.startMaxDate);
    }
  }

  /**
   * Update dates when the start date input receives a blur event
   *
   * @param date - The date entered
   */
  public startBlur(date: Date | undefined): void {
    const ctrl = this.dateFormGroup ? this.dateFormGroup.get('startDate') /* istanbul ignore next - Untestable */ : null;
    const value = date ? date : null;

    // Update the max date for the end date control
    this.endMinDate$.next(value);

    // Update the consumer's control
    // istanbul ignore else
    if (ctrl) {
      ctrl.setValue(value);
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
      this.dateRangeChange.emit(this.dateRange);
    }
  }

  /**
   * Update dates when the end date input receives a blur event
   *
   * @param date - The date entered
   */
  public endBlur(date: Date | undefined): void {
    const ctrl = this.dateFormGroup ? this.dateFormGroup.get('endDate') /* istanbul ignore next - Untestable */ : null;
    const value = date ? date : null;

    // Update the max date for the start date control
    this.startMaxDate$.next(value);

    // Update the consumer's control
    // istanbul ignore else
    if (ctrl) {
      ctrl.setValue(value);
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
      this.dateRangeChange.emit(this.dateRange);
    }
  }
}
