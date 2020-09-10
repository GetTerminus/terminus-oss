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

import { TsInputModule } from '@terminus/ui-input';
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
        TsInputModule,
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
    <div *ngIf="demo === 'numbers'">
      <ts-input [formControl]="numbersControl" [validateOnChange]="true" hint="Must contain at least 4 numbers"></ts-input>
    </div>

    <div *ngIf="demo === 'lessThan'">
      <ts-input
        [formControl]="lessThanControl"
        [validateOnChange]="true"
        label="Number"
        type="number"
        hint="Must be less than 10"
      ></ts-input>
    </div>

    <div *ngIf="demo === 'greaterThan'">
      <ts-input
        [formControl]="greaterThanControl"
        [validateOnChange]="true"
        label="Number"
        type="number"
        hint="Must be greater than 10"
      ></ts-input>
    </div>

    <div *ngIf="demo === 'isInRange'">
      <ts-input
        [formControl]="isInRangeControl"
        [validateOnChange]="true"
        label="Is In Range"
        type="number"
        hint="Number must be between 10 and 100"
      ></ts-input>
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
