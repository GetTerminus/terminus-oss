import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';

import { setFormControlValue } from '@terminus/fe-utilities';

describe(`setFormControlValue`, function() {
  const controlValue = 'new value';
  const formBuilder = new FormBuilder();
  let formGroup: FormGroup;

  beforeEach(() => {
    formGroup = formBuilder.group({
      control1: ['foo'],
      control2: ['bar'],
      control3: [],
    });
  });

  test(`should return undefined if the form or control name is not passed in`, () => {
    expect(setFormControlValue(null as any, 'control1', controlValue)).toEqual(undefined);
    expect(setFormControlValue(formGroup, null as any, controlValue)).toEqual(undefined);
  });

  test(`should return undefined if the form control is not found`, () => {
    expect(setFormControlValue(formGroup, 'control99', controlValue)).toEqual(undefined);
  });

  test(`should set the passed in value if value is set`, () => {
    setFormControlValue(formGroup, 'control1', controlValue);
    const control = formGroup.get('control1');
    expect(control.value).toEqual(controlValue);
  });
});
