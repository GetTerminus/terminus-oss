import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsCopyComponent,
  TsCopyModule,
} from '@terminus/ui-copy';
import { TsSpacingModule } from '@terminus/ui-spacing';

const URL_STANDARD = 'https://github.com/foo/bar/baz/bing/bang/boom/';
const URL_LONG = 'https://github.com/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom';

export default {
  title: 'Components/Actions/Copy',
  component: TsCopyComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        TsCopyModule,
        TsSpacingModule,
      ],
    }),
  ],
};

export const basic = () => ({
  template: `<ts-copy (copied)="didCopy($event)">{{ content }}</ts-copy>`,
  props: {
    content: text('Text to copy', URL_STANDARD),
    didCopy: action('Text copied'),
  },
});
basic.parameters = {
  docs: { iframeHeight: 180 },
};

export const format = () => ({
  template: `
    <h3>Standard</h3>
    <ts-copy format="standard" tsVerticalSpacing="large--1">{{ content }}</ts-copy>
    <h3>Minimal</h3>
    <ts-copy format="minimal" tsVerticalSpacing="large--1">{{ content }}</ts-copy>
    <h3>Icon</h3>
    <ts-copy format="icon">{{ content }}</ts-copy>
  `,
  props: {
    content: text('Text to copy', URL_LONG),
  },
});
format.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 400 },
};
