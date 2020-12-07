import { fakeAsync } from '@angular/core/testing';
import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';

import {
  TsSearchModule,
  TsSearchComponent,
} from '@terminus/ui-search';

describe(`TsSearchComponent`, () => {
  let spectator: Spectator<TsSearchComponent>;
  const createComponent = createComponentFactory({
    component: TsSearchComponent,
    imports: [TsSearchModule],
    declareComponent: false,
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        inputLabel: 'Foo Bar',
      },
    });
  });

  test(`should exist`, () => {
    expect(spectator.component).toExist();
  });

  describe(`isDisabled`, () => {
    beforeEach(() => {
      spectator = createComponent();
    });

    test(`should default to input enabled and button disabled`, () => {
      expect(spectator.query('input')).toHaveProperty('disabled', false);
      expect(spectator.query('button')).toHaveProperty('disabled', true);
    });

    test(`should set the disabled flag when appropriate`, fakeAsync(() => {
      expect(spectator.query('input')).toHaveProperty('disabled', false);
      spectator.setInput('isDisabled', true);
      spectator.tick();
      expect(spectator.query('input')).toHaveProperty('disabled', true);
    }));
  });

  describe(`isFocused`, () => {
    test(`should set autofocus`, () => {
      spectator = createComponent();
      expect(spectator.query('input').getAttribute('autofocus')).toEqual(null);
      spectator.setInput('isFocused', true);
      expect(spectator.query('input').getAttribute('autofocus')).toEqual('');
    });
  });

  describe(`isSubmitting`, () => {
    test(`should show progress within the button`, () => {
      spectator = createComponent({
        props: { initialValue: 'FooBar' },
      });
      spectator.setInput('isSubmitting', true);
      expect(spectator.query('button')).toBeDisabled();
      expect(spectator.query('button')).toHaveClass('c-button--progress');
    });
  });

  describe(`userCanClear`, () => {
    beforeEach(() => {
      spectator = createComponent({
        props: { initialValue: 'FooBar' },
      });
    });

    test(`should allow the user to clear the input value`, () => {
      expect(spectator.query('.c-input__clear')).toExist();
    });
  });

  describe(`errorMessage`, () => {
    beforeEach(() => {
      spectator = createComponent({
        props: { inputError: 'Whoops' },
      });
    });

    test(`should pass the error message through`, () => {
      expect(spectator.query('.ts-input__error')).toHaveText('Whoops');
    });
  });

  describe(`noValidationOrHint`, () => {
    beforeEach(() => {
      spectator = createComponent({
        props: {
          inputError: 'Whoops',
          inputHint: 'My hint',
          noValidationOrHint: true,
        },
      });
    });

    test(`should not expose validation or hint when set`, () => {
      expect(spectator.query('.ts-input__messages')).not.toExist();
    });
  });

  describe(`initialValue`, () => {
    beforeEach(() => {
      spectator = createComponent({
        props: { initialValue: 'Test' },
      });
    });

    test(`should seed the initial value if it exists`, () => {
      expect(spectator.query('input')).toHaveValue('Test');
    });
  });

  describe(`emitters`, () => {
    let changedOutput;
    let clearedOutput;
    let submittedOutput;
    beforeEach(() => {
      spectator = createComponent({
        props: { autoSubmit: true },
      });
      spectator.output('changed').subscribe(result => (changedOutput = result));
      spectator.output('cleared').subscribe(result => (clearedOutput = result));
      spectator.output('submitted').subscribe(result => (submittedOutput = result));
    });

    test(`should emit events`, fakeAsync(() => {
      spectator.typeInElement('Testing', spectator.query('input'));
      spectator.component.keyup();
      spectator.detectChanges();
      expect(changedOutput).toEqual('Testing');
      spectator.tick(250);
      expect(submittedOutput).toEqual({ query: 'Testing' });

      spectator.click(spectator.query('.c-input__clear'));
      expect(clearedOutput).toEqual(true);
    }));
  });
});
