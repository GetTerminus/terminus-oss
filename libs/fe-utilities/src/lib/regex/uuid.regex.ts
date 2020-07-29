/**
 * Define a regex to test for a canonically formatted UUID that is Version 1 through 5 and is the appropriate Variant as per RFC4122.
 *
 * Matches: `f4ee5eed-ed19-3681-713e-907a23ed7858`
 */
export const uuidRegex = new RegExp(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/);
