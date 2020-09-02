import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { tsButtonThemes } from '@terminus/ui-button';
import {
  TsPaginatorComponent,
  TsPaginatorModule,
} from '@terminus/ui-paginator';

export default {
  title: 'Components/Navigation/Paginator',
  component: TsPaginatorComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        TsPaginatorModule,
      ],
    }),
  ],
};

export const basic = () => ({
  template: `
    <ts-paginator
      [theme]="theme"
      [totalRecords]="recordCount"
      (previousPageClicked)="previousPage($event)"
      (nextPageClicked)="nextPage($event)"
      (firstPageClicked)="firstPage($event)"
      (lastPageClicked)="lastPage($event)"
      (recordsPerPageChange)="recordsPerPageChange($event)"
    ></ts-paginator>
  `,
  props: {
    recordCount: number('Record count', 47),
    theme: select('Theme', tsButtonThemes, 'secondary'),
    firstPage: action('First page'),
    previousPage: action('Previous page'),
    nextPage: action('Next page'),
    lastPage: action('Last page'),
    recordsPerPageChange: action('Records per-page changed'),
  },
});

export const recordCountMaximum = () => ({
  template: `
    <ts-paginator
      [totalRecords]="recordCount"
      [maxPreferredRecords]="maxPreferredRecords"
      [recordCountTooHighMessage]="recordCountTooHighMessage"
    ></ts-paginator>
  `,
  props: {
    recordCount: number('Record count', 130),
    recordCountTooHighMessage: text(
      'Message when record count is too high',
      `That is a lot of results! Try refining your filters for better results.`,
    ),
    maxPreferredRecords: number('Maximum preferred records', 100),
  },
});
recordCountMaximum.properties = {
  actions: { disabled: true },
};

export const baseZeroOrOne = () => ({
  template: `
    <ts-paginator
      [totalRecords]="recordCount"
      [isZeroBased]="isZeroBased"
    ></ts-paginator>
  `,
  props: {
    recordCount: number('Record count', 82),
    isZeroBased: boolean('Zero based', true),
  },
});
baseZeroOrOne.properties = {
  actions: { disabled: true },
};

export const simpleMode = () => ({
  template: `
    <ts-paginator
      [totalRecords]="recordCount"
      [isSimpleMode]="isSimpleMode"
    ></ts-paginator>
  `,
  props: {
    recordCount: number('Record count', 82),
    isSimpleMode: boolean('Simple mode', true),
  },
});
simpleMode.properties = {
  actions: { disabled: true },
};

export const noRecordsPerPageSelector = () => ({
  template: `
    <ts-paginator
      [totalRecords]="recordCount"
      [showRecordsPerPageSelector]="showRecordsPerPageSelector"
    ></ts-paginator>
  `,
  props: {
    recordCount: number('Record count', 82),
    showRecordsPerPageSelector: boolean('Show the Records Per Page menu', false),
  },
});
noRecordsPerPageSelector.properties = {
  actions: { disabled: true },
};

export const setInitialPage = () => ({
  template: `
    <ts-paginator
      [totalRecords]="recordCount"
      [currentPageIndex]="currentPageIndex"
    ></ts-paginator>
  `,
  props: {
    recordCount: number('Record count', 82),
    currentPageIndex: number('Current page index', 3),
  },
});
setInitialPage.properties = {
  actions: { disabled: true },
};

export const customTooltips = () => ({
  template: `
    <ts-paginator
      [totalRecords]="recordCount"
      [firstPageTooltip]="firstPageTooltip"
      [previousPageTooltip]="previousPageTooltip"
      [nextPageTooltip]="nextPageTooltip"
      [lastPageTooltip]="lastPageTooltip"
    ></ts-paginator>
  `,
  props: {
    recordCount: number('Record count', 82),
    firstPageTooltip: text('First page tooltip', 'My FIRST page tooltip!'),
    nextPageTooltip: text('Next page tooltip', 'My NEXT page tooltip!'),
    previousPageTooltip: text('Previous page tooltip', 'My PREVIOUS page tooltip!'),
    lastPageTooltip: text('Last page tooltip', 'My LAST page tooltip!'),
  },
});
customTooltips.properties = {
  actions: { disabled: true },
};
