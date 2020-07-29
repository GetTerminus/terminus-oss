/* eslint-disable @typescript-eslint/no-explicit-any, jsdoc/require-jsdoc, prefer-arrow/prefer-arrow-functions */
/**
 * Coerces a data-bound value (typically a string) to a date.
 *
 * @param value - The value to coerce to a Date
 * @param fallbackValue - The value to fall back to if the passed in value is not a valid date
 * @returns A Date object
 *
 * @example
 * coerceDateProperty('Wed, 21 Oct 2015 07:28:00 GMT'); // Returns: Date object
 * // Also supports a custom fallback value:
 * coerceDateProperty<boolean>('foo', false);           // Returns: false
 */
export function coerceDateProperty(value: any): Date;
export function coerceDateProperty<D>(value: any, fallbackValue: D): Date | D;
export function coerceDateProperty(value: any, fallbackValue: any = new Date()) {
  return isDateValue(value) ? new Date(value) : fallbackValue;
}

/**
 * Whether the provided value is considered a date.
 *
 * @private
 * @param value
 * @returns Boolean
 */
export const isDateValue = (value: any): value is Date => !isNaN(Date.parse(value));
