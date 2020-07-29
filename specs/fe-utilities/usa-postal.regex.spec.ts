import { usaPostalRegex } from '@terminus/fe-utilities';

const validNumbers = [
  '12345',
  '98765-4321',
];
const invalidNumbers: any = [
  '1234',
  true,
  '12345-12',
  '1234-12345',
];

describe(`usaPostalRegex`, function() {
  test(`should return true for all valid US postal codes`, () => {
    for (const num of validNumbers) {
      expect(usaPostalRegex.test(num)).toEqual(true);
    }
  });

  test(`should return false for all invalid US postal codes`, () => {
    for (const num of invalidNumbers) {
      expect(usaPostalRegex.test(num)).toEqual(false);
    }
  });
});
