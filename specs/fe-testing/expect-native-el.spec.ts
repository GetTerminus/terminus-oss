import { Component } from '@angular/core';
import {
  async,
  TestBed,
} from '@angular/core/testing';

import { expectNativeEl } from '@terminus/fe-testing';

@Component({ template: `<div class="foo"></div>` })
class TestComponent {}

describe(`expectNativeEl`, function() {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
      ],
    }).compileComponents();
  }));

  test(`should return a DebugElement`, () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    expectNativeEl(fixture).toBeTruthy();
  });
});
