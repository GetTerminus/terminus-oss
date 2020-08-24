/**
 * Convert a JSON path to a string
 *
 * @param path - The path to convert
 * @returns The new token
 */
export const jsonPathToString = (path: string[]): string => `${path.join('.')}`;
