import { coerceDateProperty } from '@terminus/fe-utilities';

describe(`coerceDateProperty`, function() {
  const passInDate = new Date('2018-08-08');

  test(`should return current date or default value when undefined passed in`, () => {
    expect(coerceDateProperty(undefined).getDate()).toEqual(new Date().getDate());
    expect(coerceDateProperty(undefined, passInDate)).toBe(passInDate);
  });

  test(`should return current date or default value when null passed in`, () => {
    expect(coerceDateProperty(null).getDate()).toBe(new Date().getDate());
    expect(coerceDateProperty(null, passInDate)).toBe(passInDate);
  });

  test(`should return current date or default value when when true passed in`, () => {
    expect(coerceDateProperty(true).getDate()).toBe(new Date().getDate());
    expect(coerceDateProperty(true, passInDate)).toBe(passInDate);
  });

  test(`should return current date or default value when false passed in`, () => {
    expect(coerceDateProperty(false).getDate()).toBe(new Date().getDate());
    expect(coerceDateProperty(false, passInDate)).toBe(passInDate);
  });

  test(`should return current date or default value when empty string passed in`, () => {
    expect(coerceDateProperty('').getDate()).toBe(new Date().getDate());
    expect(coerceDateProperty('', passInDate)).toBe(passInDate);
  });

  test(`should coerce an RFC1123 date`, () => {
    const expectedDate = new Date('Tue, 15 Nov 1994 08:12:31 GMT');
    const inputRFC1123String = 'Tue, 15 Nov 1994 08:12:31 GMT';
    expect(coerceDateProperty(inputRFC1123String).getUTCMilliseconds()).toBe(expectedDate.getUTCMilliseconds());
    expect(coerceDateProperty(inputRFC1123String, new Date()).getUTCMilliseconds()).toBe(expectedDate.getUTCMilliseconds());
  });

  test(`should coerce an RFC2822 date`, () => {
    const inputRFC2822String = 'Mon, 25 Dec 1995 13:30:00 +0430';
    const expectedDate = new Date('Mon, 25 Dec 1995 13:30:00 +0430');
    expect(coerceDateProperty(inputRFC2822String).getUTCMilliseconds()).toBe(expectedDate.getUTCMilliseconds());
    expect(coerceDateProperty(inputRFC2822String, new Date()).getUTCMilliseconds()).toBe(expectedDate.getUTCMilliseconds());
  });

  describe(`default to fallback type`, () => {
    test(`should default to null if given null`, () => {
      expect(coerceDateProperty(null, null)).toBe(null);
    });

    test(`should default to number if given number`, () => {
      expect(coerceDateProperty(null, 1)).toBe(1);
    });

    test(`should default to boolean if given boolean`, () => {
      expect(coerceDateProperty(null, true)).toBe(true);
    });
  });
});
