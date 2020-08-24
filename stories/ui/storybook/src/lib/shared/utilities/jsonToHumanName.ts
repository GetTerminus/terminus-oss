/**
 * Convert a JSON path to a human name
 *
 * @param path - The path to convert
 * @returns The new name
 */
export function jsonToHumanName(path: string[]): string {
  const thirdItem = 2;
  const trimmed = path.slice(thirdItem, path.length);
  if (trimmed.length > 1) {
    return `${trimmed[0]}: ${trimmed[1]}`;
  }
  return `${trimmed[0]}`;
}
