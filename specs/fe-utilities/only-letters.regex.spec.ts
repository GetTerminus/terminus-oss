import { onlyLettersRegex } from '@terminus/fe-utilities';

const validStrings = [
  'foo',
  'KEOSInjdiuw',
];
const invalidStrings = [
  'foo1',
  'foo/bar',
  'foo-bar',
  'foo_bar',
  'foo:bar',
  'foo+bar',
  '&',
];

describe(`lettersRegex`, function() {
  test(`should return true for strings with only letters`, () => {
    for (const str of validStrings) {
      expect(onlyLettersRegex.test(str)).toEqual(true);
    }
  });

  test(`should return false for strings with anything other than letters`, () => {
    for (const str of invalidStrings) {
      expect(onlyLettersRegex.test(str)).toEqual(false);
    }
  });
});
