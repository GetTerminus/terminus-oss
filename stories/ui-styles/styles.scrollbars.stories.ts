import { withKnobs } from '@storybook/addon-knobs';

import { ScrollbarsStoryComponent } from './components/scrollbars/scrollbars-story.component';

export default {
  title: 'Utilities/Style Helpers/Scrollbars',
  decorators: [withKnobs],
};

export const visibleScrollbars = () => ({
  component: ScrollbarsStoryComponent,
});
visibleScrollbars.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 3100 },
  knobs: { disabled: true },
};
