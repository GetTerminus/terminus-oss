import {
  createKeyboardEvent,
  createMouseEvent,
} from '@terminus/fe-testing';
import {
  isKeyboardEvent,
  KEYS,
} from '@terminus/fe-utilities';

describe(`isKeyboardEvent`, function() {
  test(`should return true for a keyboard event`, function() {
    const event = createKeyboardEvent('keyup', KEYS.ENTER);
    expect(isKeyboardEvent(event)).toEqual(true);
  });

  test(`should return false when not a keyboard event`, function() {
    const event = createMouseEvent('mouseup');
    expect(isKeyboardEvent(event)).toEqual(false);
  });
});
