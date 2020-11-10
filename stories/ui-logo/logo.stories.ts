import { FlexLayoutModule } from '@angular/flex-layout';
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
        FlexLayoutModule,
        TsLogoModule,
      ],
    }),
  ],
};

export const basic = () => ({
  component: TsLogoComponent,
  template: `<ts-logo></ts-logo>`,
});
basic.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 200 },
};

export const fullAccountHubLogo = () => ({
  component: TsLogoComponent,
  props: {
    type: 'full-account-hub',
  },
});
fullAccountHubLogo.parameters = {
  docs: { iframeHeight: 200 },
};

export const fullSolidLogo = () => ({
  component: TsLogoComponent,
  props: {
    type: 'full-solid',
  },
});
fullSolidLogo.parameters = {
  docs: { iframeHeight: 300 },
};

export const fullSolidLogoBlack = () => ({
  component: TsLogoComponent,
  props: {
    type: 'full-solid',
    logoColor: 'black',
  },
});
fullSolidLogoBlack.parameters = {
  docs: { iframeHeight: 400 },
};

export const marks = () => ({
  component: TsLogoComponent,
  template: `
    <style>
      ts-logo {
        display: block;
      }
    </style>
    <div fxLayout="row" fxLayoutGap="16px">
      <div fxFlex>
        Gradient:
        <ts-logo type="mark-gradient"></ts-logo>
      </div>
      <div fxFlex>
        Solid:
        <ts-logo type="mark-solid"></ts-logo>
      </div>
      <div fxFlex>
        Solid & Gray:
        <ts-logo type="mark-solid" logoColor="gray"></ts-logo>
      </div>
      <div fxFlex>
        Solid & Black:
        <ts-logo type="mark-solid" logoColor="black"></ts-logo>
      </div>
    </div>
  `,
});
marks.parameters = {
  docs: { iframeHeight: 400 },
};
