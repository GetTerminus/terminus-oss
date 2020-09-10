import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';


/**
 * Return a validator function to verify the value is present in the collection
 *
 * @param collection - The collection to check for the value
 * @param valueFn - A function that pulls the value to compare from the collection objects
 * @returns The validator function
 */
export const inCollectionValidator =
  <T>(collection: T[], valueFn?: (a: T) => string): ValidatorFn => (control: AbstractControl): ValidationErrors | null => {
    // Allow optional controls by not validating empty values
    if (!control || !control.value || !collection || collection.length < 1) {
      return null;
    }

    const invalidResponse: ValidationErrors = {
      inCollection: {
        valid: false,
        actual: control.value,
        collection,
      },
    };

    const found = collection.some(v => {
      const controlValue = control.value;
      const collectionValue = valueFn ? valueFn(v) : v;
      return collectionValue === controlValue;
    });

    return found ? null : invalidResponse;
  };
