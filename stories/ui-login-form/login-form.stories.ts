/* eslint-disable deprecation/deprecation */
import { RouterTestingModule } from '@angular/router/testing';
import { action } from '@storybook/addon-actions';
import {
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsLoginFormComponent,
  TsLoginFormModule,
} from '@terminus/ui-login-form';

export default {
  title: 'Components/Data Entry/Login Form',
  component: TsLoginFormComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        TsLoginFormModule,
        RouterTestingModule,
      ],
    }),
  ],
};

export const basic = () => ({
  component: TsLoginFormComponent,
  props: {
    submission: action('Form submitted!'),
  },
});
basic.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 200 },
};

export const customMessaging = () => ({
  component: TsLoginFormComponent,
  props: {
    loginCTA: text('Login CTA', 'My CTA!'),
    forgotPasswordText: text('Forgot password text', 'Forget something?'),
    forgotPasswordLink: ['my', 'custom', 'link'],
  },
});
customMessaging.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 200 },
};
