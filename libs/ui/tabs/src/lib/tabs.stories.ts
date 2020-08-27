import {
  APP_INITIALIZER,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/pro-solid-svg-icons/faHome';
import { faQuestionCircle } from '@fortawesome/pro-solid-svg-icons/faQuestionCircle';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsIconModule } from '@terminus/ui-icon';
import { TsSpacingModule } from '@terminus/ui-spacing';
import {
  tsTabAlignmentOptions,
  TsTabAlignmentOptions,
  TsTabCollectionComponent,
  TsTabsModule,
} from '@terminus/ui-tabs';

export default {
  title: 'Components/Structure/Tabs',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        FontAwesomeModule,
        TsIconModule,
        TsTabsModule,
        TsSpacingModule,
      ],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add the necessary icons inside the initializer body.
            iconLibrary.addIcons(faHome);
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
};

export const basic = () => ({
  component: TsTabCollectionComponent,
  template: `
    <ts-tab-collection
      [theme]="theme"
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
    theme: select('Theme', ['primary', 'accent', 'warn'], 'primary'),
    animationFinished: action('Animation finished'),
    focusChange: action('Focus changed'),
    selectedIndexChange: action('Selected tab index changed'),
    selectedTabChange: action('Selected tab changed'),
  },
});

export const tabAlignment = () => ({
  component: TsTabCollectionComponent,
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
};

export const headerPosition = () => ({
  component: TsTabCollectionComponent,
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
};

export const disabledTabs = () => ({
  component: TsTabCollectionComponent,
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
};

export const customLabels = () => ({
  component: TsTabCollectionComponent,
  template: `
    <ts-tab-collection>
      <ts-tab>
        <ng-template tsTabLabel>
          <ts-icon [icon]="homeIcon"></ts-icon>
          First
        </ng-template>
        Content 1
      </ts-tab>

      <ts-tab>
        <ng-template tsTabLabel>
          <ts-icon [icon]="helpIcon"></ts-icon>
          Second
        </ng-template>
        Content 2
      </ts-tab>
    </ts-tab-collection>
  `,
  props: {
    homeIcon: faHome,
    helpIcon: faQuestionCircle,
  },
});
customLabels.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const lazyLoadedContent = () => ({
  component: TsTabCollectionComponent,
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
};
