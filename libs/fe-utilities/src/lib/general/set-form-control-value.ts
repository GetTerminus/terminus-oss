import { FormGroup } from '@angular/forms';


/**
 * Set the value of a FormControl
 *
 * @param form - The FormGroup
 * @param controlName - The name of the control
 * @param controlValue - The value to set the control to
 *
 * @example
 * setFormControlValue<number>(myForm, 'budget', 50);
 */
export function setFormControlValue<T>(form: FormGroup, controlName: string, controlValue: T): void {
  if (!form || !controlName) {
    return;
  }
  const control = form.get(controlName);

  if (control) {
    control.setValue(controlValue);
  }
}
