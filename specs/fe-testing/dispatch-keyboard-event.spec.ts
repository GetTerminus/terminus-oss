import { dispatchKeyboardEvent } from '@terminus/fe-testing';
import { KEYS } from '@terminus/fe-utilities';

describe(`dispatchKeyboardEvent`, function() {
  let nodeMock: Element;

  beforeEach(() => {
    nodeMock = window.document.createElement('div');
    nodeMock.dispatchEvent = jest.fn();
  });

  test(`should do something`, () => {
    dispatchKeyboardEvent(nodeMock, 'keydown', KEYS.A);

    expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
  });
});
