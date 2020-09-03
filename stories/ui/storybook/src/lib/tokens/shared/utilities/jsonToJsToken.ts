/**
 * Convert a JSON path to a JS token
 *
 * @param path - The path to convert
 * @param prefix
 * @returns The new token
 */
export const jsonToJsToken = (path: string[], prefix = 'ts'): string => `${prefix}_${path.join('_')}`.toUpperCase();
