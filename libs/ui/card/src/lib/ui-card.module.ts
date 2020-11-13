import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

import { TsCardTitleDirective } from './card-title/card-title.directive';
import { TsCardComponent } from './card/card.component';

export * from './card/card.component';
export * from './card-title/card-title.directive';

@NgModule({
  imports: [
    CommonModule,
    MatRippleModule,
  ],
  declarations: [
    TsCardComponent,
    TsCardTitleDirective,
  ],
  exports: [
    TsCardComponent,
    TsCardTitleDirective,
  ],
})
export class TsCardModule {}
