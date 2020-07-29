import { isHTMLInputElement } from '@terminus/fe-utilities';

describe(`isHTMLInputElement`, function() {
  const validElements = [
    document.createElement('input'),
  ];

  const invalidElements = [
    null,
    void 0,
    'hi',
    0,
    [],
    {},
    document.createElement('button'),
    document.createElement('a'),
    document.createElement('div'),
  ];

  test(`should return true for all valid elements`, function() {
    for (const test of validElements) {
      expect(isHTMLInputElement(test)).toEqual(true);
    }
  });

  test(`should return false for all invalid elements`, function() {
    for (const test of invalidElements) {
      expect(isHTMLInputElement(test)).toEqual(false);
    }
  });
});
