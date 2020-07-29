import { AbstractControl } from '@angular/forms';


/**
 * Determine if the item is an AbstractControl
 *
 * @param x - The item to test
 * @returns The result
 *
 * @example
 * isAbstractControl(new FormControl()) // Returns: true
 * isAbstractControl('hi')              // Returns: false
 */
export const isAbstractControl =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (x: Record<string, any>): x is AbstractControl => !!x && x.hasOwnProperty('valueChanges');
