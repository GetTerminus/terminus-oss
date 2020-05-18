import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TsIconModule } from '@terminus/ui-icon';

import { TsLinkComponent } from './link/link.component';


export * from './link/link.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TsIconModule,
  ],
  exports: [TsLinkComponent],
  declarations: [TsLinkComponent],
})
export class TsLinkModule {}
