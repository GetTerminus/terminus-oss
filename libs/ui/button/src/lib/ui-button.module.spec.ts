
import { async, TestBed } from '@angular/core/testing';

import { TsButtonModule } from './ui-button.module';

describe.only(`TsButtonModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsButtonModule],
    }).compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsButtonModule).toBeDefined();
  });
});
