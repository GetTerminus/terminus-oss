import {
  Component,
  ViewChild,
} from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { createComponent } from '@terminus/ngx-tools/testing';
import {
  TsIconButtonModule,
  TsIconButtonComponent,
} from '@terminus/ui-icon-button';

@Component({
  template: `
    <ts-icon-button
      actionName="Menu"
      buttonType="button"
      [isDisabled]="false"
    >delete_forever</ts-icon-button>
  `,
})
class TestHostComponent {
  @ViewChild(TsIconButtonComponent, { static: true })
  iconButtonComponent!: TsIconButtonComponent;
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
    const externalLink = fixture.debugElement.query(By.css('.ts-icon'));
    expect(externalLink).toBeTruthy();
  });
});
