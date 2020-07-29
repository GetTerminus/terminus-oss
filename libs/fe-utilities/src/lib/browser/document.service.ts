import { Injectable } from '@angular/core';


/**
 * Return the native document object
 *
 * @returns The native document object
 */
export const originalDocument = (): Document => document;


/**
 * Define a service that exposes the DOCUMENT object
 */
@Injectable({ providedIn: 'root' })
export class TsDocumentService {

  /**
   * Return a function that returns the native document object
   *
   * @returns The function that returns the native document object
   */
  public get document() {
    return originalDocument();
  }

}
