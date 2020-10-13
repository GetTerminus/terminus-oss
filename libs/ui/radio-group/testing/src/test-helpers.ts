import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TsRadioGroupComponent } from '@terminus/ui-radio-group';

/**
 * Get all TsRadioGroupComponent instances
 *
 * @param fixture - The component fixture
 * @returns The array of TsRadioGroupComponent instances
 */
export function getAllRadioGroupInstances(fixture: ComponentFixture<any>): TsRadioGroupComponent[] {
  const debugElements = fixture.debugElement.queryAll(By.css('ts-radio-group'));
  if (!debugElements) {
    throw new Error(`'getAllRadioGroupInstances' found no radio groups`);
  }
  return debugElements.map(i => i.componentInstance);
}

/**
 * Get a TsRadioGroupComponent instance
 *
 * @param fixture - The component fixture
 * @param index - The index of the radio group to return
 * @returns The TsRadioGroupComponent instance
 */
export function getRadioGroupInstance(fixture: ComponentFixture<any>, index = 0): TsRadioGroupComponent {
  const all = getAllRadioGroupInstances(fixture);
  if (!all[index]) {
    throw new Error(`'getRadioGroupInstance' found no radio groups at index '${index}'. ${all.length} were found.`);
  }
  return all[index];
}

/**
 * Get the radio group element
 *
 * @param fixture - The component fixture
 * @param index - The index of the radio group to query
 * @returns The HTMLElement
 */
export function getRadioGroupParentElement(fixture: ComponentFixture<any>, index = 0): HTMLElement {
  const debugElements = fixture.debugElement.queryAll(By.css('ts-radio-group'));
  if (!debugElements) {
    throw new Error(`'getRadioGroupParentElement' found no radio groups`);
  }
  if (!debugElements[index]) {
    throw new Error(`'getRadioGroupParentElement' found no radio groups at index '${index}'. ${debugElements.length} were found.`);
  }
  return debugElements[index].nativeElement as HTMLElement;
}
