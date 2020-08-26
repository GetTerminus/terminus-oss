import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import { TsButtonModule } from '@terminus/ui-button';
import {
  TsConfirmationModule,
  TsConfirmationOverlayPositionTypes,
} from '@terminus/ui-confirmation';

const MODULE_METADATA = {
  imports: [
    TsButtonModule,
    TsConfirmationModule,
  ],
};

export default {
  title: 'Components/Feedback/Confirmation',
  decorators: [withKnobs],
};

@Component({
  selector: 'ts-confirmation-wrapper',
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
    `,
  ],
  template: `
    <div class="wrapper wrapper--{{ overlayPosition }}">
      <div>
        <ts-button
          tsConfirmation
          [cancelButtonText]="cancelButtonText"
          [confirmationButtonText]="confirmationButtonText"
          [explanationText]="explanationText"
          [isDisabled]="isDisabled"
          [overlayPosition]="overlayPosition"
          [showProgress]="showProgress"
          (cancelled)="cancelled.emit($event)"
          (clicked)="submit()"
        >Click Me!</ts-button>
      </div>
    </div>
  `,
})
class ConfirmationWrapper {
  showProgress = false;
  @Input() public overlayPosition: TsConfirmationOverlayPositionTypes;
  @Input() public cancelButtonText: string;
  @Input() public confirmationButtonText: string;
  @Input() public explanationText: string;
  @Input() public isDisabled: boolean;
  @Output() public readonly cancelled = new EventEmitter<void>();
  @Output() public readonly submitted = new EventEmitter<void>();

  submit() {
    this.showProgress = true;
    this.submitted.emit();
    setTimeout(() => {
      this.showProgress = false;
    }, 2000);
  }
}

export const basic = () => ({
  component: ConfirmationWrapper,
  moduleMetadata: MODULE_METADATA,
  props: {
    isDisabled: boolean('Disabled', false),
    cancelButtonText: text('Cancel button text', 'Cancel'),
    confirmationButtonText: text('Confirm button text', 'Confirm'),
    explanationText: text('Explanation (helper) text', 'Are you sure you want to do the thing you clicked to do?'),
    overlayPosition: select('Overlay position', ['above', 'below', 'before', 'after'], 'below'),
    cancelled: action('Cancelled'),
    submitted: action('Submit success'),
  },
});
// basic.parameters = {
//   actions: { disabled: true },
// };

