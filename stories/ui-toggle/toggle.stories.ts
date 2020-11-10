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
