import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  boolean,
  select,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsButtonModule } from '@terminus/ui-button';
import { TsLinkModule } from '@terminus/ui-link';
import {
  TsMenuComponent,
  TsMenuModule,
} from '@terminus/ui-menu';

export default {
  title: 'Components/Actions/Menu',
  component: TsMenuComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        RouterModule.forRoot([]),
        TsMenuModule,
        TsButtonModule,
        TsLinkModule,
        BrowserAnimationsModule,
      ],
      providers: [{
        provide: APP_BASE_HREF,
        useValue: '/',
      }],
    }),
  ],
};

export const basic = () => ({
  template: `
    <style>
      ts-menu:not(last-of-type) {
        margin-right: 2rem;
      }
    </style>
    <ts-menu
      [defaultOpened]="true"
      [menuItemsTemplate]="myTemplate"
    >Select Item</ts-menu>

    <ts-menu
      [isDisabled]="true"
      [menuItemsTemplate]="myTemplate"
    >Disabled Select</ts-menu>

    <ng-template #myTemplate>
      <ts-button>Button One</ts-button>
      <ts-link>Link One</ts-link>
    </ng-template>
  `,
});
basic.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 200 },
};

export const customPanelPosition = () => ({
  template: `
    <small>Close & reopen the menu after changing position via knobs.</small>
    <ts-menu
      [defaultOpened]="true"
      [menuItemsTemplate]="myTemplate"
      [menuPositionX]="menuPositionX"
      [menuPositionY]="menuPositionY"
      style="margin:200px;"
    >Select Item</ts-menu>
    <ng-template #myTemplate>
      <ts-button>Button One</ts-button>
      <ts-link>Link One</ts-link>
    </ng-template>
  `,
  props: {
    menuPositionX: select('menuPositionX', ['after', 'before'], 'after'),
    menuPositionY: select('menuPositionY', ['above', 'below'], 'above'),
  },
});
customPanelPosition.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 400 },
};

export const utilityTrigger = () => ({
  template: `
    <ts-menu
      triggerType="utility"
      [menuItemsTemplate]="myTemplate"
    >Select Item</ts-menu>
    <ng-template #myTemplate>
      <ts-button>Button One</ts-button>
      <ts-link>Link One</ts-link>
    </ng-template>
  `,
});
utilityTrigger.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 200 },
};
