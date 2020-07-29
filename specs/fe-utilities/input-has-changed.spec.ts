import {
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

import { inputHasChanged } from '@terminus/fe-utilities';

describe(`inputHasChanged`, function() {
  const changed = {
    item1: new SimpleChange(undefined, true, true),
    item2: new SimpleChange('foo', 'foo', false),
  } as SimpleChanges;

  describe(`with string input`, () => {
    test(`should return undefined if the changes object or key are missing`, () => {
      expect(inputHasChanged(null as any, 'foo')).toEqual(undefined);
      expect(inputHasChanged(null as any, 'foo')).toEqual(undefined);
    });

    test(`should return true if the value has changed`, () => {
      expect(inputHasChanged(changed, 'item1')).toEqual(true);
      expect(inputHasChanged(changed, 'item2')).toEqual(false);
    });

    test(`should return false if the changes object doesn't contain provided key`, () => {
      expect(inputHasChanged(changed, 'item3')).toEqual(false);
    });
  });

  describe(`with object input`, () => {
    const changed2 = {
      item1: new SimpleChange({ foo: 'bar' }, { foo: 'xyz' }, false),
      item2: new SimpleChange({ foo: 'bar' }, { foo: 'bar' }, false),
    } as SimpleChanges;

    test(`should return true if the actual value has changed`, () => {
      expect(inputHasChanged(changed2, 'item1.foo')).toEqual(true);
    });

    test(`should return false if the actual value has not changed`, () => {
      expect(inputHasChanged(changed2, 'item2.foo')).toEqual(false);
    });
  });
});
