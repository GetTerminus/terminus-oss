import { createKeyboardEvent } from '@terminus/fe-testing';
import { KEYS } from '@terminus/fe-utilities';

describe(`createKeyboardEvent`, function() {
  test(`should add getters to event`, () => {
    const target: Element = window.document.createElement('div');
    const actual: KeyboardEvent = createKeyboardEvent('keydown', KEYS.ENTER, target);
    expect(actual.code).toEqual(KEYS.ENTER.code);
    expect(actual.key).toEqual(KEYS.ENTER.code);
    // eslint-disable-next-line deprecation/deprecation
    expect(actual.keyCode).toEqual(KEYS.ENTER.keyCode);
    expect(actual.target).toEqual(target);
  });

  test(`should add helper for preventDefault`, () => {
    const actual: KeyboardEvent = createKeyboardEvent('keydown', KEYS.ENTER);
    actual.preventDefault();
    expect(actual.defaultPrevented).toEqual(true);
  });
});
