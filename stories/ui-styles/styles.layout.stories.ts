import { withKnobs } from '@storybook/addon-knobs';

import { FlexStoryComponent } from './components/flex/flex-story.component';
import { GridStoryComponent } from './components/grid/grid-story.component';
import { ResponsiveRatioStoryComponent } from './components/responsive-ratio/responsive-ratio-story.component';
import { SpacingStoryComponent } from './components/spacing/spacing-story.component';
import { TakeSpaceStoryComponent } from './components/take-space/take-space-story.component';

export default {
  title: 'Utilities/Style Helpers/Layout',
  decorators: [withKnobs],
};

export const flexbox = () => ({ component: FlexStoryComponent });
flexbox.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 3100 },
  knobs: { disabled: true },
};

export const grid = () => ({ component: GridStoryComponent });
grid.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 3100 },
  knobs: { disabled: true },
};

export const responsiveRatio = () => ({ component: ResponsiveRatioStoryComponent });
responsiveRatio.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 2000 },
  knobs: { disabled: true },
};

export const takeSpace = () => ({ component: TakeSpaceStoryComponent });
takeSpace.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 2000 },
  knobs: { disabled: true },
};

export const spacing = () => ({ component: SpacingStoryComponent });
spacing.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 1600 },
  knobs: { disabled: true },
};
