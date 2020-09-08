import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faExternalLink,
  faGripLines,
  faTable,
} from '@fortawesome/pro-solid-svg-icons';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsCheckboxModule } from '@terminus/ui-checkbox';
import { TsExpansionPanelModule } from '@terminus/ui-expansion-panel';
import { TsIconModule } from '@terminus/ui-icon';
import { TsMenuModule } from '@terminus/ui-menu';
import { TsPipesModule } from '@terminus/ui-pipes';
import {
  TsSortDirective,
  TsSortModule,
} from '@terminus/ui-sort';
import { TsSpacingModule } from '@terminus/ui-spacing';
import {
  TsCellDirective,
  TsColumnDefDirective,
  TsFooterCellDirective,
  TsFooterRowComponent,
  TsHeaderCellDirective,
  TsHeaderRowComponent,
  TsRowComponent,
  TsTableComponent,
  TsTableModule,
} from '@terminus/ui-table';

import {
  CustomColumn,
  TableWrapper,
} from './table.component';

const COLUMNS_SOURCE: CustomColumn[] = [
  {
    display: 'Title',
    name: 'title',
    width: 300,
    control: new FormControl(true),
  },
  {
    display: 'Comments',
    name: 'comments',
    width: 140,
    control: new FormControl(false),
  },
  {
    display: 'Number',
    name: 'number',
    width: 160,
    control: new FormControl(true),
  },
  {
    display: 'Updated',
    name: 'updated',
    width: 160,
    control: new FormControl(true),
  },
  {
    display: 'State',
    name: 'state',
    width: 140,
    control: new FormControl(false),
  },
  {
    display: 'Labels',
    name: 'labels',
    width: 260,
    control: new FormControl(true),
  },
  {
    display: 'Assignee',
    name: 'assignee',
    width: 200,
    control: new FormControl(false),
  },
  {
    display: 'ID',
    name: 'id',
    width: 100,
    control: new FormControl(true),
  },
  {
    display: 'Created',
    name: 'created',
    width: 100,
    control: new FormControl(false),
  },
  {
    display: 'View',
    name: 'html_url',
    width: 100,
    control: new FormControl(true),
  },
];

export default {
  title: 'Components/Data Display/Table',
  component: TsTableComponent,
  subcomponents: {
    TsSortDirective,
    TsCellDirective,
    TsHeaderCellDirective,
    TsFooterCellDirective,
    TsColumnDefDirective,
    TsHeaderRowComponent,
    TsRowComponent,
    TsFooterRowComponent,
  },
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        DragDropModule,
        FlexLayoutModule,
        FontAwesomeModule,
        HttpClientModule,
        ReactiveFormsModule,
        TsCheckboxModule,
        TsExpansionPanelModule,
        TsIconModule,
        TsMenuModule,
        TsPipesModule,
        TsSortModule,
        TsSpacingModule,
        TsTableModule,
      ],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add the necessary icons inside the initializer body.
            iconLibrary.addIcons(faExternalLink);
            iconLibrary.addIcons(faTable);
            iconLibrary.addIcons(faGripLines);
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
  component: TableWrapper,
  props: {
    columnsSource: COLUMNS_SOURCE.slice(),
    firstColumnNoWrap: true,
    columnsChange: action('Columns changed'),
  },
});
basic.parameters = {
  docs: { iframeHeight: 740 },
};

export const density = () => ({
  component: TableWrapper,
  props: {
    columnsSource: COLUMNS_SOURCE.slice(),
    density: select('Density', ['comfy', 'compact'], 'compact'),
    firstColumnNoWrap: false,
    columnsChange: action('Columns changed'),
  },
});
density.parameters = {
  docs: { iframeHeight: 740 },
};

export const stickyColumnsAndRows = () => ({
  component: TableWrapper,
  props: {
    columnsSource: COLUMNS_SOURCE.slice().map(c => {
      c?.control?.setValue(true);
      return c;
    }),
    headerSticky: boolean('Sticky header', true),
    footerSticky: boolean('Sticky footer', true),
    firstSticky: boolean('Sticky first column', true),
    lastSticky: boolean('Sticky last column', true),
    constrainContainer: true,
  },
});
stickyColumnsAndRows.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 640 },
};

export const noWrapFalse = () => ({
  component: TableWrapper,
  props: {
    columnsSource: COLUMNS_SOURCE.slice(0, 5).map(c => {
      c?.control?.setValue(true);
      return c;
    }),
    firstColumnNoWrap: false,
    constrainContainer: true,
  },
});
noWrapFalse.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 640 },
};

export const expandableRows = () => ({
  component: TableWrapper,
  props: {
    columnsSource: COLUMNS_SOURCE.slice(),
    isExpandable: true,
  },
});
expandableRows.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 800 },
};
