
import { async, TestBed } from '@angular/core/testing';

import { TsOptionModule } from './ui-option.module';

describe(`TsOptionsModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsOptionModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsOptionModule).toBeDefined();
  });
});
