import { createMouseEvent } from '@terminus/fe-testing';
import { isDragEvent } from '@terminus/fe-utilities';

describe(`isDragEvent`, function() {
  const DataTransferMock = function() {
    this.dataByFormat = {};
    this.dropEffect = 'none';
    this.effectAllowed = 'all';
    this.files = [];
    this.types = [];
  };
  const dragEvent = createMouseEvent('click') as DragEvent;
  Object.defineProperties(dragEvent, { dataTransfer: { get: () => DataTransferMock } });
  const mouseEvent = createMouseEvent('click');

  const validEvents: any[] = [
    { dataTransfer: {} },
    dragEvent,
  ];

  const invalidEvents: any[] = [
    null,
    undefined,
    'foo',
    [],
    {},
    () => true,
    mouseEvent,
  ];

  test(`should return true for a drag event value`, () => {
    for (const test of validEvents) {
      expect(isDragEvent(test)).toEqual(true);
    }
  });

  test(`should return false for a non-drag event value`, () => {
    for (const test of invalidEvents) {
      expect(isDragEvent(test)).toEqual(false);
    }
  });
});
