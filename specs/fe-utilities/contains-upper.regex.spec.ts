import {
  containsUppercaseRegex,
  createContainsUppercaseRegex,
} from '@terminus/fe-utilities';

const validUppercase: string[] = [
  'FOO',
  '12Ri$l#@29Ls',
];
const invalidUppercase: any[] = [
  'foo',
  '12r$f#@29ls',
  [],
  1,
];

describe(`uppercase regex`, function() {
  describe(`containsUppercaseRegex`, () => {
    test(`should return true if at least 1 uppercase charater exists`, () => {
      for (const str of validUppercase) {
        expect(containsUppercaseRegex.test(str)).toEqual(true);
      }
    });

    test(`should return false if no uppercase charaters exists`, () => {
      for (const str of invalidUppercase) {
        expect(containsUppercaseRegex.test(str)).toEqual(false);
      }
    });
  });

  describe(`createContainsUppercaseRegex`, () => {
    test(`should create a regex requiring a minimum amount of uppercase letters`, () => {
      const myRegex = createContainsUppercaseRegex(3);

      expect(myRegex.test('AaB123')).toEqual(false);
      expect(myRegex.test('AaBC23')).toEqual(true);
    });
  });
});
