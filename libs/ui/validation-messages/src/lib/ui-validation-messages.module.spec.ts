
import { async, TestBed } from '@angular/core/testing';

import { TsValidationMessagesModule } from './ui-validation-messages.module';

describe(`TsValidationMessagesModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsValidationMessagesModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsValidationMessagesModule).toBeDefined();
  });
});
