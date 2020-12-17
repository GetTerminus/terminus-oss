import {
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { FlexStoryComponent } from './components/flex/flex-story.component';

export default {
  title: 'Utilities/Style Helpers/Layout',
  decorators: [
    withKnobs,
    moduleMetadata(),
  ],
};

export const flexbox = () => ({
  component: FlexStoryComponent,
});
flexbox.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 3100 },
  knobs: { disabled: true },
};
