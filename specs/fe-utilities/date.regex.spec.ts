import { dateRegex } from '@terminus/fe-utilities';

const validDates = [
  '3/3/18',
  '3-3-18',
  '3/03/18',
  '03/3/18',
  '3/3/2018',
  '01/22/2018',
  '01-22-2018',
  '7/03/1991',
  '07/10/1900',
];
const invalidDates: any = [
  'foo',
  '',
  null,
  '0/0/00',
  '3/3/1899',
  '3/3/2100',
  '2018/3/3',
  '2018/03/03',
  '18/03/03',
];

describe(`dateRegex`, function() {
  test(`should return true for all valid dates`, () => {
    for (const date of validDates) {
      expect(dateRegex.test(date)).toEqual(true);
    }
    expect.assertions(9);
  });

  test(`should return false for all invalid dates`, () => {
    for (const date of invalidDates) {
      expect(dateRegex.test(date)).toEqual(false);
    }
    expect.assertions(9);
  });
});
