import { coerceArray } from '@terminus/fe-utilities';

describe(`coerceArray`, function() {
  test(`should wrap a string in an array`, () => {
    const stringVal = 'just a string';
    expect(coerceArray('just a string')).toEqual([stringVal]);
  });

  test(`should wrap a number in an array`, () => {
    const numberVal = 42;
    expect(coerceArray(numberVal)).toEqual([numberVal]);
  });

  test(`should wrap an object in an array`, () => {
    const objectVal = { something: 'clever' };
    expect(coerceArray(objectVal)).toEqual([objectVal]);
  });

  test(`should wrap a null vall in an array`, () => {
    const nullVal = null;
    expect(coerceArray(nullVal)).toEqual([nullVal]);
  });

  test(`should wrap an undefined value in an array`, () => {
    const undefinedVal = undefined;
    expect(coerceArray(undefinedVal)).toEqual([undefinedVal]);
  });

  test(`should not wrap an array in an array`, () => {
    const arrayVal = [1, 2, 3];
    expect(coerceArray(arrayVal)).toBe(arrayVal);
  });
});
