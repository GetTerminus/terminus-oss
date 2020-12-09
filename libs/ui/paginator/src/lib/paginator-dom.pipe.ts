/* eslint-disable @typescript-eslint/no-magic-numbers */
import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { isNumber } from '@terminus/fe-utilities';

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
  // eslint-disable-next-line complexity
  public transform(activePageIndex: number, index: number, pagesLength: number, type: TsPaginatorDomTypes): boolean {
    if (!type || !isNumber(activePageIndex) || !isNumber(index) || !isNumber(pagesLength)) {
      return false;
    }

    if (type === 'ellipsis-start') {
      if (
        (
          (
            (activePageIndex >= 2)
            && (activePageIndex - 1) === index
            && (activePageIndex !== (pagesLength - 1))
          )
          || ((activePageIndex > (pagesLength - 3)) && (index === (activePageIndex - 3)))
        )
        || (activePageIndex === (pagesLength - 1) && (index === pagesLength - 3) && (pagesLength > 3))
      ) {
        return true;
      }
    }

    if (type === 'button') {
      if (
        (activePageIndex < 2 && (index < 3 || index === (pagesLength - 1)))
        || (
          index === 0
          || index === (activePageIndex - 1)
          || index === activePageIndex
          || index === (activePageIndex + 1)
          || index === (activePageIndex - 1)
          || index === (pagesLength - 1)
          || (index ===  (pagesLength - 3) && (activePageIndex === (pagesLength - 1)))
        )
      ) {
        return true;
      }
    }

    return type === 'ellipsis-end'
      && (
        (activePageIndex === 0 && (activePageIndex + 2) === index)
        || (activePageIndex === 1 && (activePageIndex + 1) === index)
        || (
          (activePageIndex >= 2 && (activePageIndex + 1) === index)
          && activePageIndex < (pagesLength - 2)
        )
      ) && (index + 1 < pagesLength);
  }
}
