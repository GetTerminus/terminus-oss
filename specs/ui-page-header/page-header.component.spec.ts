import { OverlayContainer } from '@angular/cdk/overlay';
import { RouterTestingModule } from '@angular/router/testing';
import { Spectator } from '@ngneat/spectator';
import {
  createComponentFactory,
  createHostFactory,
  SpectatorHost,
} from '@ngneat/spectator/jest';

import { TsButtonModule } from '@terminus/ui-button';
import {
  TS_PAGE_HEADER_METADATA,
  TS_PAGE_HEADER_ROUTE,
  TS_PAGE_HEADER_ROUTES,
  TS_PAGE_HEADER_STATIC_BREADCRUMB,
  TsPageHeaderComponent,
  TsPageHeaderModule,
} from '@terminus/ui-page-header';
import { TsDatePipe } from '@terminus/ui-pipes';

const MOCK_BREADCRUMB_STATIC: TS_PAGE_HEADER_STATIC_BREADCRUMB = {
  display: 'Crumb with NO route',
};
const MOCK_BREADCRUMB_WITH_ROUTE: TS_PAGE_HEADER_ROUTE = {
  display: 'Reports',
  route: '/reports',
};
const MOCK_BREADCRUMBS: TS_PAGE_HEADER_ROUTES = [MOCK_BREADCRUMB_STATIC, MOCK_BREADCRUMB_WITH_ROUTE];
const MOCK_PAGES: TS_PAGE_HEADER_ROUTE[] = [
  {
    display: 'Report 1',
    route: '/reports/1',
  },
  {
    display: 'Report 2',
    route: '/reports/2',
  },
];
const datePipe = new TsDatePipe();
const MOCK_DATE = new Date(2020, 8, 12);
const MOCK_DATE_EXTENDED = datePipe.transform(MOCK_DATE, 'extended');
const MOCK_DATE_TIMESTAMP = datePipe.transform(MOCK_DATE, 'timestamp');
const MOCK_METADATA: TS_PAGE_HEADER_METADATA[] = [
  ['Campaign Type', 'Hosted Event'],
  ['Created Date', 'May 2, 2021'],
];

const MODULE_IMPORTS = [
  RouterTestingModule,
  TsPageHeaderModule,
];

describe(`TsPageHeaderComponent`, function() {
  describe(`no template`, () => {
    let spectator: Spectator<TsPageHeaderComponent>;
    let rootElement: HTMLElement;
    const createComponent = createComponentFactory({
      component: TsPageHeaderComponent,
      imports: [...MODULE_IMPORTS],
      declareComponent: false,
    });
    let overlay: OverlayContainer;
    let overlayContainerElement: HTMLElement;

    beforeEach(() => {
      spectator = createComponent({
        props: {
          title: 'My Title',
        },
      });
      rootElement = spectator.component.elementRef.nativeElement;
      overlay = spectator.inject<OverlayContainer>(OverlayContainer);
      overlayContainerElement = overlay.getContainerElement();
    });

    test(`should exist`, () => {
      expect(rootElement.classList).toContain('ts-page-header');
    });

    describe(`title`, () => {
      test(`should set the title`, () => {
        expect(spectator.query('h1')).toContainText('My Title');
      });

      test(`should default to h-level 1 and allow h-level 2 and 3`, () => {
        expect.assertions(9);
        expect(spectator.query('h1')).toExist();
        expect(spectator.query('h2')).not.toExist();
        expect(spectator.query('h3')).not.toExist();

        spectator.setInput('titleLevel', 'h2');
        spectator.detectChanges();
        expect(spectator.query('h1')).not.toExist();
        expect(spectator.query('h2')).toExist();
        expect(spectator.query('h3')).not.toExist();

        spectator.setInput('titleLevel', 'h3');
        spectator.detectChanges();
        expect(spectator.query('h1')).not.toExist();
        expect(spectator.query('h2')).not.toExist();
        expect(spectator.query('h3')).toExist();
      });

      describe(`title menu`, () => {
        beforeEach(() => {
          spectator.setInput('pageMenuContents', MOCK_PAGES);
          spectator.detectChanges();
        });

        test(`should add styles when title becomes a menu trigger`, () => {
          expect(spectator.query('svg')).toExist();
          expect(spectator.query('.ts-ph-trigger')).toHaveClass('ts-ph-trigger--has-menu');
        });

        test(`should open a menu when interacted with`, () => {
          spectator.click(spectator.query('.ts-ph-trigger'));
          spectator.detectChanges();
          const panel = overlayContainerElement.querySelector('.ts-ph-panel-wrap');
          expect(panel).toExist();
        });

        test(`should be able to default the menu open`, () => {
          spectator.setInput('isPanelOpen', true);
          spectator.detectChanges();
          const panel = overlayContainerElement.querySelector('.ts-ph-panel-wrap');
          expect(panel).toExist();
        });
      });
    });

    describe(`lastUpdatedDate`, () => {
      test(`should display the time-ago date if a date is passed in`, () => {
        spectator.setInput('lastUpdatedDate', MOCK_DATE);
        spectator.detectChanges();
        const element = spectator.query('time');
        expect(element).toHaveAttribute('title', MOCK_DATE_EXTENDED);
        expect(element).toHaveAttribute('datetime', MOCK_DATE_TIMESTAMP);
      });
    });

    describe(`toggle`, () => {
      test(`should toggle the open state of the panel`, () => {
        spectator.setInput('pageMenuContents', MOCK_PAGES);
        spectator.detectChanges();
        expect(spectator.component.isPanelOpen).toEqual(false);
        spectator.click(spectator.query('.ts-ph-trigger'));
        spectator.detectChanges();
        expect(spectator.component.isPanelOpen).toEqual(true);
      });

      test(`should do nothing if no panel contents exist`, () => {
        spectator.setInput('pageMenuContents', undefined);
        spectator.detectChanges();
        expect(spectator.component.isPanelOpen).toEqual(false);
        spectator.click(spectator.query('.ts-ph-trigger'));
        spectator.detectChanges();
        expect(spectator.component.isPanelOpen).toEqual(false);
      });
    });

    describe(`breadcrumbs`, () => {
      test(`should not exist if no breadcrumbs are passed in`, () => {
        expect(spectator.query('.ts-ph-breadcrumbs')).not.toExist();
      });

      test(`should display plain text if no route is associated`, () => {
        spectator.setInput('breadcrumbs', MOCK_BREADCRUMBS);
        expect(spectator.query('.ts-ph-breadcrumbs')).toExist();
        expect(spectator.query('.ts-ph-breadcrumbs li:first-of-type')).toHaveText(MOCK_BREADCRUMB_STATIC.display);
      });

      test(`should display a link if a route is associated`, () => {
        spectator.setInput('breadcrumbs', MOCK_BREADCRUMBS);
        expect(spectator.query('.ts-ph-breadcrumbs li:last-of-type a')).toContainText(MOCK_BREADCRUMB_WITH_ROUTE.display);
        expect(spectator.query('.ts-ph-breadcrumbs li:last-of-type a')).toHaveAttribute('href', '/reports');
      });
    });

    describe(`metadata`, () => {
      test(`should not exist by default`, () => {
        expect(spectator.query('.ts-ph-metadata')).not.toExist();
      });

      test(`should display metadata in a definition list`, () => {
        spectator.setInput('metadata', MOCK_METADATA);
        expect(spectator.queryAll('dt').length).toEqual(2);
        expect(spectator.queryAll('dt')[0]).toHaveText('Campaign Type');
      });
    });
  });

  describe(`with template`, () => {
    let spectator: SpectatorHost<TsPageHeaderComponent>;
    const createHost = createHostFactory({
      component: TsPageHeaderComponent,
      imports: [...MODULE_IMPORTS, TsButtonModule],
      declareComponent: false,
    });

    beforeEach(() => {
      spectator = createHost(`
          <ts-page-header [title]="title">
            <ts-button>Primary</ts-button>
            <ts-button theme="secondary">Secondary</ts-button>
          </ts-page-header>
        `, {
        hostProps: {
          title: 'My Title',
        },
      });
      spectator.detectChanges();
    });

    test(`should allow buttons to be passed through`, () => {
      const container = spectator.query('.ts-ph-actions');
      const buttons = container.querySelectorAll('.ts-button');
      expect(buttons.length).toEqual(2);
    });
  });
});
