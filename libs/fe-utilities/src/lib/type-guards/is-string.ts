/**
 * Determine if a value is a string
 *
 * @param x - The value to test
 * @returns The result
 *
 * @example
 * isString('foo'); // Returns: true
 * isString({});    // Returns: false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isString = (x: any): x is string => !!(typeof x === 'string' || x instanceof String);
