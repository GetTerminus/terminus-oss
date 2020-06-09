import {
  async,
  TestBed,
} from '@angular/core/testing';

import { TsCardModule } from './ui-card.module';

describe(`UiCardModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsCardModule],
    }).compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsCardModule).toBeDefined();
  });
});
