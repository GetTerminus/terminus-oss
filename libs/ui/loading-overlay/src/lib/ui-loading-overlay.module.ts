import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TsLoadingOverlayDirective } from './loading-overlay.directive';
import { TsLoadingOverlayComponent } from './overlay/loading-overlay.component';

export * from './overlay/loading-overlay.component';
export * from './loading-overlay.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [
    TsLoadingOverlayComponent,
    TsLoadingOverlayDirective,
  ],
  entryComponents: [TsLoadingOverlayComponent],
  exports: [TsLoadingOverlayDirective],
})
export class TsLoadingOverlayModule {}
