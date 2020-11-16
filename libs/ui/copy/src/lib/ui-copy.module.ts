import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TsTooltipModule } from '@terminus/ui-tooltip';

import { TsCopyComponent } from './copy/copy.component';

export * from './copy/copy.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    TsTooltipModule,
  ],
  exports: [TsCopyComponent],
  declarations: [TsCopyComponent],
})
export class TsCopyModule {}
