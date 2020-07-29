/**
 * Determine if an item is null
 *
 * @param x - The value to test
 * @returns The result
 *
 * @example
 * isNull(null) // Returns: true
 * isNull(1)    // Returns: false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isNull = (x: any): x is null => x === null;
