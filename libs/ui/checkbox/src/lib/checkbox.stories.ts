import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsAutofocusModule } from '@terminus/ui-autofocus';
import { TsCheckboxComponent } from '@terminus/ui-checkbox';
import { TsInputModule } from '@terminus/ui-input';

export default {
  title: 'Components/Data Entry/Checkbox',
  component: TsCheckboxComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [TsCheckboxComponent],
      imports: [
        FlexLayoutModule,
        ReactiveFormsModule,
        TsAutofocusModule,
        TsInputModule,
      ],
    }),
  ],
};

export const basic = () => ({
  component: TsCheckboxComponent,
  template: `
    <div style="margin-bottom: 1rem">
      <button
        [disabled]="myCheckbox.isIndeterminate"
        (click)="myCheckbox.isIndeterminate = true"
      >Set indeterminate</button>
    </div>

    <ts-checkbox
      [label]="textContent"
      [isIndeterminate]="indeterminate"
      [isDisabled]="isDisabled"
      (inputChange)="inputChange($event)"
      (indeterminateChange)="indeterminateChange($event)"
      #myCheckbox="tsCheckbox"
    ></ts-checkbox>
  `,
  props: {
    textContent: text('Checkbox text', 'My checkbox'),
    isDisabled: boolean('Disabled', false),
    inputChange: action('Input changed'),
    indeterminateChange: action('Indeterminate changed'),
  },
});
basic.parameters = {
  docs: { iframeHeight: 120 },
};

export const states = () => ({
  component: TsCheckboxComponent,
  template: `
    <style>
      .container {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 10px;
      }
    </style>
    <div class="container">
      <div>
        <ts-checkbox>Empty</ts-checkbox>
      </div>
      <div>
        <ts-checkbox [isDisabled]="true">Empty disabled</ts-checkbox>
      </div>
      <div>
        <ts-checkbox [isChecked]="true">Checked</ts-checkbox>
      </div>
      <div>
        <ts-checkbox [isChecked]="true" [isDisabled]="true">Checked disabled</ts-checkbox>
      </div>
      <div>
        <ts-checkbox [isIndeterminate]="true">Indeterminate</ts-checkbox>
      </div>
      <div>
        <ts-checkbox [isIndeterminate]="true" [isDisabled]="true">Indeterminate disabled</ts-checkbox>
      </div>
    </div>
  `,
  props: {
    textContent: text('Checkbox text', 'My checkbox'),
    inputChange: action('Input changed'),
    indeterminateChange: action('Indeterminate changed'),
  },
});
states.parameters = {
  actions: { disable: true },
  docs: { iframeHeight: 200 },
};

export const alignmentWithInput = () => ({
  component: TsCheckboxComponent,
  template: `
  <style>
    ts-checkbox,
    ts-input:first-of-type {
      margin-right: 1em;
    }
  </style>
  <div fxLayout="row" fxLayoutAlign="flex-start start">
    <ts-input fxFlex="200px" label="Dummy input for alignment" [isDisabled]="true"></ts-input>
    <ts-checkbox>My checkbox!</ts-checkbox>
    <ts-input
      fxFlex="200px"
      label="Dummy input (w/content)"
      [isDisabled]="true"
      [formControl]="inputControl"
    ></ts-input>
  </div>
  `,
  props: {
    inputControl: new FormControl('My input value'),
  },
});
alignmentWithInput.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 120 },
};

export const tabIndex = () => ({
  component: TsCheckboxComponent,
  template: `
    <div class="container">
      <div>
        <label for="dummyInput" style="display: block;">Autofocused input to start tab context:</label>
        <input type="text" id="dummyInput" tsAutofocus>
      </div>
      <div>
        <ts-checkbox>First focusable checkbox</ts-checkbox>
      </div>
      <div>
        <ts-checkbox [tabIndex]="-1">I will be skipped</ts-checkbox>
      </div>
      <div>
        <ts-checkbox>Last focusable checkbox</ts-checkbox>
      </div>
    </div>
  `,
});
tabIndex.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 220 },
};

export const modelTypes = () => ({
  component: TsCheckboxComponent,
  template: `
    <style>
      ts-checkbox {
        margin-right: 1rem;
      }
      form {
        display: block;
      }
    </style>
    <div>
      <ts-checkbox [formControl]="myControl" #checkbox1="tsCheckbox">FormControl checkbox</ts-checkbox>
      <button (click)="checkbox1.isDisabled = !checkbox1.isDisabled">Toggle FormControl disabled state</button>
    </div>
    <div>
      <ts-checkbox [(ngModel)]="myModel" #checkbox2="tsCheckbox">ngModel checkbox</ts-checkbox>
      <button (click)="checkbox2.isDisabled = !checkbox2.isDisabled">Toggle ngModel disabled state</button>
    </div>
    <form [formGroup]="myForm">
      <ts-checkbox formControlName="myCheckboxCtrl" #checkbox3="tsCheckbox">formControlName checkbox</ts-checkbox>
      <button (click)="checkbox3.isDisabled = !checkbox3.isDisabled">Toggle formControlName disabled state</button>
    </form>
  `,
  props: {
    myControl: new FormControl(true),
    myModel: true,
    myForm: new FormGroup({
      myCheckboxCtrl: new FormControl(true),
    }),
  },
});
modelTypes.parameters = {
  docs: { iframeHeight: 120 },
};
