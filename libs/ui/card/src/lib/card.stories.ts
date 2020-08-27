import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
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
  title: 'Components/Structure/Card',
  decorators: [withKnobs],
};

export const aspectRatio = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsCardComponent,
  template: `<ts-card [aspectRatio]="aspectRatio">My card content</ts-card>`,
  props: { aspectRatio: select('Aspect ratio', tsCardAspectRatioTypes, '16:9') },
});
aspectRatio.parameters = {
  actions: { disabled: true },
};

export const border = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsCardComponent,
  template: `<ts-card [border]="border" [theme]="theme">My card content</ts-card>`,
  props: {
    border: select('Border side', tsCardBorderOptionsList, 'left'),
    theme: select('Theme', ['primary', 'accent', 'warn'], 'primary'),
  },
});
border.parameters = {
  actions: { disabled: true },
};

export const cardWithTitle = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsCardComponent,
  template: `
    <ts-card>
      <h3 tsCardTitle>{{ title }}</h3>
      <p>{{ content }}</p>
    </ts-card>
  `,
  props: {
    title: text('Card title', 'Card Title'),
    content: text('Card content', 'My card content!'),
  },
});
cardWithTitle.parameters = {
  actions: { disabled: true },
};

export const centeredContent = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsCardComponent,
  template: `<ts-card [centeredContent]="centeredContent">My card content</ts-card>`,
  props: { centeredContent: boolean('Centered content', false) },
});
centeredContent.parameters = {
  actions: { disabled: true },
};

export const disabled = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsCardComponent,
  template: `<ts-card [isDisabled]="disabled">My card content</ts-card>`,
  props: { disabled: boolean('Disabled', true) },
});
disabled.parameters = {
  actions: { disabled: true },
};

export const flat = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsCardComponent,
  template: `<ts-card [flat]="flat">My card content</ts-card>`,
  props: { flat: boolean('Flat', true) },
});
flat.parameters = {
  actions: { disabled: true },
};

export const supportsInteraction = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsCardComponent,
  template: `<ts-card [supportsInteraction]="supportsInteraction" (click)="action($event)">My card content</ts-card>`,
  props: {
    supportsInteraction: boolean('Supports interaction', true),
    action: action('Card clicked!'),
  },
});
