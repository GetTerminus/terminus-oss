import { usaPhoneRegex } from '@terminus/fe-utilities';

const validNumbers = [
  '212-222-1010',
  '(203) 753-5678',
  '2155551212',
  '+442071838750',
  '001-541-754-3010',
];
const invalidNumbers: any = [
  '12',
  'foo',
  true,
  '020 7183 8750',
  '(021) 53524999',
];

describe(`usaPhoneRegex`, function() {
  test(`should return true for valid US phone numbers`, () => {
    for (const num of validNumbers) {
      expect(usaPhoneRegex.test(num)).toEqual(true);
    }
  });

  test(`should return false for invalid US phone numbers`, () => {
    for (const num of invalidNumbers) {
      expect(usaPhoneRegex.test(num)).toEqual(false);
    }
  });
});
