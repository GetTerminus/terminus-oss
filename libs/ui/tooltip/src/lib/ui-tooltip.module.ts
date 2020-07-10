import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TsTooltipComponent } from './tooltip/tooltip.component';

export * from './tooltip/tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
  ],
  exports: [TsTooltipComponent],
  declarations: [TsTooltipComponent],
})
export class TsTooltipModule {}
