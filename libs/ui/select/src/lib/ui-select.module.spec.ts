
import { async, TestBed } from '@angular/core/testing';

import { TsSelectModule } from './ui-select.module';

describe(`TsSelectModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsSelectModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsSelectModule).toBeDefined();
  });
});
