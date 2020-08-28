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

import {
  TsButtonModule,
  TsButtonComponent,
} from '@terminus/ui-button';
import { TsIconModule } from '@terminus/ui-icon';
import { TsSpacingModule } from '@terminus/ui-spacing';

const MODULE_METADATA = {
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
};

// NOTE: There is an issue with permutations for components using OnPush. Waiting for this issue to be ironed out:
// https://github.com/Ergosign/storybook-addon-pseudo-states/issues/22
// NOTE: Leaving this code in and commented out so that we can quickly test any fixes proposed by the author.
export default {
  title: 'Components/Actions/Button',
  decorators: [withKnobs],
  // decorators: [withPseudo, withKnobs],
  // parameters: {
  //   withPseudo: {
  //     pseudos: [],
  //     attributes: [],
  //     permutations: [],
  //   },
  // },
};

export const themes = () => ({
  component: TsButtonComponent,
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
    <div>
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
    <div>
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
    <div>
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
  moduleMetadata: MODULE_METADATA,
  props: {
    withIcon: boolean('With Icon', true),
    icon: faHome,
    icon2: faPlus,
    onClick: action('log'),
  },
});

// NOTE: As mentioned above, I am leaving this in to facilitate quick testing of possible solutions
// export const themes = () => ({
//   component: TsButtonComponent,
//   template: `
//     <ng-container *ngIf="!withIcon">
//       <ts-button (clicked)="onClick($event)">My Button</ts-button>
//     </ng-container>
//     <ng-container *ngIf="withIcon">
//       <ts-button [icon]="icon" (clicked)="onClick($event)">My Button</ts-button>
//     </ng-container>
// `,
//   moduleMetadata: MODULE_METADATA,
//   props: {
//     withIcon: boolean('With Icon', true),
//     icon: faHome,
//     onClick: action('log'),
//   },
// });
//
// themes.parameters = {
//   withPseudo: {
//     selector: 'button',
//     pseudos: [...PseudoStatesDefault, 'focus & hover'],
//     attributes: [...AttributesStatesDefault, 'showProgress'],
//     permutations: [
//       {
//         label: 'Secondary',
//         attr: 'theme',
//         value: 'secondary',
//       },
//       {
//         label: 'Warning',
//         attr: 'theme',
//         value: 'warning',
//       },
//     ],
//   },
// };
