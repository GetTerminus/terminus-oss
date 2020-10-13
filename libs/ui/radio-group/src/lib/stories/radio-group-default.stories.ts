import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsAutofocusModule } from '@terminus/ui-autofocus';
import {
  TsRadioButtonComponent,
  TsRadioGroupComponent,
} from '@terminus/ui-radio-group';
import { TsValidationMessagesModule } from '@terminus/ui-validation-messages';

const DEMO_ITEMS: Record<string, any> = [
  {
    id: 'foo_value',
    title: 'Foo Display',
    subTitle: 'Some helper text for my item',
  },
  {
    id: 'bar_value',
    title: 'Bar Display',
    subTitle: 'Some helper text for my item',
    disabled: false,
  },
  {
    id: 'baz_value',
    title: 'Baz Display',
    subTitle: 'Some helper text for my item',
  },
];

export default {
  title: 'Components/Data Entry/Radio Group/Default Mode',
  component: TsRadioGroupComponent,
  subcomponents: { TsRadioButtonComponent },
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TsAutofocusModule,
        TsValidationMessagesModule,
      ],
      declarations: [
        TsRadioButtonComponent,
        TsRadioGroupComponent,
      ],
    }),
  ],
};

export const basic = () => ({
  component: TsRadioGroupComponent,
  template: `
    <ts-radio-group [isDisabled]="disabled" (selectionChange)="radioChange($event)">
      <ts-radio-button value="1">One {{ disabled ? '(disabled)' : '' }}</ts-radio-button>
      <ts-radio-button value="2" [isDisabled]="optionDisabled">Two {{ (optionDisabled || disabled) ? '(disabled)' : '' }}</ts-radio-button>
      <ts-radio-button value="3">Three {{ disabled ? '(disabled)' : '' }}</ts-radio-button>
    </ts-radio-group>
  `,
  props: {
    disabled: boolean('Disable group', false),
    optionDisabled: boolean('Disable 2nd option', false),
    radioChange: action('Selection change'),
  },
});
basic.parameters = {
  docs: { iframeHeight: 160 },
};

export const states = () => ({
  component: TsRadioGroupComponent,
  template: `
    <style>
      .container {
        display: flex;
      }
    </style>
    <div class="container">
      <div style="margin-right: 2rem;">
        <ts-radio-group>
          <ts-radio-button value="1" [isChecked]="true">Checked</ts-radio-button>
          <ts-radio-button value="2">Empty</ts-radio-button>
        </ts-radio-group>
      </div>

      <div>
        <ts-radio-group [isDisabled]="disabledGroup">
          <ts-radio-button value="1" [isChecked]="true">Checked (disabled)</ts-radio-button>
          <ts-radio-button value="2">Empty (disabled)</ts-radio-button>
        </ts-radio-group>
      </div>
    </div>
  `,
  props: {
    disabledGroup: boolean('Disable group', true),
    optionDisabled: boolean('Disable 2nd option', false),
  },
});
states.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 100 },
};

export const customSubLabels = () => ({
  component: TsRadioButtonComponent,
  template: `
    <style>
      small {
        display: block;
        font-size: 10px;
        line-height: 1em;
      }
    </style>
    <ts-radio-group>
      <ts-radio-button value="1">
        Item one
        <small>My sub label</small>
      </ts-radio-button>
      <ts-radio-button value="2">
        Item two
        <small>My sub label</small>
      </ts-radio-button>
      <ts-radio-button value="3">
        Item three
        <small>My sub label</small>
      </ts-radio-button>
    </ts-radio-group>
  `,
});
customSubLabels.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 180 },
};

export const fieldsetLegend = () => ({
  component: TsRadioButtonComponent,
  template: `
    <ts-radio-group [fieldsetLegend]="fieldsetLegend">
      <ts-radio-button value="1">One</ts-radio-button>
      <ts-radio-button value="2">Two</ts-radio-button>
      <ts-radio-button value="3">Three</ts-radio-button>
    </ts-radio-group>
  `,
  props: {
    fieldsetLegend: text('Fieldset legend', 'My fieldset legend!'),
  },
});
fieldsetLegend.parameters = {
  actions: { disable: true },
  docs: { iframeHeight: 180 },
};

export const stateControl = () => ({
  component: TsRadioGroupComponent,
  template: `
    <style>
      .container {
        display: flex;
        justify-content: space-between;
      }
    </style>
    <div class="container">
      <form [formGroup]="formGroupForm">
        <ts-radio-group fieldsetLegend="FormControl" [formControl]="formGroupForm.get('myGroup')">
          <ng-container *ngFor="let item of items;">
            <ts-radio-button [value]="item.id">{{ item.title }}</ts-radio-button>
          </ng-container>
        </ts-radio-group>
        <pre>Value: {{ formGroupForm.value.myGroup | json }}</pre>
      </form>

      <form [formGroup]="formGroupNameForm">
        <ts-radio-group fieldsetLegend="formControlName" formControlName="myGroup">
          <ng-container *ngFor="let item of items;">
            <ts-radio-button [value]="item.id">{{ item.title }}</ts-radio-button>
          </ng-container>
        </ts-radio-group>
        <pre>Value: {{ formGroupNameForm.value.myGroup | json }}</pre>
      </form>

      <div>
        <ts-radio-group fieldsetLegend="ngModel" [(ngModel)]="myModel">
          <ng-container *ngFor="let item of items;">
            <ts-radio-button [value]="item.id">{{ item.title }}</ts-radio-button>
          </ng-container>
        </ts-radio-group>
        <pre>Value: {{ myModel | json }}</pre>
      </div>
    </div>
  `,
  props: {
    items: DEMO_ITEMS.slice(),
    formGroupForm: new FormGroup({
      myGroup: new FormControl('foo_value'),
    }),
    formGroupNameForm: new FormGroup({
      myGroup: new FormControl('bar_value'),
    }),
    myModel: 'baz_value',
  },
});
stateControl.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 220 },
};

export const label = () => ({
  component: TsRadioButtonComponent,
  template: `
    <ts-radio-group>
      <ts-radio-button value="1" textContent="One"></ts-radio-button>
      <ts-radio-button value="2" textContent="Two"></ts-radio-button>
      <ts-radio-button value="3" textContent="I will be overridden">ng-content will override the label @Input</ts-radio-button>
    </ts-radio-group>
  `,
});
label.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 140 },
};

export const validationMessages = () => ({
  component: TsRadioGroupComponent,
  template: `
    <style>
      .container {
        display: flex;
        justify-content: space-between;
      }
    </style>
    <div class="container">
      <form [formGroup]="formGroupForm">
        <ts-radio-group
          fieldsetLegend="FormControl"
          formControlName="myGroup"
          [isRequired]="true"
          [validationFormControl]="formGroupForm.get('myGroup')"
        >
          <ts-radio-button value="1">One</ts-radio-button>
          <ts-radio-button value="2">Two</ts-radio-button>
          <ts-radio-button value="3">Three</ts-radio-button>
        </ts-radio-group>
      </form>
    </div>
  `,
  props: {
    items: DEMO_ITEMS.slice(),
    formGroupForm: new FormGroup({
      myGroup: new FormControl(null, [Validators.required]),
    }),
  },
});
validationMessages.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 200 },
};

export const tabIndex = () => ({
  component: TsRadioButtonComponent,
  template: `
    <ts-radio-group>
      <ts-radio-button value="1">One</ts-radio-button>
      <ts-radio-button value="2" tabIndex="1">Two - I will receive tab focus first.</ts-radio-button>
      <ts-radio-button value="3">Three</ts-radio-button>
    </ts-radio-group>
  `,
});
tabIndex.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 140 },
};
