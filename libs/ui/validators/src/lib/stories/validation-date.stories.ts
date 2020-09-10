import {
  Component,
  Input,
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
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
import {
  add,
  sub,
} from 'date-fns';

import { TsValidationMessagesModule } from '@terminus/ui-validation-messages';
import {
  TsValidatorsModule,
  TsValidatorsService,
} from '@terminus/ui-validators';

export default {
  title: 'Utilities/Input Validation/Date',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        TsValidatorsModule,
        TsValidationMessagesModule,
      ],
    }),
  ],
};

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
      ts-input {
        --date-picker-width: 400px;
      }
    </style>
    <div *ngIf="demo === 'minDate'">
      <ts-validation-messages
        [control]="minDateControl"
        [validateOnChange]="true"
      ></ts-validation-messages>
    </div>

    <div *ngIf="demo === 'maxDate'">
      <ts-validation-messages
        [control]="maxDateControl"
        [validateOnChange]="true"
      ></ts-validation-messages>
    </div>
  `,
})
class DateWrapper {
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

  minDateControl = new FormControl(sub(START_DATE, { days: 10 }), [this.validatorsService.minDate(this.minDate)]);
  maxDateControl = new FormControl(add(START_DATE, { days: 14 }), [this.validatorsService.maxDate(this.maxDate)]);

  constructor(private validatorsService: TsValidatorsService) {}
}

export const minDate = () => ({
  component: DateWrapper,
  props: {
    demo: 'minDate',
    minDate: date('Min date', new Date(2020, 2, 6)),
  },
});
minDate.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  a11y: { disabled: true },
};

export const maxDate = () => ({
  component: DateWrapper,
  props: {
    demo: 'maxDate',
    maxDate: date('Max date', new Date(2020, 2, 24)),
  },
});
maxDate.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  a11y: { disabled: true },
};
