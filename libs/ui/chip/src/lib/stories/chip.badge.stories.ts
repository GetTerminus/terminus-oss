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
    <style>
      ts-chip:not(:last-of-type) {
        margin-right: 2rem;
      }
    </style>

    <ts-chip tsChipBadge>Primary</ts-chip>
    <ts-chip tsChipBadge theme="accent">Accent</ts-chip>
    <ts-chip tsChipBadge theme="warn">Warn</ts-chip>
  `,
});
basic.parameters = {
  knobs: { disabled: true },
  actions: { disabled: true },
  docs: { iframeHeight: 60 },
};
