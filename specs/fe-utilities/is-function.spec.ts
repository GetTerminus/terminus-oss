import { isFunction } from '@terminus/fe-utilities';

describe(`isFunction`, () => {
  const validFunctions: any[] = [
    () => true,
    () => void 0,
  ];

  const invalidFunctions: any = [
    'foo',
    1,
    [1, 2],
    {},
    null,
    undefined,
  ];

  test(`should return true for functions`, () => {
    for (const test of validFunctions) {
      expect(isFunction(test)).toEqual(true);
    }
  });

  test(`should return false for non-functions`, () => {
    for (const test of invalidFunctions) {
      expect(isFunction(test)).toEqual(false);
    }
  });
});
