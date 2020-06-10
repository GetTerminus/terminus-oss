import {
  async,
  TestBed,
} from '@angular/core/testing';

import { TsTabsModule } from './ui-tabs.module';

describe(`TsTabsModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsTabsModule],
    }).compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsTabsModule).toBeDefined();
  });
});
