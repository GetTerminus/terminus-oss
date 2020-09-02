import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsChipComponent,
  TsChipModule,
} from '@terminus/ui-chip';
import { TsSpacingModule } from '@terminus/ui-spacing';

export default {
  title: 'Components/Feedback/Badge',
  component: TsChipComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        TsChipModule,
        TsSpacingModule,
      ],
    }),
  ],
};

export const basic = () => ({
  template: `
    <div tsVerticalSpacing="small--1">
      <ts-chip tsChipBadge>Primary</ts-chip>
    </div>
    <div tsVerticalSpacing="small--1">
      <ts-chip tsChipBadge theme="accent">Accent</ts-chip>
    </div>
    <div tsVerticalSpacing="small--1">
      <ts-chip tsChipBadge theme="warn">Warn</ts-chip>
    </div>
  `,
});
basic.parameters = {
  knobs: { disabled: true },
  actions: { disabled: true },
};
