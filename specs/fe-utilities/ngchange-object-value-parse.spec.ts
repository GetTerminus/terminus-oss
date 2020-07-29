import {
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

import { NgChangeObjectValueParser } from '@terminus/fe-utilities';

describe(`NgChangeObjectValueParser`, function() {
  const changed = {
    item1: new SimpleChange('foo', 'bar', false),
    item2: new SimpleChange({ foo: { bar: { baz: 'xyz' } } }, { foo: { bar: { baz: 'abc' } } }, false),
  } as SimpleChanges;

  describe(`getOldValue`, () => {
    test(`should return old value`, () => {
      expect(NgChangeObjectValueParser.getOldValue(changed, 'item1')).toEqual('foo');
      expect(NgChangeObjectValueParser.getOldValue(changed, 'item2.foo.bar.baz')).toEqual('xyz');
    });

    test(`should return undefined if no path or no matched key passed in`, () => {
      expect(NgChangeObjectValueParser.getOldValue(changed, '')).toEqual(undefined);
      expect(NgChangeObjectValueParser.getOldValue(changed, 'item3')).toEqual(undefined);
    });
  });

  describe(`getNewValue`, () => {
    test(`should return new value`, () => {
      expect(NgChangeObjectValueParser.getNewValue(changed, 'item1')).toEqual('bar');
      expect(NgChangeObjectValueParser.getNewValue(changed, 'item2.foo.bar.baz')).toEqual('abc');
    });

    test(`should return undefined if no path or no matched key passed in`, () => {
      expect(NgChangeObjectValueParser.getOldValue(changed, '')).toEqual(undefined);
      expect(NgChangeObjectValueParser.getOldValue(changed, 'item3')).toEqual(undefined);
    });
  });

  describe(`parsePath`, () => {
    test(`should return parsed value`, () => {
      expect(NgChangeObjectValueParser.parsePath('foo.bar')).toEqual([['bar'], 'foo']);
    });

    test(`should return array containing undefined if empty string passed in`, () => {
      expect(NgChangeObjectValueParser.parsePath('')).toEqual([[], undefined]);
    });
  });
});
