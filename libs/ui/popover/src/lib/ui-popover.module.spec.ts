
import { async, TestBed } from '@angular/core/testing';

import { TsPopoverModule } from './ui-popover.module';

describe(`TsPopoverModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsPopoverModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsPopoverModule).toBeDefined();
  });
});
