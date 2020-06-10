import {
  async,
  TestBed,
} from '@angular/core/testing';

import { TsPaginatorModule } from './ui-paginator.module';

describe(`TsPaginatorModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsPaginatorModule],
    }).compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsPaginatorModule).toBeDefined();
  });
});
