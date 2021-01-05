import { withKnobs } from '@storybook/addon-knobs';

import { PlaceholderStoryComponent } from './components/placeholder/placeholder-story.component';

export default {
  title: 'Utilities/Style Helpers/Controls',
  decorators: [withKnobs],
};

export const placeholder = () => ({
  component: PlaceholderStoryComponent,
});
placeholder.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};
