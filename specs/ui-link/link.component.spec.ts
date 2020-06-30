import {
  Component,
  ViewChild,
} from '@angular/core';
import {
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { createComponent } from '@terminus/ngx-tools/testing';
import {
  TsLinkModule,
  TsLinkComponent,
} from '@terminus/ui-link';
import { TsStyleThemeTypes } from '@terminus/ui-utilities';

@Component({
  template: `
    <ts-link
      [destination]="destination"
      [fragment]="fragment"
      [isExternal]="isExternal"
      [tabIndex]="tabIndex"
      [theme]="theme"
    >My Link Text</ts-link>
  `,
})
class TestHostComponent {
  destination!: undefined | string | string[];
  fragment!: undefined | string;
  isExternal!: boolean;
  tabIndex!: number | undefined;
  theme: TsStyleThemeTypes = 'primary';

  @ViewChild(TsLinkComponent, { static: true })
  linkComponent!: TsLinkComponent;
}

describe(`TsLinkComponent`, function() {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let link: HTMLElement;
  let emailLink: HTMLElement;
  let linkComponent: TsLinkComponent;

  beforeEach(async(() => {
    fixture = createComponent(TestHostComponent, [], [TsLinkModule, RouterTestingModule]);
    component = fixture.componentInstance;
    linkComponent = component.linkComponent;
    fixture.detectChanges();
  }));

  test(`should exist`, () => {
    expect(linkComponent).toBeTruthy();
  });

  describe(`isInternal`, () => {
    test(`should default and retrieve`, () => {
      link = fixture.debugElement.query(By.css('.c-link')).nativeElement;
      component.isExternal = false;
      component.destination = ['/#'];

      expect(link.classList).toContain('c-link--internal');
    });

    describe(`fragment`, function() {
      test(`should correctly add the fragment`, function() {
        fixture.componentInstance.destination = ['foo', 'bar'];
        fixture.componentInstance.fragment = 'fooBar-bing';
        fixture.detectChanges();
        link = fixture.debugElement.query(By.css('.ts-link')).nativeElement;

        const href = fixture.debugElement.query(By.css('a')).nativeElement.getAttribute('href');
        expect(href).toEqual('/foo/bar#fooBar-bing');
      });

      test(`should use a route to the current page if none is passed in`, function() {
        fixture.componentInstance.fragment = 'fooBar-bing';
        fixture.detectChanges();
        link = fixture.debugElement.query(By.css('.ts-link')).nativeElement;

        const href = fixture.debugElement.query(By.css('a')).nativeElement.getAttribute('href');
        expect(href).toEqual('/#fooBar-bing');
      });
    });
  });

  describe(`isExternal`, () => {
    test(`should set and retrieve`, () => {
      component.destination = 'www.google.com';
      component.isExternal = true;
      fixture.detectChanges();
      link = fixture.debugElement.query(By.css('.c-link')).nativeElement;

      expect(link.classList).toContain('c-link--external');
      expect(link.children[0].textContent).toContain('open_in_new');
      expect(link.getAttribute('rel')).toEqual('noopener');
    });
  });

  describe(`showExternalIcon`, () => {
    test(`should not show external icon when it is an email or phone`, () => {
      component.destination = 'mailto: support@comcast.com';
      component.isExternal = true;
      fixture.detectChanges();
      emailLink = fixture.debugElement.query(By.css('.c-link')).nativeElement;
      expect(emailLink.classList).toContain('c-link--external');

      component.destination = 'tel: 18003256789';
      fixture.detectChanges();
      link = fixture.debugElement.query(By.css('.c-link')).nativeElement;
      expect(link.classList).toContain('c-link--external');

      const externalLink = fixture.debugElement.query(By.css('.ts-icon'));
      expect(externalLink).toBeFalsy();
    });
  });

  describe(`tabIndex`, () => {
    test(`should default to 0 and be set`, () => {
      expect(link.tabIndex).toEqual(0);

      component.tabIndex = 9;
      fixture.detectChanges();
      link = fixture.debugElement.query(By.css('.c-link')).nativeElement;

      expect(link.tabIndex).toEqual(9);
    });
  });

  describe(`theme`, function() {
    test(`should set the appropriate class`, function() {
      link = fixture.debugElement.query(By.css('.ts-link')).nativeElement;

      expect(link.classList).toContain('ts-link--primary');

      component.theme = 'accent';
      fixture.detectChanges();
      link = fixture.debugElement.query(By.css('.ts-link')).nativeElement;

      expect(link.classList).not.toContain('ts-link--primary');
      expect(link.classList).toContain('ts-link--accent');
      expect.assertions(3);
    });
  });
});
