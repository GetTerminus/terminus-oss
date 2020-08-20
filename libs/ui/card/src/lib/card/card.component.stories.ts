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
        [flat]="flat"
        [id]="id"
        [isDisabled]="isDisabled"
        [supportsInteraction]="supportsInteraction"
        [theme]="theme"
      >My card content</ts-card>
  `,
  props: {
    aspectRatio: select('aspectRatio', tsCardAspectRatioTypes, '1:1'),
    border: select('border', tsCardBorderOptionsList, 'none'),
    centeredContent: boolean('centeredContent', false),
    flat: boolean('flat', false),
    id: text('id', ''),
    isDisabled: boolean('isDisabled', false),
    supportsInteraction: boolean('supportsInteraction', false),
    theme: select('theme', ['primary', 'accent', 'warn'], 'primary'),
  },
});

export const cardWithTitle = () => ({
  moduleMetadata: {
    imports: [TsCardModule],
  },
  component: TsCardComponent,
  template: `
    <ts-card>
      <h3 tsCardTitle>Card Title</h3>
      <p>My card content</p>
    </ts-card>
  `,
});
