
import { async, TestBed } from '@angular/core/testing';

import { TsScrollbarsModule } from './ui-scrollbars.module';

describe(`TsScrollbarsModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsScrollbarsModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsScrollbarsModule).toBeDefined();
  });
});
