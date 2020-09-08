import {
  Component,
  Input,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  allowedTooltipTypes,
  TsTooltipComponent,
  TsTooltipModule,
  TsTooltipPositionTypes,
} from '@terminus/ui-tooltip';

export default {
  title: 'Components/Feedback/Tooltip',
  component: TsTooltipComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        TsTooltipModule,
      ],
    }),
  ],
};

@Component({
  selector: 'ts-tooltip-wrapper',
  styles: [
    `
      :host {
        display: block;
        height: 200px;
      }
      .wrapper {
        align-items: flex-start;
        display: flex;
        flex-direction: row;
        min-height: 200px;
        justify-content: center;
      }
      .wrapper--before {
        align-items: center;
        justify-content: flex-end;
      }
      .wrapper--after {
        align-items: center;
        justify-content: flex-start;
      }
      .wrapper--above {
        align-items: flex-end;
      }
      .content {
        border-radius: 3px;
        border: 1px solid rebeccapurple;
        padding: 1em 2em;
      }
    `,
  ],
  template: `
    <button *ngIf="showButton" (click)="tooltip.toggleTooltip()">
      {{ tooltip.isVisible ? 'Hide' : 'Show' }}
      Tooltip
    </button>

    <div class="wrapper wrapper--{{ tooltipPosition }}">
      <ts-tooltip
        [tooltipPosition]="tooltipPosition"
        [tooltipValue]="tooltipValue"
        [hasUnderline]="hasUnderline"
        #tooltip="tsTooltipComponent"
      >
        <div [class.content]="showContentBorder">
          {{ triggerContent }}
        </div>
      </ts-tooltip>
    </div>
  `,
})
class TooltipWrapper {
  @Input() public tooltipPosition: TsTooltipPositionTypes;
  @Input() public tooltipValue: string;
  @Input() public hasUnderline: boolean;
  @Input() public showButton: boolean;
  @Input() public showContentBorder: boolean;
  @Input() public triggerContent = 'This content has a tooltip!';
}

export const basic = () => ({
  component: TooltipWrapper,
  props: {
    showContentBorder: true,
    tooltipPosition: select('Tooltip position', allowedTooltipTypes, 'below'),
    tooltipValue: text('Tooltip value', 'My tooltip content!'),
  },
});
basic.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 200 },
};

export const underline = () => ({
  component: TooltipWrapper,
  props: {
    tooltipPosition: 'below',
    hasUnderline: true,
    triggerContent: 'This trigger has an underline!',
    tooltipValue: text('Tooltip value', 'My tooltip content!'),
  },
});
underline.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 200 },
};

// manual control
export const manualControl = () => ({
  component: TooltipWrapper,
  props: {
    tooltipPosition: 'below',
    showButton: true,
    showContentBorder: true,
    tooltipValue: text('Tooltip value', 'My tooltip content!'),
  },
});
manualControl.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 200 },
};

export const longContent = () => ({
  component: TooltipWrapper,
  props: {
    tooltipPosition: 'below',
    tooltipValue: `
      Quas consequuntur deserunt. Dolorum consequuntur eius dolore velit aspernatur. Soluta dolorum fugit explicabo itaque. Eaque ad cumque
      aliquam pariatur harum. Sit iste nemo maxime. Aspernatur dicta similique cupiditate dolor. Ipsum consectetur quasi. Deserunt iure
      quisquam est. Sint unde corporis quae veniam error ex.
    `,
    showContentBorder: true,
  },
});
longContent.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 300 },
};
