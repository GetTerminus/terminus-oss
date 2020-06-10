import {
  async,
  TestBed,
} from '@angular/core/testing';

import { TsInputModule } from './ui-input.module';

describe(`TsInputModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsInputModule],
    }).compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsInputModule).toBeDefined();
  });
});
