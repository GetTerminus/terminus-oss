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
    <ts-menu
      [defaultOpened]="true"
      [isDisabled]="isDisabled"
      [menuItemsTemplate]="myTemplate"
    >Select Item</ts-menu>

    <ng-template #myTemplate>
      <ts-button>Button One</ts-button>
      <ts-link>Link One</ts-link>
    </ng-template>
  `,
  props: {
    isDisabled: boolean('isDisabled', false),
  },
});

export const themes = () => ({
  template: `
    <div tsVerticalSpacing="large--1">
      <h3>Default</h3>
      <ts-menu [menuItemsTemplate]="myTemplate" theme="default">Select Item</ts-menu>
    </div>
    <div tsVerticalSpacing="large--1">
      <h3>Accent</h3>
      <ts-menu [menuItemsTemplate]="myTemplate" theme="accent">Select Item</ts-menu>
    </div>
    <div tsVerticalSpacing="large--1">
      <h3>Warning</h3>
      <ts-menu [menuItemsTemplate]="myTemplate" theme="warning">Select Item</ts-menu>
    </div>
    <ng-template #myTemplate>
      <ts-button>Button One</ts-button>
      <ts-link>Link One</ts-link>
    </ng-template>
  `,
});
themes.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
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
  knobs: { disabled: true },
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
};
