/**
 * Determine if an item is an Array
 *
 * NOTE: This is the fastest performer across all primary browsers.
 *
 * @param item - The item to test
 * @returns The result
 *
 * @example
 * isArray([1, 2]);                 // Returns: true
 * isArray<string>(['foo', 'bar']); // Returns: true
 * isArray('foo');                  // Returns: false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isArray = <T>(item: T[] | any): item is Array<T> => !!(item && item.constructor === Array);
