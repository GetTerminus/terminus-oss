import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TsCohortDateRangeComponent } from '@terminus/ui-cohort-date-range';


/* eslint-disable max-len */

/**
 * Get TsFormFieldComponent
 *
 * @param fixture - The component fixture
 * @returns DebugElement
 */
export const getFormFieldElement =
  (fixture: ComponentFixture<any>): HTMLElement => fixture.debugElement.query(By.css('.ts-form-field')).nativeElement;

/**
 * Get the DebugElement for a TsCohortDateRangeComponent
 *
 * @param fixture - The component fixture
 * @returns The DebugElement
 */
export const getCohortDebugElement =
  (fixture: ComponentFixture<any>): DebugElement => fixture.debugElement.query(By.directive(TsCohortDateRangeComponent));

// TODO: Move to select test helpers
/**
 * Get the trigger element for a {@link TsSelectComponent} inside a {@link TsCohortDateRangeComponent}
 *
 * @param fixture - The component fixture
 * @returns The element
 */
export const getSelectTriggerElement =
  (fixture: ComponentFixture<any>): HTMLElement => fixture.debugElement.query(By.css('.ts-select-trigger')).nativeElement as HTMLElement;

