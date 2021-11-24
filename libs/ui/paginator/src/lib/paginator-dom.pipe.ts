/* eslint-disable @typescript-eslint/no-magic-numbers */
import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { isNumber } from '@terminus/fe-utilities';

import { paginatorPageSanitizers } from './paginator-utilities';

/**
 * The allowed types passed to {@link TsPaginatorDomPipe}
 */
export type TsPaginatorDomTypes
  = 'button'
  | 'ellipsis-start'
  | 'ellipsis-end'
;

/**
 * Determine the correct DOM output based on passed in values. Used by {@link TsPaginatorComponent}
 *
 * @internal
 */
@Pipe({ name: 'tsPaginatorDom' })
export class TsPaginatorDomPipe implements PipeTransform {
  /**
   * Transform the value
   *
   * @param activePageIndex - The index of the current page
   * @param index - The index of the current ngFor iteration
   * @param pagesLength - The number of pages
   * @param type - The type of DOM output being tested for
   * @returns A boolean value for that type
   */
  public transform(activePageIndex: number, index: number, pagesLength: number, type: TsPaginatorDomTypes): boolean {

    if (!type || !isNumber(activePageIndex) || !isNumber(index) || !isNumber(pagesLength)) {
      return false;
    }

    const isOneOfFirstFourPages = index <= 3;
    const isFirstFourToShow = activePageIndex <= 1 && isOneOfFirstFourPages;
    const isActiveMoreThenThird = activePageIndex >= 3;

    return paginatorPageSanitizers[type]({
      activePageIndex,
      index,
      pagesLength,
      isFirstFourToShow,
      isActiveMoreThenThird,
    });
  }
}
