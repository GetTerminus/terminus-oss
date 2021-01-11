import { DragDropModule } from '@angular/cdk/drag-drop';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { action } from '@storybook/addon-actions';
import {
  select,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsButtonModule } from '@terminus/ui-button';
import { TsCheckboxModule } from '@terminus/ui-checkbox';
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
        BrowserAnimationsModule,
        DragDropModule,
        RouterModule.forRoot([]),
        TsButtonModule,
        TsCheckboxModule,
        TsLinkModule,
        TsMenuModule,
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
      <button tsMenuItem>Button One</button>
      <a href="#" tsMenuItem>Link One</a>
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
      <button tsMenuItem>Button One</button>
      <a href="#" tsMenuItem>Link One</a>
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
      [defaultOpened]="true"
    >Select Item</ts-menu>
    <ng-template #myTemplate>
      <button tsMenuItem>Button One</button>
      <a href="#" tsMenuItem>Link One</a>
    </ng-template>
  `,
});
utilityTrigger.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 200 },
};

const items = [
  {
    display: 'Title',
    name: 'title',
  },
  {
    display: 'Comments',
    name: 'comments',
  },
];

export const checkboxMenu = () => ({
  template: `
    <ts-menu [menuItemsTemplate]="myTemplate" [defaultOpened]="true">Select Items</ts-menu>
    <ng-template #myTemplate>
      <ng-container *ngFor="let item of items">
        <!-- The menu normally closes after each interaction, so we need to stop propagation here to
        support multiple selections while open -->
        <ts-checkbox (click)="$event.stopPropagation()" tsMenuItem>
          <span>{{ item.display }}</span>
        </ts-checkbox>
      </ng-container>
    </ng-template>
  `,
  props: {
    items,
  },
});
checkboxMenu.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 200 },
};

export const dragAndDrop = () => ({
  template: `
    <ts-menu [menuItemsTemplate]="myTemplate" [defaultOpened]="true">Select Items</ts-menu>
    <ng-template #myTemplate>
      <div
        cdkDropList
        cdkDropListLockAxis="y"
        (cdkDropListDropped)="menuItemDropped($event)"
      >
        <ng-container *ngFor="let item of items">
          <!-- The menu normally closes after each interaction, so we need to stop propagation here to
          support multiple selections while open -->
          <div (click)="$event.stopPropagation()" cdkDrag tsMenuItem>
            <span>{{ item.display }}</span>

            <!-- Stop drag interactions from affecting the checkbox status -->
            <span
              class="fas fa-grip-lines"
              cdkDragHandle
              (click)="$event.preventDefault() && $event.stopPropagation()"
              data-fa-transform="shrink-4"
            ></span>
            <div *cdkDragPlaceholder></div>
          </div>
        </ng-container>
      </div>
    </ng-template>
  `,
  props: {
    items,
    menuItemDropped: action('Menu item dropped'),
  },
});
dragAndDrop.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 200 },
};

export const menuItemStructureStylesOnly = () => ({
  template: `
    <ts-menu [menuItemsTemplate]="myTemplate" [defaultOpened]="true">Select Item</ts-menu>
    <ng-template #myTemplate>
      <ts-button tsMenuItem="transparent">Button One</ts-button>
      <ts-link destination="#" tsMenuItem="transparent">Link One</ts-link>
    </ng-template>
  `,
});
menuItemStructureStylesOnly.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 200 },
};
