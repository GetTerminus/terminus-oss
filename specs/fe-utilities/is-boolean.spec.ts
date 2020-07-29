import { isBoolean } from '@terminus/fe-utilities';

describe(`isBoolean`, function() {
  const validBooleans: any[] = [
    true,
    false,
    // eslint-disable-next-line no-new-wrappers
    new Boolean(true),
  ];

  const invalidBooleans: any[] = [
    null,
    undefined,
    'foo',
    [],
    {},
    () => true,
  ];

  test(`should return true for a boolean value`, () => {
    for (const test of validBooleans) {
      expect(isBoolean(test)).toEqual(true);
    }
  });

  test(`should return false for a non-boolean value`, () => {
    for (const test of invalidBooleans) {
      expect(isBoolean(test)).toEqual(false);
    }
  });
});
