
import { async, TestBed } from '@angular/core/testing';

import { TsTooltipModule } from './ui-tooltip.module';

describe(`TsTooltipModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsTooltipModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsTooltipModule).toBeDefined();
  });
});
