import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { hasRequiredControl } from '@terminus/fe-utilities';

describe(`hasRequiredControl`, function() {
  let formBuilder: FormBuilder;
  let myForm: FormGroup;

  beforeEach(() => {
    formBuilder = new FormBuilder();
    myForm = formBuilder.group({
      first: formBuilder.group({
        firstA: [
          null,
        ],
        firstB: [
          null,
          [
            Validators.required,
          ],
        ],
      }),
      second: formBuilder.group({
        secondA: [
          null,
        ],
        secondB: [
          null,
        ],
      }),
      third: formBuilder.group({}),
    });
  });

  test(`should return false if no control is passed in `, () => {
    expect(hasRequiredControl(undefined as any)).toEqual(false);
    expect(hasRequiredControl(null as any)).toEqual(false);
  });

  describe(`when item is an AbstractControl`, () => {
    test(`should return false if no required validator is found`, () => {
      const control = myForm.get('first')!.get('firstA');
      expect(hasRequiredControl(control)).toEqual(false);
    });

    test(`should return true if a required validator is found`, () => {
      const control = myForm.get('first')!.get('firstB');
      expect(hasRequiredControl(control)).toEqual(true);
    });
  });

  describe(`when item is a FormGroup`, () => {
    test(`should return true if the form group has a control with a required validator`, () => {
      expect(hasRequiredControl(myForm.get('first'))).toEqual(true);
    });

    test(`should return false if no nested controls are required`, () => {
      expect(hasRequiredControl(myForm.get('second'))).toEqual(false);
    });

    test(`should return false if an empty form group was passed in`, () => {
      expect(hasRequiredControl(myForm.get('third'))).toEqual(false);
    });
  });
});
