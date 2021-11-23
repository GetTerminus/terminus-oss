import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsExpansionPanelModule } from '../../libs/ui/expansion-panel/src';
import { TsWizardStepWrapperModule } from '../../libs/ui/wizard-step-wrapper/src';
import { TsWizardStepWrapperComponent } from '../../libs/ui/wizard-step-wrapper/src/lib/wizard-step-wrapper/wizard-step-wrapper.component';

export default {
  title: 'Components/Structure/Wizard Step Wrapper',
  component: TsWizardStepWrapperComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        TsExpansionPanelModule,
        TsWizardStepWrapperModule,
      ],
    }),
  ],
};

export const basic = () => ({
  template: `
    <ts-wizard-step-wrapper
      [stepHeader]="stepHeader"
      (expandedToggled)="onExpansionToggle($event)">
      <div>
        <span>Step Content</span>
      </div>
    </ts-wizard-step-wrapper>

    <ng-template #stepHeader>
        <span>Basic Step</span>
    </ng-template>
  `,
  props: {
    onExpansionToggle: action('Expanded changed'),
  },
});
basic.parameters = {
  docs: { iframeHeight: 300 },
};

export const stepWithFooter = () => ({
  template: `
    <ts-wizard-step-wrapper
      [stepHeader]="stepHeader"
      [stepFooter]="stepFooter"
      (expandedToggled)="onExpansionToggle($event)">
      <div>
        <span>Step Content</span>
      </div>
    </ts-wizard-step-wrapper>

    <ng-template #stepHeader>
        <span>Step With Footer</span>
    </ng-template>
    <ng-template #stepFooter>
        <span>Footer Content</span>
    </ng-template>
  `,
  props: {
    onExpansionToggle: action('Expanded changed'),
  },
});
stepWithFooter.parameters = {
  docs: { iframeHeight: 300 },
};

export const stepWithHeaderAdditions = () => ({
  template: `
    <ts-wizard-step-wrapper
      [stepHeader]="stepHeader"
      [stepFooter]="stepFooter"
      [stepHeaderAdditions]="headerAdditions"
      (expandedToggled)="onExpansionToggle($event)">
      <div>
        <span>Step Content</span>
      </div>
    </ts-wizard-step-wrapper>

    <ng-template #stepHeader>
        <span>Step With Header Additions</span>
    </ng-template>
    <ng-template #headerAdditions>
        <span>Additions</span>
    </ng-template>
    <ng-template #stepFooter>
        <span>Footer Content</span>
    </ng-template>
  `,
  props: {
    onExpansionToggle: action('Expanded changed'),
  },
});
stepWithHeaderAdditions.parameters = {
  docs: { iframeHeight: 300 },
};

export const expandedStep = () => ({
  template: `
    <ts-wizard-step-wrapper
      [stepHeader]="stepHeader"
      [stepFooter]="stepFooter"
      [isExpanded]="isExpanded"
      (expandedToggled)="onExpansionToggle($event)">
      <div>
        <span>Step Content</span>
      </div>
    </ts-wizard-step-wrapper>

    <ng-template #stepHeader>
        <span>Expanded By Default Step</span>
    </ng-template>
    <ng-template #headerAdditions>
        <span>Header Additions</span>
    </ng-template>
    <ng-template #stepFooter>
            <span>Footer Content</span>
    </ng-template>
  `,
  props: {
    isExpanded: boolean('isExpanded', true),
    onExpansionToggle: action('Expanded changed'),
  },
});
expandedStep.parameters = {
  docs: { iframeHeight: 300 },
};

export const disabledStep = () => ({
  template: `
    <ts-wizard-step-wrapper
      [stepHeader]="stepHeader"
      [isDisabled]="isDisabled"
      (expandedToggled)="onExpansionToggle($event)">
      <div>
        <span>Step Content</span>
      </div>
    </ts-wizard-step-wrapper>

    <ng-template #stepHeader>
        <span>Disabled Step</span>
    </ng-template>
  `,
  props: {
    isDisabled: boolean('isExpanded', true),
    onExpansionToggle: action('Expanded changed'),
  },
});
disabledStep.parameters = {
  docs: { iframeHeight: 200 },
};
