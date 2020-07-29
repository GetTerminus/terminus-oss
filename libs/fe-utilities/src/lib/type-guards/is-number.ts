/**
 * Determine if a value is a number
 *
 * @param value - The value to check
 * @returns The result
 *
 * @example
 * isNumber(2)   // Returns: true
 * isNumber('2') // Returns: true
 * isNumber('a') // Returns: false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isNumber = (value: any): value is number => !isNaN(parseFloat(value)) && !isNaN(Number(value));
