
import { async, TestBed } from '@angular/core/testing';

import { TsConfirmationModule } from './ui-confirmation.module';

describe(`TsConfirmationModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsConfirmationModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsConfirmationModule).toBeDefined();
  });
});
