
import { async, TestBed } from '@angular/core/testing';

import { TsToggleModule } from './ui-toggle.module';

describe(`TsToggleModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsToggleModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsToggleModule).toBeDefined();
  });
});
