import { dispatchTouchEvent } from '@terminus/fe-testing';

describe(`dispatchTouchEvent`, function() {
  let nodeMock: Element;

  beforeEach(() => {
    nodeMock = window.document.createElement('div');
    nodeMock.dispatchEvent = jest.fn();
  });

  test(`should trigger the dispatch and return the event`, () => {
    dispatchTouchEvent(nodeMock, 'touchstart');

    expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
  });

  test(`should trigger the dispatch and return the event with custom locations`, () => {
    dispatchTouchEvent(nodeMock, 'touchstart', 10, 10);

    expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
  });
});
