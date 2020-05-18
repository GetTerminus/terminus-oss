/**
 * Convert a JSON path to a Sass token
 *
 * @param path - The path to convert
 * @param prefix
 * @returns The new token
 */
export const jsonToSassToken = (path: string[], prefix = 'ts'): string => `${prefix}-${path.join('-')}`;
