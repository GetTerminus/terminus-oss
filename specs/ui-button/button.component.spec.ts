import { fakeAsync } from '@angular/core/testing';
import { Spectator } from '@ngneat/spectator';
import {
  createComponentFactory,
  createHostFactory,
  SpectatorHost,
} from '@ngneat/spectator/jest';

import {
  TsButtonModule,
  TsButtonComponent,
} from '@terminus/ui-button';

describe(`TsButtonComponent`, () => {
  describe(`Basic Setup`, () => {
    let spectator: Spectator<TsButtonComponent>;
    let rootElement: HTMLElement;
    const createComponent = createComponentFactory({
      component: TsButtonComponent,
      imports: [TsButtonModule],
      declareComponent: false,
    });

    beforeEach(() => {
      spectator = createComponent({
        props: {
          textContent: 'FooBar',
        },
      });
      rootElement = spectator.component.elementRef.nativeElement;
    });

    test(`should exist`, () => {
      expect(spectator.query('button')).toHaveClass('c-button');
    });

    describe(`theme`, () => {
      test(`should reflect the theme as a class`, () => {
        expect.assertions(4);
        expect(spectator.query('button')).toHaveClass('c-button--default');
        spectator.setInput('theme', 'secondary');
        expect(spectator.query('button')).toHaveClass('c-button--secondary');
        spectator.setInput('theme', 'warning');
        expect(spectator.query('button')).toHaveClass('c-button--warning');
        spectator.setInput('theme', 'alternate-primary');
        expect(spectator.query('button')).toHaveClass('c-button--alternate-primary');
      });

      test(`should fallback to the default theme`, () => {
        spectator.setInput('theme', 'secondary');
        expect(spectator.query('button')).toHaveClass('c-button--secondary');
        spectator.setInput('theme', undefined);
        expect(spectator.query('button')).toHaveClass('c-button--default');
      });
    });

    test(`should default to enabled and allow setting to disabled`, () => {
      expect(spectator.query('button')).not.toBeDisabled();
      spectator.setInput('isDisabled', true);
      expect(spectator.query('button')).toBeDisabled();
    });

    describe(`format`, () => {
      test(`should reflect the format as a class`, () => {
        expect(spectator.query('button')).toHaveClass('c-button--filled');
        spectator.setInput('format', 'collapsible');
        expect(spectator.query('button')).toHaveClass('c-button--collapsible');
      });

      test(`should default to 'filled' format if nothing is passed in`, () => {
        spectator.setInput('format', 'collapsible');
        expect(spectator.component.format).toEqual('collapsible');
        spectator.setInput('format', undefined);
        expect(spectator.component.format).toEqual('filled');
      });
    });

    describe(`progress`, () => {
      test(`should be disabled when progress is shown`, () => {
        expect(spectator.query('button')).not.toBeDisabled();
        spectator.setInput('showProgress', true);
        expect(spectator.query('button')).toBeDisabled();
        expect(spectator.query('.c-button__spinner')).toExist();
      });
    });

    describe(`button click`, () => {
      test(`should emit the click event`, () => {
        let output = void 0;
        spectator.output('clicked').subscribe(result => (output = result));

        expect(output).toBeUndefined();
        spectator.click(spectator.query('button'));
        expect(output).toBeTruthy();
      });

      test(`should not emit when interceptClick is true and store the original event`, () => {
        spectator.setInput('interceptClick', true);
        expect(spectator.component.originalClickEvent).not.toExist();
        let output = void 0;
        spectator.output('clicked').subscribe(result => (output = result));

        spectator.click(spectator.query('button'));
        expect(output).toBeUndefined();
        expect(spectator.component.originalClickEvent).toExist();
      });
    });

    describe(`ID`, function() {
      test(`should default to the UID`, () => {
        expect(spectator.query('button').getAttribute('id')).toEqual(expect.stringContaining('ts-button-'));
      });

      test(`should support a custom ID and fall back to UID if no value is passed`, () => {
        spectator.setInput('id', 'foo');
        expect(spectator.query('button')).toHaveAttribute('id', 'foo');
        spectator.setInput('id', undefined);
        expect(spectator.query('button').getAttribute('id')).toEqual(expect.stringContaining('ts-button-'));
      });
    });

    describe(`collapsible`, () => {
      test(`should set a collapse delay if none exists`, () => {
        expect(spectator.component.collapseDelay).toBeUndefined();
        spectator.setInput('format', 'collapsible');
        expect(spectator.component.collapseDelay).toEqual(4000);
      });

      test(`should not set a collapse delay if one is set by consumer`, () => {
        spectator.setInput('collapseDelay', 250);
        expect(spectator.component.collapseDelay).toEqual(250);
        spectator.setInput('format', 'collapsible');
        expect(spectator.component.collapseDelay).toEqual(250);
      });

      test(`should remove collapse delay if format is changed from collapsible`, () => {
        spectator.setInput('collapseDelay', 250);
        expect(spectator.component.collapseDelay).toEqual(250);
        spectator.setInput('format', 'filled');
        expect(spectator.component.collapseDelay).toBeUndefined();
      });

      test(`should collapse button after delay`, fakeAsync(() => {
        expect.assertions(4);
        expect(spectator.query('button')).not.toHaveClass('c-button--collapsed');
        expect(spectator.query('button')).not.toHaveClass('c-button--collapsible');
        spectator.setInput('format', 'collapsible');
        spectator.tick(2000);
        expect(spectator.query('button')).not.toHaveClass('c-button--collapsed');
        spectator.tick(10000);
        expect(spectator.query('button')).toHaveClass('c-button--collapsed');
      }));

      test(`should clear the timeout if the consumer sets the collapsed state`, fakeAsync(() => {
        spectator.setInput('format', 'collapsible');
        spectator.tick(1000);
        expect(spectator.query('button')).not.toHaveClass('c-button--collapsed');
        spectator.setInput('collapsed', true);
        expect(spectator.component.collapseSubscription$).toBeUndefined();
        expect(spectator.component.isCollapsed).toBeTruthy();
      }));
    });
  });

  describe(`content`, () => {
    let spectatorHost: SpectatorHost<TsButtonComponent>;
    const createHost = createHostFactory({
      component: TsButtonComponent,
      imports: [TsButtonModule],
      declareComponent: false,
    });

    test(`should allow content to be set through ng-content`, () => {
      spectatorHost = createHost(`<ts-button>Foo</ts-button>`);
      expect(spectatorHost.query('.c-button__content-ng-content')).toHaveText('Foo');
    });

    test(`should allow content to be set through the textContent input`, () => {
      spectatorHost = createHost(`<ts-button textContent="Bar"></ts-button>`);
      expect(spectatorHost.query('.c-button__content-input')).toHaveText('Bar');
    });
  });
});
