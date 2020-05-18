
import { async, TestBed } from '@angular/core/testing';

import { TsCheckboxModule } from './ui-checkbox.module';

describe(`UiCheckboxModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsCheckboxModule],
    })
      .compileComponents();
  }));

  test(`should create`, () => {
    expect(TsCheckboxModule).toBeDefined();
  });
});
