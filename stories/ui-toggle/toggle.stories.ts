import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

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
        TsToggleModule,
        ReactiveFormsModule,
      ],
    }),
  ],
};

export const basic = () => ({
  component: TsToggleComponent,
  template: `
    <div style="margin-bottom: 2rem;">
      <ts-toggle (selectionChange)="selectionChange($event)">Standard</ts-toggle>
    </div>
    <div style="margin-bottom: 2rem;">
      <ts-toggle [isDisabled]="true" (selectionChange)="selectionChange($event)">Disabled</ts-toggle>
    </div>
    <div style="margin-bottom: 2rem;">
      <ts-toggle [isChecked]="true" (selectionChange)="selectionChange($event)">Standard checked</ts-toggle>
    </div>
    <div style="margin-bottom: 2rem;">
      <ts-toggle [isDisabled]="true" [isChecked]="true" (selectionChange)="selectionChange($event)">Checked disabled</ts-toggle>
    </div>
    <div style="margin-bottom: 2rem;max-width: 200px;">
      <ts-toggle (selectionChange)="selectionChange($event)">Standard with very long content to see how wrapping looks.</ts-toggle>
    </div>
  `,
  props: {
    isDisabled: boolean('Disabled', false),
    selectionChange: action('Selection changed'),
  },
});

export const labelPosition = () => ({
  component: TsToggleComponent,
  template: `
    <div style="margin-bottom: 2rem;">
      <ts-toggle labelPosition="before">Label before</ts-toggle>
    </div>
    <div style="margin-bottom: 2rem;">
      <ts-toggle labelPosition="after" [isChecked]="true">Label after</ts-toggle>
    </div>
  `,
});
labelPosition.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const formControl = () => ({
  component: TsToggleComponent,
  template: `
    <div style="margin-bottom: 2rem;">
      <ts-toggle [formControl]="myCtrl1">Form control: {{ myCtrl1.value }}</ts-toggle>
    </div>
    <div style="margin-bottom: 2rem;">
      <ts-toggle [formControl]="myCtrl2">Form control: {{ myCtrl2.value }}</ts-toggle>
    </div>
  `,
  props: {
    myCtrl1: new FormControl(true),
    myCtrl2: new FormControl(false),
  },
});
formControl.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};
