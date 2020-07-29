import {
  containsNumbersRegex,
  createContainsNumbersRegex,
} from '@terminus/fe-utilities';

const validNumbers: string[] = [
  'FOO1',
  '12Ri$l#@29Ls',
  'a4.b',
  '$2.42',
  '1',
];
const invalidNumbers: any[] = [
  'foo',
  'r$f#@ls',
  [],
  true,
  false,
  null,
  undefined,
];

describe(`containsNumbers`, function() {
  describe(`containsNumbersRegex`, () => {
    test(`should return true for strings containing the min amount of numbers`, () => {
      for (const num of validNumbers) {
        expect(containsNumbersRegex.test(num)).toEqual(true);
      }
    });

    test(`should return false for strings containing less than the min amount of numbers`, () => {
      for (const num of invalidNumbers) {
        expect(containsNumbersRegex.test(num)).toEqual(false);
      }
    });
  });

  describe(`createContainsNumbersRegex`, () => {
    test(`should create a regex requiring a minimum amount of numbers`, () => {
      const myRegex = createContainsNumbersRegex(3);

      expect(myRegex.test('AaB#23')).toEqual(false);
      expect(myRegex.test('1Aa3BC21')).toEqual(true);
    });
  });
});
