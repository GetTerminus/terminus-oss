import {
  text,
  boolean,
  select,
  withKnobs,
} from '@storybook/addon-knobs';

import {
  tsCardAspectRatioTypes,
  tsCardBorderOptionsList,
  TsCardComponent,
  TsCardModule,
} from '@terminus/ui-card';

export default {
  title: 'TsCardComponent',
  decorators: [
    withKnobs,
  ],
};

export const allToggles = () => ({
  moduleMetadata: {
    imports: [TsCardModule],
  },
  component: TsCardComponent,
  template: `
      <ts-card
        [aspectRatio]="aspectRatio"
        [border]="border"
        [centeredContent]="centeredContent"
        [isDisabled]="isDisabled"
        [flat]="flat"
        [id]="id"
        [supportsInteraction]="supportsInteraction"
        [theme]="theme"
      >My card content</ts-card>
  `,
  props: {
    aspectRatio: select('aspectRatio', tsCardAspectRatioTypes, '1:1'),
    border: select('border', tsCardBorderOptionsList, 'none'),
    centeredContent: boolean('centeredContent', false),
    isDisabled: boolean('isDisabled', false),
    flat: boolean('flat', false),
    id: text('id', ''),
    supportsInteraction: boolean('supportsInteraction', false),
    theme: select('theme', ['primary', 'accent', 'warn'], 'primary'),
  },
});
