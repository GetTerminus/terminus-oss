/* eslint-disable deprecation/deprecation */
import { DOCUMENT } from '@angular/common';
import {
  Component,
  PLATFORM_ID,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { TsCookieService } from '@terminus/fe-utilities';

@Component({
  selector: 'test-host',
  template: ``,
})
export class TestHostComponent {}

const create = (isBrowser = true): any[] => {
  class DocumentMock {
    public cookies: Record<string, any> = {};

    public get cookie() {
      const output = [];
      for (const cookieName in this.cookies) {
        if (cookieName) {
          output.push(`${cookieName}=${this.cookies[cookieName]}`);
        }
      }
      return output.join('');
    }

    public set cookie(value) {
      const indexOfSeparator = value.indexOf('=');
      const key = value.substr(0, indexOfSeparator);
      const newValue = value.substring(indexOfSeparator + 1);
      this.cookies[key] = newValue;
    }
  }
  const providers: any[] = [
    TsCookieService,
    {
      provide: DOCUMENT,
      useClass: DocumentMock,
    },
  ];

  if (isBrowser) {
    providers.push({
      provide: PLATFORM_ID,
      useValue: 'browser',
    });
  } else {
    providers.push({
      provide: PLATFORM_ID,
      useValue: 'server',
    });
  }

  TestBed.configureTestingModule({
    declarations: [TestHostComponent],
    providers,
  }).compileComponents();

  return [TestBed.inject<TsCookieService>(TsCookieService), TestBed.inject<Document>(DOCUMENT)];
};

describe(`TsCookieService`, function() {
  test(`should be created properly`, function() {
    const [service, document] = create();
    expect(service).toBeTruthy();
  });

  describe(`set`, function() {
    test(`should create a minimal cookie with name & value`, function() {
      const [service, document] = create();
      service.set('foo', 'bar');

      expect(document.cookie).toEqual(`foo=bar;`);
    });

    test(`should set expires from a number if it exists`, function() {
      const [service, document] = create();
      service.set('bar', 'baz', 2);
      const expectedDate = new Date(new Date().getTime() + (2 * 1000 * 60 * 60 * 24)).toUTCString();

      expect(document.cookie).toEqual(`bar=baz;expires=${expectedDate};`);
    });

    test(`should set expires from a Date if it exists`, function() {
      const [service, document] = create();
      const date = new Date();
      service.set('foo', 'bar', date);

      expect(document.cookie).toEqual(`foo=bar;expires=${date.toUTCString()};`);
    });

    test(`should set path if it exists`, function() {
      const [service, document] = create();
      service.set('baz', 'bing', undefined, 'a/b/c');

      expect(document.cookie).toEqual(`baz=bing;path=a/b/c;`);
    });

    test(`should set domain if it exists`, function() {
      const [service, document] = create();
      service.set('bing', 'boom', undefined, undefined, 'test.com');

      expect(document.cookie).toEqual(`bing=boom;domain=test.com;`);
    });

    test(`should set secure if true`, function() {
      const [service, document] = create();
      service.set('bar', 'baz', undefined, undefined, undefined, true);

      expect(document.cookie).toEqual(`bar=baz;secure;`);
    });

    test(`should not set secure if false`, function() {
      const [service, document] = create();
      service.set('foo', 'bar', undefined, undefined, undefined, false);

      expect(document.cookie).toEqual(`foo=bar;`);
    });

    test(`should set same site if it exists`, function() {
      const [service, document] = create();
      service.set('bar', 'baz', undefined, undefined, undefined, undefined, 'Strict');

      expect(document.cookie).toEqual(`bar=baz;sameSite=Strict;`);
    });

    test(`should set all items`, function() {
      const [service, document] = create();
      const date = new Date();
      service.set('baz', 'bing', date, 'a/b/c', 'test.com', true, 'Lax');

      expect(document.cookie).toEqual(`baz=bing;expires=${date.toUTCString()};path=a/b/c;domain=test.com;secure;sameSite=Lax;`);
    });

    test(`should return undefined without setting if the document is inaccessible`, function() {
      const [service, document] = create(false);
      expect(service.set('foo', 'bar')).toEqual(undefined);
      expect(document.cookie).toEqual('');
    });
  });

  describe(`check`, function() {
    test(`should verify if a cookie exists`, function() {
      const [service, document] = create();
      service.set('foo', 'bar');
      expect(document.cookie).toEqual(`foo=bar;`);

      expect(service.check('foo')).toEqual(true);
    });

    test(`should return false if the document is inaccessible`, function() {
      const [service] = create(false);
      expect(service.check('foo')).toEqual(false);
    });
  });

  describe(`get`, function() {
    test(`should return a cookie if it exists`, function() {
      const [service, document] = create();
      service.set('foo', 'bar');
      service.set('baz', 'bing');

      expect(document.cookie).toEqual(`foo=bar;baz=bing;`);
      expect(service.get('foo')).toEqual(`bar`);
      expect(service.get('baz')).toEqual(`bing`);
    });

    test(`should return an empty string if no cookie is found`, function() {
      const [service] = create();

      expect(service.get('foo')).toEqual('');
    });

    test(`should return an empty string if the document is inaccessible`, function() {
      const [service] = create(false);

      expect(service.get('foo')).toEqual('');
    });
  });

  describe(`getAll`, function() {
    test(`should return an object containing all cookies`, function() {
      const [service] = create();
      service.set('foo', 'bar');
      service.set('baz', 'bing');

      const match = {
        foo: 'bar',
        baz: 'bing',
      };
      expect(service.getAll()).toEqual(match);
    });

    test(`should return an empty object if the document is inaccessible`, function() {
      const [service] = create(false);

      expect(service.getAll()).toEqual({});
    });
  });

  describe(`deleteAll`, function() {
    test(`should overwrite all cookies for deletion`, function() {
      const [service, document] = create();
      service.set('foo', 'bar');
      service.set('baz', 'bing');

      expect(document.cookie).toEqual(`foo=bar;baz=bing;`);

      service.deleteAll();
      const date = new Date('Thu, 01 Jan 1970 00:00:01 GMT').toUTCString();
      expect(document.cookie).toEqual(`foo=;expires=${date};baz=;expires=${date};`);
    });

    test(`should return undefined if the document is inaccessible`, function() {
      const [service, document] = create(false);
      expect(service.deleteAll()).toEqual(undefined);
    });
  });

  describe(`delete`, function() {
    test(`should return undefined if the document is inaccessible`, function() {
      const [service] = create(false);

      expect(service.delete('foo')).toEqual(undefined);
    });
  });
});
