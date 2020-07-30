import { createMouseEvent } from '@terminus/fe-testing';

describe(`createMouseEvent`, function() {
  test(`should create event at default x/y coords`, () => {
    const actual: MouseEvent = createMouseEvent('click');
    expect(actual.clientX).toEqual(0);
    expect(actual.clientY).toEqual(0);
  });

  test(`should create event at specific x/y coords`, () => {
    const actual: MouseEvent = createMouseEvent('click', 100, 100);
    expect(actual.clientX).toEqual(100);
    expect(actual.clientY).toEqual(100);
  });
});
