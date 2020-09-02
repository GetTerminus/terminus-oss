/* eslint-disable @angular-eslint/prefer-on-push-component-change-detection */
import { action } from '@storybook/addon-actions';
import {
  select,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsCSVEntryComponent,
  TsCSVEntryModule,
} from '@terminus/ui-csv-entry';

export default {
  title: 'Components/Data Entry/CSV Entry',
  component: TsCSVEntryComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [TsCSVEntryModule],
    }),
  ],
};

export const basic = () => ({
  props: {
    blobGenerated: action('Generated file blob'),
  },
});
basic.parameters = {
  knobs: { disabled: true },
};

export const customFooterContent = () => ({
  template: `
    <ts-csv-entry [columnCount]="cols" [footerDirection]="dir">
      <button>My custom footer button!</button>
    </ts-csv-entry>
  `,
  props: {
    cols: 3,
    dir: select('footerDirection', ['ltr', 'rtl'], 'ltr'),
  },
});
customFooterContent.parameters = {
  actions: { disabled: true },
};

export const customRowAndColumnCount = () => ({
  props: {
    columnCount: 4,
    rowCount: 6,
  },
});
customRowAndColumnCount.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const fullWidth = () => ({
  props: {
    columnCount: 1,
    fullWidth: true,
  },
});
fullWidth.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const staticHeaders = () => ({
  props: {
    columnHeaders: ['Header One', 'Header Two'],
  },
});
staticHeaders.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};
