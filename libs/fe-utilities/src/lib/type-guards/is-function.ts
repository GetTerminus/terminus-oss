/**
 * Determine if an item is a function
 *
 * NOTE: While this isn't the fastest performing test in every browser, it is the faster when averaged across the browsers we care about.
 *
 * @param x - The item to test
 * @returns The result
 *
 * @example
 * isFunction(() => {}); // Returns: true
 * isFunction('foo');    // Returns: false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isFunction = (x: any): x is Function => !!(x && x.constructor && x.call && x.apply);
