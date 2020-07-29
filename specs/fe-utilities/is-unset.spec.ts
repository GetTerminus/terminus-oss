import { isUnset } from '@terminus/fe-utilities';

describe(`isUnset`, function() {
  test(`should return true when passed null`, () => {
    expect(isUnset(null)).toEqual(true);
  });

  test(`should return true when passed undefined`, () => {
    expect(isUnset(undefined)).toEqual(true);
  });

  test(`should return false when passed number`, () => {
    expect(isUnset(4)).toEqual(false);
  });

  test(`should return false when passed string`, () => {
    expect(isUnset('foo')).toEqual(false);
  });
});
