import { arrayContainsObject } from '@terminus/fe-utilities';

describe(`arrayContainsObject`, function() {
  const obj1 = { id: 1 };
  const obj2 = { id: 2 };
  const obj3 = { id: 3 };
  const obj4 = { id: 4 };
  const obj5 = { id: 5 }; // not in array
  const array = [obj1, obj2, obj3, obj4];
  const fn = (v: any) => v.id;
  const filterTestFn = jest.fn(fn);

  test(`should return true if a match is found`, () => {
    expect(arrayContainsObject(obj1, array, fn)).toEqual(true);
    expect(arrayContainsObject(obj3, array, fn)).toEqual(true);
  });

  test(`should return false if no match is found`, () => {
    expect(arrayContainsObject(obj5, array, fn)).toEqual(false);
  });

  test(`should break out of the loop as soon as it finds a match`, () => {
    arrayContainsObject(obj1, array, filterTestFn);
    expect(filterTestFn).toHaveBeenCalledTimes(2);
  });
});
