import {
  isArrayOfType,
  isNumber,
  isString,
} from '@terminus/fe-utilities';

describe(`isArrayOfType`, function() {
  const numbersArray1 = [1, 2, 3, 4];
  const numbersArray2 = [5, 6, 7, 8];
  const stringArray = ['1', 'two', '3', 'four'];
  const mixedArray: any[] = [1, 'two', 3, 'four', { five: 5 }];
  const numberArrays = [numbersArray1, numbersArray2, [9, 10]];
  const stringArrays = [stringArray, ['foo', 'bar'], ['bar', 'baz']];

  for (const arr of numberArrays) {
    test(`should return true if [${arr}] are all numbers`, () => {
      expect(isArrayOfType(arr, isNumber)).toEqual(true);
    });
  }

  for (const arr of stringArrays) {
    test(`should return true [${arr}] are all strings`, () => {
      expect(isArrayOfType(arr, isString)).toEqual(true);
    });
  }

  test(`should return false when all array members are not of the same type`, () => {
    expect(isArrayOfType(mixedArray, isNumber)).toEqual(false);
    expect(isArrayOfType(mixedArray, isString)).toEqual(false);
  });

  test(`should return false if no guard is passed in`, () => {
    expect(isArrayOfType(numbersArray1, undefined)).toEqual(false);
    expect(isArrayOfType(numbersArray1, 'test' as any)).toEqual(false);
  });
});
