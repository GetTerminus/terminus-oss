/**
 * Define a regex to validate a string contains at least one lowercase letter
 */
export const containsLowercaseRegex = /(.*[a-z].*)/;

/**
 * Create a regex that requires a minimum amount of lowercase characters
 *
 * @example
 * const reg = createContainsLowercaseRegex(3);
 * reg.test('aBC#1d') // Returns false
 * reg.test('aBC#12D') // Returns true
 *
 * @param minimum - The minimum amount of lowercase characters required
 * @returns The regex
 */
export const createContainsLowercaseRegex = (minimum: number): RegExp => new RegExp(`(.*[a-z].*){${minimum},}`);
