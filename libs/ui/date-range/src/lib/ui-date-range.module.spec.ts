
import { async, TestBed } from '@angular/core/testing';

import { TsDateRangeModule } from './ui-date-range.module';

describe(`TsDateRangeModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsDateRangeModule],
    }).compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsDateRangeModule).toBeDefined();
  });
});
