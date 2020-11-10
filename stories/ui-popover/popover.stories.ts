import {
  select,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsPopoverModule,
  TsPopoverComponent,
  TsPopoverTriggerDirective,
} from '@terminus/ui-popover';

export default {
  title: 'Components/Structure/Popover',
  component: TsPopoverComponent,
  subcomponents: {
    TsPopoverTriggerDirective,
  },
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [TsPopoverModule],
    }),
  ],
};

export const basic = () => ({
  template: `
    <div>
      <button
        tsPopoverTrigger="popper1"
        [position]="position"
        [popoverTrigger]="popoverTrigger"
        [popover]="popper1"
        style="margin: 200px 250px;"
      >{{ popoverTrigger === 'click' ? 'Click' : 'Hover' }} Me!</button>
    </div>

    <ts-popover #popper1>
      <h1>My Title</h1>
      <p>Other random content.</p>
    </ts-popover>
  `,
  props: {
    position: select('position', ['top', 'bottom', 'left', 'right'], 'top'),
    popoverTrigger: select('popoverTrigger', ['click', 'hover'], 'click'),
  },
});
basic.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 400 },
};
