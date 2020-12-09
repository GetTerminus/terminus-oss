import {
  createPipeFactory,
  SpectatorPipe,
} from '@ngneat/spectator/jest';

import { TsPaginatorDomPipe } from '@terminus/ui-paginator';

describe('TsPaginatorDomPipe', () => {
  let spectator: SpectatorPipe<TsPaginatorDomPipe>;
  const createPipe = createPipeFactory(TsPaginatorDomPipe);

  test('should return false if the type is missing', () => {
    spectator = createPipe(`{{ 4 | tsPaginatorDom:5:12:'' }}`);
    expect(spectator.element).toHaveText('false');
  });

  test('should return true for a button in the middle', () => {
    spectator = createPipe(`{{ 5 | tsPaginatorDom:5:12:'button' }}`);
    expect(spectator.element).toHaveText('true');
  });
});
