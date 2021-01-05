import { withKnobs } from '@storybook/addon-knobs';

import { ScrollbarsStoryComponent } from './components/scrollbars/scrollbars-story.component';

export default {
  title: 'Utilities/Style Helpers/Scrollbars',
  decorators: [withKnobs],
};

export const scrollbars = () => ({
  component: ScrollbarsStoryComponent,
});
scrollbars.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 3100 },
  knobs: { disabled: true },
};
