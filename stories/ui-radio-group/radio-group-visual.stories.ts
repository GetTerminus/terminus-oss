import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

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
  title: 'Components/Data Entry/Radio Group/Visual Mode',
  component: TsRadioGroupComponent,
  subcomponents: { TsRadioButtonComponent },
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TsValidationMessagesModule,
      ],
      declarations: [
        TsRadioButtonComponent,
        TsRadioGroupComponent,
      ],
    }),
  ],
};

export const visualMode = () => ({
  component: TsRadioButtonComponent,
  template: `
    <style>
      .container {
        display: flex;
        flex-direction: column;
      }
      .container > div {
        margin-bottom: 1rem;
      }
    </style>
    <div class="container">
      <div>
        <ts-radio-group visualFormat="visual">
          <ts-radio-button value="1" [isChecked]="true">One</ts-radio-button>
          <ts-radio-button value="2">Two</ts-radio-button>
        </ts-radio-group>
      </div>

      <div>
        <ts-radio-group visualFormat="visual" [isDisabled]="true">
          <ts-radio-button value="1" [isChecked]="true">One (disabled)</ts-radio-button>
          <ts-radio-button value="2">Two (disabled)</ts-radio-button>
        </ts-radio-group>
      </div>
    </div>
  `,
  props: {
    myModel: '2',
  },
});
visualMode.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 500 },
};

export const visualModeCentered = () => ({
  component: TsRadioButtonComponent,
  template: `
    <ts-radio-group [(ngModel)]="myModel" visualFormat="visual-centered">
      <ts-radio-button value="1">One</ts-radio-button>
      <ts-radio-button value="2">Two</ts-radio-button>
      <ts-radio-button value="3">
        <div>Three</div>
        <small>Custom content</small>
      </ts-radio-button>
    </ts-radio-group>
  `,
  props: {
    myModel: '2',
  },
});
visualModeCentered.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 260 },
};

export const visualModeSmall = () => ({
  component: TsRadioButtonComponent,
  template: `
    <ts-radio-group [(ngModel)]="myModel" visualFormat="visual-small">
      <ts-radio-button value="1">One</ts-radio-button>
      <ts-radio-button value="2">Two</ts-radio-button>
      <ts-radio-button value="3">
        <div>Three</div>
        <small>Custom content</small>
      </ts-radio-button>
    </ts-radio-group>
  `,
  props: {
    myModel: '2',
  },
});
visualModeSmall.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 180 },
};

export const visualModeSmallCentered = () => ({
  component: TsRadioButtonComponent,
  template: `
    <ts-radio-group [(ngModel)]="myModel" visualFormat="visual-small-centered">
      <ts-radio-button value="1">One</ts-radio-button>
      <ts-radio-button value="2">Two</ts-radio-button>
      <ts-radio-button value="3">
        <div>Three</div>
        <small>Custom content</small>
      </ts-radio-button>
    </ts-radio-group>
  `,
  props: {
    myModel: '2',
  },
});
visualModeSmallCentered.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 180 },
};

export const visualModeCustomAspectRatioCSS = () => ({
  component: TsRadioButtonComponent,
  template: `
    <style>
      .ts-radio-button::before {
        --ts-radio-visual-aspectRatio: calc(22 / 7);
      }
    </style>
    <ts-radio-group [(ngModel)]="myModel" visualFormat="visual">
      <ts-radio-button value="1">One</ts-radio-button>
      <ts-radio-button value="2">Two</ts-radio-button>
      <ts-radio-button value="3">
        <div>Three</div>
        <small>Custom content</small>
      </ts-radio-button>
    </ts-radio-group>
  `,
  props: {
    myModel: '2',
  },
});
visualModeCustomAspectRatioCSS.parameters = {
  actions: { disable: true },
  knobs: { disable: true },
  docs: { iframeHeight: 200 },
};
