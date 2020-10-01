import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TsIconModule } from '@terminus/ui-icon';

import { TsIconButtonComponent } from './icon-button/icon-button.component';

export * from './icon-button/icon-button.component';

@NgModule({
  imports: [
    CommonModule,
    TsIconModule,
  ],
  declarations: [TsIconButtonComponent],
  exports: [TsIconButtonComponent],
})
export class TsIconButtonModule {}
