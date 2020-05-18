
import { async, TestBed } from '@angular/core/testing';

import { TsNavigationModule } from './ui-navigation.module';

describe(`TsNavigationModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsNavigationModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsNavigationModule).toBeDefined();
  });
});
