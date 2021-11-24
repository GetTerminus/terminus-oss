import { TsPaginatorDomTypes } from './paginator-dom.pipe';

interface TsPaginatorState {
  activePageIndex: number;
  index: number;
  pagesLength: number;
  isActiveMoreThenThird: boolean;
  isFirstFourToShow: boolean;
}

/**
 * define the function type of paginator page sanitizer
 */
export type TsPaginatorPageSanitizer = (state: TsPaginatorState) => boolean;

/**
 * Determine the correct DOM output based on passed in values. Used by {@link TsPaginatorDomPipe}
 *
 * @internal
 */
/* eslint-disable @typescript-eslint/no-magic-numbers */
export const paginatorPageSanitizers: Record<TsPaginatorDomTypes, TsPaginatorPageSanitizer> = {
  'ellipsis-start': ({ activePageIndex, index, isActiveMoreThenThird }) => {
    const isBeforeShownItems = index === (activePageIndex - 3);

    return isActiveMoreThenThird && isBeforeShownItems;
  },
  'button': ({ activePageIndex, index, pagesLength, isFirstFourToShow }) => {
    const isFirstPage = index === 0;
    const isOnlyFourItems = pagesLength <= 4;
    const isOneOfLastThreePages = (index + 3) >= pagesLength;
    const isLastThreeToShow = (activePageIndex === (pagesLength - 1)) && isOneOfLastThreePages;
    const isNeighbourOfActive = (
      index === (activePageIndex - 1)
      || index === activePageIndex
      || index === (activePageIndex + 1)
    );

    return isFirstPage
      || isFirstFourToShow
      || isLastThreeToShow
      || isOnlyFourItems
      || isNeighbourOfActive;
  },
  'ellipsis-end': ({ activePageIndex, index, pagesLength, isFirstFourToShow, isActiveMoreThenThird }) => {
    const isNextAfterActiveNeighbour = index === (activePageIndex + 2);
    const isBeforeEnd = index <= pagesLength;
    const hasMoreThenFour = !isActiveMoreThenThird && index === 4;

    return (
      isNextAfterActiveNeighbour
        && isBeforeEnd
        && !isFirstFourToShow
    )
      || hasMoreThenFour;
  },
};
