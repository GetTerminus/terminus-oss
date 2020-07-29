/**
 * Create an array with `null` & `undefined` values removed
 *
 * @param arr - The array to compact
 * @returns The compacted array
 *
 * @example
 * compactArray(['hi', null, 2, true, undefined]) // Returns: ['hi', 2, true]
 */
export function compactArray<T>(arr: (T | null | undefined)[]): T[] | undefined {
  if (!arr || arr.length < 1) {
    return undefined;
  }

  const valuesToReturn: T[] = [];

  arr.map(i => {
    if (i === null || i === undefined || '') {
      return;
    }
    valuesToReturn.push(i);
  });

  return valuesToReturn;
}
