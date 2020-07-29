/**
 * Determine if a value is a boolean
 *
 * @param value - The value to test
 * @returns The result
 *
 * @example
 * isBoolean(true);  // Returns: true
 * isBoolean('foo'); // Returns: false
 */
export const isBoolean =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (value: any): value is boolean => value === true || value === false || Object.prototype.toString.call(value) === '[object Boolean]';
