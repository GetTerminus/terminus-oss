
import { async, TestBed } from '@angular/core/testing';

import { TsIconModule } from './ui-icon.module';

describe(`UiIconModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsIconModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsIconModule).toBeDefined();
  });
});
