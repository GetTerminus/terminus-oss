import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { TsPaginatorModule } from '@terminus/ui-paginator';
import { TsSortModule } from '@terminus/ui-sort';

import {
  TsCellDefDirective,
  TsCellDirective,
  TsFooterCellDefDirective,
  TsFooterCellDirective,
  TsHeaderCellDefDirective,
  TsHeaderCellDirective,
} from './cell/cell';
import { TsColumnDefDirective } from './column/column';
import {
  TsFooterRowComponent,
  TsFooterRowDefDirective,
  TsHeaderRowComponent,
  TsHeaderRowDefDirective,
  TsRowComponent,
  TsRowDefDirective,
} from './row/row';
import { TsTableComponent } from './table/table.component';


export * from './data-source/table-data-source';
export * from './cell/cell';
export * from './column/column';
export * from './row/row';
export * from './table/table.component';


// NOTE: Moving declarations/exports items into shared array breaks documentation generation.
@NgModule({
  imports: [
    CdkTableModule,
    CommonModule,
    TsPaginatorModule,
    TsSortModule,
  ],
  declarations: [
    // Table
    TsTableComponent,

    // Template definitions
    TsHeaderCellDefDirective,
    TsHeaderRowDefDirective,
    TsColumnDefDirective,
    TsCellDefDirective,
    TsRowDefDirective,
    TsFooterCellDefDirective,
    TsFooterRowDefDirective,

    // Cell directives
    TsHeaderCellDirective,
    TsCellDirective,
    TsFooterCellDirective,

    // Row directives
    TsHeaderRowComponent,
    TsRowComponent,
    TsFooterRowComponent,
  ],
  exports: [
    // Table
    TsTableComponent,

    // Template definitions
    TsHeaderCellDefDirective,
    TsHeaderRowDefDirective,
    TsColumnDefDirective,
    TsCellDefDirective,
    TsRowDefDirective,
    TsFooterCellDefDirective,
    TsFooterRowDefDirective,

    // Cell directives
    TsHeaderCellDirective,
    TsCellDirective,
    TsFooterCellDirective,

    // Row directives
    TsHeaderRowComponent,
    TsRowComponent,
    TsFooterRowComponent,
  ],
})
export class TsTableModule {}
