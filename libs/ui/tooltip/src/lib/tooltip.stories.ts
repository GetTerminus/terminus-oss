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

import {
  allowedTooltipTypes,
  TsTooltipModule,
  TsTooltipPositionTypes,
} from '@terminus/ui-tooltip';

const MODULE_METADATA = {
  imports: [
    BrowserAnimationsModule,
    TsTooltipModule,
  ],
};

export default {
  title: 'Components/Feedback/Tooltip',
  decorators: [withKnobs],
};

@Component({
  selector: 'ts-tooltip-wrapper',
  styles: [
    `
      :host {
        display: block;
      }
      .wrapper {
        align-items: flex-start;
        display: flex;
        flex-direction: row;
        min-height: 260px;
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
      Show/Hide Tooltip
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
class LoadingOverlayWrapper {
  @Input() public tooltipPosition: TsTooltipPositionTypes;
  @Input() public tooltipValue: string;
  @Input() public hasUnderline: boolean;
  @Input() public showButton: boolean;
  @Input() public showContentBorder: boolean;
  @Input() public triggerContent = 'This content has a tooltip!';
}

export const basic = () => ({
  component: LoadingOverlayWrapper,
  moduleMetadata: MODULE_METADATA,
  props: {
    tooltipPosition: select('Tooltip position', allowedTooltipTypes, 'below'),
    tooltipValue: text('Tooltip value', 'My tooltip content!'),
    showContentBorder: true,
  },
});
basic.parameters = {
  actions: { disabled: true },
};

export const underline = () => ({
  component: LoadingOverlayWrapper,
  moduleMetadata: MODULE_METADATA,
  props: {
    tooltipPosition: 'below',
    tooltipValue: text('Tooltip value', 'My tooltip content!'),
    hasUnderline: true,
    triggerContent: 'This trigger has an underline!',
  },
});
underline.parameters = {
  actions: { disabled: true },
};

// manual control
export const manualControl = () => ({
  component: LoadingOverlayWrapper,
  moduleMetadata: MODULE_METADATA,
  props: {
    tooltipPosition: 'below',
    tooltipValue: text('Tooltip value', 'My tooltip content!'),
    showButton: true,
    showContentBorder: true,
  },
});
underline.parameters = {
  actions: { disabled: true },
};

export const longContent = () => ({
  component: LoadingOverlayWrapper,
  moduleMetadata: MODULE_METADATA,
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
underline.parameters = {
  actions: { disabled: true },
};
