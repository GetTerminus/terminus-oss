import { Component } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { faHome } from '@fortawesome/pro-solid-svg-icons/faHome';

import { createComponent } from '@terminus/fe-testing';
import { TsIconButtonModule } from '@terminus/ui-icon-button';

@Component({
  template: `
    <ts-icon-button
      actionName="Menu"
      buttonType="button"
      [icon]="icon"
      [isDisabled]="false"
    ></ts-icon-button>
  `,
})
class TestHostComponent {
  icon = faHome;
}

describe(`TsIconButtonComponent`, function() {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let iconButton: HTMLElement;

  beforeEach(() => {
    fixture = createComponent(TestHostComponent, [], [TsIconButtonModule]);
    component = fixture.componentInstance;
    fixture.detectChanges();
    iconButton = fixture.debugElement.query(By.css('.c-icon-button ')).nativeElement as HTMLElement;
  });

  test(`should exist`, () => {
    expect(component).toBeTruthy();
    expect(iconButton).toBeTruthy();
  });

  test(`should contain icon`, () => {
    expect(fixture.debugElement.query(By.css('fa-icon'))).toBeTruthy();
  });
});
