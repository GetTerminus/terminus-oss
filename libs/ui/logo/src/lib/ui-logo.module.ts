import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TsLogoComponent } from './logo/logo.component';

export * from './logo/logo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TsLogoComponent],
  exports: [TsLogoComponent],
})
export class TsLogoModule {}
