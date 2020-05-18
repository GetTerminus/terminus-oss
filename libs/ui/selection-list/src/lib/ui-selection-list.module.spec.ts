
import { async, TestBed } from '@angular/core/testing';

import { TsSelectionListModule } from './ui-selection-list.module';

describe(`TsSelectionListModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsSelectionListModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsSelectionListModule).toBeDefined();
  });
});
