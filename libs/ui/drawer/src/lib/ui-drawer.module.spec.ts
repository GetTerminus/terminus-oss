
import { async, TestBed } from '@angular/core/testing';

import { TsDrawerModule } from './ui-drawer.module';

describe(`TsDrawerModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsDrawerModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsDrawerModule).toBeDefined();
  });
});
