import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsRadioButtonBadgeComponent,
  TsRadioButtonComponent,
  TsRadioGroupComponent,
  TsRadioGroupModule,
} from '@terminus/ui-radio-group';
import { TsValidationMessagesModule } from '@terminus/ui-validation-messages';

export default {
  title: 'Components/Data Entry/Radio Group/Segmented Mode',
  component: TsRadioGroupComponent,
  subcomponents: {
    TsRadioButtonComponent,
    TsRadioButtonBadgeComponent,
  },
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TsValidationMessagesModule,
        TsRadioGroupModule,
      ],
    }),
  ],
};

export const basic = () => ({
  component: TsRadioButtonComponent,
  template: `
    <style>
      .container {
        margin-bottom: 2rem;
      }
    </style>
    <div class="container">
      <ts-radio-group [(ngModel)]="myModel" visualFormat="segmented">
        <ts-radio-button value="1">
          One
          <ts-radio-button-badge>10</ts-radio-button-badge>
        </ts-radio-button>
        <ts-radio-button value="2">
          Two
          <ts-radio-button-badge>8</ts-radio-button-badge>
        </ts-radio-button>
        <ts-radio-button value="3">
          Three
          <ts-radio-button-badge>734</ts-radio-button-badge>
        </ts-radio-button>
      </ts-radio-group>
    </div>

    <div class="container">
      <ts-radio-group visualFormat="segmented" [isDisabled]="true">
        <ts-radio-button value="1" [isChecked]="true">
          One (disabled)
          <ts-radio-button-badge>10</ts-radio-button-badge>
        </ts-radio-button>
        <ts-radio-button value="2">
          Two (disabled)
          <ts-radio-button-badge>8</ts-radio-button-badge>
        </ts-radio-button>
        <ts-radio-button value="3">
          Three (disabled)
          <ts-radio-button-badge>734</ts-radio-button-badge>
        </ts-radio-button>
      </ts-radio-group>
    </div>
  `,
  props: {
    myModel: '2',
  },
});
basic.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 200 },
};

export const vertical = () => ({
  component: TsRadioButtonComponent,
  template: `
    <ts-radio-group [(ngModel)]="myModel" visualFormat="segmented-vertical">
      <ts-radio-button value="1">
        One <ts-radio-button-badge>10</ts-radio-button-badge>
      </ts-radio-button>
      <ts-radio-button value="2">
        Two <ts-radio-button-badge>8</ts-radio-button-badge>
      </ts-radio-button>
      <ts-radio-button value="3">
        Three <ts-radio-button-badge>734</ts-radio-button-badge>
      </ts-radio-button>
    </ts-radio-group>
  `,
  props: {
    myModel: '2',
  },
});
vertical.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 200 },
};
