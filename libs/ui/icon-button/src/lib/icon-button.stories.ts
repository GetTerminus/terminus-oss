import {
  APP_INITIALIZER,
  Component,
  Input,
} from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAbacus } from '@fortawesome/pro-solid-svg-icons';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  color,
  select,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  tsButtonActionTypes,
  tsButtonFunctionTypes,
} from '@terminus/ui-button';
import {
  TsIconButtonComponent,
  TsIconButtonModule,
} from '@terminus/ui-icon-button';
import { TsSpacingModule } from '@terminus/ui-spacing';

export default {
  title: 'Components/Actions/Icon Button',
  component: TsIconButtonComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        TsIconButtonModule,
        TsSpacingModule,
      ],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add the necessary icons inside the initializer body.
            iconLibrary.addIcons(faAbacus);
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
};

export const basic = () => ({
  component: TsIconButtonComponent,
  props: {
    actionName: select('Action name', tsButtonActionTypes, 'Button'),
    buttonType: select('Button type', tsButtonFunctionTypes, 'button'),
    icon: faAbacus,
    isDisabled: boolean('Disabled', false),
    clicked: action('Button clicked!'),
  },
});

@Component({
  selector: 'ts-icon-button-wrapper',
  template: `<ts-icon-button [icon]="icon"></ts-icon-button>`,
})
class IconButtonWrapper {
  colorVariable = '--ts-ib-color';
  @Input()
  public isDisabled: boolean;
  @Input()
  public icon: IconProp;
  @Input()
  public set color(value: string) {
    this._color = value ? value : 'pink';
    this.setColor(this._color);
  }
  public get color(): string {
    return this._color;
  }
  private _color = 'pink';

  setColor(colorName: string): void {
    document.documentElement.style.setProperty(this.colorVariable, colorName);
  }
}

export const cssColorOverride = () => ({
  component: IconButtonWrapper,
  props: {
    icon: faAbacus,
    isDisabled: boolean('Disabled', false),
    color: color('Color', 'pink'),
  },
});
