
import { async, TestBed } from '@angular/core/testing';

import { TsCSVEntryModule } from './ui-csv-entry.module';

describe(`TsCsvEntryModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsCSVEntryModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsCSVEntryModule).toBeDefined();
  });
});
