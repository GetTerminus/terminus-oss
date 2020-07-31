import { FormGroup } from '@angular/forms';

import { isAbstractControl } from '../type-guards/is-abstract-control';
import { isNull } from '../type-guards/is-null';


/**
 * Return the value of a FormControl within a FormGroup
 *
 * @param form - The FormGroup that contains the control
 * @param controlName - The name of the control
 * @returns The value
 *
 * @example
 * getFormControlValue(myFormGroup, 'myControl');
 * getFormControlValue<boolean>(myFormGroup, 'myControl');
 */
export function getFormControlValue<T>(form: FormGroup, controlName: string): T | undefined {
  if (!form || !controlName) {
    return undefined;
  }
  const control = form.get(controlName);
  return !isNull(control) && isAbstractControl(control) ? control.value as T : undefined;
}
