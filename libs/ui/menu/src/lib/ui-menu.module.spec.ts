
import { async, TestBed } from '@angular/core/testing';

import { TsMenuModule } from './ui-menu.module';

describe(`TsMenuModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsMenuModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsMenuModule).toBeDefined();
  });
});
