
import { async, TestBed } from '@angular/core/testing';

import { TsLinkModule } from './ui-link.module';

describe(`UiLinkModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsLinkModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsLinkModule).toBeDefined();
  });
});
