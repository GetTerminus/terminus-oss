import {
  Component,
  Input,
} from '@angular/core';
import {
  color,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsChipComponent,
  TsChipModule,
} from '@terminus/ui-chip';
import { TsSpacingModule } from '@terminus/ui-spacing';

export default {
  title: 'Components/Feedback/Badge',
  component: TsChipComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        TsChipModule,
        TsSpacingModule,
      ],
    }),
  ],
};

export const basic = () => ({
  template: `<ts-chip tsChipBadge>My Badge</ts-chip>`,
});
basic.parameters = {
  knobs: { disabled: true },
  actions: { disabled: true },
  docs: { iframeHeight: 60 },
};

@Component({
  selector: 'ts-chip-badge-wrapper',
  template: `<ts-chip tsChipBadge>My Badge</ts-chip>`,
})
class TsChipBadgeWrapper {
  @Input()
  public set color(value: string) {
    this._color = value ? value : 'rebeccapurple';
    document.documentElement.style.setProperty('--ts-chip-badge-backgroundColor', this._color);
  }
  public get color(): string {
    return this._color;
  }
  private _color = 'rebeccapurple';
}

export const customColor = () => ({
  component: TsChipBadgeWrapper,
  props: {
    color: color('--ts-chip-badge-backgroundColor', 'rebeccapurple'),
  },
});
customColor.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 60 },
};
