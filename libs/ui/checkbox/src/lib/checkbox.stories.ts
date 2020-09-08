import {
  Component,
  Input,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsCheckboxComponent,
  TsCheckboxModule,
} from '@terminus/ui-checkbox';

export default {
  title: 'Components/Data Entry/Checkbox',
  component: TsCheckboxComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        TsCheckboxModule,
        ReactiveFormsModule,
      ],
    }),
  ],
};

export const basic = () => ({
  component: TsCheckboxComponent,
  template: `
    <ts-checkbox
      [formControl]="formControl"
      [isChecked]="isChecked"
      [isDisabled]="isDisabled"
      (inputChange)="inputChange($event)"
      (indeterminateChange)="interChanged($event)"
    >My checkbox!</ts-checkbox>
  `,
  props: {
    formControl: new FormControl(false),
    isChecked: boolean('isChecked', false),
    isDisabled: boolean('isDisabled', false),
    inputChange: action('Input changed'),
    interChanged: action('Indeterminate changed'),
  },
});
basic.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 60 },
};

