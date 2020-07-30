import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  async,
  TestBed,
} from '@angular/core/testing';

import { queryFor } from '@terminus/fe-testing';

@Component({
  template: `
    <div class="foo"></div>
    <div id="bar" class="baz"></div>
  `,
})
class TestComponent {}

describe(`queryFor`, function() {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
    }).compileComponents();
  }));

  test(`should return a DebugElement`, () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const div1: DebugElement = queryFor(fixture, '.foo');
    const div2: DebugElement = queryFor(fixture, '#bar');

    expect(div1).toBeTruthy();
    expect(div1.nativeElement.classList).toContain('foo');

    expect(div2).toBeTruthy();
    expect(div2.nativeElement.classList).toContain('baz');
  });
});
