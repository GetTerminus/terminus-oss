import { isArray } from '../type-guards/is-array';
import { isBoolean } from '../type-guards/is-boolean';
import { isString } from '../type-guards/is-string';

/**
 * Helper function to parse an object with deep keys
 *
 * @param object - An object with key as string or string
 * @param keys - A string or array of strings
 * @returns String value at the lowest layer or object itself
 *
 * @example
 * objectDeepParse(myObject, ['foo', 'bar']) // Returns: myObject.foo.bar if found
 * objectDeepParse(myObject, 'foo.bar')      // Returns: myObject.foo.bar if found
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function objectDeepParse(object: Record<string, any> | string, keys: string | string[]): any {
  if (isString(object) || isBoolean(object) || !object) {
    return object;
  }

  keys = isArray(keys) ? keys : keys.split('.');
  object = object[keys[0]];

  if (object && keys.length > 1) {
    return objectDeepParse(object, keys.slice(1));
  }

  return object;
}
