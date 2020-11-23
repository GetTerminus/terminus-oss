import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TsTooltipModule } from '@terminus/ui-tooltip';

import { TsPaginatorDomPipe } from './paginator-dom.pipe';
import { TsPaginatorComponent } from './paginator/paginator.component';

export * from './paginator/paginator.component';
export * from './paginator-dom.pipe';

@NgModule({
  imports: [
    CommonModule,
    TsTooltipModule,
  ],
  exports: [TsPaginatorComponent],
  declarations: [
    TsPaginatorComponent,
    TsPaginatorDomPipe,
  ],
})
export class TsPaginatorModule {}
