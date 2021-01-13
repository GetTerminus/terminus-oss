import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsSpacingModule } from '@terminus/ui-spacing';
import {
  TsTabBodyComponent,
  TsTabCollectionComponent,
  TsTabHeaderComponent,
  TsTabInkBarComponent,
  TsTabsModule,
} from '@terminus/ui-tabs';

export default {
  title: 'Components/Structure/Tabs',
  component: TsTabCollectionComponent,
  subcomponents: {
    TsTabInkBarComponent,
    TsTabHeaderComponent,
    TsTabBodyComponent,
  },
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        TsSpacingModule,
        TsTabsModule,
      ],
    }),
  ],
};

export const basic = () => ({
  template: `
    <ts-tab-collection
      (animationFinished)="animationFinished($event)"
      (focusChange)="focusChange($event)"
      (selectedIndexChange)="selectedIndexChange($event)"
      (selectedTabChange)="selectedTabChange($event)"
    >
      <ts-tab label="First">Content 1</ts-tab>
      <ts-tab label="Second">Content 2</ts-tab>
      <ts-tab label="Third">Content 3</ts-tab>
    </ts-tab-collection>
  `,
  props: {
    animationFinished: action('Animation finished'),
    focusChange: action('Focus changed'),
    selectedIndexChange: action('Selected tab index changed'),
    selectedTabChange: action('Selected tab changed'),
  },
});
basic.parameters = {
  knobs: { disabled: true },
  docs: { iframeHeight: 140 },
};

export const tabAlignment = () => ({
  template: `
    <h3>Start</h3>
    <ts-tab-collection tabAlignment="start" tsVerticalSpacing="large--2">
      <ts-tab label="First">Content 1</ts-tab>
      <ts-tab label="Second">Content 2</ts-tab>
      <ts-tab label="Third">Content 3</ts-tab>
    </ts-tab-collection>

    <h3>Center</h3>
    <ts-tab-collection tabAlignment="center" tsVerticalSpacing="large--2">
      <ts-tab label="First">Content 1</ts-tab>
      <ts-tab label="Second">Content 2</ts-tab>
      <ts-tab label="Third">Content 3</ts-tab>
    </ts-tab-collection>

    <h3>End</h3>
    <ts-tab-collection tabAlignment="end" tsVerticalSpacing="large--2">
      <ts-tab label="First">Content 1</ts-tab>
      <ts-tab label="Second">Content 2</ts-tab>
      <ts-tab label="Third">Content 3</ts-tab>
    </ts-tab-collection>

    <h3>Stretch</h3>
    <ts-tab-collection tabAlignment="stretch">
      <ts-tab label="First">Content 1</ts-tab>
      <ts-tab label="Second">Content 2</ts-tab>
      <ts-tab label="Third">Content 3</ts-tab>
    </ts-tab-collection>
  `,
});
tabAlignment.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 700 },
};

export const headerPosition = () => ({
  template: `
    <h3>Above:</h3>
    <ts-tab-collection tsVerticalSpacing="large--2">
      <ts-tab label="First">Content 1</ts-tab>
      <ts-tab label="Second">Content 2</ts-tab>
    </ts-tab-collection>

    <h3>Below:</h3>
    <ts-tab-collection headerPosition="below">
      <ts-tab label="First">Content 1</ts-tab>
      <ts-tab label="Second">Content 2</ts-tab>
    </ts-tab-collection>
  `,
});
headerPosition.parameters = {
  knobs: { disabled: true },
  actions: { disabled: true },
  docs: { iframeHeight: 400 },
};

export const disabledTabs = () => ({
  template: `
    <ts-tab-collection>
      <ts-tab label="First" [isDisabled]="disabled1 || disabledAll">Content 1</ts-tab>
      <ts-tab label="Second" [isDisabled]="disabled2 || disabledAll">Content 2</ts-tab>
      <ts-tab label="Third" [isDisabled]="disabled3 || disabledAll">Content 3</ts-tab>
    </ts-tab-collection>
  `,
  props: {
    disabled1: boolean('Disable tab 1', false),
    disabled2: boolean('Disable tab 2', true),
    disabled3: boolean('Disable tab 3', false),
    disabledAll: boolean('Disable all tabs', false),
  },
});
disabledTabs.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 140 },
};

@Component({
  selector: 'ts-tabs-dynamic-wrapper',
  template: `
    <div tsVerticalSpacing="large--0">
      <button (click)="injectTab()" [disabled]="endDisabled">Insert a new tab at the end</button>
      <button (click)="injectTabAtLocation(1)" [disabled]="indexDisabled">Insert a new tab at location \`1\`</button>
    </div>
    <ts-tab-collection>
      <ts-tab *ngFor="let tab of dynamicTabs; let index = index" [label]="tab">
        Content for {{ tab }} tab
      </ts-tab>
    </ts-tab-collection>
  `,
})
class TabsDynamicWrapper {
  dynamicTabs = ['First', 'Second', 'Third'];
  endDisabled = false;
  indexDisabled = false;

  injectTab() {
    this.dynamicTabs.push('Fourth');
    this.endDisabled = true;
  }

  injectTabAtLocation(index) {
    this.dynamicTabs.splice(index, 0, 'New New!');
    this.indexDisabled = true;
  }
}

export const dynamicTabs = () => ({
  component: TabsDynamicWrapper,
});
dynamicTabs.parameters = {
  knobs: { disabled: true },
  actions: { disabled: true },
  docs: { iframeHeight: 180 },
};

export const customLabels = () => ({
  template: `
    <ts-tab-collection>
      <ts-tab>
        <ng-template tsTabLabel>
          <span class="fas fa-igloo"></span>
          First
        </ng-template>
        Content 1
      </ts-tab>

      <ts-tab>
        <ng-template tsTabLabel>
          <span class="fas fa-dice"></span>
          Second
        </ng-template>
        Content 2
      </ts-tab>
    </ts-tab-collection>
  `,
});
customLabels.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 140 },
};

export const lazyLoadedContent = () => ({
  template: `
    <ts-tab-collection>
      <ts-tab label="First">
        <ng-template tsTabContent>Content 1</ng-template>
      </ts-tab>
      <ts-tab label="Second">
        <ng-template tsTabContent>Content 2</ng-template>
      </ts-tab>
    </ts-tab-collection>
  `,
});
lazyLoadedContent.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 140 },
};
