import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TsInputModule } from '@terminus/ui-input';

import { TsDateRangeComponent } from './date-range/date-range.component';

export * from './date-range/date-range.component';

@NgModule({
  imports: [
    CommonModule,
    TsInputModule,
  ],
  exports: [TsDateRangeComponent],
  declarations: [TsDateRangeComponent],
})
export class TsDateRangeModule {}
