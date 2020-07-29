/**
 * Define a regex to verify a date
 *
 * Matches `3/7/18`, `3-7-18` and `03/07/2018`
 */
export const dateRegex = /^(0?[1-9]|1[012])[- \/.](0?[1-9]|[12][0-9]|3[01])[- \/.](19|20)?\d\d$/;
