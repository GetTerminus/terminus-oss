import { isUndefined } from './is-undefined';

/**
 * Determine if the item has a value
 *
 * @param x - The value being tested
 * @returns The result
 *
 * @example
 * isSet<string>('hi')   // Returns: true
 * isSet<number>(void 0) // Returns: false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isSet = <T>(x: any): x is T => !isUndefined(x);
