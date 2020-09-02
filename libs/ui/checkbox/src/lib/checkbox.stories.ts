import {
  Component,
  Input,
} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
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

@Component({
  selector: 'ts-checkbox-demo-wrapper',
  template: `
    <h1>Hello</h1>
    <form [formGroup]="myForm">
      <ts-checkbox
        [formControl]="myForm.get('myCheck')"
        [isChecked]="isChecked"
        [isDisabled]="isDisabled"
        (inputChange)="changed($event)"
        (indeterminateChange)="interChanged($event)"
      >My checkbox!</ts-checkbox>
    </form>
  `,
})
class CheckboxWrapper {
  myForm = this.formBuilder.group({ myCheck: [false] });
  @Input() public isChecked: boolean;
  @Input() public isDisabled: boolean;

  constructor(private formBuilder: FormBuilder) {}

  changed(e: boolean) {
    console.log('DEMO: Checkbox change: ', e);
  }
  interChanged(e: boolean) {
    console.log('DEMO: Indeterminate change: ', e);
  }
}

export const basic = () => ({
  component: CheckboxWrapper,
  props: {
    isChecked: boolean('isChecked', false),
    isDisabled: boolean('isDisabled', false),
  },
});

