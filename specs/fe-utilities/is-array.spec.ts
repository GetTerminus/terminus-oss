import { isArray } from '@terminus/fe-utilities';

describe(`isArray`, function() {
  const validArrays: any[] = [
    [],
    new Array(3),
    Array.from([1, 2, 3], x => x + x),
    Array.of('foo'),
  ];

  const invalidArrays: any[] = [
    {},
    'foo',
    2,
    true,
    null,
    undefined,
  ];

  test(`should return true for arrays`, () => {
    for (const test of validArrays) {
      expect(isArray(test)).toEqual(true);
    }
  });

  test(`should return false for non-arrays`, () => {
    for (const test of invalidArrays) {
      expect(isArray(test)).toEqual(false);
    }
  });
});
