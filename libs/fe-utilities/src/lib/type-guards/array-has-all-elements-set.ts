import { isArray } from './is-array';
import { isNull } from './is-null';


/**
 * Determine if all items of an array are set to a type
 *
 * @param arr - The array to test
 * @returns The result
 *
 * @example
 * arrayHasAllElementsSet<number>([1, 4, 6])             // Returns: true
 * arrayHasAllElementsSet<number>([1, null, 6])          // Returns: false
 * arrayHasAllElementsSet<number, string>([1, 'foo', 8]) // Returns: true
 */
export function arrayHasAllElementsSet<A>(arr: [A | undefined | null]): arr is [A];
export function arrayHasAllElementsSet<A, B>(arr: [A | undefined | null, B | undefined | null]): arr is [A, B];
export function arrayHasAllElementsSet<A, B, C>(arr: [A | undefined | null, B | undefined | null, C | undefined | null]): arr is [A, B, C];
export function arrayHasAllElementsSet<A, B, C, D>(
  arr: [A | undefined | null, B | undefined | null, C | undefined | null, D | undefined | null],
): arr is [A, B, C, D];
/**
 * Check that all elements are set
 *
 * @param arr - The array
 * @returns Boolean
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function arrayHasAllElementsSet<T>(arr: any): arr is Array<T> {
  if (!isArray(arr)) {
    return false;
  }

  for (const item of arr) {
    if (isNull(item) || typeof item === 'undefined') {
      return false;
    }
  }

  return true;
}
