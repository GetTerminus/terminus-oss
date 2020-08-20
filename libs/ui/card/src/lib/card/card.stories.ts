import {
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

const MODULE_METADATA = {
  imports: [TsCardModule],
};

export default {
  title: 'TsCardComponent',
  decorators: [
    withKnobs,
  ],
};

export const aspectRatio = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsCardComponent,
  template: `<ts-card [aspectRatio]="aspectRatio">My card content</ts-card>`,
  props: { aspectRatio: select('aspectRatio', tsCardAspectRatioTypes, '1:1') },
});

export const border = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsCardComponent,
  template: `<ts-card [border]="border" [theme]="theme">My card content</ts-card>`,
  props: {
    border: select('border', tsCardBorderOptionsList, 'left'),
    theme: select('theme', ['primary', 'accent', 'warn'], 'primary'),
  },
});

export const cardWithTitle = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsCardComponent,
  template: `
    <ts-card>
      <h3 tsCardTitle>Card Title</h3>
      <p>My card content</p>
    </ts-card>
  `,
});

export const centeredContent = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsCardComponent,
  template: `<ts-card [centeredContent]="centeredContent">My card content</ts-card>`,
  props: { centeredContent: boolean('centeredContent', false) },
});

export const disabled = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsCardComponent,
  template: `<ts-card [isDisabled]="disabled">My card content</ts-card>`,
  props: { disabled: boolean('disabled', true) },
});

export const flat = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsCardComponent,
  template: `<ts-card [flat]="flat">My card content</ts-card>`,
  props: { flat: boolean('flat', true) },
});

export const supportsInteraction = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsCardComponent,
  template: `<ts-card [supportsInteraction]="supportsInteraction">My card content</ts-card>`,
  props: { supportsInteraction: boolean('supportsInteraction', true) },
});
