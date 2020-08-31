import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { faAbacus } from '@fortawesome/pro-solid-svg-icons';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import {
  tsButtonActionTypes,
  tsButtonFunctionTypes,
} from '@terminus/ui-button';
import {
  TsCopyComponent,
  TsCopyModule,
} from '@terminus/ui-copy';
import {
  TsIconButtonComponent,
  TsIconButtonModule,
} from '@terminus/ui-icon-button';
import { TsSpacingModule } from '@terminus/ui-spacing';

const MODULE_METADATA = {
  imports: [
    TsIconButtonModule,
    TsSpacingModule,
  ],
};

export default {
  title: 'Components/Actions/Icon Button',
  decorators: [withKnobs],
};

export const basic = () => ({
  component: TsIconButtonComponent,
  moduleMetadata: MODULE_METADATA,
  props: {
    actionName: select('Action name', tsButtonActionTypes, 'Button'),
    buttonType: select('Button type', tsButtonFunctionTypes, 'button'),
    icon: faAbacus,
    isDisabled: boolean('Disabled', false),
    clicked: action('Button clicked!'),
  },
});

export const themes = () => ({
  component: TsIconButtonComponent,
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
  moduleMetadata: MODULE_METADATA,
  props: {
    icon: faAbacus,
  },
});
themes.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

