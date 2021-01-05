import { withKnobs } from '@storybook/addon-knobs';

import { TruncateOverflowStoryComponent } from './components/truncate/truncate-overflow-story.component';

export default {
  title: 'Utilities/Style Helpers/Text',
  decorators: [withKnobs],
};

export const truncate = () => ({
  component: TruncateOverflowStoryComponent,
});
truncate.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};
