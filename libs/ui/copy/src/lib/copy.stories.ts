import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import {
  TsCopyComponent,
  TsCopyModule,
} from '@terminus/ui-copy';
import { TsSpacingModule } from '@terminus/ui-spacing';

const MODULE_METADATA = {
  imports: [
    BrowserAnimationsModule,
    TsCopyModule,
    TsSpacingModule,
  ],
};

const URL_STANDARD = 'https://github.com/foo/bar/baz/bing/bang/boom/';
const URL_LONG = 'https://github.com/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom';

export default {
  title: 'Components/Actions/Copy',
  decorators: [withKnobs],
};

export const basic = () => ({
  component: TsCopyComponent,
  template: `<ts-copy>{{ content }}</ts-copy>`,
  moduleMetadata: MODULE_METADATA,
  props: {
    content: text('Text to copy', URL_STANDARD),
  },
});
basic.parameters = {
  actions: { disabled: true },
};

// themes
export const themes = () => ({
  component: TsCopyComponent,
  template: `
    <ts-copy theme="primary" tsVerticalSpacing>{{ content }}</ts-copy>
    <ts-copy theme="accent" tsVerticalSpacing>{{ content }}</ts-copy>
    <ts-copy theme="warn">{{ content }}</ts-copy>
  `,
  moduleMetadata: MODULE_METADATA,
  props: {
    content: text('Text to copy', URL_LONG),
  },
});
themes.parameters = {
  actions: { disabled: true },
};

// format
export const format = () => ({
  component: TsCopyComponent,
  template: `
    <h3>Standard</h3>
    <ts-copy format="standard" tsVerticalSpacing="large--1">{{ content }}</ts-copy>
    <h3>Minimal</h3>
    <ts-copy format="minimal" tsVerticalSpacing="large--1">{{ content }}</ts-copy>
    <h3>Icon</h3>
    <ts-copy format="icon">{{ content }}</ts-copy>
  `,
  moduleMetadata: MODULE_METADATA,
  props: {
    content: text('Text to copy', URL_LONG),
  },
});
format.parameters = {
  actions: { disabled: true },
};
