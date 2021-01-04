import { withKnobs } from '@storybook/addon-knobs';

import { FlexStoryComponent } from './components/flex/flex-story.component';
import { GridStoryComponent } from './components/grid/grid-story.component';

export default {
  title: 'Utilities/Style Helpers/Layout',
  decorators: [
    withKnobs,
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

export const grid = () => ({
  component: GridStoryComponent,
});
grid.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 3100 },
  knobs: { disabled: true },
};
