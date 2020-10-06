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
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsValidationMessagesModule } from '@terminus/ui-validation-messages';
import {
  TsValidatorsModule,
  TsValidatorsService,
} from '@terminus/ui-validators';

export default {
  title: 'Utilities/Input Validation/Number',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        TsValidatorsModule,
        TsValidationMessagesModule,
      ],
    }),
  ],
};

type NumberDemos
  = 'numbers'
  | 'lessThan'
  | 'greaterThan'
  | 'isInRange'
;

@Component({
  selector: 'ts-number-wrapper',
  template: `
    <style>
      input {
        display: block;
        margin-top: .5rem;
      }
    </style>
    <div *ngIf="demo === 'numbers'">
      <label>
        I must contain at least 4 numbers
        <input type="number" [formControl]="numbersControl">
      </label>
      <ts-validation-messages
        [control]="numbersControl"
        [validateOnChange]="true"
      ></ts-validation-messages>
    </div>

    <div *ngIf="demo === 'lessThan'">
      <label>
        My value must be less than 10
        <input type="number" [formControl]="lessThanControl">
      </label>
      <ts-validation-messages
        [control]="lessThanControl"
        [validateOnChange]="true"
      ></ts-validation-messages>
    </div>

    <div *ngIf="demo === 'greaterThan'">
      <label>
        My value must be greater than 10
        <input type="number" [formControl]="greaterThanControl">
      </label>
      <ts-validation-messages
        [control]="greaterThanControl"
        [validateOnChange]="true"
      ></ts-validation-messages>
    </div>

    <div *ngIf="demo === 'isInRange'">
      <label>
        My value must be at least 10 and no greater than 100
        <input type="number" [formControl]="isInRangeControl">
      </label>
      <ts-validation-messages
        [control]="isInRangeControl"
        [validateOnChange]="true"
      ></ts-validation-messages>
    </div>
  `,
})
class NumberWrapper {
  numbersControl = new FormControl('123', [this.validatorsService.numbers(4)]);
  lessThanControl = new FormControl('12', [this.validatorsService.lessThan(10)]);
  greaterThanControl = new FormControl('8', [this.validatorsService.greaterThan(10)]);
  isInRangeControl = new FormControl('8', [this.validatorsService.isInRange(10, 100)]);
  @Input() public demo: NumberDemos;

  constructor(private validatorsService: TsValidatorsService) {}
}

export const numbers = () => ({
  component: NumberWrapper,
  props: {
    demo: 'numbers',
  },
});
numbers.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  a11y: { disabled: true },
};

export const lessThan = () => ({
  component: NumberWrapper,
  props: {
    demo: 'lessThan',
  },
});
lessThan.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  a11y: { disabled: true },
};

export const greaterThan = () => ({
  component: NumberWrapper,
  props: {
    demo: 'greaterThan',
  },
});
greaterThan.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  a11y: { disabled: true },
};

export const isInRange = () => ({
  component: NumberWrapper,
  props: {
    demo: 'isInRange',
  },
});
isInRange.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  a11y: { disabled: true },
};
