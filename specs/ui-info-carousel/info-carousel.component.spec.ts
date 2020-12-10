import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  createHostFactory,
  SpectatorHost,
} from '@ngneat/spectator/jest';

import {
  TsInfoCarouselComponent,
  TsInfoCarouselModule,
} from '@terminus/ui-info-carousel';

const TEMPLATE = `
  <div style="width: 300px">
  <ts-info-carousel paginatorItemTitle="My item title" [id]="id">
    <h4 tsInfoCarouselTitle>My title</h4>

    <ng-container *tsInfoCarouselPanel>
      <h4 class="ts-info-carousel__item-title">Title one</h4>
      <div class="ts-info-carousel__item-content">Panel one <a href="#">content</a></div>
    </ng-container>

    <ng-container *tsInfoCarouselPanel>
      <h4 class="ts-info-carousel__item-title">Title two</h4>
      <div class="ts-info-carousel__item-content">Panel two content</div>
    </ng-container>

    <ng-container *tsInfoCarouselPanel>
      <h4 class="ts-info-carousel__item-title">Title three</h4>
      <div class="ts-info-carousel__item-content">Panel three content</div>
    </ng-container>
  </ts-info-carousel>
  </div>
`;

describe(`TsInfoCarousel`, () => {
  let spectator: SpectatorHost<TsInfoCarouselComponent>;
  const createHost = createHostFactory({
    component: TsInfoCarouselComponent,
    imports: [
      NoopAnimationsModule,
      TsInfoCarouselModule,
    ],
    declareComponent: false,
  });

  beforeEach(() => {
    spectator = createHost(TEMPLATE, {
      props: {
        activePanelIndex: 1,
        id: undefined,
      },
    });
  });

  test(`should place label content correctly`, () => {
    expect(spectator.query('.ts-info-carousel__label')).toHaveText('My title');
  });

  describe(`id`, () => {
    test(`should default the ID to the UID`, () => {
      expect(spectator.component.id).toEqual(expect.stringContaining('ts-info-carousel-'));
    });

    test(`should allow custom ID`, () => {
      spectator.setInput('id', 'foo');
      expect(spectator.component.id).toEqual('foo');
    });
  });

  describe(`index`, () => {
    test(`should allow the initial index to be set`, () => {
      expect(spectator.component.activePanelIndex).toEqual(1);
    });

    test(`should emit with the index is updated`, () => {
      let output;
      spectator.output('activePanelIndexChange').subscribe((index: number) => {
        output = index;
      });
      spectator.component.next();

      expect(output).toEqual(2);
    });
  });

  describe(`pagination`, () => {
    let previousButton: HTMLButtonElement;
    let nextButton: HTMLButtonElement;

    beforeEach(() => {
      previousButton = spectator.query('.ts-paginator__button--previous');
      nextButton = spectator.query('.ts-paginator__button--next');
    });

    test(`should move forward when next is clicked`, () => {
      expect(spectator.component.activePanelIndex).toEqual(1);
      spectator.click(nextButton);
      expect(spectator.component.activePanelIndex).toEqual(2);
    });

    test(`should not move forward if already at the last panel`, () => {
      expect(spectator.component.activePanelIndex).toEqual(1);
      spectator.click(nextButton);
      expect(spectator.component.activePanelIndex).toEqual(2);
      spectator.click(nextButton);
      expect(spectator.component.activePanelIndex).toEqual(2);
    });

    test(`should move backward when previous is clicked`, () => {
      expect(spectator.component.activePanelIndex).toEqual(1);
      spectator.click(previousButton);
      expect(spectator.component.activePanelIndex).toEqual(0);
    });

    test(`should not move backward if already at the first panel`, () => {
      expect(spectator.component.activePanelIndex).toEqual(1);
      spectator.click(previousButton);
      expect(spectator.component.activePanelIndex).toEqual(0);
      spectator.click(previousButton);
      expect(spectator.component.activePanelIndex).toEqual(0);
    });

    test(`should default the summary item title to 'items' if not set`, () => {
      spectator.setInput('paginatorItemTitle', undefined);
      expect(spectator.query('.ts-paginator__summary')).toHaveText('2 of 3 items');
    });
  });

  describe(`sizing`, () => {
    test(`should set the panel width to match the outer container on resize`, () => {
      const rect = {
        bottom: 89,
        height: 40,
        left: 17,
        right: 589,
        top: 49,
        width: 572,
        x: 17,
        y: 49,
      };
      spectator.component.elementRef.nativeElement.getBoundingClientRect = jest.fn(() => rect);
      spectator.component.onResize();
      expect(spectator.component.itemWidth).toEqual(572);
    });
  });
});
