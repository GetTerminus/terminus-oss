import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  tsCardAspectRatioTypes,
  tsCardBorderOptionsList,
  TsCardComponent,
  TsCardModule,
  TsCardTitleDirective,
} from '@terminus/ui-card';
import { TsLinkModule } from '@terminus/ui-link';
import { TsMenuModule } from '@terminus/ui-menu';

export default {
  title: 'Components/Structure/Card',
  component: TsCardComponent,
  subcomponents: {
    TsCardTitleDirective,
  },
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        TsCardModule,
        TsLinkModule,
        TsMenuModule,
      ],
    }),
  ],
};

export const basic = () => ({
  template: `<ts-card>My card content</ts-card>`,
});
basic.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 140 },
};

export const aspectRatio = () => ({
  template: `<ts-card [aspectRatio]="aspectRatio">My card content</ts-card>`,
  props: {
    aspectRatio: select('Aspect ratio', tsCardAspectRatioTypes, '16:9'),
  },
});
aspectRatio.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 580 },
};

export const border = () => ({
  template: `<ts-card [border]="border">My card content</ts-card>`,
  props: {
    border: select('Border side', tsCardBorderOptionsList, 'left'),
  },
});
border.parameters = {
  actions: { disabled: true },
};

export const cardWithTitle = () => ({
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
  docs: { iframeHeight: 200 },
};

export const centeredContent = () => ({
  template: `<ts-card [centeredContent]="centeredContent">My card content</ts-card>`,
  props: { centeredContent: boolean('Centered content', true) },
});
centeredContent.parameters = {
  actions: { disabled: true },
};

export const disabled = () => ({
  template: `<ts-card [isDisabled]="disabled">My card content</ts-card>`,
  props: { disabled: boolean('Disabled', true) },
});
disabled.parameters = {
  actions: { disabled: true },
};

export const flat = () => ({
  template: `<ts-card [flat]="flat">My card content</ts-card>`,
  props: { flat: boolean('Flat', true) },
});
flat.parameters = {
  actions: { disabled: true },
};

export const supportsInteraction = () => ({
  template: `<ts-card [supportsInteraction]="supportsInteraction" (click)="action($event)">My card content</ts-card>`,
  props: {
    supportsInteraction: boolean('Supports interaction', true),
    action: action('Card clicked!'),
  },
});

export const utilityMenu = () => ({
  template: `
    <ts-card [utilityMenuTemplate]="myTemplate">
      Here is a card with a utility menu!
    </ts-card>

    <ng-template #myTemplate>
      <!-- Include the trigger to open/close the menu -->
      <!-- Reference the ng-template for the menu content in \`menuItemsTemplate\` -->
      <ts-menu
        triggerType="utility"
        menuPositionX="before"
        [menuItemsTemplate]="utilityButtons"
      ></ts-menu>

      <!-- This template includes all items that should appear in the menu -->
      <ng-template #utilityButtons>
        <ts-link [destination]="['foo/', 'bar/']">My link</ts-link>
      </ng-template>
    </ng-template>
  `,
});
utilityMenu.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};
