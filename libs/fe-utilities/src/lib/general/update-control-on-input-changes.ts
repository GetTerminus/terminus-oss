import { SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { inputHasChanged } from './input-has-changed';
import { NgChangeObjectValueParser } from './ngchange-object-value-parser';


/**
 * Helper function to determine if a specific value has changed
 *
 * @param changes - The object of changes
 * @param path - A string with keys defined, separate with '.'
 * @param control - The formControl
 * @returns True if the value has changed
 *
 * @example
 * ...
 *   AngularInput:
 *   public myInput;
 *   AngularInput:
 *   public myFormControl;
 *
 *   ngOnChanges(changes: SimpleChanges) {
 *     // This will update the form control's value whenever the `@Input` value changes:
 *     updateControlOnInputChanges(changes, 'myInput', this.myFormControl));
 *   }
 * ...
 */
export function updateControlOnInputChanges(
  changes: SimpleChanges,
  path: string,
  control: AbstractControl | null,
): boolean {
  if (!changes || !path || !control) {
    return false;
  }

  if (inputHasChanged(changes, path)) {
    const newValue = NgChangeObjectValueParser.getNewValue(changes, path);
    control.setValue(newValue);
    return true;
  }
  return false;
}
