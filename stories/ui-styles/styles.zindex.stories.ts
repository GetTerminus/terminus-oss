import { withKnobs } from '@storybook/addon-knobs';

import { ZindexStoryComponent } from './components/zindex/zindex-story.component';

export default {
  title: 'Utilities/Style Helpers/Layout',
  decorators: [withKnobs],
};

export const zindex = () => ({
  component: ZindexStoryComponent,
});
zindex.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};
