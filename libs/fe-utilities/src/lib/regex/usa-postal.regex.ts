/**
 * Define a regex to verify a US postal code
 *
 * Matches `12345` and `12345-1234`
 */
export const usaPostalRegex = /^[0-9]{5}(-[0-9]{4})?$/;
