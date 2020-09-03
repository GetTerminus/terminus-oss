import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';

describe(`SettingsService`, () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  test(`should exist`, () => {
    const service: SettingsService = TestBed.inject(SettingsService);
    expect(service).toBeTruthy();
  });
});
