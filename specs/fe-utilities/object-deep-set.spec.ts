import { objectDeepSet } from '@terminus/fe-utilities';

describe(`objectDeepSetter`, function() {
  test(`should set the value to desired if path exists`, () => {
    const objectInput = { foo: { bar: 1 } };
    const path = 'foo.bar';
    const newValue = 3;
    const objectOutput = { foo: { bar: newValue } };

    expect(objectDeepSet(objectInput, path, newValue)).toEqual(objectOutput);
  });

  test(`should set when path cannot be found`, () => {
    const objectInput2 = { foo: 1 };
    const path2 = 'foo.baz';
    const newValue2 = 3;
    const objectOutput2 = { foo: { baz: 3 } };
    const objectOutput3 = {
      foo: 1,
      bar: 3,
    };

    expect(objectDeepSet(objectInput2, path2, newValue2)).toEqual(objectOutput2);
    expect(objectDeepSet(objectInput2, 'bar', 3)).toEqual(objectOutput3);
  });
});
