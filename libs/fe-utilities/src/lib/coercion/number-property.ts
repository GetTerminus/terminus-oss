/* eslint-disable @typescript-eslint/no-explicit-any, jsdoc/require-jsdoc, prefer-arrow/prefer-arrow-functions */
/**
 * Coerces a data-bound value (typically a string) to a number.
 *
 * @param value - The value to coerce to a number
 * @param fallbackValue - The value to return if the value is not a valid number
 *
 * @example
 * coerceNumberProperty('12');                  // Returns: 12
 * coerceNumberProperty<boolean>('foo', false); // Returns: false
 */
export function coerceNumberProperty(value: any): number;
export function coerceNumberProperty<D>(value: any, fallback: D): number | D;
export function coerceNumberProperty(value: any, fallbackValue = 0) {
  return isNumberValue(value) ? Number(value) : fallbackValue;
}

/**
 * Whether the provided value is considered a number.
 *
 * ParseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
 * and other non-number values as NaN, where Number just uses 0) but it considers the string
 * '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
 * NOTE: TypeScript seems to consider `parseFloat(value)` unsafe. In my tests there are no values which `parseFloat`
 * cannot handle safely.
 *
 * @private
 * @param value
 */
export const isNumberValue = (value: any): boolean => !isNaN(parseFloat(value)) && !isNaN(Number(value));
