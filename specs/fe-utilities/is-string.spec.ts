import { isString } from '@terminus/fe-utilities';

describe(`isString`, function() {
  const obj = { foo: 'bar' };
  const myString = 'foo';
  const validStrings: any[] = [
    'foo',
    `${myString}`,
    // eslint-disable-next-line no-new-wrappers
    new String(myString),
    obj.foo,
  ];
  const invalidStrings: any[] = [
    {},
    [],
    () => true,
    null,
    undefined,
  ];

  test(`should return true for string values`, () => {
    for (const test of validStrings) {
      expect(isString(test)).toEqual(true);
    }
  });

  test(`should return false for non-string values`, () => {
    for (const test of invalidStrings) {
      expect(isString(test)).toEqual(false);
    }
  });
});
