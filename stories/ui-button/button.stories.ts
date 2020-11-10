import { APP_INITIALIZER } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
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
import { TsIconModule } from '@terminus/ui-icon';
import { TsSpacingModule } from '@terminus/ui-spacing';

export default {
  title: 'Components/Actions/Button',
  component: TsButtonComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        FontAwesomeModule,
        TsButtonModule,
        TsIconModule,
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

export const themes = () => ({
  template: `
    <style>
    ts-button {
      margin-right: 1em
    }
    </style>
    <div>
      <ts-button
        [icon]="withIcon ? icon : undefined"
        theme="default"
        (clicked)="onClick($event)"
      >My Button</ts-button>
      <ts-button
        [icon]="withIcon ? icon : undefined"
        theme="secondary"
        (clicked)="onClick($event)"
      >My Button</ts-button>
      <ts-button
        [icon]="withIcon ? icon : undefined"
        theme="warning"
        (clicked)="onClick($event)"
      >My Button</ts-button>
    </div>
    <div>
      <ts-button
        [icon]="withIcon ? icon : undefined"
        theme="default"
        [isDisabled]="true"
        (clicked)="onClick($event)"
      >My Button</ts-button>
      <ts-button
        [icon]="withIcon ? icon : undefined"
        theme="secondary"
        [isDisabled]="true"
        (clicked)="onClick($event)"
      >My Button</ts-button>
      <ts-button
        [icon]="withIcon ? icon : undefined"
        theme="warning"
        [isDisabled]="true"
        (clicked)="onClick($event)"
      >My Button</ts-button>
    </div>
    <div style="text-align: end">
      <ts-button
        [icon]="icon2"
        theme="default"
        format="collapsible"
        (clicked)="onClick($event)"
      >My Button</ts-button>
      <ts-button
        [icon]="icon2"
        theme="default"
        format="collapsible"
        [isDisabled]="true"
        (clicked)="onClick($event)"
      >My Button</ts-button>
    </div>
    <div style="text-align: end">
      <ts-button
        [icon]="icon2"
        theme="secondary"
        format="collapsible"
        (clicked)="onClick($event)"
      >My Button</ts-button>
      <ts-button
        [icon]="icon2"
        theme="secondary"
        format="collapsible"
        [isDisabled]="true"
        (clicked)="onClick($event)"
      >My Button</ts-button>
    </div>
    <div style="text-align: end">
      <ts-button
        [icon]="icon2"
        theme="warning"
        format="collapsible"
        (clicked)="onClick($event)"
      >My Button</ts-button>
      <ts-button
        [icon]="icon2"
        theme="warning"
        format="collapsible"
        [isDisabled]="true"
        (clicked)="onClick($event)"
      >My Button</ts-button>
    </div>
  `,
  props: {
    withIcon: boolean('With Icon', true),
    icon: faHome,
    icon2: faPlus,
    onClick: action('log'),
  },
});
themes.parameters = {
  docs: { iframeHeight: 260 },
};
