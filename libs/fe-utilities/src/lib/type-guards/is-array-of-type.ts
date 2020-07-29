import { isFunction } from './is-function';

/**
 * Determine if all array elements are of a certain type
 *
 * @param x - The array to test
 * @param guard - The function to test for the specific type
 * @returns The result
 *
 * @example
 * isArrayOfType<number>([1, 5], isNumber)     // Returns: true
 * isArrayOfType<number>([1, 'foo'], isNumber) // Returns: false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isArrayOfType<T>(x: any[], guard: (y: any) => y is T): x is T[] {
  if (!guard || !isFunction(guard)) {
    return false;
  }
  for (const value of x) {
    if (!guard(value)) {
      return false;
    }
  }
  return true;
}
