import { isNull } from '../type-guards/is-null';
import { isUndefined } from '../type-guards/is-undefined';

/**
 * Helper function to determine if input is unset.
 *
 * @param x - the input being tested
 * @returns boolean
 *
 * @example
 * isUnset(null);      // Returns: true
 * isUnset(undefined); // Returns: true
 * isUnset('hello');   // Returns: false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isUnset = (x: any): boolean => isNull(x) || isUndefined(x);
