import { PlatformModule } from '@angular/cdk/platform';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Type,
  ViewChild,
} from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { KEYS } from '@terminus/ngx-tools/keycodes';
import {
  createComponent as createComponentInner,
  dispatchKeyboardEvent,
} from '@terminus/ngx-tools/testing';

import * as testComponents from '../test-components';
import {
  TsDrawerComponent,
  TsDrawerFooterComponent,
  TsDrawerHeaderComponent,
  TsDrawerModule,
} from '../ui-drawer.module';

describe(`drawer`, () => {
  let fixture: ComponentFixture<any>;

  /**
   * Create test host component
   *
   * @param component
   */
  function createComponent<T>(component: Type<T>): ComponentFixture<T> {
    const moduleImports = [
      BrowserAnimationsModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatRippleModule,
      ScrollingModule,
      PlatformModule,
      TsDrawerModule,
    ];

    return createComponentInner(component, undefined, moduleImports);
  }

  describe(`TsDrawerComponent`, () => {
    let testComponent;
    let drawerNativeElement;
    let drawerDebugElement;
    let drawer;

    /**
     * Set up test env
     *
     * @param component
     */
    function setup<T>(component) {
      fixture = createComponent<T>(component);
      fixture.detectChanges();
      testComponent = fixture.debugElement.componentInstance;
      drawerDebugElement = fixture.debugElement.query(By.directive(TsDrawerComponent));
      drawerNativeElement = drawerDebugElement.nativeElement;
      drawer = fixture.debugElement.query(By.directive(TsDrawerComponent)).componentInstance;
    }

    describe(`basic behaviors`, () => {
      test(`should add ts-drawer class`, () => {
        setup(testComponents.SimpleDrawer);
        expect(drawerNativeElement.classList).toContain('ts-drawer');
      });

      test(`should set default size `, fakeAsync(() => {
        setup(testComponents.SimpleDrawer);
        fixture.detectChanges();
        expect(parseFloat(drawerNativeElement.style.width)).toEqual(3.75);

        drawer.expand();
        fixture.detectChanges();
        tick();
        expect(parseFloat(drawerNativeElement.style.width)).toEqual(12.5);
      }));

      test(`should set size based on inputs`, fakeAsync(() => {
        setup(testComponents.SimpleDrawer);
        fixture.detectChanges();
        testComponent.collapsedSize = '3rem';
        testComponent.expandedSize = '14rem';
        fixture.detectChanges();

        expect(parseFloat(drawerNativeElement.style.width)).toEqual(3);
        drawer.expand();
        fixture.detectChanges();
        tick();
        expect(parseFloat(drawerNativeElement.style.width)).toEqual(14);
      }));

      test('should resolve the open method promise with the new state of the drawer', fakeAsync(() => {
        setup(testComponents.SimpleDrawer);
        fixture.detectChanges();

        drawer.expand().then(result => expect(result).toBe('open'));
        fixture.detectChanges();
        tick();
      }));
    });

    test('should close when pressing escape', fakeAsync(() => {
      setup(testComponents.BasicDrawer);

      fixture.detectChanges();

      const component = fixture.debugElement.componentInstance;
      const drawerElement = fixture.debugElement.query(By.directive(TsDrawerComponent));

      drawerElement.componentInstance.expand();
      fixture.detectChanges();
      tick();

      expect(component.openCount).toBe(1);
      expect(component.openStartCount).toBe(1);
      expect(component.closeCount).toBe(0);
      expect(component.closeStartCount).toBe(0);

      const event = dispatchKeyboardEvent(drawerElement.nativeElement, 'keydown', KEYS.ESCAPE);
      fixture.detectChanges();
      flush();

      expect(component.closeCount).toBe(1);
      expect(component.closeStartCount).toBe(1);
      expect(event.defaultPrevented).toBe(true);
    }));

    describe(`header and footer`, () => {
      test(`should have header and footer set`, fakeAsync(() => {
        setup(testComponents.DrawerWithHeaderAndFooter);
        fixture.detectChanges();
        const drawerElement = fixture.debugElement.query(By.directive(TsDrawerComponent));
        drawerElement.componentInstance.expand();
        fixture.detectChanges();
        tick();
        const headerElement = fixture.debugElement.query(By.directive(TsDrawerHeaderComponent));
        const footerElement = fixture.debugElement.query(By.directive(TsDrawerFooterComponent));
        expect(headerElement.nativeElement.textContent.trim()).toEqual('HEADER');
        expect(footerElement.nativeElement.textContent.trim()).toEqual('FOOTER');
      }));
    });
  });
});
