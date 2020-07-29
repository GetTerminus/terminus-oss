import { noop } from '@terminus/fe-utilities';

describe(`noop`, () => {
  it(`should return undefined`, () => {
    expect(noop()).toEqual(undefined);
  });
});
