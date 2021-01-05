import { withKnobs } from '@storybook/addon-knobs';

import { ZindexStoryComponent } from './components/zindex/zindex-story.component';

export default {
  title: 'Utilities/Style Helpers/z-index',
  decorators: [withKnobs],
};

export const zIndex = () => ({
  component: ZindexStoryComponent,
});
zIndex.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};
