/**
 * Helper function to return an array of values from an hash object
 *
 * @param keys - The array containing the key values (number|string) to retrieve from the hash
 * @param hash - The object to pull values from
 * @returns The array of values that match keys
 *
 * @example
 * const tactic1: MyType = {
 *   id: 1,
 *   name: 'tactic1',
 *   goal: 'goal1',
 * }
 * const tactic2: MyType = {
 *   id: 2,
 *   name: 'tactic2',
 *   goal: 'goal2',
 * }
 * const tactics = { 1: tactic1, 2: tactic2 }
 * returnValuesByKeys<MyType>([1], tactics) // Returns: `[tactic1]`
 */
export function returnValuesByKeys<T>(keys: Array<string | number>, hash: Record<string, T>): T[] {
  const stringyKeys: string[] = keys.map((id: number | string): string => id.toString());
  const values: T[] = [];

  for (const key of stringyKeys) {
    // istanbul ignore else
    if (hash[key]) {
      values.push(hash[key]);
    }
  }

  return values;
}
