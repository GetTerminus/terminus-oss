/**
 * Determine if an item is an object
 *
 * @param x - The item to test
 * @returns The result
 *
 * @example
 * isObject({});    // Returns: true
 * isObject('foo'); // Returns: false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isObject = (x: any): x is object => Object.prototype.toString.call(x) === '[object Object]';
