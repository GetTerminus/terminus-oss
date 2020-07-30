import {
  createFakeEvent,
  dispatchEvent,
} from '@terminus/fe-testing';

describe(`dispatchEvent`, function() {
  let nodeMock: Element;

  beforeEach(() => {
    nodeMock = window.document.createElement('div');
    nodeMock.dispatchEvent = jest.fn();
  });

  test(`should trigger the dispatch and return the event`, () => {
    const eventMock = createFakeEvent('keydown');
    dispatchEvent(nodeMock, eventMock);

    expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
  });

  test(`should trigger the dispatch and return the event for bubbled events`, () => {
    const eventMockBubble = createFakeEvent('keydown', true, true);
    dispatchEvent(nodeMock, eventMockBubble);

    expect(nodeMock.dispatchEvent).toHaveBeenCalledWith(expect.any(Event));
  });
});
