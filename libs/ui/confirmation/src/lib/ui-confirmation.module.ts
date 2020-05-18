import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { TsButtonModule } from '@terminus/ui-button';

import { TsConfirmationDirective } from './confirmation/confirmation.directive';
import { TsConfirmationOverlayComponent } from './overlay/confirmation-overlay.component';


export * from './overlay/confirmation-overlay.component';
export * from './confirmation/confirmation.directive';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    OverlayModule,
    TsButtonModule,
  ],
  declarations: [
    TsConfirmationDirective,
    TsConfirmationOverlayComponent,
  ],
  exports: [TsConfirmationDirective],
  entryComponents: [TsConfirmationOverlayComponent],
})
export class TsConfirmationModule {}
