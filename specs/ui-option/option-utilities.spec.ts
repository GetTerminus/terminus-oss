import {
  Component,
  Provider,
  Type,
} from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { createComponent as createComponentInner } from '@terminus/fe-testing';
import { TsAutocompleteModule } from '@terminus/ui-autocomplete';
import { getAutocompleteInstance } from '@terminus/ui-autocomplete/testing';
import {
  allOptionsAreSelected,
  getOptionScrollPosition,
  someOptionsAreSelected,
  toggleAllOptions,
  TsOptionModule,
} from '@terminus/ui-option';

test(`should do something`, () => {
  expect(true).toEqual(true);
});

describe(`selectOptionUtilities`, function() {
  describe(`getOptionScrollPosition`, () => {
    test(`should return correct amount when scrolled out of view`, () => {
      const result = getOptionScrollPosition(
        12,
        50,
        400,
        100,
      );

      expect(result).toEqual(550);
    });
  });

  describe(`toggleAllOptions`, () => {
    test(`should return undefined if no options exist`, () => {
      const fixture = createComponent(EmptyQueryList);
      fixture.detectChanges();
      const instance = getAutocompleteInstance(fixture);

      expect(toggleAllOptions(instance.options as any)).toEqual(undefined);
      expect(toggleAllOptions(undefined as any)).toEqual(undefined);
    });
  });

  describe(`allOptionsAreSelected`, () => {
    test(`should select all the options`, () => {
      const fixture = createComponent(EmptyQueryList);
      fixture.detectChanges();
      const instance = getAutocompleteInstance(fixture);

      expect(allOptionsAreSelected(instance.options as any)).toEqual(false);
      expect(allOptionsAreSelected(undefined as any)).toEqual(false);
    });
  });

  describe(`someOptionsAreSelected`, () => {
    test(`should select some options`, () => {
      const fixture = createComponent(EmptyQueryList);
      fixture.detectChanges();
      const instance = getAutocompleteInstance(fixture);

      expect(someOptionsAreSelected(instance.options as any)).toEqual(false);
      expect(someOptionsAreSelected(undefined as any)).toEqual(false);
    });
  });
});

@Component({
  template: `
    <ts-autocomplete [formControl]="myCtrl">
      <ts-option
        [value]="state.name"
        [option]="state"
        *ngFor="let state of items"
      >
        {{ state.name }}
      </ts-option>
    </ts-autocomplete>
  `,
})
export class EmptyQueryList {
  myCtrl = new FormControl();
  items = [];
}

const createComponent =
  <T>(component: Type<T>, providers: Provider[] = [], imports: any[] = []): ComponentFixture<T> => createComponentInner<T>(
    component,
    providers,
    [
      ReactiveFormsModule,
      TsAutocompleteModule,
      TsOptionModule,
      // TsSelectModule,
      NoopAnimationsModule,
      ...imports,
    ],
  );
