import { creditCardRegex } from '@terminus/fe-utilities';

// Valid card numbers can be found here: https://stripe.com/docs/testing
const validNumbers = [
  `4242424242424242`,
  `38520000023237`,
  `6011111111111117`,
  `378282246310005`,
];
const invalidNumbers = [
  `1234`,
  ``,
  `e`,
  `test@test.com`,
  `3852000023237`,
  `424242424242424242`,
];

describe(`creditCardRegex`, function() {
  test(`should return true for valid card numbers`, () => {
    for (const num of validNumbers) {
      expect(creditCardRegex.test(num)).toEqual(true);
    }
  });

  test(`should return false for invalid card numbers`, () => {
    for (const num of invalidNumbers) {
      expect(creditCardRegex.test(num)).toEqual(false);
    }
  });
});
