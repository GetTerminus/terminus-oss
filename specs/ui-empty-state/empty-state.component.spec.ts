import {
  createHostFactory,
  SpectatorHost,
} from '@ngneat/spectator/jest';

import {
  TsEmptyStateComponent,
  TsEmptyStateModule,
} from '@terminus/ui-empty-state';

const TEMPLATE_WITH_SVG = `
  <ts-empty-state [title]="myTitle" [svgTemplate]="mySvg">
    <p>
      There aren't any Ad Impressions within the selected reporting period and filters yet.
      Please try again later or create a new <a href="#">Ad Tactic</a>.
    </p>

    <ts-empty-state-actions>
      <button>Button one</button>
      <button>Button two</button>
    </ts-empty-state-actions>
  </ts-empty-state>

  <ng-template #mySvg>
    <svg></svg>
  </ng-template>
`;
const TEMPLATE_WITHOUT_SVG = `
  <ts-empty-state [title]="myTitle">
    <p>
      There aren't any Ad Impressions within the selected reporting period and filters yet.
      Please try again later or create a new <a href="#">Ad Tactic</a>.
    </p>

    <ts-empty-state-actions>
      <button>Button one</button>
      <button>Button two</button>
    </ts-empty-state-actions>
  </ts-empty-state>
`;

describe(`TsEmptyStateComponent`, () => {
  let spectator: SpectatorHost<TsEmptyStateComponent>;
  const createHost = createHostFactory({
    component: TsEmptyStateComponent,
    imports: [TsEmptyStateModule],
    declareComponent: false,
  });

  describe(`with SVG`, () => {
    beforeEach(() => {
      spectator = createHost(TEMPLATE_WITH_SVG, {
        hostProps: {
          myTitle: 'My Title',
        },
      });
    });

    test(`should do something`, () => {
      expect(spectator.query('.ts-empty-state-wrapper')).toExist();
    });

    test(`should set a title`, () => {
      expect(spectator.query('.ts-empty-state__title')).toHaveText('My Title');
    });

    test(`should pass description content through`, () => {
      expect(spectator.query('p')).toExist();
    });

    test(`should use custom SVG if passed in`, () => {
      expect(spectator.query('svg')).toExist();
      expect(spectator.query('.ts-empty-state__default-svg')).not.toExist();
    });
  });

  describe(`without SVG`, () => {
    beforeEach(() => {
      spectator = createHost(TEMPLATE_WITHOUT_SVG, {
        hostProps: {
          myTitle: 'My Title',
        },
      });
    });

    test(`should use default SVG when not passed in`, () => {
      expect(spectator.query('.ts-empty-state__default-svg')).toExist();
    });
  });
});
