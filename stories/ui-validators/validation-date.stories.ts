import {
  Component,
  Input,
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  date,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import {
  add,
  sub,
} from 'date-fns';

import { TsValidationMessagesModule } from '@terminus/ui-validation-messages';
import {
  TsValidatorsModule,
  TsValidatorsService,
} from '@terminus/ui-validators';

type DateDemos
  = 'minDate'
  | 'maxDate'
;

const START_DATE = new Date(2020, 2, 14);
const MIN_DATE = new Date(2020, 2, 6);
const MAX_DATE = new Date(2020, 2, 24);
@Component({
  selector: 'ts-date-wrapper',
  template: `
    <style>
      input {
        display: block;
        margin-top: .5rem;
      }
      ts-input {
        --date-picker-width: 400px;
      }
    </style>
    <form [formGroup]="myForm">

    <div *ngIf="demo === 'minDate'">
      <label>
        My date must be after 03-06-2020
        <input type="date" formControlName="minDateControl" useValueAsDate>
      </label>
      <ts-validation-messages
        [control]="minDateCtrl"
        [validateOnChange]="true"
      ></ts-validation-messages>
    </div>

    <div *ngIf="demo === 'maxDate'">
      <label>
        My date must be before 03-24-2020
        <input type="date" formControlName="maxDateControl" useValueAsDate>
      </label>
      <ts-validation-messages
        [control]="maxDateCtrl"
        [validateOnChange]="true"
      ></ts-validation-messages>
    </div>
    </form>
  `,
})
class DateWrapper {
  get minDateCtrl(): FormControl {
    return this.myForm.get('minDateControl') as FormControl;
  }
  get maxDateCtrl(): FormControl {
    return this.myForm.get('maxDateControl') as FormControl;
  }
  @Input() public demo: DateDemos;
  @Input()
  public set minDate(value: string) {
    this._internalMinDate = value ? new Date(value) : MIN_DATE;
  }
  public get minDate(): string {
    return this._internalMinDate.toISOString();
  }
  private _internalMinDate: Date = MIN_DATE;
  @Input()
  public set maxDate(value: string) {
    this._internalMaxDate = value ? new Date(value) : MAX_DATE;
  }
  public get maxDate(): string {
    return this._internalMaxDate.toISOString();
  }
  private _internalMaxDate: Date = MAX_DATE;
  public myForm = this.formBuilder.group({
    minDateControl: [sub(START_DATE, { days: 10 }), [this.validatorsService.minDate(this.minDate)]],
    maxDateControl: [add(START_DATE, { days: 14 }), [this.validatorsService.maxDate(this.maxDate)]],
  });

  constructor(
    private validatorsService: TsValidatorsService,
    private formBuilder: FormBuilder,
  ) {}
}

export default {
  title: 'Utilities/Input Validation/Date',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        DateValueAccessorModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        TsValidatorsModule,
        TsValidationMessagesModule,
      ],
      declarations: [
        DateWrapper,
      ],
    }),
  ],
};

export const minDate = () => ({
  component: DateWrapper,
  props: {
    demo: 'minDate',
    minDate: date('Min date', new Date(2020, 2, 6)),
  },
});
minDate.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  a11y: { disable: true },
};

export const maxDate = () => ({
  component: DateWrapper,
  props: {
    demo: 'maxDate',
    maxDate: date('Max date', new Date(2020, 2, 24)),
  },
});
maxDate.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  a11y: { disable: true },
};
