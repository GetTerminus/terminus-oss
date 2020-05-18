
import { async, TestBed } from '@angular/core/testing';

import { TsAutocompleteModule } from './ui-autocomplete.module';

describe(`TsAutocompleteModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsAutocompleteModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsAutocompleteModule).toBeDefined();
  });
});
