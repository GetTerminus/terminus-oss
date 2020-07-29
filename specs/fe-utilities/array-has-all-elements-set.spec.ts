import { arrayHasAllElementsSet } from '@terminus/fe-utilities';

describe('arrayHasAllElementsSet', function() {
  const validArrays = [
    [1, 'fop'],
    [1, false],
    [1, 0],
    [1, ''],
    [1, NaN],
  ] as any;

  const invalidData = [
    [1, null],
    [1, undefined],
    'foo',
    123,
    {},
  ] as any;

  test(`should return true for all valid arrays`, () => {
    for (const test of validArrays) {
      expect(arrayHasAllElementsSet(test)).toEqual(true);
    }
  });

  test(`should return false for all invalid arrays`, () => {
    for (const test of invalidData) {
      expect(arrayHasAllElementsSet(test)).toEqual(false);
    }
  });
});
