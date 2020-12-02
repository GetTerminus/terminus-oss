import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TsDateRangeModule } from '@terminus/ui-date-range';
import { TsOptionModule } from '@terminus/ui-option';
import { TsSelectionListModule } from '@terminus/ui-selection-list';

import { TsCohortDateRangeComponent } from './cohort/cohort-date-range.component';

export * from './cohort/cohort-date-range.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TsDateRangeModule,
    TsOptionModule,
    TsSelectionListModule,
  ],
  exports: [TsCohortDateRangeComponent],
  declarations: [TsCohortDateRangeComponent],
})
export class TsCohortDateRangeModule {}
