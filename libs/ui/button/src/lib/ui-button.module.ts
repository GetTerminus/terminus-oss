import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TsWindowService } from '@terminus/fe-utilities';
import { TsIconModule } from '@terminus/ui-icon';

import { TsButtonComponent } from './button/button.component';

export * from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    TsIconModule,
  ],
  providers: [TsWindowService],
  exports: [TsButtonComponent],
  declarations: [TsButtonComponent],
})
export class TsButtonModule {}
