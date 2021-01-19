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
  subcomponents: { TsPopoverTriggerDirective },
  decorators: [
    withKnobs,
    moduleMetadata({ imports: [TsPopoverModule] }),
  ],
};

export const basic = () => ({
  template: `
    <div style="min-height:400px;display:flex;align-items:center;justify-content:center;">
      <button
        [tsPopoverTrigger]="popper1"
        [position]="position"
        [popoverTrigger]="popoverTrigger"
        [defaultOpened]="true"
      >{{ popoverTrigger === 'click' ? 'Click' : 'Hover' }} Me!</button>
    </div>

    <ts-popover #popper1>
      <h3>My Title</h3>
      <p style="margin-bottom:0;">Other random content.</p>
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
