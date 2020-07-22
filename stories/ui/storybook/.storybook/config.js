import {configure, addDecorator, addParameters} from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { withPaddings } from "storybook-addon-paddings";

addDecorator(withKnobs);
addDecorator(withPaddings);
addParameters({
  paddings: [
    { name: 'Small', value: '16px' },
    { name: 'Medium', value: '32px', default: true },
    { name: 'Large', value: '64px' },
  ],
});
configure(require.context('../../../../libs/ui/', true, /\.stories\.tsx?$/), module);
