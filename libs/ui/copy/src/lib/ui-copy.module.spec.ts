
import { async, TestBed } from '@angular/core/testing';

import { TsCopyModule } from './ui-copy.module';

describe(`TsCopyModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsCopyModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsCopyModule).toBeDefined();
  });
});
