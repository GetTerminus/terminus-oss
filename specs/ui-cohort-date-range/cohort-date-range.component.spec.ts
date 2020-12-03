import {
  Provider,
  Type,
} from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';

import { createComponent as createComponentInner } from '@terminus/fe-testing';
import {
  TsCohortDateRangeComponent,
  TsCohortDateRangeModule,
} from '@terminus/ui-cohort-date-range';
import { getCohortDebugElement } from '@terminus/ui-cohort-date-range/testing';
import { TsDateRangeModule } from '@terminus/ui-date-range';
import { getRangeInputInstances } from '@terminus/ui-date-range/testing';
import { TsInputComponent } from '@terminus/ui-input';
import { TsSelectionListChange } from '@terminus/ui-selection-list';

import {
  Basic,
  DateConstraints,
  DefaultCohort,
  NoCohorts,
  NoCustomDates,
} from './test-components';

describe(`TsCohortDateRange Spectator`, () => {
  let spectator: Spectator<TsCohortDateRangeComponent>;
  const createComponent = createComponentFactory({
    component: TsCohortDateRangeComponent,
    imports: [TsCohortDateRangeModule],
    declareComponent: false,
  });

  test(`should exist`, () => {
    spectator = createComponent();
    expect(spectator.queryAll('input')).toBeTruthy();
  });

  describe(`hint`, () => {
    test(`should show/hide the container and output the text`, () => {
      spectator = createComponent();
      expect(spectator.query('.ts-cohort-date-range__hint')).not.toExist();
      spectator.setInput('hint', 'foo');
      expect(spectator.query('.ts-cohort-date-range__hint')).toHaveText('foo');
    });
  });

  test(`should display an error message if one is passed in`, () => {
    spectator = createComponent({
      props: {
        errorMessage: 'My error',
      },
    });
    expect(spectator.query('.ts-cohort-date-range__error')).toHaveText('My error');
  });

  describe(`noValidationOrHint`, () => {
    test(`should not have validation or hint added if set to true`, () => {
      spectator = createComponent({
        props: {
          noValidationOrHint: true,
        },
      });
      expect(spectator.query('.ts-cohort-date-range__messages')).not.toExist();
    });
  });
});

describe(`TsCohortDateRangeComponent`, () => {
  describe(`id`, () => {
    test(`should allow custom ID and fall back to UID`, () => {
      const fixture = createComponentLegacy<Basic>(Basic);
      fixture.detectChanges();
      const debug = getCohortDebugElement(fixture);
      const instance: TsCohortDateRangeComponent = debug.componentInstance;
      instance.id = 'foo';
      fixture.detectChanges();

      expect(document.getElementById('foo')).toBeTruthy();
      expect(instance.id).toEqual('foo');
      instance.id = undefined as any;
      fixture.detectChanges();
      expect(document.getElementById('foo')).toBeFalsy();
      expect(instance.id).toEqual(expect.stringContaining('ts-cohort-date-range-'));
    });
  });

  describe(`allowCustomDates`, () => {
    let fixture: ComponentFixture<Basic>;
    let hostInstance: Basic;
    let startInputInstance: TsInputComponent;

    beforeEach(() => {
      fixture = createComponentLegacy<Basic>(Basic);
      fixture.detectChanges();
      hostInstance = fixture.componentInstance;
      startInputInstance = getRangeInputInstances(fixture)[0];
    });

    test(`should disable date range if false`, () => {
      hostInstance.allowCustomDates = false;
      fixture.detectChanges();
      expect(fixture.debugElement.queryAll(By.css('input'))[0].nativeElement.getAttribute('disabled')).toEqual('');
      expect(startInputInstance.isDisabled).toBeTruthy();
    });

    test(`should not disabled date range if allowCustomsDate is true`, () => {
      hostInstance.allowCustomDates = true;
      fixture.detectChanges();
      expect(fixture.debugElement.queryAll(By.css('input'))[0].nativeElement.getAttribute('disabled')).toEqual(null);
      expect(startInputInstance.isDisabled).toBeFalsy();
    });
  });

  describe(`updateSelectOnRangeChange`, () => {
    test(`should do nothing if no cohorts exist`, () => {
      const fixture = createComponentLegacy<NoCohorts>(NoCohorts);
      fixture.detectChanges();
      fixture.detectChanges();
      const debug = getCohortDebugElement(fixture);
      const instance: TsCohortDateRangeComponent = debug.componentInstance;
      instance.cohortControl.setValue = jest.fn();

      instance.dateRangeFormGroup.setValue({
        startDate: new Date(),
        endDate: new Date(),
      });
      fixture.detectChanges();

      expect(instance.cohortControl.setValue).not.toHaveBeenCalled();
    });

    test(`should update the select to the custom cohort when the range is manually changed`, () => {
      const fixture = createComponentLegacy<Basic>(Basic);
      fixture.detectChanges();
      const debug = getCohortDebugElement(fixture);
      const instance: TsCohortDateRangeComponent = debug.componentInstance;
      instance.dateRangeFormGroup.patchValue({ startDate: new Date() });
      fixture.detectChanges();
      const trigger = document.querySelector('.ts-selection-list__custom-trigger');

      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect((trigger as HTMLInputElement).value).toEqual('Custom Dates');
      });
    });

    test(`should not update the select when the range is manually changed to a cohort range`, () => {
      const fixture = createComponentLegacy<Basic>(Basic);
      fixture.detectChanges();
      const date1 = new Date(2018, 1, 1);
      const date2 = new Date(2018, 2, 1);
      const debug = getCohortDebugElement(fixture);
      const instance: TsCohortDateRangeComponent = debug.componentInstance;
      instance.cohortControl.setValue = jest.fn();
      instance.dateRangeFormGroup.patchValue({
        startDate: date1,
        endDate: date2,
      });
      fixture.detectChanges();

      expect(instance.cohortControl.setValue).not.toHaveBeenCalled();
    });
  });

  describe(`cohorts`, () => {
    test(`should set the active cohort by default`, () => {
      const fixture = createComponentLegacy<DefaultCohort>(DefaultCohort);
      fixture.detectChanges();
      const debug = getCohortDebugElement(fixture);
      const instance: TsCohortDateRangeComponent = debug.componentInstance;
      const range = instance.dateRangeFormGroup.value;
      const year = new Date(range.startDate).getFullYear();

      expect(year).toEqual(2019);
    });

    test(`should not add the custom cohort if custom dates are not allowed`, () => {
      const fixture = createComponentLegacy<NoCustomDates>(NoCustomDates);
      fixture.detectChanges();
      const debug = getCohortDebugElement(fixture);
      const instance: TsCohortDateRangeComponent = debug.componentInstance;
      expect(instance.cohorts.length).toEqual(1);
    });

    test(`should add the custom cohort to the end if allowUserInput is true`, () => {
      const fixture = createComponentLegacy<Basic>(Basic);
      fixture.detectChanges();
      const debug = getCohortDebugElement(fixture);
      const instance: TsCohortDateRangeComponent = debug.componentInstance;

      expect(instance.cohorts.length).toEqual(2);
      expect(instance.cohorts[1]).toEqual(expect.objectContaining({ display: 'Custom Dates' }));
    });
  });

  describe(`select emitters`, function() {
    test(`should emit change event if date range has any changes`, () => {
      const fixture = createComponentLegacy<Basic>(Basic);
      const cohortDebugElement = getCohortDebugElement(fixture);
      const cohortInstance: TsCohortDateRangeComponent = cohortDebugElement.componentInstance;
      fixture.detectChanges();
      cohortInstance.cohortDateRangeChanged.emit = jest.fn();
      const dates = {
        start: '',
        end: '',
        source: cohortInstance,
      };
      cohortInstance.cohortDateRangeChange(dates);
      fixture.detectChanges();
      expect(cohortInstance.cohortDateRangeChanged.emit).toHaveBeenCalledWith(dates);
    });
  });

  describe(`selectionChange`, () => {
    test(`should set the date range if the cohort selection changes`, () => {
      const fixture = createComponentLegacy<DefaultCohort>(DefaultCohort);
      fixture.detectChanges();
      const debug = getCohortDebugElement(fixture);
      const instance: TsCohortDateRangeComponent = debug.componentInstance;
      instance['setDateRangeValues'] = jest.fn();
      const cohort = {
        display: 'foo',
        range: {
          start: new Date(),
          end: new Date(),
        },
      };
      const fakeEvent = new TsSelectionListChange({} as any, [cohort]);
      instance.selectionChange(fakeEvent as any);

      expect(instance['setDateRangeValues']).toHaveBeenCalled();
    });
  });

  describe(`date constraints`, function() {
    test(`should set end min date to provided value`, function() {
      const fixture = createComponentLegacy<DateConstraints>(DateConstraints);
      fixture.detectChanges();
      const endInputInstance = getRangeInputInstances(fixture)[1];
      expect(endInputInstance.minDate).toEqual(new Date(2020, 2, 1));
    });

    test(`should set end max date to provided value`, function() {
      const fixture = createComponentLegacy<DateConstraints>(DateConstraints);
      fixture.detectChanges();
      const endInputInstance = getRangeInputInstances(fixture)[1];
      expect(endInputInstance.maxDate).toEqual(new Date(2020, 2, 25));
    });

    test(`should set start min date to provided value`, function() {
      const fixture = createComponentLegacy<DateConstraints>(DateConstraints);
      fixture.detectChanges();
      const startInputInstance = getRangeInputInstances(fixture)[0];
      expect(startInputInstance.minDate).toEqual(new Date(2020, 0, 1));
    });

    test(`should set start max date to provided value`, function() {
      const fixture = createComponentLegacy<DateConstraints>(DateConstraints);
      fixture.detectChanges();
      const startInputInstance = getRangeInputInstances(fixture)[0];
      expect(startInputInstance.maxDate).toEqual(new Date(2020, 0, 25));
    });
  });
});

/**
 * Create component
 *
 * @param component
 * @param providers
 * @param imports
 */
const createComponentLegacy = <T>(
  component: Type<T>,
  providers: Provider[] = [],
  imports: any[] = [],
): ComponentFixture<T> => createComponentInner<T>(
  component,
  providers,
  [
    ReactiveFormsModule,
    TsDateRangeModule,
    TsCohortDateRangeModule,
    ...imports,
  ],
);
