import { compactArray } from '@terminus/fe-utilities';

describe(`compactArray`, function() {
  test(`should return undefined if the array is empty or doesn't exist`, () => {
    expect(compactArray(null as any)).toEqual(undefined);
    expect(compactArray([])).toEqual(undefined);
  });

  test(`should return the cleaned array`, () => {
    const arr1: any[] = ['foo', null, 'bar', undefined, 'baz'];
    expect(compactArray<string>(arr1)).toEqual(['foo', 'bar', 'baz']);
  });
});
