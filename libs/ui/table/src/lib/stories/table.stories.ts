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

import { TsCheckboxModule } from '@terminus/ui-checkbox';
import { TsExpansionPanelModule } from '@terminus/ui-expansion-panel';
import { TsIconModule } from '@terminus/ui-icon';
import { TsMenuModule } from '@terminus/ui-menu';
import { TsPipesModule } from '@terminus/ui-pipes';
import { TsSortModule } from '@terminus/ui-sort';
import { TsSpacingModule } from '@terminus/ui-spacing';
import { TsTableModule } from '@terminus/ui-table';

import {
  CustomColumn,
  TableWrapper,
} from './table.component';

const MODULE_METADATA = {
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
};

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
};

export const density = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TableWrapper,
  props: {
    columnsSource: COLUMNS_SOURCE.slice(),
    density: select('Density', ['comfy', 'compact'], 'comfy'),
    firstColumnNoWrap: false,
    columnsChange: action('Columns changed'),
  },
});

export const stickyColumnsAndRows = () => ({
  moduleMetadata: MODULE_METADATA,
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
};

export const noWrapFalse = () => ({
  moduleMetadata: MODULE_METADATA,
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
stickyColumnsAndRows.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const expandableRows = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TableWrapper,
  props: {
    columnsSource: COLUMNS_SOURCE.slice(),
    isExpandable: true,
  },
});
expandableRows.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};
