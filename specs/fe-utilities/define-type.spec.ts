import {
  defineType,
  defineTypeEnum,
  resetTypeCache,
} from '@terminus/fe-utilities';

describe(`defineType`, function() {
  beforeEach(() => {
    resetTypeCache();
  });

  test(`returns the passed value`, () => {
    expect(defineType('foo')).toEqual('foo');
  });

  test(`throws an error when called twice`, () => {
    defineType('bar');
    expect(() => defineType('bar')).toThrowError();
  });

  test(`should set from an enum`, function() {
    enum actionTypes {
      AssignState = '[mock-meta-reducer] Assign State',
      '' = 'foo',
    }
    defineTypeEnum(actionTypes);

    expect(() => defineType('[mock-meta-reducer] Assign State')).toThrowError();
  });
});
