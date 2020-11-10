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
  template: `<ts-chip tsChipBadge>My Badge</ts-chip>`,
});
basic.parameters = {
  knobs: { disabled: true },
  actions: { disabled: true },
  docs: { iframeHeight: 60 },
};
