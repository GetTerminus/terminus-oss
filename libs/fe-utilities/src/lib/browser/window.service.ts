import { Injectable } from '@angular/core';


/**
 * Return the native window object
 *
 * @returns The native window object
 */
const realWindow = (): Window => window;


/**
 * Define a service that exposes the native window object
 */
@Injectable({ providedIn: 'root' })
export class TsWindowService {
  /**
   * Return a function that returns the native window object
   *
   * @returns The function that returns the native window object
   */
  public get nativeWindow(): Window {
    return realWindow();
  }
}
