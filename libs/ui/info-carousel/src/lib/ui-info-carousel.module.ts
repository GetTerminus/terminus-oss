import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TsPaginatorModule } from '@terminus/ui-paginator';

import { TsInfoCarouselComponent } from './carousel/carousel.component';
import { TsInfoCarouselPanelContentDirective } from './info-carousel-panel-content.directive';
import { TsInfoCarouselPanelDirective } from './info-carousel-panel.directive';
import { TsInfoCarouselTitleDirective } from './info-carousel-title.directive';

export * from './carousel/carousel.component';
export * from './info-carousel-title.directive';
export * from './info-carousel-panel.directive';
export * from './info-carousel-panel-content.directive';

const DECLARATIONS_EXPORTS = [
  TsInfoCarouselComponent,
  TsInfoCarouselPanelContentDirective,
  TsInfoCarouselPanelDirective,
  TsInfoCarouselTitleDirective,
];

@NgModule({
  imports: [
    CommonModule,
    TsPaginatorModule,
  ],
  declarations: [...DECLARATIONS_EXPORTS],
  exports: [...DECLARATIONS_EXPORTS],
})
export class TsInfoCarouselModule {}
