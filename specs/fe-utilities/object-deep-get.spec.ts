import { objectDeepGet } from '@terminus/fe-utilities';

describe(`objectDeepGetter`, function() {
  const objectInput = { foo: { bar: { baz: 'xyz' } } };
  const path1 = 'foo.bar.baz';
  const path2 = 'foo.bar';
  const path3 = 'abc';
  const defaultValue = 'default';

  test(`should parse to the lowest level specified`, () => {
    expect(objectDeepGet(objectInput, path1)).toEqual('xyz');
    expect(objectDeepGet(objectInput, path2)).toEqual({ baz: 'xyz' });
  });

  test(`should return undefined if path doesn't exist`, () => {
    expect(objectDeepGet(objectInput, path3)).toEqual(undefined);
  });

  test(`should return defaultValue if nothing returns`, () => {
    expect(objectDeepGet(objectInput, path3, defaultValue)).toEqual(defaultValue);
  });

  test(`should return the default value if no object is passed in`, () => {
    expect(objectDeepGet(null as any, path1, 'foo')).toEqual('foo');
  });
});
