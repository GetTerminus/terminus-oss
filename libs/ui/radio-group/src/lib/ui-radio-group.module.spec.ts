
import { async, TestBed } from '@angular/core/testing';

import { TsRadioGroupModule } from './ui-radio-group.module';

describe(`TsRadioGroupModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsRadioGroupModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsRadioGroupModule).toBeDefined();
  });
});
