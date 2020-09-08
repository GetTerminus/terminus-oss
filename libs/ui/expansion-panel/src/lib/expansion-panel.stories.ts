import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsButtonModule } from '@terminus/ui-button';
import { TsCardModule } from '@terminus/ui-card';
import {
  TsAccordionComponent,
  TsExpansionPanelActionRowComponent,
  TsExpansionPanelComponent,
  TsExpansionPanelContentDirective,
  TsExpansionPanelModule,
  TsExpansionPanelTriggerComponent,
  TsExpansionPanelTriggerDescriptionComponent,
  TsExpansionPanelTriggerTitleComponent,
} from '@terminus/ui-expansion-panel';

export default {
  title: 'Components/Structure/Expansion Panel',
  component: TsExpansionPanelComponent,
  subcomponents: {
    TsAccordionComponent,
    TsExpansionPanelActionRowComponent,
    TsExpansionPanelContentDirective,
    TsExpansionPanelTriggerComponent,
    TsExpansionPanelTriggerDescriptionComponent,
    TsExpansionPanelTriggerTitleComponent,
  }
  ,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        TsButtonModule,
        TsCardModule,
        TsExpansionPanelModule,
      ],
    }),
  ],
};

export const basic = () => ({
  template: `
    <ts-expansion-panel
      [isDisabled]="isDisabled"
      (opened)="panelOpened()"
      (closed)="panelClosed()"
      (expandedChange)="panelExpandedChange($event)"
      (destroyed)="destroyed()"
      (afterExpand)="afterExpand()"
      (afterCollapse)="afterCollapse()"
    >
      <ts-expansion-panel-trigger>{{ triggerContent }}</ts-expansion-panel-trigger>
      <p>{{ panelContent }}</p>
    </ts-expansion-panel>
  `,
  props: {
    triggerContent: text('Trigger content', 'Here is my trigger!'),
    panelContent: text('Trigger content', 'And here is my standard panel content.'),
    isDisabled: boolean('isDisabled', false),
    panelOpened: action('Panel opened'),
    panelClosed: action('Panel closed'),
    panelExpandedChange: action('Panel expanded change'),
    afterExpand: action('After expand'),
    afterCollapse: action('After collapse'),
    destroyed: action('Panel destroyed'),
  },
});
basic.parameters = {
  knobs: { disabled: true },
  docs: { iframeHeight: 200 },
};

export const customTriggerSizes = () => ({
  template: `
    <ts-expansion-panel>
      <ts-expansion-panel-trigger
        [collapsedHeight]="collapsedHeight + 'px'"
        [expandedHeight]="expandedHeight + 'px'"
      >Panel Trigger ({{collapsedHeight}}px -> {{expandedHeight}}px)</ts-expansion-panel-trigger>

      <p>And here is my standard panel content.</p>
    </ts-expansion-panel>
  `,
  props: {
    collapsedHeight: number('collapsedHeight', 100),
    expandedHeight: number('expandedHeight', 200),
  },
});
customTriggerSizes.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 320 },
};

export const defaultOpen = () => ({
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
defaultOpen.parameters = {
  knobs: { disabled: true },
  actions: { disabled: true },
  docs: { iframeHeight: 160 },
};

export const lazyLoad = () => ({
  template: `
    <ts-expansion-panel>
      <ts-expansion-panel-trigger>
        My content won't be loaded until I open!
      </ts-expansion-panel-trigger>

      <ng-template tsExpansionPanelContent>
        Here is my deferred template!
      </ng-template>
    </ts-expansion-panel>
  `,
});
lazyLoad.parameters = {
  knobs: { disabled: true },
  actions: { disabled: true },
  docs: { iframeHeight: 160 },
};

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
          A custom trigger description...
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

export const stepperOrWizard = () => ({
  component: AccordionWrapper,
});
stepperOrWizard.parameters = {
  knobs: { disabled: true },
  actions: { disabled: true },
  docs: { iframeHeight: 340 },
};

export const transparent = () => ({
  template: `
    <ts-card>
      <h3 tsCardTitle>This panel is wrapped in a TsCardComponent</h3>
      <ts-expansion-panel [transparentMode]="transparent">
        <ts-expansion-panel-trigger>
          Here is my transparent trigger!
        </ts-expansion-panel-trigger>

        <p>And here is my standard panel content.</p>
      </ts-expansion-panel>
    </ts-card>
  `,
  props: {
    transparent: boolean('transparent', true),
  },
});
transparent.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 200 },
};
