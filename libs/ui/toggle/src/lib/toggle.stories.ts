import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsSpacingModule } from '@terminus/ui-spacing';
import {
  TsToggleComponent,
  TsToggleModule,
} from '@terminus/ui-toggle';

export default {
  title: 'Components/Data Entry/Toggle',
  component: TsToggleComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        TsSpacingModule,
        TsToggleModule,
      ],
    }),
  ],
};

export const basic = () => ({
  component: TsToggleComponent,
  template: `<ts-toggle [isDisabled]="isDisabled" (selectionChange)="selectionChange($event)">My toggle!</ts-toggle>`,
  props: {
    isDisabled: boolean('Disabled', false),
    selectionChange: action('Selection changed'),
  },
});

export const themes = () => ({
  component: TsToggleComponent,
  template: `
    <style>
      ts-toggle:not(:last-of-type) {
        margin-right: 1rem;
      }
    </style>
    <div tsVerticalSpacing="large--1">
      <ts-toggle theme="primary" [isChecked]="true">Primary Toggle</ts-toggle>
      <ts-toggle theme="primary" [isChecked]="true" [isDisabled]="true">Primary Disabled</ts-toggle>
    </div>
    <div tsVerticalSpacing="large--1">
      <ts-toggle theme="accent" [isChecked]="true">Accent Toggle</ts-toggle>
      <ts-toggle theme="accent" [isChecked]="true" [isDisabled]="true">Accent Disabled</ts-toggle>
    </div>
    <div>
      <ts-toggle theme="warn" [isChecked]="true">Warn Toggle</ts-toggle>
      <ts-toggle theme="warn" [isChecked]="true" [isDisabled]="true">Warn Disabled</ts-toggle>
    </div>
  `,
});
themes.parameters = {
  knobs: { disabled: true },
  actions: { disabled: true },
  docs: { iframeHeight: 200 },
};

export const labelPosition = () => ({
  component: TsToggleComponent,
  template: `<ts-toggle [labelPosition]="labelPosition">My toggle!</ts-toggle>`,
  props: {
    labelPosition: select('Label position', ['before', 'after'], 'before'),
  },
});
labelPosition.parameters = {
  actions: { disabled: true },
};
