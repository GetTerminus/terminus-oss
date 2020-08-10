import '../../../../.storybook/config';
import { configure } from '@storybook/angular';

configure(require.context('../src/lib', true, /\.stories\.(j|t)sx?$/), module);
