
import { async, TestBed } from '@angular/core/testing';

import { TsTableModule } from './ui-table.module';

describe(`TsTableModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsTableModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsTableModule).toBeDefined();
  });
});

