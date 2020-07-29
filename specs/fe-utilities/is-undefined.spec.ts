import { isUndefined } from '@terminus/fe-utilities';

describe(`isUndefined`, function() {
  const shouldReturnFalse = [
    null,
    60,
    'bar',
  ];

  test(`should return true when passed undefined`, () => {
    expect(isUndefined(void 0)).toEqual(true);
  });

  test(`should should return false`, function() {
    for (const value of shouldReturnFalse) {
      expect(isUndefined(value)).toEqual(false);
    }
    expect.assertions(shouldReturnFalse.length);
  });
});
