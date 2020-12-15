import 'tools/jest-mocks/matchMedia';
import { AutofillMonitor } from '@angular/cdk/text-field';
import {
  ElementRef,
  Type,
} from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import {
  Observable,
  Subject,
} from 'rxjs';

import {
  createComponent as createComponentInner,
  createFakeEvent,
  createKeyboardEvent,
  TsDocumentServiceMock,
  typeInElement,
} from '@terminus/fe-testing';
import {
  KEYS,
  TsDocumentService,
} from '@terminus/fe-utilities';
import {
  TsInputComponent,
  TsInputModule,
} from '@terminus/ui-input';
import {
  getInputElement,
  getInputInstance,
} from '@terminus/ui-input/testing';

import * as TestComponents from './test-components';

describe(`TsInputComponent`, () => {
  let spectator: Spectator<TsInputComponent>;
  let rootElement: HTMLElement;
  const createComponent = createComponentFactory({
    component: TsInputComponent,
    imports: [TsInputModule],
    declareComponent: false,
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        label: 'Foo Bar',
      },
    });
    rootElement = spectator.component.elementRef.nativeElement;
  });

  test(`should exist`, () => {
    expect(spectator.query('input')).toBeTruthy();
  });

  test(`should display a validation message if one is passed in`, () => {
    spectator.setInput('errorMessage', 'My error');
    expect(spectator.query('.ts-input__error')).toHaveText('My error');
  });

  describe(`input attributes`, () => {
    describe(`required`, () => {
      test(`should not be required by default`, () => {
        expect(spectator.query('input')).not.toHaveAttribute('required');
      });

      test(`should set required if the form control is required`, () => {
        const control = new FormControl(null, Validators.required);
        spectator.setInput('formControl', control);
        expect(spectator.query('input')).toHaveAttribute('required');
      });

      test(`should set required if the required flag is set`, () => {
        spectator.setInput('isRequired', true);
        expect(spectator.query('input')).toHaveAttribute('required');
      });
    });

    describe(`readOnly`, () => {
      test(`should add the correct attribute`, () => {
        expect(spectator.query('input')).not.toHaveAttribute('readonly');
        spectator.setInput('readOnly', true);
        expect(spectator.query('input')).toHaveAttribute('readonly');
      });
    });

    describe(`spellcheck`, () => {
      test(`should add the correct attribute`, () => {
        expect(spectator.query('input')).toHaveAttribute('spellcheck', 'true');
        spectator.setInput('spellcheck', false);
        expect(spectator.query('input')).toHaveAttribute('spellcheck', 'false');
      });
    });

    test(`should set autocapitalize if set`, () => {
      expect(spectator.query('input')).toHaveAttribute('autocapitalize', 'off');
      spectator.setInput('autocapitalize', true);
      expect(spectator.query('input')).toHaveAttribute('autocapitalize', 'on');
    });

    test(`should set autocomplete if set`, () => {
      expect(spectator.query('input')).toHaveAttribute('autocomplete', 'on');
      spectator.setInput('autocomplete', 'name');
      expect(spectator.query('input')).toHaveAttribute('autocomplete', 'name');
      spectator.setInput('autocomplete', undefined);
      expect(spectator.query('input')).toHaveAttribute('autocomplete', 'on');
    });

    test(`should set id if set and fallback to default UID`, () => {
      expect(spectator.query('input').getAttribute('id')).toEqual(expect.stringContaining('ts-input-'));
      spectator.setInput('id', 'foo');
      expect(spectator.query('input').getAttribute('id')).toEqual('foo');
    });

    test(`should set the disabled flag when appropriate`, fakeAsync(() => {
      expect(spectator.query('input')).toHaveProperty('disabled', false);
      spectator.setInput('isDisabled', true);
      spectator.tick();
      expect(spectator.query('input')).toHaveProperty('disabled', true);
    }));

    test(`should set autofocus`, () => {
      expect(spectator.query('input').getAttribute('autofocus')).toEqual(null);
      spectator.setInput('isFocused', true);
      expect(spectator.query('input').getAttribute('autofocus')).toEqual('');
    });

    describe(`tabIndex`, () => {
      test(`should set the tabindex on the input`, () => {
        spectator.setInput('tabIndex', 4);
        expect(spectator.query('input')).toHaveAttribute('tabindex', '4');
      });
    });
  });

  describe(`formControl`, () => {
    test(`should fall back to a default form control`, () => {
      spectator.setInput('formControl', undefined);
      expect(spectator.component.formControl).toBeTruthy();
    });
  });

  describe(`set type()`, () => {
    test(`should log a warning if an unaccepted input type is passed in while using a mask and default to 'text'`, () => {
      window.console.warn = jest.fn();
      spectator.setInput('mask', 'number');
      spectator.setInput('type', 'email');
      expect(window.console.warn).toHaveBeenCalled();
      expect(spectator.query('input')).toHaveAttribute('type', 'text');
    });

    test(`should update autocomplete for 'email' type if no mask exists and reset to default when switching away`, () => {
      spectator.setInput('type', 'email');
      expect(spectator.query('input')).toHaveAttribute('autocomplete', 'email');
      spectator.setInput('type', 'url');
      expect(spectator.query('input')).toHaveAttribute('autocomplete', 'on');
    });
  });

  describe(`isClearable`, () => {
    test(`should show the clearable button when valid`, () => {
      let output = 0;
      spectator.output('cleared').subscribe(() => (output += 1));
      expect(spectator.query('.c-input__clear')).not.toExist();

      spectator.setInput('isClearable', true);
      expect(spectator.query('.c-input__clear')).toExist();
      expect(spectator.query('.c-input__clear')).not.toHaveClass('c-input__clear--visible');

      spectator.typeInElement('test', spectator.query('input'));
      expect(spectator.component.value).toEqual('test');
      expect(spectator.query('.c-input__clear')).toHaveClass('c-input__clear--visible');

      spectator.click(spectator.query('.c-input__clear'));
      expect(spectator.component.value).toEqual('');
      expect(output).toEqual(1);
    });

    test(`should return true if the input is not found`, () => {
      spectator.typeInElement('test', spectator.query('input'));
      expect(spectator.component.empty).toEqual(false);
      spectator.component.inputElement = null;
      expect(spectator.component.empty).toEqual(true);
    });
  });

  describe(`hint`, () => {
    test(`should show/hide the container and output the text`, () => {
      expect(spectator.query('.ts-input__hint')).not.toExist();
      spectator.setInput('hint', 'foo');
      expect(spectator.query('.ts-input__hint')).toHaveText('foo');
    });
  });

  describe(`label`, () => {
    test(`should display the label`, () => {
      expect(spectator.query('label')).toHaveText('Foo Bar');
    });
  });

  describe(`textarea`, () => {
    beforeEach(() => {
      spectator.setInput('isTextarea', true);
    });

    test(`should enable a textarea instead of a standard input`, () => {
      expect(spectator.query('textarea')).toExist();
    });

    test(`should allow a dynamic number of rows`, () => {
      spectator.setInput('textareaRows', 4);
      expect(spectator.query('textarea')).toHaveAttribute('rows', '4');

      spectator.setInput('textareaRows', 7);
      expect(spectator.query('textarea')).toHaveAttribute('rows', '7');
    });
  });

  describe(`noValidationOrHint`, () => {
    test(`should not have validation or hint added if set to true`, () => {
      spectator.setInput('noValidationOrHint', true);
      expect(spectator.query('.ts-input__messages')).not.toExist();
    });
  });

  describe(`small`, () => {
    test(`should add classes needed for small format`, () => {
      spectator.setInput('isSmall', true);
      spectator.setInput('isClearable', true);
      expect(spectator.query('.c-input__text--small')).toExist();
      expect(spectator.query('.c-input__clear--small')).toExist();
    });
  });
});

// FIXME: Slowly transitioning to Spectator based tests above
describe(`TsInputComponent Original`, function() {
  describe(`autocomplete`, () => {
    test(`should emit valueChange if the value was updated for a datepicker`, () => {
      const fixture = createComponentLegacy(TestComponents.Autocomplete);
      const component = getInputInstance(fixture);
      fixture.detectChanges();
      component._valueChange.emit = jest.fn();
      fixture.componentInstance.updateDate();
      fixture.detectChanges();

      expect(component._valueChange.emit).toHaveBeenCalledWith(fixture.componentInstance.secondDate);
    });
  });

  describe(`mask`, () => {
    describe(`set mask()`, () => {
      test(`should set the correct mask`, () => {
        const fixture = createComponentLegacy(TestComponents.Mask);
        fixture.componentInstance.mask = 'percentage';
        fixture.detectChanges();
        const inputElement = getInputElement(fixture);
        typeInElement('1234', inputElement);

        expect(inputElement.value).toEqual('1,234%');
      });

      test(`should return undefined if no mask was passed in`, () => {
        const fixture = createComponentLegacy(TestComponents.Mask);
        fixture.detectChanges();

        expect(fixture.componentInstance.inputComponent.mask).toEqual(undefined);

        const inputElement = getInputElement(fixture);
        typeInElement('1234', inputElement);

        expect(inputElement.value).toEqual('1234');
      });

      test(`should log a warning if an unaccepted mask is passed in`, () => {
        const fixture = createComponentLegacy(TestComponents.Mask);
        fixture.detectChanges();
        window.console.warn = jest.fn();
        fixture.componentInstance.mask = 'foo' as any;
        fixture.detectChanges();

        expect(window.console.warn).toHaveBeenCalledWith(expect.stringContaining('TsInputComponent: '));
        expect(fixture.componentInstance.inputComponent.mask).toEqual('default');
      });
    });

    describe(`maskSanitizeValue`, () => {
      test(`should disable the sanitation of the model value`, () => {
        const fixture = createComponentLegacy(TestComponents.MaskSanitize);
        fixture.detectChanges();
        fixture.componentInstance.mask = 'currency';
        fixture.componentInstance.maskSanitizeValue = false;
        fixture.detectChanges();
        const inputElement = getInputElement(fixture);
        typeInElement('$12.34', inputElement);

        expect(inputElement.value).toEqual('$12.34');
        expect(fixture.componentInstance.formControl.value).toEqual('$12.34');
      });

      test(`should enable the sanitation of the model value`, () => {
        const fixture = createComponentLegacy(TestComponents.MaskSanitize);
        fixture.detectChanges();
        fixture.componentInstance.mask = 'percentage';
        fixture.detectChanges();
        const inputElement = getInputElement(fixture);

        typeInElement('1%', inputElement);
        expect(inputElement.value).toEqual('1%');
        expect(fixture.componentInstance.formControl.value).toEqual('1');

        typeInElement('12%', inputElement);
        expect(inputElement.value).toEqual('12%');
        expect(fixture.componentInstance.formControl.value).toEqual('12');

        typeInElement('12.3%', inputElement);
        expect(inputElement.value).toEqual('12.3%');
        expect(fixture.componentInstance.formControl.value).toEqual('12.3');
      });
    });

    describe(`maskAllowDecimal`, () => {
      test(`should allow the use of decimals within a number-based mask`, () => {
        const fixture = createComponentLegacy(TestComponents.MaskDecimal);
        fixture.detectChanges();
        fixture.componentInstance.mask = 'percentage';
        fixture.detectChanges();
        const inputElement = getInputElement(fixture);
        typeInElement('12.34', inputElement);

        expect(inputElement.value).toEqual('12.34%');
        expect(fixture.componentInstance.formControl.value).toEqual('12.34');
      });

      test(`should disallow the use of decimals within a number-based mask`, () => {
        const fixture = createComponentLegacy(TestComponents.MaskDecimal);
        fixture.detectChanges();
        fixture.componentInstance.mask = 'percentage';
        fixture.componentInstance.maskAllowDecimal = false;
        fixture.detectChanges();
        const inputElement = getInputElement(fixture);
        typeInElement('12.34', inputElement);

        expect(inputElement.value).toEqual('1,234%');
        expect(fixture.componentInstance.formControl.value).toEqual('1234');
      });
    });

    describe(`maskDateFormat`, () => {
      test(`should format a masked date according to the default date mask`, function() {
        jest.useFakeTimers();
        const fixture = createComponentLegacy(TestComponents.MaskDateFormat);
        fixture.detectChanges();

        const inputElement = getInputElement(fixture);
        typeInElement('11111111', inputElement);
        fixture.detectChanges();

        expect(inputElement.value).toEqual('11-11-1111');
        const controlValue = fixture.componentInstance.formControl.value;

        expect(controlValue).toEqual(expect.any(Date));
        expect(controlValue.toISOString()).toEqual(expect.stringContaining('1111-11-11'));
        expect.assertions(3);
        jest.runAllTimers();
      });
    });

    describe(`determinePostalMask`, () => {
      test(`should create the correct mask based on the value length`, () => {
        const fixture = createComponentLegacy(TestComponents.PostalMask);
        fixture.detectChanges();
        const inputElement = getInputElement(fixture);
        typeInElement('12345', inputElement);

        expect(inputElement.value).toEqual('12345');

        typeInElement('123456789', inputElement);

        expect(inputElement.value).toEqual('12345-6789');
      });
    });
  });

  describe(`datepicker`, () => {
    describe(`startingView`, () => {
      test(`should allow the starting calendar view to be changed`, () => {
        const fixture = createComponentLegacy(TestComponents.StartingView);
        fixture.detectChanges();

        expect(fixture.componentInstance.inputComponent.startingView).toEqual('month');

        fixture.componentInstance.startingView = 'year';
        fixture.detectChanges();

        expect(fixture.componentInstance.inputComponent.startingView).toEqual('year');

        fixture.componentInstance.startingView = undefined as any;
        fixture.detectChanges();

        expect(fixture.componentInstance.inputComponent.startingView).toEqual('month');

        expect.assertions(3);
      });
    });

    describe(`openTo`, () => {
      test(`should allow a Date or undefined`, () => {
        const fixture = createComponentLegacy(TestComponents.OpenTo);
        fixture.detectChanges();

        expect(fixture.componentInstance.inputComponent.openTo).toEqual(new Date(2018, 1, 1));

        fixture.componentInstance.openTo = undefined;
        fixture.detectChanges();

        expect(fixture.componentInstance.inputComponent.openTo).toBeUndefined();
        expect.assertions(2);
      });
    });

    describe(`defaultOpened`, () => {
      test(`should allow the datepicker to be open on load`, fakeAsync(() => {
        const fixture = createComponentLegacy(TestComponents.OpenTo);
        fixture.componentInstance.defaultOpen = true;
        // fixture.componentInstance.inputComponent.datepickerDefaultOpen = true;
        fixture.detectChanges();
        tick(10);
        fixture.detectChanges();
        expect(document.querySelector('.mat-datepicker-popup')).toBeTruthy();
      }));
    });

    describe(`minDate`, () => {
      test(`should set a minimum date with a string date, Date object, or undefined`, () => {
        const fixture = createComponentLegacy(TestComponents.MinMaxDate);
        fixture.detectChanges();
        const comp = fixture.componentInstance.inputComponent;
        const date1 = new Date(2018, 1, 1);
        const date2 = new Date(2018, 1, 1);

        // Default
        expect(comp.minDate).toEqual(undefined);
        expect(comp.maxDate).toEqual(undefined);

        // Date object
        fixture.componentInstance.maxDate = date1;
        fixture.componentInstance.minDate = date2;
        fixture.detectChanges();

        expect(comp.maxDate).toEqual(date1);
        expect(comp.minDate).toEqual(date2);

        expect.assertions(4);
      });
    });

    describe(`dateFilter`, () => {
      test(`should set a filter for valid days of the week`, () => {
        const fixture = createComponentLegacy(TestComponents.DateFilter);
        const comp = fixture.componentInstance.inputComponent;
        const func = (d: Date) => d?.getDay() === 6;
        fixture.detectChanges();

        expect(comp.dateFilter).toBeUndefined();

        fixture.componentInstance.dateFilter = func;
        fixture.detectChanges();

        expect(comp.dateFilter).toEqual(expect.any(Function));
        expect(comp.dateFilter(new Date(2018, 1, 1))).toEqual(false);

        expect.assertions(3);
      });
    });

    describe(`locale`, () => {
      test(`should default to US locale`, () => {
        const fixture = createComponentLegacy(TestComponents.DateLocale);
        fixture.detectChanges();
        const button = document.getElementsByTagName('mat-datepicker-toggle')[0].getElementsByTagName('button')[0];
        button.click();
        fixture.detectChanges();
        const month = document.getElementsByClassName('mat-calendar-body-label')[0];
        expect(month.textContent.trim()).toEqual('APR');
      });

      test.todo(`should be able to change the locale`);
      // NOTE: This works perfectly IRL, but in tests I only ever get en-US values
      // test(`should be able to change the locale`, () => {
      //   const fixture = createComponent(TestComponents.DateLocaleForeign);
      //   fixture.detectChanges();
      //   const button = document.getElementsByTagName('mat-datepicker-toggle')[0].getElementsByTagName('button')[0];
      //   button.click();
      //   fixture.detectChanges();
      //   const month = document.getElementsByClassName('mat-calendar-body-label')[0];
      //   expect(month.textContent.trim()).not.toEqual('APR');
      // });
    });
  });

  describe(`initialization`, () => {
    describe(`AutofillMonitor`, () => {
      test(`should monitor the input for autofill and cleanup after ngOnDestroy`, fakeAsync(() => {
        const fixture = createComponentLegacy<TestComponents.Autofill>(TestComponents.Autofill);
        fixture.detectChanges();
        const instance = getInputInstance(fixture);
        instance['autofillMonitor'].stopMonitoring = jest.fn();

        expect(instance.autofilled).toEqual(false);
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        (instance['autofillMonitor'] as any).fireMockFillEvent();
        fixture.detectChanges();
        tick(1000);
        fixture.detectChanges();

        expect(instance.autofilled).toEqual(true);

        instance.ngOnDestroy();
        expect(instance['autofillMonitor'].stopMonitoring).toHaveBeenCalled();
      }));
    });

    describe(`fixIOSCaretBug`, () => {
      test(`should set the selectionRange on keyup`, () => {
        const fixture = createComponentLegacy(TestComponents.OnChangesWrapper);
        fixture.detectChanges();
        const inputElement = getInputElement(fixture);
        const keyboardEvent: KeyboardEvent = createKeyboardEvent('keyup', KEYS.A, inputElement);
        inputElement.setSelectionRange = jest.fn();
        fixture.componentInstance.inputComponent['platform'].IOS = true;
        fixture.componentInstance.inputComponent.ngAfterContentInit();
        inputElement.dispatchEvent(keyboardEvent);

        expect(inputElement.setSelectionRange).toHaveBeenCalledTimes(2);
      });
    });

    describe(`ngOnChanges`, () => {
      test(`should re-initialize the mask for valid changes`, () => {
        const fixture = createComponentLegacy(TestComponents.OnChangesWrapper);
        fixture.detectChanges();
        const inputComponent = fixture.componentInstance.inputComponent;
        inputComponent['setUpMask'] = jest.fn();
        inputComponent['updateMaskModelHack'] = jest.fn();
        inputComponent['setValue'] = jest.fn();
        inputComponent['textMaskInputElement'].update = jest.fn();

        fixture.componentInstance.mask = 'percentage';
        fixture.detectChanges();
        expect(inputComponent['setUpMask']).toHaveBeenCalledTimes(2);
        expect(inputComponent['updateMaskModelHack']).toHaveBeenCalledTimes(1);

        fixture.componentInstance.maskSanitizeValue = false;
        fixture.detectChanges();
        expect(inputComponent['setUpMask']).toHaveBeenCalledTimes(3);
        expect(inputComponent['updateMaskModelHack']).toHaveBeenCalledTimes(2);
        expect(inputComponent['setValue']).toHaveBeenCalledTimes(1);

        fixture.componentInstance.maskAllowDecimal = false;
        fixture.detectChanges();
        expect(inputComponent['setUpMask']).toHaveBeenCalledTimes(4);
        expect(inputComponent['updateMaskModelHack']).toHaveBeenCalledTimes(3);

        expect(inputComponent['textMaskInputElement'].update).toHaveBeenCalledWith('');
        expect.assertions(8);
      });
    });
  });

  describe(`onBlur`, () => {
    test(`should trigger the onTouched callback and emit an event`, () => {
      const fixture = createComponentLegacy(TestComponents.OnChangesWrapper);
      fixture.detectChanges();
      const component = fixture.componentInstance.inputComponent;
      component['onTouchedCallback'] = jest.fn();
      component.inputBlur.emit = jest.fn();

      component.focusChanged(false);

      expect(component['onTouchedCallback']).toHaveBeenCalled();
      expect(component.inputBlur.emit).toHaveBeenCalledWith('foo');
    });

    test(`should trigger the onTouched callback and emit an event`, () => {
      const fixture = createComponentLegacy(TestComponents.OnChangesWrapper);
      fixture.detectChanges();
      const component = fixture.componentInstance.inputComponent;
      component['onTouchedCallback'] = jest.fn();
      component.inputBlur.emit = jest.fn();

      component.onBlur();

      expect(component['onTouchedCallback']).toHaveBeenCalled();
      expect(component.inputBlur.emit).toHaveBeenCalledWith('foo');
    });
  });

  describe(`onDateChanged`, () => {
    test(`should trigger selected.emit with the date passed in`, () => {
      const date = new Date();
      const fixture = createComponentLegacy(TestComponents.DateFilter);
      const component = fixture.componentInstance.inputComponent;
      (component as any).textualDateValue = '01-02-2019';
      component.selected.emit = jest.fn();
      component.onDateChanged(date);
      expect(component.selected.emit).toHaveBeenCalledWith(date);
    });

    test(`should trigger selected.emit with the text value date`, () => {
      const date = new Date('01-02-2019');
      const fixture = createComponentLegacy(TestComponents.DateFilter);
      const component = fixture.componentInstance.inputComponent;
      (component as any).textualDateValue = '01-02-2019';
      component.selected.emit = jest.fn();
      component.onDateChanged(undefined as any);
      expect(component.selected.emit).toHaveBeenCalledWith(date);
    });
  });

  describe(`writeValue`, () => {
    test(`should convert a date object to a string`, () => {
      const fixture = createComponentLegacy(TestComponents.SimpleFormControl);
      fixture.detectChanges();
      const component = fixture.componentInstance.inputComponent;
      component['renderer'].setProperty = jest.fn();
      const date = new Date(2018, 3, 3);
      const isoDate = date.toISOString();
      component.writeValue(date);
      fixture.detectChanges();

      expect(component.value.toISOString()).toEqual(isoDate);
      expect(component['renderer'].setProperty).toHaveBeenCalledWith(expect.any(ElementRef), 'value', isoDate);
    });
  });

  describe(`onInput`, () => {
    test(`should emit the change if the date value has changed`, () => {
      const fixture = createComponentLegacy(TestComponents.DateFilter);
      const component = fixture.componentInstance.inputComponent;
      component._valueChange.emit = jest.fn();
      component.selected.emit = jest.fn();
      fixture.detectChanges();
      const inputElement = getInputElement(fixture);
      typeInElement('01-01-2018', inputElement);

      expect(component._valueChange.emit).toHaveBeenCalledWith(new Date('01-01-2018'));
    });

    test('should return if target is not set', () => {
      const fixture = createComponentLegacy(TestComponents.DateFilter);
      const component = fixture.componentInstance.inputComponent;
      component._valueChange.emit = jest.fn();
      component.selected.emit = jest.fn();
      component.onInput(null as any);

      expect(component._valueChange.emit).not.toHaveBeenCalled();
      expect(component.selected.emit).not.toHaveBeenCalled();
    });

    describe(`updateInnerValue`, () => {
      test(`should not call detectChange if component is destroyed when no toggling input`, () => {
        const fixture = createComponentLegacy(TestComponents.SimpleFormControl);
        const comp = fixture.componentInstance.inputComponent;
        comp['changeDetectorRef'].detectChanges = jest.fn();
        fixture.detectChanges();
        fixture.destroy();
        comp.updateInnerValue('abc');
        setTimeout(() => expect(comp['changeDetectorRef'].detectChanges).not.toHaveBeenCalled());
      });

      test(`should not call detectChange if component is destroyed with toggling`, () => {
        const fixture = createComponentLegacy(TestComponents.ToggleInputComponent);
        fixture.detectChanges();
        const comp = fixture.componentInstance.inputComponent;
        fixture.detectChanges();
        comp['changeDetectorRef'].detectChanges = jest.fn();
        fixture.detectChanges();
        fixture.componentInstance.show = false;
        fixture.detectChanges();
        fixture.destroy();
        expect(comp['changeDetectorRef'].detectChanges).not.toHaveBeenCalled();
      });
    });
  });

  describe(`cleanValue()`, () => {
    test(`should use a regex returned by function if needed`, () => {
      const fixture = createComponentLegacy(TestComponents.SimpleFormControl);
      fixture.detectChanges();
      const regexFunction = () => /[^0-9.]/g;

      expect(fixture.componentInstance.inputComponent['cleanValue']('12.34%', regexFunction)).toEqual('12.34');
    });

    test(`should return the original value if the passed function doesn't return a regex`, () => {
      const fixture = createComponentLegacy(TestComponents.SimpleFormControl);
      fixture.detectChanges();
      const regexFunction = () => undefined;

      expect(fixture.componentInstance.inputComponent['cleanValue']('12.34%', regexFunction)).toEqual('12.34%');
    });
  });

  describe(`trimLastCharacter`, () => {
    test(`should return the value if no mask is set`, () => {
      const fixture = createComponentLegacy(TestComponents.SimpleFormControl);
      fixture.detectChanges();

      expect(fixture.componentInstance.inputComponent['trimLastCharacter']('foo')).toEqual('foo');
    });

    test(`should correctly trim a number mask`, () => {
      const fixture = createComponentLegacy(TestComponents.MaskDecimal);
      fixture.componentInstance.mask = 'number';
      fixture.detectChanges();

      expect(fixture.componentInstance.inputComponent['trimLastCharacter']('12.345')).toEqual('12.34');
    });
  });

  describe(`inputPaste`, () => {
    test(`should emit a ClipboardEvent when the input receives a paste event`, () => {
      const pasteEvent = createFakeEvent('paste') as ClipboardEvent;
      (pasteEvent.clipboardData as any) = { getData: jest.fn().mockReturnValue('asdf') };
      const fixture = createComponentLegacy(TestComponents.SimpleFormControl);
      const component = fixture.componentInstance.inputComponent;
      jest.spyOn(component.inputPaste, 'emit');

      fixture.detectChanges();

      const inputContainer = fixture.debugElement.query(By.css('.c-input__text')).nativeElement as HTMLElement;
      inputContainer.dispatchEvent(pasteEvent);
      fixture.detectChanges();

      expect(component.inputPaste.emit).toHaveBeenCalledWith(pasteEvent);
    });
  });
});

/**
 * HELPERS
 */

/**
 * Create the test component
 *
 * @param component
 */
const createComponentLegacy = <T>(component: Type<T>): ComponentFixture<T> => createComponentInner<T>(
  component,
  [
    {
      provide: TsDocumentService,
      useClass: MyDocumentService,
    },
    {
      provide: AutofillMonitor,
      useClass: AutofillMonitorMock,
    },
  ],
  [
    FormsModule,
    ReactiveFormsModule,
    TsInputModule,
    NoopAnimationsModule,
  ],
);

/**
 * PROVIDERS
 */

class MyDocumentService extends TsDocumentServiceMock {
  public shouldContain = true;
  public document: any = {
    documentElement: { contains: jest.fn(() => !!this.shouldContain) },
    createEvent: () => document.createEvent('Event'),
  };
}

interface AutofillEvent {
  target: Element;
  isAutofilled: boolean;
}
class AutofillMonitorMock {
  public result = new Subject<AutofillEvent>();
  public el!: Element;

  public monitor(el: Element): Observable<any> {
    this.el = el;
    return this.result;
  }

  public fireMockFillEvent() {
    this.result.next({
      target: this.el,
      isAutofilled: true,
    });
  }

  public stopMonitoring(element: Element) {
    this.result.complete();
  }
}
