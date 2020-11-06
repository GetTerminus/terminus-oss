import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TsPipesModule } from '@terminus/ui-pipes';

import { TsPageHeaderComponent } from './page-header/page-header.component';

export * from './page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    TsPipesModule,
    RouterModule,
  ],
  declarations: [TsPageHeaderComponent],
  exports: [TsPageHeaderComponent],
})
export class TsPageHeaderModule {}
