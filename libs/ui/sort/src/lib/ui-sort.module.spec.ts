
import { async, TestBed } from '@angular/core/testing';

import { TsSortModule } from './ui-sort.module';

describe(`TsSortModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsSortModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsSortModule).toBeDefined();
  });
});
