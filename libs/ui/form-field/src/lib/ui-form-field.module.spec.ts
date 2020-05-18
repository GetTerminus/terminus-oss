
import { async, TestBed } from '@angular/core/testing';

import { TsFormFieldModule } from './ui-form-field.module';

describe(`TsFormFieldModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsFormFieldModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsFormFieldModule).toBeDefined();
  });
});

