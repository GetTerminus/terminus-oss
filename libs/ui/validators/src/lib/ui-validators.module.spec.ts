import {
  async,
  TestBed,
} from '@angular/core/testing';

import { TsValidatorsModule } from './ui-validators.module';

describe(`TsValidatorsModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsValidatorsModule],
    }).compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsValidatorsModule).toBeDefined();
  });
});

