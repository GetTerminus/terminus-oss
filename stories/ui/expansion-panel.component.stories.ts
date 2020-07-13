/* eslint-disable @angular-eslint/prefer-on-push-component-change-detection */
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  boolean,
  withKnobs,
} from '@storybook/addon-knobs';

import { TsButtonModule } from '@terminus/ui-button';
import { TsCardModule } from '@terminus/ui-card';
import {
  TsExpansionPanelComponent,
  TsExpansionPanelModule,
} from '@terminus/ui-expansion-panel';

export default {
  title: 'TsExpansionPanelComponent',
  decorators: [withKnobs],
};

const MODULE_IMPORTS = [
  TsExpansionPanelModule,
  BrowserAnimationsModule,
];

export const basic = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: TsExpansionPanelComponent,
  template: `
    <ts-expansion-panel [isDisabled]="isDisabled">
      <ts-expansion-panel-trigger>
        Here is my trigger!
      </ts-expansion-panel-trigger>

      <p>And here is my standard panel content.</p>
    </ts-expansion-panel>
  `,
  props: {
    isDisabled: boolean('isDisabled', false),
  },
});

export const defaultOpen = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: TsExpansionPanelComponent,
  template: `
    <ts-expansion-panel [isExpanded]="isExpanded">
      <ts-expansion-panel-trigger>
        Here is my trigger!
      </ts-expansion-panel-trigger>

      <p>And here is my standard panel content.</p>
    </ts-expansion-panel>
  `,
  props: {
    isExpanded: boolean('isExpanded', true),
  },
});

export const lazyLoad = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: TsExpansionPanelComponent,
  template: `
    <ts-expansion-panel>
      <ts-expansion-panel-trigger>
        Here is my trigger!
      </ts-expansion-panel-trigger>

      <ng-template tsExpansionPanelContent>
        Here is my deferred template!
      </ng-template>
    </ts-expansion-panel>
  `,
});

export const transparent = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS, TsCardModule] },
  component: TsExpansionPanelComponent,
  template: `
    <ts-card>
      <ts-expansion-panel [transparentMode]="transparent">
        <ts-expansion-panel-trigger>
          Here is my trigger!
        </ts-expansion-panel-trigger>

        <p>And here is my standard panel content.</p>
      </ts-expansion-panel>
    </ts-card>
  `,
  props: {
    transparent: boolean('transparent', true),
  },
});

export const customTrigger = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: TsExpansionPanelComponent,
  template: `
    <ts-expansion-panel>
      <ts-expansion-panel-trigger
        collapsedHeight="100px"
        expandedHeight="200px"
      >Panel Trigger (100px -> 200px)</ts-expansion-panel-trigger>

      <p>And here is my standard panel content.</p>
    </ts-expansion-panel>
  `,
});

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'ts-expansion-panel-wrapper',
  template: `
  <ts-accordion [hideToggle]="true">
    <ts-expansion-panel [isExpanded]="activeStep === 0">
      <ts-expansion-panel-trigger (click)="activeStep = 0">Step 1</ts-expansion-panel-trigger>

      And here is my standard panel content.

      <ts-expansion-panel-action-row>
        <ts-button (clicked)="nextStep()">Next</ts-button>
      </ts-expansion-panel-action-row>
    </ts-expansion-panel>

    <ts-expansion-panel [isExpanded]="activeStep === 1">
      <ts-expansion-panel-trigger>
        <ts-expansion-panel-trigger-title>Step 2</ts-expansion-panel-trigger-title>
        <ts-expansion-panel-trigger-description>
          And here is the description
        </ts-expansion-panel-trigger-description>
      </ts-expansion-panel-trigger>

      And here is my standard panel content.

      <ts-expansion-panel-action-row>
        <ts-button format="hollow" (clicked)="previousStep()">Previous</ts-button>
        <ts-button (clicked)="nextStep()">Next</ts-button>
      </ts-expansion-panel-action-row>
    </ts-expansion-panel>

    <ts-expansion-panel [isExpanded]="activeStep === 2">
      <ts-expansion-panel-trigger>
        <ts-expansion-panel-trigger-title>Step 3</ts-expansion-panel-trigger-title>
        <ts-expansion-panel-trigger-description>
          Quod voluptatem corporis soluta assumenda. Nemo magnam commodi unde.
        </ts-expansion-panel-trigger-description>
      </ts-expansion-panel-trigger>

      And here is my standard panel content.

      <ts-expansion-panel-action-row>
        <ts-button format="hollow" (clicked)="previousStep()">Previous</ts-button>
        <ts-button (clicked)="setStep(-1)">End</ts-button>
      </ts-expansion-panel-action-row>
    </ts-expansion-panel>
  </ts-accordion>
`,
})
class AccordionWrapper {
  activeStep = 0;
  nextStep() {
    this.activeStep++;
  }

  previousStep() {
    this.activeStep--;
  }

  setStep(index) {
    this.activeStep = index;
  }
}

export const accordion = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS, TsButtonModule] },
  component: AccordionWrapper,
});

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'ts-expansion-panel-wrapper-events',
  template: `
    <ts-expansion-panel
      (opened)="panelOpened()"
      (closed)="panelClosed()"
      (expandedChange)="panelExpandedChange($event)"
      (destroyed)="panelDestroyed()"
      (afterExpand)="afterPanelExpanded()"
      (afterCollapse)="afterPanelCollapsed()"
    >
      <ts-expansion-panel-trigger>
        Here is my trigger!
      </ts-expansion-panel-trigger>

      <p>And here is my standard panel content.</p>
    </ts-expansion-panel>
`,
})
class AccordionWrapperEvents {
  panelOpened() {
    console.log('DEMO: Panel opened');
  }
  panelClosed() {
    console.log('DEMO: Panel closed');
  }
  panelExpandedChange(event) {
    console.log('DEMO: Panel expanded state changed: ', event);
  }
  panelDestroyed() {
    console.log('DEMO: Panel destroyed');
  }
  afterPanelExpanded() {
    console.log('DEMO: Panel expand animation finished');
  }
  afterPanelCollapsed() {
    console.log('DEMO: Panel collapse animation finished');
  }
}

export const events = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: AccordionWrapperEvents,
});

