import { Component } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { createComponent } from '@terminus/ngx-tools/testing';

import { getDomAttribute } from '@terminus/fe-testing';

@Component({ template: `<div tsVerticalSpacing="small--2" id="foo" class="bar"></div>` })
class TestHostComponent {}

describe(`getDomAttribute`, function() {
  let fixture: ComponentFixture<TestHostComponent>;
  let el: HTMLElement;

  beforeEach(() => {
    fixture = createComponent(TestHostComponent, [], []);
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('#foo')).nativeElement as HTMLElement;
  });

  test(`should retrieve id`, () => {
    expect(getDomAttribute(el, 'id')).toEqual('foo');
  });

  test(`should retrieve class`, () => {
    expect(getDomAttribute(el, 'class')).toEqual('bar');
  });

  test(`should retrieve custom directive`, () => {
    expect(getDomAttribute(el, 'tsVerticalSpacing')).toEqual('small--2');
  });

  test('should return undefined if attribute is not present', () => {
    expect(getDomAttribute(el, 'name')).toEqual(undefined);
  });
});
