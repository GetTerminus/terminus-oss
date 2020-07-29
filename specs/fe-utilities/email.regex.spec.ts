import { emailRegex } from '@terminus/fe-utilities';

// Valid card numbers can be found here: https://stripe.com/docs/testing
const validEmails = [
  `foo@bar.co`,
  `foo@bar.baz.net`,
];
const invalidEmails = [
  `foo`,
  `foo@`,
  `foo@bar`,
  `foo@bar.`,
  `foo@bar.c`,
];

describe(`emailRegex`, () => {
  test(`should return true for valid emails`, () => {
    for (const email of validEmails) {
      expect(emailRegex.test(email)).toEqual(true);
    }
  });

  test(`should return false for invalid emails`, () => {
    for (const email of invalidEmails) {
      expect(emailRegex.test(email)).toEqual(false);
    }
  });
});
