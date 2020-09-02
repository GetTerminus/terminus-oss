import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsLogoComponent,
  TsLogoModule,
} from '@terminus/ui-logo';

export default {
  title: 'Components/Media/Logo',
  component: TsLogoComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        TsLogoModule,
      ],
    }),
  ],
};

export const basic = () => ({
  template: `
    <style>
    dt:after {
      content: ":"
    }
    div {
      margin-bottom: 2rem;
    }
    .small {
      max-width: 30%;
    }
    </style>
    <dl>
      <div>
        <dt>Full gradient logo (default)</dt>
        <dd><ts-logo></ts-logo></dd>
      </div>
      <div>
        <dt>Full Account Hub logo</dt>
        <dd><ts-logo type="full-account-hub"></ts-logo></dd>
      </div>
      <div>
        <dt>Full solid logo</dt>
        <dd><ts-logo type="full-solid"></ts-logo></dd>
      </div>
      <div>
        <dt>Full Solid Logo (black)</dt>
        <dd><ts-logo type="full-solid" logoColor="black"></ts-logo></dd>
      </div>
      <div class="small">
        <dt>Mark (gradient)</dt>
        <dd><ts-logo type="mark-gradient"></ts-logo></dd>
      </div>
      <div class="small">
        <dt>Mark (solid)</dt>
        <dd><ts-logo type="mark-solid"></ts-logo></dd>
      </div>
      <div class="small">
        <dt>Mark (gray)</dt>
        <dd><ts-logo type="mark-solid" logoColor="gray"></ts-logo></dd>
      </div>
    </dl>
  `,
});
basic.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};
