/* eslint-disable @angular-eslint/prefer-on-push-component-change-detection */
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  withKnobs,
} from '@storybook/addon-knobs';

import {
  TsCSVEntryComponent,
  TsCSVEntryModule,
} from '@terminus/ui-csv-entry';

export default {
  title: 'TsCSVEntryComponent',
  decorators: [withKnobs],
};

const MODULE_IMPORTS = [
  TsCSVEntryModule,
];

export const basic = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: TsCSVEntryComponent,
  props: {
    blobGenerated: action('Generated file blob'),
  },
});

export const customRowAndColumnCount = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: TsCSVEntryComponent,
  props: {
    columnCount: 4,
    rowCount: 6,
  },
});

export const staticHeaders = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: TsCSVEntryComponent,
  props: {
    columnHeaders: ['Header One', 'Header Two'],
  },
});

export const fullWidth = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: TsCSVEntryComponent,
  props: {
    columnCount: 1,
    fullWidth: true,
  },
});

export const customFooterContent = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: TsCSVEntryComponent,
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
