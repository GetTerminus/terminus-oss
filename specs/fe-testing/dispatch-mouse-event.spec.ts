import {
  createMouseEvent,
  dispatchMouseEvent,
} from '@terminus/fe-testing';

describe(`dispatchMouseEvent`, function() {
  let nodeMock: Element;

  beforeEach(() => {
    nodeMock = window.document.createElement('div');
    nodeMock.dispatchEvent = jest.fn();
  });

  test(`should trigger the dispatch and return the event`, () => {
    dispatchMouseEvent(nodeMock, 'mousedown');

    expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
  });

  test(`should trigger the dispatch and return a custom event with custom locations`, () => {
    dispatchMouseEvent(nodeMock, 'mousedown', 10, 10, createMouseEvent('click'));

    expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
  });
});
