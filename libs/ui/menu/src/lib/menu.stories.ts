import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  AttributesStatesDefault,
  PseudoStatesDefault,
  withPseudo,
} from '@ergosign/storybook-addon-pseudo-states-angular';
import {
  boolean,
  select,
  withKnobs,
} from '@storybook/addon-knobs';

import { TsButtonModule } from '@terminus/ui-button';
import { TsLinkModule } from '@terminus/ui-link';
import {
  TsMenuComponent,
  TsMenuModule,
} from '@terminus/ui-menu';

export default {
  title: 'Components/Menu',
  decorators: [withPseudo, withKnobs],
  parameters: {
    withPseudo: {
      pseudos: [],
      attributes: [],
      permutations: [],
    },
  },
};

const MODULE_METADATA = {
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
};

export const basic = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsMenuComponent,
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

// NOTE: There is an issue with permutations for components using OnPush. Waiting for this issue to be ironed out:
// https://github.com/Ergosign/storybook-addon-pseudo-states/issues/19
export const themes = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsMenuComponent,
  template: `
    <ts-menu [menuItemsTemplate]="myTemplate">Select Item</ts-menu>
    <ng-template #myTemplate>
      <ts-button>Button One</ts-button>
      <ts-link>Link One</ts-link>
    </ng-template>
  `,
});
themes.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  withPseudo: {
    selector: 'button',
    pseudos: [...PseudoStatesDefault],
    attributes: [...AttributesStatesDefault],
    permutations: [
      {
        label: 'Secondary',
        attr: 'theme',
        value: 'secondary',
      },
      {
        label: 'Warning',
        attr: 'theme',
        value: 'warning',
      },
    ],
  },
};

export const customPanelPosition = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsMenuComponent,
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
  moduleMetadata: MODULE_METADATA,
  component: TsMenuComponent,
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
