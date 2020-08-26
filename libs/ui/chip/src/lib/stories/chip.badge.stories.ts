import { withKnobs } from '@storybook/addon-knobs';

import {
  TsChipCollectionComponent,
  TsChipModule,
} from '@terminus/ui-chip';
import { TsSpacingModule } from '@terminus/ui-spacing';

const MODULE_METADATA = {
  imports: [
    TsChipModule,
    TsSpacingModule,
  ],
};

export default {
  title: 'Components/Feedback/Badge',
  decorators: [withKnobs],
};

export const basic = () => ({
  component: TsChipCollectionComponent,
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
  moduleMetadata: MODULE_METADATA,
});
basic.parameters = {
  knobs: { disabled: true },
  actions: { disabled: true },
};
