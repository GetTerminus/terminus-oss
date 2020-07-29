import { SimpleChanges } from '@angular/core';

import { objectDeepParse } from './object-deep-parse';


/**
 * Utility class to assist with pulling specific values from a `SimpleChanges` object.
 */
export class NgChangeObjectValueParser {
  /**
   * Function to parse previousValue from triggered by changes on ngOnChange
   *
   * @param changes - SimpleChanges
   * @param path - string
   * @returns lowest layer value or changes object itself when path cannot be parsed
   *
   * @example
   * valueParser.getOldValue(myChanges, 'my.path')
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static getOldValue(changes: SimpleChanges, path: string): any {
    const [keys, key] = this.parsePath(path);
    return (key && changes[key]) ? objectDeepParse(changes[key].previousValue, keys) : undefined;
  }


  /**
   * Function to parse currentValue from triggered by changes on ngOnChange
   *
   * @param changes - SimpleChanges
   * @param path - string
   * @returns lowest layer value or changes object itself when path cannot be parsed
   *
   * @example
   * valueParser.getNewValue(myChanges, 'my.path')
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static getNewValue(changes: SimpleChanges, path: string): any {
    const [keys, key] = this.parsePath(path);
    return (key && changes[key]) ? objectDeepParse(changes[key].currentValue, keys) : undefined;
  }


  /**
   * Function to parse path to get keys for each layer
   *
   * @param path - string
   * @returns an array of two elements, one being an array of all the keys except first one, one being the first key
   *
   * @example
   * valueParser.parsePath('my.path') // Returns: [['my'], 'path']
   */
  public static parsePath(path: string): [string[], string] {
    const keys = path.split('.');
    let key = keys.shift();

    if (!key) {
      key = keys[0];
    }
    return [keys, key];
  }
}
