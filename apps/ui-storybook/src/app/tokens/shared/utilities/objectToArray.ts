/**
 * Convert a style object to an array of objects
 *
 * @param obj - The original object
 * @returns The array of objects
 */
export function objToArray(obj: Record<string, any>): Record<string, any>[] {
  if (!obj) {
    return [];
  }
  const keys = Object.keys(obj);
  const arr = [];
  for (const key of keys) {
    arr.push(obj[key]);
  }
  return arr;
}
