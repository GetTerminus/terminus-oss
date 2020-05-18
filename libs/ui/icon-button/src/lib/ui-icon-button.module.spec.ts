
import { async, TestBed } from '@angular/core/testing';

import { TsIconButtonModule } from './ui-icon-button.module';

describe(`TsIconButtonModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsIconButtonModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsIconButtonModule).toBeDefined();
  });
});

