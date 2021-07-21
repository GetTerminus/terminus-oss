import { RouterTestingModule } from '@angular/router/testing';
import {
  boolean,
  date,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsButtonModule } from '@terminus/ui-button';

import { TsPageHeaderModule } from '../../libs/ui/page-header/src/lib/page-header.module';
import {
  TS_PAGE_HEADER_ROUTE,
  TS_PAGE_HEADER_ROUTES,
  TS_PAGE_HEADER_METADATA,
  TsPageHeaderComponent,
} from '../../libs/ui/page-header/src/lib/page-header/page-header.component';

const myBreadcrumbs: TS_PAGE_HEADER_ROUTES = [
  {
    display: 'Top level with no link',
  },
  {
    display: 'Reports',
    route: '/reports',
  },
];
const myPages: TS_PAGE_HEADER_ROUTE[] = [
  {
    display: 'Report 1',
    route: '/reports/1',
  },
  {
    display: 'Report 2',
    route: '/reports/2',
  },
];
const DATE = new Date(2020, 8, 12);
const myMetadata: TS_PAGE_HEADER_METADATA[] = [
  {
    key: 'Account',
    value: 'Blaze',
    url: '/account/blaze',
  },
  {
    key: 'Created Date',
    value: 'May 2, 2021',
  },
];

export default {
  title: 'Components/Structure/Page Header',
  component: TsPageHeaderComponent,
  subcomponents: {
  },
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        RouterTestingModule,
        TsButtonModule,
        TsPageHeaderModule,
      ],
    }),
  ],
  declareComponent: false,
};

export const basic = () => ({
  template: `
    <ts-page-header
      [breadcrumbs]="breadcrumbs"
      [lastUpdatedDate]="lastUpdatedDate"
      [title]="title"
      [titleLevel]="titleLevel"
      [pageMenuContents]="showDropdown ? menuPages : undefined"
      [metadata]="metadata"
    >
      <ts-button>Primary</ts-button>
      <ts-button theme="secondary">Secondary</ts-button>
    </ts-page-header>
  `,
  props: {
    breadcrumbs: myBreadcrumbs,
    lastUpdatedDate: date('Last update', DATE),
    title: text('Page title', 'My page title'),
    titleLevel: select('Title level', ['h1', 'h2', 'h3'], 'h1'),
    showDropdown: boolean('Enable title menu', false),
    menuPages: myPages,
    metadata: myMetadata,
  },
});
basic.properties = {
  actions: { disabled: true },
};

export const defaultOpenMenu = () => ({
  template: `
    <ts-page-header
      [breadcrumbs]="breadcrumbs"
      [lastUpdatedDate]="lastUpdatedDate"
      [title]="title"
      [pageMenuContents]="menuPages"
      [isPanelOpen]="true"
    >
      <ts-button>Primary</ts-button>
      <ts-button theme="secondary">Secondary</ts-button>
    </ts-page-header>
  `,
  props: {
    breadcrumbs: myBreadcrumbs,
    lastUpdatedDate: DATE,
    title: 'My page title',
    menuPages: myPages,
  },
});
defaultOpenMenu.properties = {
  actions: { disabled: true },
  knobs: { disabled: true },
  chromatic: { delay: 300 },
  docs: { iframeHeight: 200 },
};

export const metaDataItems = () => ({
  template: `
    <ts-page-header
      [breadcrumbs]="breadcrumbs"
      [lastUpdatedDate]="lastUpdatedDate"
      [title]="title"
      [metadata]="metadata"
    >
      <ts-button>Primary</ts-button>
      <ts-button theme="secondary">Secondary</ts-button>
    </ts-page-header>
  `,
  props: {
    breadcrumbs: myBreadcrumbs,
    lastUpdatedDate: DATE,
    title: 'My page title',
    metadata: myMetadata,
  },
});
metaDataItems.properties = {
  actions: { disabled: true },
  knobs: { disabled: true },
  chromatic: { delay: 300 },
  docs: { iframeHeight: 200 },
};
