
import { async, TestBed } from '@angular/core/testing';

import { TsPipesModule } from './ui-pipes.module';

describe(`TsPipesModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsPipesModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsPipesModule).toBeDefined();
  });
});
