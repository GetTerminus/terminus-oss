import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsAutofocusDirective,
  TsAutofocusModule,
} from '@terminus/ui-autofocus';

export default {
  title: 'Utilities/Autofocus',
  component: TsAutofocusDirective,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        TsAutofocusModule,
      ],
    }),
  ],
};

export const basic = () => ({
  template: `
    <div>
      Input will be focused by default:
      <br>
      <input type="text" tsAutofocus />
    </div>
  `,
});
basic.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};
