import {
  async,
  TestBed,
} from '@angular/core/testing';

import { TsLoginFormModule } from './ui-login-form.module';

describe(`TsLoginFormModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsLoginFormModule],
    }).compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsLoginFormModule).toBeDefined();
  });
});
