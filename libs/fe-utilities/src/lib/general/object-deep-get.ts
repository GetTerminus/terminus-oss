
/**
 * Helper function to get an object with deep keys
 *
 * @param object - The object to query.
 * @param path - The string path of the property to get.
 * @param defaultValue - (optional) - The value returned for undefined resolved values.
 * @returns The updated object
 *
 * @example
 * const myObj = {foo: {bar: 'baz', bing: 'bang'}};
 * objectDeepGet(myObj, 'foo.bar')              // Returns: 'baz'
 * objectDeepGet(myObj, 'does.not.exist', 'hi') // Returns: 'hi'
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function objectDeepGet(object: Record<string, any>, path: string, defaultValue?: any): any {
  if (!object) {
    return defaultValue;
  }

  const keys = path.split('.');
  object = object[keys[0]];

  if (object && keys.length > 1) {
    return objectDeepGet(object, keys.slice(1).join('.'), defaultValue);
  }

  if (object === undefined && defaultValue) {
    return defaultValue;
  }

  return object;
}

