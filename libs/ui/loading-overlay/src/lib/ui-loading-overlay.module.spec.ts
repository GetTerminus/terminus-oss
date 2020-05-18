
import { async, TestBed } from '@angular/core/testing';

import { TsLoadingOverlayModule } from './ui-loading-overlay.module';

describe(`TsLoadingOverlayModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsLoadingOverlayModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsLoadingOverlayModule).toBeDefined();
  });
});
