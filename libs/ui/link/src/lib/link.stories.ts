import { RouterTestingModule } from '@angular/router/testing';
import {
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsLinkComponent,
  TsLinkModule,
} from '@terminus/ui-link';

export default {
  title: 'Components/Navigation/Link',
  component: TsLinkComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        RouterTestingModule,
        TsLinkModule,
      ],
    }),
  ],
};

export const basic = () => ({
  template: `<ts-link>{{ content }}</ts-link>`,
  props: {
    content: text('Content', 'My link!'),
  },
});
basic.properties = {
  actions: { disabled: true },
};

export const external = () => ({
  template: `<ts-link [isExternal]="true" [destination]="destination">{{ content }}</ts-link>`,
  props: {
    destination: text('Destination', 'http://google.com'),
    content: text('Content', 'My link!'),
  },
});
external.properties = {
  actions: { disabled: true },
};

export const fragment = () => ({
  template: `<ts-link fragment="myLocalId">{{ content }}</ts-link>`,
  props: {
    content: text('Content', 'My link!'),
  },
});
fragment.properties = {
  actions: { disabled: true },
};
