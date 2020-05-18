
import { async, TestBed } from '@angular/core/testing';

import { TsExpansionPanelModule } from './ui-expansion-panel.module';

describe(`TsExpansionPanelModule`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsExpansionPanelModule],
    })
      .compileComponents();
  }));

  test(`should exist`, () => {
    expect(TsExpansionPanelModule).toBeDefined();
  });
});
