import { isNull } from '@terminus/fe-utilities';

describe(`isNull`, function() {
  const itemsShouldReturnFalse = [
    undefined,
    2,
    'foo',
    false,
  ];

  test(`should should return false`, function() {
    for (const value of itemsShouldReturnFalse) {
      expect(isNull(value)).toEqual(false);
    }
    expect.assertions(itemsShouldReturnFalse.length);
  });

  test(`should return true when passed null`, () => {
    expect(isNull(null)).toEqual(true);
  });
});
