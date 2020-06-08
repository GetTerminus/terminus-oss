import {
  async,
  TestBed,
} from '@angular/core/testing';

import { TsChipModule } from './ui-chip.module';

describe(`UiChipModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsChipModule],
    }).compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsChipModule).toBeDefined();
  });
});
