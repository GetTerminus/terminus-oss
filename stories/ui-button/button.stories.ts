import { faPlus } from '@fortawesome/pro-solid-svg-icons';
import { faHome } from '@fortawesome/pro-solid-svg-icons/faHome';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsButtonModule,
  TsButtonComponent,
} from '@terminus/ui-button';

export default {
  title: 'Components/Actions/Button',
  component: TsButtonComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [TsButtonModule],
    }),
  ],
};

export const themesAndSize = () => ({
  template: `
    <style>
    ts-button {
      margin-right: 1em
    }
    </style>
    <div style="margin-bottom: 2rem;">
      <h3>Standard</h3>
      <ts-button
        theme="default"
        (clicked)="onClick($event)"
      >
        <span *ngIf="withIcon" class="fas fa-home"></span>
        My Button
      </ts-button>
      <ts-button
        theme="secondary"
        (clicked)="onClick($event)"
      >
        <span *ngIf="withIcon" class="fas fa-home"></span>
        My Button
      </ts-button>
      <ts-button
        theme="warning"
        (clicked)="onClick($event)"
      >
        <span *ngIf="withIcon" class="fas fa-home"></span>
        My Button
      </ts-button>
      <ts-button
        theme="alternate-primary"
        (clicked)="onClick($event)"
      >
        <span *ngIf="withIcon" class="fas fa-home"></span>
        My Button
      </ts-button>
      <ts-button
        theme="alternate-primary"
        [showProgress]="true"
        (clicked)="onClick($event)"
      >
        <span *ngIf="withIcon" class="fas fa-home"></span>
        My Button
      </ts-button>
    </div>
    <div style="margin-bottom: 2rem;">
      <h3>Standard Disabled</h3>
      <ts-button
        theme="default"
        [isDisabled]="true"
        (clicked)="onClick($event)"
      >
        <span *ngIf="withIcon" class="fas fa-home"></span>
        My Button
      </ts-button>
      <ts-button
        theme="secondary"
        [isDisabled]="true"
        (clicked)="onClick($event)"
      >
        <span *ngIf="withIcon" class="fas fa-home"></span>
        My Button
      </ts-button>
      <ts-button
        theme="warning"
        [isDisabled]="true"
        (clicked)="onClick($event)"
      >
        <span *ngIf="withIcon" class="fas fa-home"></span>
        My Button
      </ts-button>
      <ts-button
        theme="alternate-primary"
        [isDisabled]="true"
        (clicked)="onClick($event)"
      >
        <span *ngIf="withIcon" class="fas fa-home"></span>
        My Button
      </ts-button>
    </div>
    <div style="margin-bottom: 2rem;">
      <h3>Small</h3>
      <ts-button
        theme="default"
        [isSmall]="true"
        (clicked)="onClick($event)"
      >
        <span *ngIf="withIcon" class="fas fa-home"></span>
        My Button
      </ts-button>
      <ts-button
        theme="secondary"
        [isSmall]="true"
        (clicked)="onClick($event)"
      >
        <span *ngIf="withIcon" class="fas fa-home"></span>
        My Button
      </ts-button>
      <ts-button
        theme="warning"
        [isSmall]="true"
        (clicked)="onClick($event)"
      >
        <span *ngIf="withIcon" class="fas fa-home"></span>
        My Button
      </ts-button>
      <ts-button
        theme="alternate-primary"
        [isSmall]="true"
        (clicked)="onClick($event)"
      >
        <span *ngIf="withIcon" class="fas fa-home"></span>
        My Button
      </ts-button>
    </div>
  `,
  props: {
    withIcon: boolean('With Icon', true),
    icon: faHome,
    icon2: faPlus,
    onClick: action('log'),
  },
});
themesAndSize.parameters = {
  docs: { iframeHeight: 340 },
};

