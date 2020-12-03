import 'tools/jest-mocks/matchMedia';
import {
  Component,
  Provider,
  Type,
  ViewChild,
} from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import {
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';

import {
  createComponent as createComponentInner,
  typeInElement,
} from '@terminus/fe-testing';
import {
  TsDateRangeComponent,
  TsDateRangeModule,
} from '@terminus/ui-date-range';
import {
  createDateRangeGroup,
  getRangeInputInstances,
} from '@terminus/ui-date-range/testing';
import { TsInputComponent } from '@terminus/ui-input';

describe(`TsDateRange Spectator`, () => {
  let spectator: Spectator<TsDateRangeComponent>;
  const date1 = new Date(2018, 1, 1);
  const date2 = new Date(2018, 1, 12);
  const dateGroup1 = createDateRangeGroup(date1, date2);
  const createComponent = createComponentFactory({
    component: TsDateRangeComponent,
    imports: [TsDateRangeModule],
    declareComponent: false,
  });

  test(`should exist`, () => {
    spectator = createComponent();
    expect(spectator.queryAll('input').length).toEqual(2);
  });

  describe(`hint`, () => {
    test(`should show/hide the container and output the text`, () => {
      spectator = createComponent();
      expect(spectator.query('.ts-date-range__hint')).not.toExist();
      spectator.setInput('hint', 'foo');
      expect(spectator.query('.ts-date-range__hint')).toHaveText('foo');
    });
  });

  test(`should display an error message if one is passed in`, () => {
    spectator = createComponent({
      props: {
        errorMessage: 'My error',
      },
    });
    expect(spectator.query('.ts-date-range__error')).toHaveText('My error');
  });

  describe(`noValidationOrHint`, () => {
    test(`should not have validation or hint added if set to true`, () => {
      spectator = createComponent({
        props: {
          noValidationOrHint: true,
        },
      });
      expect(spectator.query('.ts-date-range__messages')).not.toExist();
    });
  });

  describe(`date constraints`, () => {
    beforeEach(() => {
      spectator = createComponent({
        props: {
          dateFormGroup: dateGroup1,
        },
      });
    });

    test(`should set the END min date according to the start date`, () => {
      expect(spectator.component.endMinDate$.getValue()).toEqual(date1);
    });

    test(`should set the START max date according to the end date`, () => {
      expect(spectator.component.startMaxDate$.getValue()).toEqual(date2);
    });
  });

  describe(`control syncing`, () => {
    describe(`with controls`, () => {
      beforeEach(() => {
        spectator = createComponent({
          props: {
            dateFormGroup: createDateRangeGroup(),
          },
        });
      });

      test(`should update their VALUE when the external control value changes`, () => {
        const [startInputInstance, endInputInstance] = spectator.queryAll(TsInputComponent);
        expect(startInputInstance.formControl.value).toEqual(null);
        expect(endInputInstance.formControl.value).toEqual(null);

        const date = new Date(2018, 3, 3);
        startInputInstance.formControl.setValue(date);
        endInputInstance.formControl.setValue(date);
        spectator.detectChanges();

        expect(spectator.component.internalStartControl.value).toEqual(date);
        expect(spectator.component.internalEndControl.value).toEqual(date);
        expect.assertions(4);
      });

      test(`should update their STATUS when the external control changes`, () => {
        jest.useFakeTimers();
        const [startInputInstance, endInputInstance] = spectator.queryAll(TsInputComponent);

        expect(startInputInstance.formControl.valid).toEqual(true);
        expect(endInputInstance.formControl.valid).toEqual(true);

        // Simulate user entering and leaving the input to trigger validation
        startInputInstance.inputElement.nativeElement.focus();
        endInputInstance.inputElement.nativeElement.focus();
        spectator.detectChanges();
        startInputInstance.inputElement.nativeElement.blur();
        endInputInstance.inputElement.nativeElement.blur();
        spectator.detectChanges();

        expect(startInputInstance.formControl.errors).toEqual({ required: true });
        expect(endInputInstance.formControl.errors).toEqual({ required: true });
        jest.runAllTimers();
        expect.assertions(4);
      });
    });
  });
});

describe(`TsDateRangeComponent`, function() {
  describe(`date constraints`, function() {
    test(`should set the START max date according to the end date on BLUR`, function() {
      const fixture = createComponentLegacy(Basic);
      fixture.detectChanges();
      const [startInputInstance, endInputInstance] = getRangeInputInstances(fixture);
      const endInputElement = endInputInstance.inputElement.nativeElement;
      typeInElement('3-4-2019', endInputElement);
      endInputElement.blur();
      fixture.detectChanges();

      expect(startInputInstance.maxDate).toEqual(new Date('3-4-2019'));
    });
  });

  describe(`control syncing`, function() {
    describe(`internal controls`, function() {
      test(`should do nothing if no controls exist`, function() {
        jest.useFakeTimers();
        const fixture = createComponentLegacy(NoControls);
        fixture.detectChanges();
        const [startInputInstance, endInputInstance] = getRangeInputInstances(fixture);

        expect(startInputInstance.formControl.valid).toEqual(true);
        expect(endInputInstance.formControl.valid).toEqual(true);

        // Simulate user entering and leaving the input to trigger validation
        startInputInstance.inputElement.nativeElement.focus();
        endInputInstance.inputElement.nativeElement.focus();
        fixture.detectChanges();
        startInputInstance.inputElement.nativeElement.blur();
        endInputInstance.inputElement.nativeElement.blur();
        fixture.detectChanges();

        expect(startInputInstance.formControl.errors).toEqual(null);
        expect(endInputInstance.formControl.errors).toEqual(null);
        jest.runAllTimers();
        expect.assertions(4);
      });
    });

    describe(`external controls`, function() {
      test(`should update their VALUE when the internal control changes`, function() {
        const fixture = createComponentLegacy(Basic);
        fixture.detectChanges();
        const [startInputInstance, endInputInstance] = getRangeInputInstances(fixture);

        expect(startInputInstance.formControl.value).toBeNull();
        expect(endInputInstance.formControl.value).toBeNull();

        typeInElement('3-4-2019', startInputInstance.inputElement.nativeElement);
        startInputInstance.inputElement.nativeElement.blur();
        typeInElement('3-8-2019', endInputInstance.inputElement.nativeElement);
        endInputInstance.inputElement.nativeElement.blur();
        fixture.detectChanges();

        expect(fixture.componentInstance.dateRangeComponent.internalStartControl.value).toEqual(new Date('3-4-2019'));
        expect(fixture.componentInstance.dateRangeComponent.internalEndControl.value).toEqual(new Date('3-8-2019'));
        expect.assertions(4);
      });
    });
  });

  describe(`emitters`, function() {
    let fixture: ComponentFixture<Emitters>;

    beforeEach(() => {
      fixture = createComponentLegacy(Emitters);
      fixture.componentInstance.dateRangeChange = jest.fn();
      fixture.componentInstance.startSelected = jest.fn();
      fixture.componentInstance.endSelected = jest.fn();
      fixture.detectChanges();
    });

    test(`should pass correct values when fired`, function() {
      const [startInputInstance, endInputInstance] = getRangeInputInstances(fixture);

      typeInElement('3-4-2019', startInputInstance.inputElement.nativeElement);
      startInputInstance.inputElement.nativeElement.blur();
      fixture.detectChanges();
      expect(fixture.componentInstance.startSelected).toHaveBeenCalledWith(new Date('3-4-2019'));
      expect(fixture.componentInstance.dateRangeChange).toHaveBeenCalledWith({
        start: new Date('3-4-2019'),
        end: null,
      });

      typeInElement('3-8-2019', endInputInstance.inputElement.nativeElement);
      endInputInstance.inputElement.nativeElement.blur();
      fixture.detectChanges();
      expect(fixture.componentInstance.endSelected).toHaveBeenCalledWith(new Date('3-8-2019'));
      expect(fixture.componentInstance.dateRangeChange).toHaveBeenCalledWith({
        start: new Date('3-4-2019'),
        end: new Date('3-8-2019'),
      });

      typeInElement('', startInputInstance.inputElement.nativeElement);
      fixture.detectChanges();
      startInputInstance.inputElement.nativeElement.blur();
      fixture.detectChanges();
      const changeMock = (fixture.componentInstance.dateRangeChange as jest.Mock).mock;
      expect(changeMock.calls[changeMock.calls.length - 1][0]).toEqual({
        start: null,
        end: new Date('3-8-2019'),
      });

      expect.assertions(5);
    });
  });

  describe(`input component`, function() {
    test(`should receive all needed parameters from the date range component`, function() {
      const fixture = createComponentLegacy(Params);
      const hostInstance = fixture.componentInstance;
      fixture.detectChanges();
      const [startInputInstance, endInputInstance] = getRangeInputInstances(fixture);

      expect(endInputInstance.maxDate).toEqual(hostInstance.endMax);
      expect(endInputInstance.minDate).toEqual(hostInstance.endMin);

      expect(startInputInstance.isDisabled).toEqual(true);
      expect(endInputInstance.isDisabled).toEqual(true);

      expect(startInputInstance.startingView).toEqual(hostInstance.startingView);
      expect(endInputInstance.startingView).toEqual(hostInstance.startingView);

      expect(startInputInstance.maxDate).toEqual(hostInstance.startMax);
      expect(startInputInstance.minDate).toEqual(hostInstance.startMin);

      expect.assertions(8);
    });
  });

  test(`should work without a form group`, function() {
    const fixture = createComponentLegacy(NoFormGroup);
    fixture.componentInstance.startSelected = jest.fn();
    fixture.detectChanges();
    const startInputInstance = getRangeInputInstances(fixture)[0];
    typeInElement('3-4-2019', startInputInstance.inputElement.nativeElement);
    startInputInstance.inputElement.nativeElement.blur();
    fixture.detectChanges();

    expect(fixture.componentInstance.startSelected).toHaveBeenCalled();
  });
});

/**
 * Create component
 *
 * @param component
 * @param providers
 * @param imports
 */
const createComponentLegacy =
  <T>(component: Type<T>, providers: Provider[] = [], imports: any[] = []): ComponentFixture<T> => createComponentInner<T>(component,
    providers,
    [
      ReactiveFormsModule,
      TsDateRangeModule,
      ...imports,
    ]);

/**
 * Test Components
 *
 * @param v - The value
 */
const noopParam = v => {};

@Component({
  template: `
    <form [formGroup]="dateGroup" novalidate>
      <ts-date-range [dateFormGroup]="dateGroup"></ts-date-range>
    </form>
  `,
})
class Basic {
  dateGroup = createDateRangeGroup();

  @ViewChild(TsDateRangeComponent, { static: true })
  dateRangeComponent!: TsDateRangeComponent;
}

@Component({
  template: `
    <form [formGroup]="dateGroup" novalidate>
      <ts-date-range [dateFormGroup]="dateGroup"></ts-date-range>
    </form>
  `,
})
class SeededDates {
  date1 = new Date(2018, 1, 1);
  date2 = new Date(2018, 1, 12);
  dateGroup = createDateRangeGroup(this.date1, this.date2);

  @ViewChild(TsDateRangeComponent, { static: true })
  dateRangeComponent!: TsDateRangeComponent;
}

@Component({
  template: `
    <form [formGroup]="dateGroup" novalidate>
      <ts-date-range
        [dateFormGroup]="dateGroup"
        (dateRangeChange)="dateRangeChange($event)"
        (endSelected)="endSelected($event)"
        (startSelected)="startSelected($event)"
      ></ts-date-range>
    </form>
  `,
})
class Emitters {
  dateGroup = createDateRangeGroup();
  dateRangeChange = noopParam;
  endSelected = noopParam;
  startSelected = noopParam;

  @ViewChild(TsDateRangeComponent, { static: true })
  dateRangeComponent!: TsDateRangeComponent;
}

@Component({
  template: `
    <form [formGroup]="dateGroup" novalidate>
      <ts-date-range
        [dateFormGroup]="dateGroup"
        [endMaxDate]="endMax"
        [endMinDate]="endMin"
        [isDisabled]="disabled"
        [startingView]="startingView"
        [startMaxDate]="startMax"
        [startMinDate]="startMin"
      ></ts-date-range>
    </form>
  `,
})
class Params {
  dateGroup = createDateRangeGroup();
  endMax = new Date(2017, 4, 25);
  endMin = new Date(2017, 4, 1);
  disabled = true;
  startingView: 'month' | 'year' = 'year';
  startMax = new Date(2017, 5, 25);
  startMin = new Date(2017, 5, 1);

  @ViewChild(TsDateRangeComponent, { static: true })
  dateRangeComponent!: TsDateRangeComponent;
}

@Component({
  template: `
    <ts-date-range (startSelected)="startSelected($event)"></ts-date-range>
  `,
})
class NoFormGroup {
  startSelected = noopParam;

  @ViewChild(TsDateRangeComponent, { static: true })
  dateRangeComponent!: TsDateRangeComponent;
}

@Component({
  template: `
    <form [formGroup]="dateGroup" novalidate>
      <ts-date-range [dateFormGroup]="dateGroup"></ts-date-range>
    </form>
  `,
})
class NoControls {
  dateGroup = this.formBuilder.group({});

  @ViewChild(TsDateRangeComponent, { static: true })
  dateRangeComponent!: TsDateRangeComponent;

  constructor(private formBuilder: FormBuilder) {}
}
