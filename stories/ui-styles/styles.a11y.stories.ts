import { withKnobs } from '@storybook/addon-knobs';

import { VisuallyHiddenStoryComponent } from './components/visually-hidden/visually-hidden-story.component';

export default {
  title: 'Utilities/Style Helpers/A11y',
  decorators: [withKnobs],
};

export const visuallyHidden = () => ({
  component: VisuallyHiddenStoryComponent,
});
visuallyHidden.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};
