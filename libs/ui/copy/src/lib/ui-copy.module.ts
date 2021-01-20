import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TsTooltipModule } from '@terminus/ui-tooltip';

import { TsCopyComponent } from './copy/copy.component';

export * from './copy/copy.component';

@NgModule({
  imports: [
    ClipboardModule,
    CommonModule,
    TsTooltipModule,
  ],
  exports: [TsCopyComponent],
  declarations: [TsCopyComponent],
})
export class TsCopyModule {}
