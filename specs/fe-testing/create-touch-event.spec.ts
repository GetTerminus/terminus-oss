import { createTouchEvent } from '@terminus/fe-testing';

describe(`createTouchEvent`, function() {
  test(`should create event at default x/y coords`, () => {
    const actual: UIEvent = createTouchEvent('click');
    expect((actual as any).touches[0].pageX).toEqual(0);
    expect((actual as any).touches[0].pageY).toEqual(0);
  });

  test(`should create event at specific x/y coords`, () => {
    const actual: UIEvent = createTouchEvent('click', 100, 100);
    expect((actual as any).touches[0].pageX).toEqual(100);
    expect((actual as any).touches[0].pageY).toEqual(100);
  });
});
