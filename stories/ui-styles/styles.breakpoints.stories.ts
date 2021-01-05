import { withKnobs } from '@storybook/addon-knobs';

import { BreakpointsStoryComponent } from './components/breakpoints/breakpoints-story.component';

export default {
  title: 'Utilities/Style Helpers',
  decorators: [
    withKnobs,
  ],
  parameters: {
    chromatic: {
      viewports: [
        550,
        650,
        1000,
        1300,
        1800,
      ],
    },
  },
};

export const breakpoints = () => ({
  component: BreakpointsStoryComponent,
});
breakpoints.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 3100 },
  knobs: { disabled: true },
};
