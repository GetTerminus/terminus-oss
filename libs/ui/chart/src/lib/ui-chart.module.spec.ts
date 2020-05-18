
import { async, TestBed } from '@angular/core/testing';

import { TsChartModule } from './ui-chart.module';

describe(`TsChartModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsChartModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsChartModule).toBeDefined();
  });
});
