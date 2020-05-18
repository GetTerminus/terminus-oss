
import { async, TestBed } from '@angular/core/testing';

import { TsCohortDateRangeModule } from './ui-cohort-date-range.module';

describe(`TsCohortDateRangeModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsCohortDateRangeModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsCohortDateRangeModule).toBeDefined();
  });
});
