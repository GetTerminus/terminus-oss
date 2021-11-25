import {
  _CoalescedStyleScheduler,
  CdkTableModule,
  _COALESCED_STYLE_SCHEDULER,
} from '@angular/cdk/table';
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
import { TsChangeIndicatorComponent } from './change-indicator/change-indicator.component';
import { TsColumnDefDirective } from './column/column';
import { TsDragHandleDirective } from './drag-handle';
import {
  TsFooterRowComponent,
  TsFooterRowDefDirective,
  TsHeaderRowComponent,
  TsHeaderRowDefDirective,
  TsRowComponent,
  TsRowDefDirective,
} from './row/row';
import { TsTableComponent } from './table/table.component';

export * from './cell/cell';
export * from './change-indicator/change-indicator.component';
export * from './column/column';
export * from './data-source/table-data-source';
export * from './row/row';
export * from './table/table.component';

const DECLARATIONS_EXPORTS = [
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

  TsChangeIndicatorComponent,
  TsDragHandleDirective,
];

// NOTE: Moving declarations/exports items into shared array breaks documentation generation.
@NgModule({
  imports: [
    CdkTableModule,
    CommonModule,
    TsPaginatorModule,
    TsSortModule,
  ],
  declarations: [...DECLARATIONS_EXPORTS],
  exports: [...DECLARATIONS_EXPORTS],
  providers: [{
    provide: _COALESCED_STYLE_SCHEDULER,
    useClass: _CoalescedStyleScheduler,
  }],
})
export class TsTableModule {}
