import {
  containsLowercaseRegex,
  createContainsLowercaseRegex,
} from '@terminus/fe-utilities';

const validLowercase: string[] = [
  'foo',
  '12R$f#@29LS',
];
// NOTE: Not sure why, but an empty object returns true `{}`
const invalidLowercase: any[] = [
  'FOO',
  '12R$F#@29LS',
  [],
  1,
];

describe(`lowercase regex`, function() {
  describe(`containsLowercaseRegex`, () => {
    test(`should return true if at least 1 lowercase charater exists`, () => {
      for (const str of validLowercase) {
        expect(containsLowercaseRegex.test(str)).toEqual(true);
      }
    });

    test(`should return false if no lowercase charaters exists`, () => {
      for (const str of invalidLowercase) {
        expect(containsLowercaseRegex.test(str)).toEqual(false);
      }
    });
  });

  describe(`createContainsLowercaseRegex`, () => {
    test(`should create a regex requiring a minimum amount of lowercase letters`, () => {
      const myRegex = createContainsLowercaseRegex(3);

      expect(myRegex.test('ab123')).toEqual(false);
      expect(myRegex.test('abc23')).toEqual(true);
    });
  });
});
