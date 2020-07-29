import { isSet } from '@terminus/fe-utilities';

describe(`isSet`, function() {
  const itemsShouldReturnTrue = [
    5,
    'bar',
    true,
    'true',
    false,
    'false',
    null,
  ];

  test(`should should return true`, function() {
    for (const value of itemsShouldReturnTrue) {
      expect(isSet(value)).toEqual(true);
    }
    expect.assertions(itemsShouldReturnTrue.length);
  });

  test(`should should return false`, function() {
    expect(isSet(undefined)).toEqual(false);
  });

  // TODO: Ensure correct types once we have a type check tool in place
  describe(`if type is passed along with input`, () => {
    test(`should return true when passed number`, () => {
      expect(isSet<number>(5)).toEqual(true);
    });

    test(`should return true when passed string`, () => {
      expect(isSet<string>('bar')).toEqual(true);
    });

    test(`should return false when passed undefined`, () => {
      expect(isSet<undefined>(undefined)).toEqual(false);
    });
  });
});
