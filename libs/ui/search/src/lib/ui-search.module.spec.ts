
import { async, TestBed } from '@angular/core/testing';

import { TsSearchModule } from './ui-search.module';

describe(`TsSearchModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsSearchModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsSearchModule).toBeDefined();
  });
});
