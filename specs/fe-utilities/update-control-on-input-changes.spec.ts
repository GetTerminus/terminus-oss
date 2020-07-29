import {
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { updateControlOnInputChanges } from '@terminus/fe-utilities';

describe(`updateControlOnInputChanges`, function() {
  const changed = {
    item1: new SimpleChange(undefined, true, true),
    item2: new SimpleChange('foo', 'foo', false),
  } as SimpleChanges;
  const changedObject = {
    item1: new SimpleChange({ foo: 'bar' }, { foo: 'xyz' }, false),
    item2: new SimpleChange({ foo: 'bar' }, { foo: 'bar' }, false),
  } as SimpleChanges;
  const control: FormControl = new FormControl();

  describe(`with string input`, () => {
    test(`should return false if the changes object or key are missing`, () => {
      expect(updateControlOnInputChanges(null as any, 'foo', control)).toEqual(false);
    });

    test(`should return false if control is null`, () => {
      expect(updateControlOnInputChanges(changed, 'item1', null)).toEqual(false);
    });

    test(`should return true if the value has changed`, () => {
      expect(updateControlOnInputChanges(changed, 'item1', control)).toEqual(true);
      expect(updateControlOnInputChanges(changed, 'item2', control)).toEqual(false);
    });

    test(`should set the control value to latest value`, () => {
      updateControlOnInputChanges(changed, 'item1', control);
      expect(control.value).toEqual(changed.item1.currentValue);
    });
  });

  describe(`with object input`, () => {
    test(`should return true if the object value has changed`, () => {
      expect(updateControlOnInputChanges(changedObject, 'item1.foo', control)).toEqual(true);
      expect(updateControlOnInputChanges(changedObject, 'item2.foo', control)).toEqual(false);
    });

    test(`should set the control value to the latest object value`, () => {
      updateControlOnInputChanges(changedObject, 'item1.foo', control);
      expect(control.value).toEqual(changedObject.item1.currentValue.foo);
    });
  });
});
