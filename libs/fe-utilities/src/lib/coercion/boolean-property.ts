/**
 * Coerces a data-bound value (typically a string) to a boolean.
 *
 * @param value - The value to coerce to a boolean
 * @returns The boolean
 *
 * @example
 * coerceBooleanProperty('true'); // Returns: true
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const coerceBooleanProperty = (value: any): boolean => value != null && `${value}` !== 'false';
