import {
  async,
  TestBed,
} from '@angular/core/testing';

import { TsAutofocusModule } from './ui-autofocus.module';

describe('UiAutofocusModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsAutofocusModule],
    }).compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsAutofocusModule).toBeDefined();
  });
});
