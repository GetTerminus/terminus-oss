/**
 * Helper function to determine if input is undefined.
 *
 * @param input - the input being tested
 * @returns boolean
 *
 * @example
 * isUndefined(undefined) // Returns: true
 * isUndefined(null)      // Returns: false
 * isUndefined('foo')     // Returns: false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isUndefined = (input: any): input is undefined => input === undefined;

