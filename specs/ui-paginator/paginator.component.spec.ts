import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';

import {
  TsPaginatorComponent,
  TsPaginatorModule,
  TS_PAGINATOR_PAGE,
} from '@terminus/ui-paginator';

describe('TsPaginatorComponent', () => {
  let spectator: Spectator<TsPaginatorComponent>;
  const createComponent = createComponentFactory({
    component: TsPaginatorComponent,
    imports: [TsPaginatorModule],
    declareComponent: false,
  });
  const myPagesArray: TS_PAGINATOR_PAGE[] = Array.from(Array(12)).map((v, i) => ({
    pageNumber: i,
    pageDisplay: i + 1,
  }));

  beforeEach(() => {
    spectator = createComponent({
      props: {
        pages: myPagesArray,
      },
    });
  });

  test(`should exist`, () => {
    expect(spectator.query('nav')).toExist();
  });

  describe(`disabled state`, () => {
    describe(`default functionality`, () => {
      beforeEach(() => {
        spectator.setInput('activePage', myPagesArray[0]);
      });

      test(`should disable the previous button if at the beginning`, () => {
        expect(spectator.query('.ts-paginator__button--previous')).toBeDisabled();
      });

      test(`should disable the next button if at the end`, () => {
        spectator.setInput('activePage', myPagesArray[myPagesArray.length - 1]);
        expect(spectator.query('.ts-paginator__button--next')).toBeDisabled();
      });
    });

    describe(`override next and previous disabled state`, () => {
      beforeEach(() => {
        spectator.setInput('activePage', myPagesArray[Math.floor(myPagesArray.length / 2)]);
      });

      test(`should disable the previous button no matter the current index`, () => {
        expect(spectator.query('.ts-paginator__button--previous')).not.toBeDisabled();
        spectator.setInput('isPreviousDisabled', true);
        expect(spectator.query('.ts-paginator__button--previous')).toBeDisabled();
        expect(spectator.component.isPreviousDisabled).toEqual(true);
      });

      test(`should disable the next button no matter the current index`, () => {
        expect(spectator.query('.ts-paginator__button--next')).not.toBeDisabled();
        spectator.setInput('isNextDisabled', true);
        expect(spectator.query('.ts-paginator__button--next')).toBeDisabled();
        expect(spectator.component.isNextDisabled).toEqual(true);
      });
    });
  });

  describe(`pages`, () => {
    test(`should default to the first page`, () => {
      expect(spectator.query('.ts-paginator__button--active')).toHaveText('1');
    });

    test(`should be able to change page by passing in the active page`, () => {
      spectator.setInput('activePage', myPagesArray[2]);
      expect(spectator.query('.ts-paginator__button--active')).toHaveText('3');
      expect(spectator.component.activePageIndex$.getValue()).toEqual(2);
    });

    test(`should default to the first page if no active page is passed in`, () => {
      spectator.setInput('activePage', undefined);
      expect(spectator.query('.ts-paginator__button--active')).toHaveText('1');
      expect(spectator.component.activePageIndex$.getValue()).toEqual(0);
      expect(spectator.component.activePage).toEqual(myPagesArray[0]);
    });

    test(`should default to an empty array if no pages are passed in`, () => {
      spectator.setInput('pages', undefined);
      expect(spectator.component.pages.length).toEqual(0);
    });
  });

  describe(`tooltips`, () => {
    test(`should have default tooltips`, () => {
      expect(spectator.component.previousPageTooltip).toEqual('Previous');
      expect(spectator.component.nextPageTooltip).toEqual('Next');
    });

    test(`should allow custom tooltips`, () => {
      spectator.setInput('previousPageTooltip', 'Foo');
      spectator.setInput('nextPageTooltip', 'Bar');
      expect(spectator.component.previousPageTooltip).toEqual('Foo');
      expect(spectator.component.nextPageTooltip).toEqual('Bar');
    });
  });

  describe(`simpleMode`, () => {
    beforeEach(() => {
      spectator.setInput('isSimpleMode', true);
    });

    test(`should not show any page numbers`, () => {
      expect(spectator.query('.ts-paginator__pages')).not.toExist();
    });
  });

  describe(`event emitters`, () => {
    beforeEach(() => {
      spectator.setInput('activePage', myPagesArray[5]);
    });

    test(`should emit for previous page click`, () => {
      let output;
      spectator.output('previousPageClicked').subscribe(() => (output = 1));

      spectator.click(spectator.query('.ts-paginator__button--previous'));
      expect(output).toEqual(1);
    });

    test(`should emit for next page click`, () => {
      let output;
      spectator.output('nextPageClicked').subscribe(() => (output = 1));

      spectator.click(spectator.query('.ts-paginator__button--next'));
      expect(output).toEqual(1);
    });

    test(`should emit for page click`, () => {
      let output;
      spectator.output('pageClicked').subscribe(() => (output = 1));

      spectator.click(spectator.query('.ts-paginator__page .ts-paginator__button'));
      expect(output).toEqual(1);
    });
  });

  describe(`paginatorSummary`, () => {
    test(`should default to no summary and the element should not exist`, () => {
      expect(spectator.query('.ts-paginator__summary')).not.toExist();
    });

    test(`should allow a custom summary`, () => {
      spectator.setInput('paginatorSummary', 'Foo bar');
      expect(spectator.query('.ts-paginator__summary')).toHaveText('Foo bar');
    });
  });

  describe(`page truncation and ellipsis`, () => {
    describe(`first two pages (start)`, () => {
      test(`should only have trailing ellipsis and truncation`, () => {
        expect.assertions(4);
        spectator.setInput('activePage', myPagesArray[0]);
        expect(spectator.queryAll('.ts-paginator__page--ellipsis').length).toEqual(1);
        expect(spectator.queryAll('.ts-paginator__page').length).toEqual(5);

        spectator.setInput('activePage', myPagesArray[1]);
        expect(spectator.queryAll('.ts-paginator__page--ellipsis').length).toEqual(1);
        expect(spectator.queryAll('.ts-paginator__page').length).toEqual(5);
      });
    });

    describe(`last two pages (end)`, () => {
      test(`should only have starting ellipsis and truncation`, () => {
        spectator.setInput('activePage', myPagesArray[myPagesArray.length - 1]);
        expect(spectator.queryAll('.ts-paginator__page--ellipsis').length).toEqual(1);
        expect(spectator.queryAll('.ts-paginator__page').length).toEqual(5);

        spectator.setInput('activePage', myPagesArray[myPagesArray.length - 2]);
        expect(spectator.queryAll('.ts-paginator__page--ellipsis').length).toEqual(1);
        expect(spectator.queryAll('.ts-paginator__page').length).toEqual(5);
      });
    });

    describe(`middle pages`, () => {
      test(`should have starting and ending ellipsis and truncation`, () => {
        const pageIndexes = [3, 4, 5, 6, 7, 8, 9];
        for (const index of pageIndexes) {
          spectator.setInput('activePage', myPagesArray[index]);
          expect(spectator.queryAll('.ts-paginator__page--ellipsis').length).toEqual(2);
          expect(spectator.queryAll('.ts-paginator__page').length).toEqual(7);
        }
      });
    });
  });

  describe(`findIndexByProperty`, () => {
    test(`should return the index if found`, () => {
      expect(spectator.component.findIndexByProperty(myPagesArray, 'pageNumber', 2)).toEqual(2);
    });

    test(`should return -1 if the property is not found`, () => {
      expect(spectator.component.findIndexByProperty(myPagesArray, 'foo', 2)).toEqual(-1);
    });
  });
});
