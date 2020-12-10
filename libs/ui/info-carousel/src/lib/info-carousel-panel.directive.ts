import {
  Directive,
  TemplateRef,
} from '@angular/core';

/**
 * A selector to allow users to define individual panels for a {@link TsInfoCarouselComponent}
 *
 * @example
 * <ts-info-carousel [paginatorItemTitle]="paginatorItemTitle">
 *              <ng-container *tsInfoCarouselPanel>
 *                <h4 class="item-title">My title</h4>
 *                <div class="item-content">My content</div>
 *              </ng-container>
 * </ts-info-carousel>
 */
@Directive({ selector: '[tsInfoCarouselPanel]' })
export class TsInfoCarouselPanelDirective {
  constructor(public templateRef : TemplateRef<unknown>) {}
}
