
import { async, TestBed } from '@angular/core/testing';

import { TsFileUploadModule } from './ui-file-upload.module';

describe(`TsFileUploadModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsFileUploadModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsFileUploadModule).toBeDefined();
  });
});
