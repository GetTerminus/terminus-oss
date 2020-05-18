
import { async, TestBed } from '@angular/core/testing';

import { TsLogoModule } from './ui-logo.module';

describe(`TsLogoModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsLogoModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsLogoModule).toBeDefined();
  });
});
