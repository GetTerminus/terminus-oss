import { APP_INITIALIZER } from '@angular/core';
import {
  AttributesStatesDefault,
  PseudoStatesDefault,
  withPseudo,
} from '@ergosign/storybook-addon-pseudo-states-angular';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
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

const BUTTON_METADATA = {
  imports: [
    TsButtonModule,
    TsIconModule,
    FontAwesomeModule,
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
// https://github.com/Ergosign/storybook-addon-pseudo-states/issues/19
export default {
  title: 'Components/Button',
  decorators: [withPseudo, withKnobs],
  parameters: {
    withPseudo: {
      pseudos: [],
      attributes: [],
      permutations: [],
    },
  },
};

export const themes = () => ({
  component: TsButtonComponent,
  template: `
    <ng-container *ngIf="!withIcon">
      <ts-button (clicked)="onClick($event)">My Button</ts-button>
    </ng-container>
    <ng-container *ngIf="withIcon">
      <ts-button [icon]="icon" (clicked)="onClick($event)">My Button</ts-button>
    </ng-container>
`,
  moduleMetadata: BUTTON_METADATA,
  props: {
    withIcon: boolean('With Icon', true),
    icon: faHome,
    onClick: action('log'),
  },
});

themes.parameters = {
  withPseudo: {
    selector: 'button',
    pseudos: [...PseudoStatesDefault, 'focus & hover'],
    attributes: [...AttributesStatesDefault, 'showProgress'],
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
