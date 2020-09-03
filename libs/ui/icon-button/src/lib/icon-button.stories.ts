import { APP_INITIALIZER } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAbacus } from '@fortawesome/pro-solid-svg-icons';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  tsButtonActionTypes,
  tsButtonFunctionTypes,
} from '@terminus/ui-button';
import {
  TsIconButtonComponent,
  TsIconButtonModule,
} from '@terminus/ui-icon-button';
import { TsSpacingModule } from '@terminus/ui-spacing';

export default {
  title: 'Components/Actions/Icon Button',
  component: TsIconButtonComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        TsIconButtonModule,
        TsSpacingModule,
      ],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add the necessary icons inside the initializer body.
            iconLibrary.addIcons(faAbacus);
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
  props: {
    actionName: select('Action name', tsButtonActionTypes, 'Button'),
    buttonType: select('Button type', tsButtonFunctionTypes, 'button'),
    icon: faAbacus,
    isDisabled: boolean('Disabled', false),
    clicked: action('Button clicked!'),
  },
});

export const themes = () => ({
  template: `
    <div>
      <h3>Primary</h3>
      <ts-icon-button theme="primary" [icon]="icon" tsVerticalSpacing></ts-icon-button>
    </div>
    <div>
      <h3>Accent</h3>
      <ts-icon-button theme="accent" [icon]="icon" tsVerticalSpacing></ts-icon-button>
    </div>
    <div>
      <h3>Warn</h3>
      <ts-icon-button theme="warn" [icon]="icon"></ts-icon-button>
    </div>
  `,
  props: {
    icon: faAbacus,
  },
});
themes.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

