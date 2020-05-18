import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  TsFormFieldComponent,
  TsLabelDirective,
} from '@terminus/ui-form-field';
import { TsInputComponent } from '@terminus/ui-input';
import { TsUILibraryError } from '@terminus/ui-utilities';

/**
 * Get all TsFormFieldComponent instances
 *
 * @param fixture - The component fixture
 * @returns The array of TsFormFieldComponent instances
 */
export function getAllFormFieldInstances(fixture: ComponentFixture<any>): TsFormFieldComponent[] {
  const debugElements = fixture.debugElement.queryAll(By.directive(TsFormFieldComponent));
  if (!debugElements) {
    throw new TsUILibraryError(`'getAllFormFieldInstances' found no inputs`);
  }
  return debugElements.map(i => i.componentInstance);
}

/**
 * Get a TsFormFieldComponent instance
 *
 * @param fixture - The component fixture
 * @param index - The index of the input to return
 * @returns The TsInputComponent instance
 */
export function getFormFieldInstance(fixture: ComponentFixture<any>, index = 0): TsFormFieldComponent {
  const all = getAllFormFieldInstances(fixture);
  if (!all[index]) {
    throw new Error(`'getFormFieldInstance' found no form field at index '${index}'. ${all.length} were found.`);
  }
  return all[index];
}

/**
 * Get the label element for a {@link TsFormFieldComponent}
 *
 * @param fixture - The component fixture
 * @returns The label element
 */
export function getLabelElement(fixture: ComponentFixture<any>): HTMLLabelElement {
  const label = fixture.debugElement.query(By.css('.ts-form-field__label'));
  if (!label) {
    throw new TsUILibraryError(`'getLabelElement' found no label`);
  }
  return label.nativeElement;
}
