import { APP_INITIALIZER } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faBomb,
  faCircleNotch,
  faSpinner,
} from '@fortawesome/pro-solid-svg-icons';
import { faHome } from '@fortawesome/pro-solid-svg-icons/faHome';
import {
  object,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsIconComponent,
  TsIconModule,
  tsIconSizes,
} from '@terminus/ui-icon';

// NOTE: There is an issue with permutations for components using OnPush. Waiting for this issue to be ironed out:
// https://github.com/Ergosign/storybook-addon-pseudo-states/issues/19
export default {
  title: 'Components/Media/Icon',
  component: TsIconComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        TsIconModule,
        FontAwesomeModule,
      ],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add the necessary icons inside the initializer body.
            iconLibrary.addIcons(faHome);
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
  template: `
    <style>
      dl {
        columns: 2 auto;
      }
      div {
        break-inside: avoid-column;
        margin-bottom: 2em;
      }
    </style>
    <dl>
      <div>
        <dt>Basic icon</dt>
        <dd><ts-icon [icon]="icon1"></ts-icon></dd>
      </div>
      <div>
        <dt>Custom styles and classes</dt>
        <dd><ts-icon [icon]="icon1" [classes]="'foo bar'" [styles]="styles"></ts-icon></dd>
      </div>
      <div>
        <dt>Size</dt>
        <dd><ts-icon [icon]="icon1" [size]="size"></ts-icon></dd>
      </div>
      <div>
        <dt>Transform (string)</dt>
        <dd><ts-icon [icon]="icon1" [transform]="transformString"></ts-icon></dd>
      </div>
      <div>
        <dt>Transform (object)</dt>
        <dd><ts-icon [icon]="icon1" [transform]="transformObject"></ts-icon></dd>
      </div>
      <div>
        <dt>Fixed width</dt>
        <dd><ts-icon [icon]="icon1" [fixedWidth]="true"></ts-icon></dd>
      </div>
      <div>
        <dt>Border</dt>
        <dd><ts-icon [icon]="icon1" [border]="true"></ts-icon></dd>
      </div>
      <div>
        <dt>Pull</dt>
        <dd><ts-icon [icon]="icon1" [pull]="pull"></ts-icon></dd>
      </div>
      <div>
        <dt>Flip</dt>
        <dd><ts-icon [icon]="icon1" [flip]="flip"></ts-icon></dd>
      </div>
      <div>
        <dt>Pulse</dt>
        <dd><ts-icon [icon]="icon2" [pulse]="true"></ts-icon></dd>
      </div>
      <div>
        <dt>Spin</dt>
        <dd><ts-icon [icon]="icon3" [spin]="true"></ts-icon></dd>
      </div>
    </dl>
  `,
  props: {
    icon1: faBomb,
    icon2: faSpinner,
    icon3: faCircleNotch,
    size: select('Size', tsIconSizes, '2x'),
    transformString: text('Transform (string)', 'shrink-2 right-6 rotate-30'),
    transformObject: object('Transform (object)', {
      size: 40,
      x: 4,
      y: 6,
      rotate: 45,
      flipX: true,
      flipY: false,
    }),
    styles: object('Styles', { color: '#B20' }),
    pull: select('Pull', ['left', 'right'], 'right'),
    flip: select('Flip', ['horizontal', 'vertical', 'both'], 'vertical'),
  },
});

