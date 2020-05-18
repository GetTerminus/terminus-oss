
import { async, TestBed } from '@angular/core/testing';

import { TsUtilitiesModule } from './ui-utilities.module';

describe(`UiUtilitiesModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsUtilitiesModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsUtilitiesModule).toBeDefined();
  });
});
