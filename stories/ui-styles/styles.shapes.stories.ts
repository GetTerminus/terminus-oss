import { withKnobs } from '@storybook/addon-knobs';

import { ShapesStoryComponent } from './components/shapes/shapes-story.component';

export default {
  title: 'Utilities/Style Helpers/Shapes',
  decorators: [
    withKnobs,
  ],
};

export const triangle = () => ({
  component: ShapesStoryComponent,
});
triangle.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 3100 },
  knobs: { disabled: true },
};
