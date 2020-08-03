
import {
  select,
  withKnobs,
} from '@storybook/addon-knobs';

import {
  TsPopoverModule,
  TsPopoverComponent,
} from '@terminus/ui-popover';

export default {
  title: 'TsPopoverComponent',
  decorators: [withKnobs],
};

export const hoverTriggerWithPosition = () => ({
  moduleMetadata: { imports: [TsPopoverModule] },
  component: TsPopoverComponent,
  template: `
    <div>
      <button
        tsPopoverTrigger="popper2"
        [popover]="popper2"
        [position]="position"
        popoverTrigger="hover"
        style="margin: 200px 250px;"
      >Hover over!</button>
    </div>

    <ts-popover #popper2>
      <h1>My Title</h1>
      <p>Other random content.</p>
    </ts-popover>
  `,
  props: {
    position: select('position', ['top', 'bottom', 'left', 'right'], 'right'),
  },
});

export const clickTriggerWithPosition = () => ({
  moduleMetadata: { imports: [TsPopoverModule] },
  component: TsPopoverComponent,
  template: `
    <div>
      <button
        tsPopoverTrigger="popper1"
        [position]="position"
        [popover]="popper1"
        style="margin: 200px 250px;"
      >Click me!</button>
    </div>

    <ts-popover #popper1>
      <h1>My Title</h1>
      <p>Other random content.</p>
    </ts-popover>
  `,
  props: {
    position: select('position', ['top', 'bottom', 'left', 'right'], 'right'),
  },
});
