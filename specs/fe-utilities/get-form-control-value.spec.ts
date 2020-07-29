import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';

import { getFormControlValue } from '@terminus/fe-utilities';

describe(`getFormControlValue`, function() {
  const formBuilder = new FormBuilder();
  let formGroup: FormGroup;

  beforeEach(() => {
    formGroup = formBuilder.group({
      control1: ['foo'],
      control2: ['bar'],
      control3: [],
    });
  });

  test(`should return undefined if the form or control name is not passed in or not found`, () => {
    expect(getFormControlValue(null as any, 'control1')).toEqual(undefined);
    expect(getFormControlValue(formGroup, null as any)).toEqual(undefined);
    expect(getFormControlValue(formGroup, 'control99')).toEqual(undefined);
  });

  test(`should return null if the form control value is undefined`, () => {
    expect(getFormControlValue(formGroup, 'control3')).toEqual(null);
  });

  test(`should return the form control value`, () => {
    expect(getFormControlValue(formGroup, 'control1')).toEqual('foo');
    expect(getFormControlValue(formGroup, 'control2')).toEqual('bar');
  });
});
