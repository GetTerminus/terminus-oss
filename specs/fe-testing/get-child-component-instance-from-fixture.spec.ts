import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { getChildComponentInstanceFromFixture } from '@terminus/fe-testing';

@Component({
  selector: `ts-test`,
  template: `<h1>foo</h1>`,
})
class TestComponent {
  public myString = 'foo';
}

@Component({ template: `<ts-test></ts-test>` })
class TestHostComponent {}

describe(`getChildComponentInstanceFromFixture`, function() {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        TestHostComponent,
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
  });

  test(`should return the component instance`, () => {
    const instance: TestComponent = getChildComponentInstanceFromFixture(fixture, TestComponent);
    expect(instance.myString).toEqual('foo');
  });
});
