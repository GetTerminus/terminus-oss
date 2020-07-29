import { passwordRegex } from '@terminus/fe-utilities';

const validPasswords = [
  `7GmfvH`,
  `V9Cpp7RGB9`,
  `29N74UV9ogt2UKpT3pZN3oLngp8Trkk4mCZfCgdE`,
  // eslint-disable-next-line max-len
  `FQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xsdNFQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xsdN`,
];
const invalidPasswords = [
  // empty
  ``, // this will get caught by the first `!control.value`
  // too short
  `MA9Lv`,
  // no numbers
  `xnhoQzDwAv`,
  // symbol
  `yGiUf>DfQ2`,
  // space
  `FQ49j BQ29`,
  // eslint-disable-next-line max-len
  // too long
  `FQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xsdNFQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xsdN1`,
];

describe(`passwordRegex`, function() {
  test(`should return true for valid passwords`, () => {
    for (const password of validPasswords) {
      expect(passwordRegex.test(password)).toEqual(true);
    }
  });

  test(`should return false for invalid passwords`, () => {
    for (const password of invalidPasswords) {
      expect(passwordRegex.test(password)).toEqual(false);
    }
  });
});
