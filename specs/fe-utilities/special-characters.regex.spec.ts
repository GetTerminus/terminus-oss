import {
  containsSpecialCharacterRegex,
  createContainsSpecialCharacterRegex,
} from '@terminus/fe-utilities';

const validStrings: string[] = [
  'FOO^1',
  '12Ri$l#@29Ls',
  'a4#b',
  '2@42',
  '&^%$',
  '(',
];
const invalidStrings: any[] = [
  'foo',
  '1',
  [],
  true,
  false,
  null,
  undefined,
];

describe(`containsSpecialCharacters`, function() {
  describe(`containsSpecialCharacterRegex`, () => {
    test(`should return true for strings containing the min amount of numbers`, () => {
      for (const str of validStrings) {
        expect(containsSpecialCharacterRegex.test(str)).toEqual(true);
      }
    });

    test(`should return false for strings containing less than the min amount of numbers`, () => {
      for (const str of invalidStrings) {
        expect(containsSpecialCharacterRegex.test(str)).toEqual(false);
      }
    });
  });

  describe(`createContainsSpecialCharacterRegex`, () => {
    test(`should create a regex requiring a minimum amount of numbers`, () => {
      const myRegex = createContainsSpecialCharacterRegex(3);

      expect(myRegex.test('AaB#23')).toEqual(false);
      expect(myRegex.test('1A@3B(^1')).toEqual(true);
    });
  });
});

