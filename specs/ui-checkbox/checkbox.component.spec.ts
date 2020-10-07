import {
  fakeAsync,
  flush,
} from '@angular/core/testing';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Spectator } from '@ngneat/spectator';
import {
  createComponentFactory,
  createHostFactory,
  SpectatorHost,
} from '@ngneat/spectator/jest';

import {
  TsCheckboxModule,
  TsCheckboxComponent,
  TsCheckboxChange,
  TS_CHECKBOX_DEFAULT_OPTIONS,
} from '@terminus/ui-checkbox';

describe(`TsCheckboxComponent`, () => {
  describe(`default options`, () => {
    let spectator: Spectator<TsCheckboxComponent>;
    let rootElement: HTMLElement;
    const createComponent = createComponentFactory({
      component: TsCheckboxComponent,
      imports: [TsCheckboxModule],
      declareComponent: false,
    });

    beforeEach(() => {
      spectator = createComponent({
        props: {
          label: 'FooBar',
        },
      });
      rootElement = spectator.component.elementRef.nativeElement;
    });

    describe(`tabindex`, () => {
      test(`should default to null`, () => {
        expect(spectator.query('input')).toHaveAttribute('tabindex', '0');
      });

      test(`should set tabindex based on tabIndex input`, () => {
        spectator.setInput('tabIndex', -1);
        expect(spectator.query('input')).toHaveAttribute('tabindex', '-1');
      });
    });

    describe(`a11y`, () => {
      test(`should visually hide the native input`, () => {
        expect(spectator.query('input')).toHaveClass('cdk-visually-hidden');
      });

      describe(`input ID`, () => {
        test(`should set input ID`, () => {
          const id = spectator.component.id;
          expect(spectator.query('input')).toHaveAttribute('id', `${id}-input`);
        });

        test(`should update ID to match custom component ID`, () => {
          spectator.setInput('id', 'foo');
          expect(spectator.query('input')).toHaveAttribute('id', 'foo-input');
          expect(spectator.query('label')).toHaveAttribute('for', 'foo-input');
        });
      });

      test(`should set aria labels`, () => {
        spectator.setInput('ariaLabel', 'My label');
        spectator.setInput('ariaLabelledby', 'myID');
        spectator.setInput('ariaDescribedby', 'My explanation');
        const input = spectator.query('input');

        expect(input).toHaveAttribute('aria-label', 'My label');
        expect(input).toHaveAttribute('aria-labelledby', 'myID');
        expect(input).toHaveAttribute('aria-describedby', 'My explanation');
      });

      describe(`aria-checked`, () => {
        test(`should set to false when not checked`, () => {
          expect(spectator.query('input')).toHaveAttribute('aria-checked', 'false');
        });

        test(`should set to true when checked`, () => {
          spectator.setInput('isChecked', true);
          expect(spectator.query('input')).toHaveAttribute('aria-checked', 'true');
        });

        test(`should set to mixed when in indeterminate mode`, () => {
          spectator.setInput('isIndeterminate', true);
          expect(spectator.query('input')).toHaveAttribute('aria-checked', 'mixed');
        });
      });
    });

    describe(`state`, () => {
      test(`should set state based on isChecked input`, () => {
        spectator.setInput('isChecked', true);
        spectator.detectChanges();
        expect(spectator.query('input')).toHaveProperty('checked', true);
        expect(rootElement).toHaveClass('ts-checkbox--checked');
      });

      test(`should set state based on isIndeterminate input`, () => {
        spectator.setInput('isIndeterminate', true);
        spectator.detectChanges();
        expect(rootElement).toHaveClass('ts-checkbox--indeterminate');
      });

      test(`should set state based on isRequired input`, () => {
        spectator.setInput('isRequired', true);
        spectator.detectChanges();
        expect(spectator.query('input')).toHaveProperty('required', true);
      });

      test(`should set state based on isDisabled input`, () => {
        spectator.setInput('isDisabled', true);
        spectator.detectChanges();
        expect(spectator.query('input')).toHaveProperty('disabled', true);
        expect(rootElement).toHaveClass('ts-checkbox--disabled');

        spectator.setInput('isDisabled', false);
        spectator.detectChanges();
        expect(spectator.query('input')).toHaveProperty('disabled', false);
        expect(rootElement).not.toHaveClass('ts-checkbox--disabled');
      });
    });

    describe(`ID`, () => {
      test(`should set default ID`, () => {
        expect(rootElement.getAttribute('id')).toEqual(expect.stringContaining('ts-checkbox-'));
      });

      test(`should allow custom ID and fall back to UID`, () => {
        spectator.setInput('id', 'foo');
        spectator.detectChanges();
        expect(rootElement).toHaveAttribute('id', 'foo');

        spectator.setInput('id', void 0);
        spectator.detectChanges();
        expect(rootElement.getAttribute('id')).toEqual(expect.stringContaining('ts-checkbox-'));
      });
    });

    describe(`emitters`, () => {
      test(`should emit on input change`, () => {
        const detectChanges = false;
        spectator = createComponent({ detectChanges });
        let output;
        spectator.output('inputChange').subscribe((result: TsCheckboxChange) => {
          output = result;
        });

        spectator.click(spectator.query<HTMLInputElement>('input'));
        expect(output.checked).toEqual(true);
      });

      test(`should emit on indeterminate change`, () => {
        const detectChanges = false;
        spectator = createComponent({ detectChanges });
        let output = false;
        spectator.output('indeterminateChange').subscribe((result: boolean) => {
          output = result;
        });

        spectator.setInput('isIndeterminate', true);
        expect(output).toEqual(true);
      });
    });

    test(`should toggle indeterminate`, fakeAsync(() => {
      expect.assertions(2);
      const detectChanges = false;
      spectator = createComponent({ detectChanges });
      spectator.setInput('isIndeterminate', true);
      let output = true;
      spectator.output('indeterminateChange').subscribe((result: boolean) => {
        output = result;
      });
      spectator.click(spectator.query('input'));

      flush();
      spectator.detectChanges();

      expect(output).toEqual(false);
      expect(spectator.component.isIndeterminate).toEqual(false);
    }));

    test(`should focus on underlying input element when focus() is called`, () => {
      expect(document.activeElement).not.toBe(spectator.query('input'));

      spectator.component.focus();
      spectator.detectChanges();

      expect(document.activeElement).toBe(spectator.query('input'));
    });
  });

  describe(`non-default options`, () => {
    describe(`when click action is 'check'`, () => {
      let spectator: Spectator<TsCheckboxComponent>;
      let rootElement: HTMLElement;
      const createComponent = createComponentFactory({
        component: TsCheckboxComponent,
        imports: [TsCheckboxModule],
        providers: [
          {
            provide: TS_CHECKBOX_DEFAULT_OPTIONS,
            useValue: { clickAction: 'check' },
          },
        ],
        declareComponent: false,
      });

      test(`should not set 'isIndeterminate' to false on click if check is set`, fakeAsync(() => {
        spectator = createComponent({
          props: { label: 'FooBar' },
        });
        rootElement = spectator.component.elementRef.nativeElement;
        spectator.setInput('isIndeterminate', true);
        spectator.click(spectator.query('input'));
        flush();
        spectator.detectChanges();
        expect(spectator.query('input')).toHaveProperty('checked', true);
        expect(spectator.component.isIndeterminate).toEqual(true);
        expect(rootElement).toHaveClass('ts-checkbox--indeterminate');
      }));
    });

    describe(`when click action is 'noop'`, () => {
      let spectator: Spectator<TsCheckboxComponent>;
      let rootElement: HTMLElement;
      const createComponent = createComponentFactory({
        component: TsCheckboxComponent,
        imports: [TsCheckboxModule],
        providers: [
          {
            provide: TS_CHECKBOX_DEFAULT_OPTIONS,
            useValue: { clickAction: 'noop' },
          },
        ],
        declareComponent: false,
      });

      beforeEach(() => {
        spectator = createComponent({
          props: { label: 'FooBar' },
        });
        rootElement = spectator.component.elementRef.nativeElement;
      });

      test('should not change `indeterminate` on click if noop is set', fakeAsync(() => {
        const input = spectator.query('input');
        spectator.setInput('isIndeterminate', true);
        spectator.click(input);
        flush();
        spectator.detectChanges();

        expect(input).toHaveProperty('checked', false);
        expect(input).toHaveProperty('indeterminate', true);
        expect(spectator.component.isIndeterminate).toEqual(true);
        expect(rootElement).toHaveClass('ts-checkbox--indeterminate');
      }));

      test(`should not change 'checked' or 'indeterminate' on click if noop is set`, fakeAsync(() => {
        spectator.setInput('isIndeterminate', true);
        spectator.setInput('isChecked', true);
        spectator.click(spectator.query('input'));
        flush();
        spectator.detectChanges();

        expect(spectator.query('input')).toHaveProperty('checked', true);
        expect(spectator.component.isIndeterminate).toEqual(true);
        expect(rootElement).toHaveClass('ts-checkbox--indeterminate');

        spectator.setInput('isChecked', false);
        spectator.click(spectator.query('input'));
        flush();
        spectator.detectChanges();

        expect(spectator.query('input')).toHaveProperty('checked', false);
        expect(spectator.component.isIndeterminate).toEqual(true);
        expect(rootElement).toHaveClass('ts-checkbox--indeterminate');
      }));
    });
  });

  describe(`content`, () => {
    let spectatorHost: SpectatorHost<TsCheckboxComponent>;
    const createHost = createHostFactory({
      component: TsCheckboxComponent,
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
    });

    test(`should allow content to be set through ng-content`, () => {
      spectatorHost = createHost(`<ts-checkbox>Foo</ts-checkbox>`);
      expect(spectatorHost.query('.c-checkbox__label-content-wrap')).toHaveText('Foo');
    });

    test(`should allow content to be set through the textContent input`, () => {
      spectatorHost = createHost(`<ts-checkbox label="Bar"></ts-checkbox>`);
      expect(spectatorHost.query('.c-checkbox__label-content-default')).toHaveText('Bar');
    });
  });

  describe(`ngModel`, () => {
    let spectatorHost: SpectatorHost<TsCheckboxComponent>;
    const createHost = createHostFactory({
      component: TsCheckboxComponent,
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
    });

    test(`should allow value control with ngModel`, fakeAsync(() => {
      spectatorHost = createHost(`<ts-checkbox [(ngModel)]="checkModel">Foo</ts-checkbox>`, {
        hostProps: {
          checkModel: true,
        },
      });
      flush();
      spectatorHost.detectChanges();
      expect(spectatorHost.query('input')).toHaveAttribute('aria-checked', 'true');
    }));
  });

  describe(`FormControl`, () => {
    let spectatorHost: SpectatorHost<TsCheckboxComponent>;
    const createHost = createHostFactory({
      component: TsCheckboxComponent,
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
    });

    test(`should allow value control with FormControl`, () => {
      spectatorHost = createHost(`<ts-checkbox [formControl]="myCtrl">Foo</ts-checkbox>`, {
        hostProps: {
          myCtrl: new FormControl(true),
        },
      });
      expect(spectatorHost.query('input')).toHaveAttribute('aria-checked', 'true');
    });

    test(`should respect disabled FormControl`, () => {
      spectatorHost = createHost(`<ts-checkbox [formControl]="myCtrl">Foo</ts-checkbox>`, {
        hostProps: {
          myCtrl: new FormControl({
            value: true,
            disabled: true,
          }),
        },
      });
      expect(spectatorHost.query('input')).toHaveProperty('disabled', true);
    });
  });
});
