import {
  async,
  TestBed,
} from '@angular/core/testing';

import { TsSpacingModule } from './ui-spacing.module';

describe(`TsSpacingModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsSpacingModule],
    }).compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsSpacingModule).toBeDefined();
  });
});
