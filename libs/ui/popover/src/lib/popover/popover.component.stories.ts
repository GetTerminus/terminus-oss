
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

export const popoverComponent = () => ({
  moduleMetadata: { imports: [TsPopoverModule] },
  component: TsPopoverComponent,
  template: `
    <div>
      <button
        tsPopoverTrigger="popper1"
        [position]="position"
        [popoverTrigger]="popoverTrigger"
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
    popoverTrigger: select('popoverTrigger', ['click', 'hover'], 'click'),
  },
});
