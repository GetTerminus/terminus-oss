/**
 * Sourced from MIT Licensed Library
 * https://github.com/7leads/ngx-cookie-service
 */
import {
  DOCUMENT,
  isPlatformBrowser,
} from '@angular/common';
import {
  Inject,
  Injectable,
  InjectionToken,
  PLATFORM_ID,
} from '@angular/core';

const MS_IN_SECONDS = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MS_IN_DAY = MS_IN_SECONDS * SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY;


/**
 * A service to manage browser cookies
 */
@Injectable({ providedIn: 'root' })
export class TsCookieService {
  private readonly documentIsAccessible: boolean;
  private readonly document: Document;

  constructor(
    // HACK: This `any` is required. See comment inside constructor.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(DOCUMENT) private _document: any,
    @Inject(PLATFORM_ID) private platformId: InjectionToken<Object>,
  ) {
    // HACK: The angular compiler doesn't understand the type `Document` when determining the metadata for injectable parameters.
    // So we are using `any` for the injection signature (making Angular happy), but coercing to a TypeScript type within the class.
    // See https://github.com/angular/angular/issues/20351
    this.document = _document as Document;
    // The PLATFORM_ID allows us to check if we're in a browser
    this.documentIsAccessible = isPlatformBrowser(platformId);
  }

  /**
   * Set a cookie
   *
   * @param name - Cookie name
   * @param value - Cookie value
   * @param expires - Number of days until the cookies expires or an actual `Date`
   * @param path - Cookie path
   * @param domain - Cookie domain
   * @param secure - Secure flag
   * @param sameSite - OWASP sameSite token `Lax` or `Strict`
   */
  public set(
    name: string,
    value: string,
    expires?: number | Date,
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite?: 'Lax' | 'Strict',
  ): void {
    if (!this.documentIsAccessible) {
      return;
    }

    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)};`;

    if (expires) {
      if (typeof expires === 'number') {
        const dateExpires: Date = new Date(new Date().getTime() + (expires * MS_IN_DAY));

        cookieString += `expires=${dateExpires.toUTCString()};`;
      } else {
        cookieString += `expires=${expires.toUTCString()};`;
      }
    }

    if (path) {
      cookieString += `path=${path};`;
    }

    if (domain) {
      cookieString += `domain=${domain};`;
    }

    if (secure) {
      cookieString += 'secure;';
    }

    if (sameSite) {
      cookieString += `sameSite=${sameSite};`;
    }

    this.document.cookie = cookieString;
  }

  /**
   * Verify if a cookie exists
   *
   * @param name - Cookie name
   * @returns boolean
   */
  public check(name: string): boolean {
    if (!this.documentIsAccessible) {
      return false;
    }

    const regExp: RegExp = this.getCookieRegExp(encodeURIComponent(name));
    return regExp.test(this.document.cookie);
  }

  /**
   * @param name - Cookie name
   * @returns any
   */
  public get(name: string): string {
    if (this.documentIsAccessible && this.check(name)) {
      const regExp: RegExp = this.getCookieRegExp(encodeURIComponent(name));
      const result: RegExpExecArray | null = regExp.exec(this.document.cookie);

      return result ? decodeURIComponent(result[1]) /* istanbul ignore next - Unreachable */ : '';
    }
    return '';
  }

  /**
   * Get all cookies
   *
   * @returns Object containing all cookies
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getAll(): Record<string, any> {
    if (!this.documentIsAccessible) {
      return {};
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cookies: Record<string, any> = {};
    const document = this.document;

    // istanbul ignore else
    if (document.cookie && document.cookie !== '') {
      const split: string[] = document.cookie.split(';').filter(v => v !== '');

      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < split.length; i += 1) {
        const currentCookie: string[] = split[i].split('=');
        currentCookie[0] = currentCookie[0].replace(/^ /, '');
        cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
      }
    }

    return cookies;
  }

  /**
   * Delete a cookie
   *
   * NOTE: This clears the value and sets the cookie as expired. The browser will delete the expired cookie the next time a request
   * is made to the domain.
   *
   * @param name - Cookie name
   * @param path - Cookie path
   * @param domain - Cookie domain
   */
  public delete(name: string, path?: string, domain?: string): void {
    if (!this.documentIsAccessible) {
      return;
    }
    this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain);
  }

  /**
   * Delete all cookies
   *
   * @param path - Cookie path
   * @param domain - Cookie domain
   */
  public deleteAll(path?: string, domain?: string): void {
    if (!this.documentIsAccessible) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cookies: Record<string, any> = this.getAll();

    for (const cookieName in cookies) {
      // istanbul ignore else
      if (cookies.hasOwnProperty(cookieName)) {
        this.delete(cookieName, path, domain);
      }
    }
  }

  /**
   * Get a regular expression based on a cookie name
   *
   * @param name - Cookie name
   * @returns RegExp
   */
  private getCookieRegExp(name: string): RegExp {
    const escapedName: string = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
    return new RegExp(`(?:^${escapedName}|;\\s*${escapedName})=(.*?)(?:;|$)`, 'g');
  }

}
