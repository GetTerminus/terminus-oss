import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TsLinkComponent } from './link/link.component';

export * from './link/link.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [TsLinkComponent],
  declarations: [TsLinkComponent],
})
export class TsLinkModule {}
