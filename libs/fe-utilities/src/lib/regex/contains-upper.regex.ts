/**
 * Define a regex to validate a string contains at least one uppercase letter
 */
export const containsUppercaseRegex = /(.*[A-Z].*)/;


/**
 * Create a regex that requires a minimum amount of uppercase characters
 *
 * @example
 * const reg = createContainsUppercaseRegex(2);
 * reg.test('aBc#1d') // Returns false
 * reg.test('Abc#12D') // Returns true
 *
 * @param minUppercaseCount - The minimum amount of uppercase characters required
 * @returns The regex
 */
export const createContainsUppercaseRegex = (minUppercaseCount: number): RegExp => new RegExp(`(.*[A-Z].*){${minUppercaseCount},}`);
