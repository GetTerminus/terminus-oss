import {
  addDecorator,
  addParameters,
} from '@storybook/angular';
import { withPaddings } from 'storybook-addon-paddings';

addDecorator(withPaddings);

addParameters({
  paddings: [
    { name: 'Small', value: '16px' },
    { name: 'Medium', value: '32px', default: true },
    { name: 'Large', value: '64px' },
  ],
});
