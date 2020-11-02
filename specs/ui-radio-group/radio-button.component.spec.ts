import {
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
  TsRadioButtonComponent,
  TsRadioChange,
  TsRadioGroupModule,
} from '@terminus/ui-radio-group';

describe(`TsRadioButtonComponent`, () => {
  describe(`without host`, () => {
    let spectator: Spectator<TsRadioButtonComponent>;
    let rootElement: HTMLElement;
    const createComponent = createComponentFactory({
      component: TsRadioButtonComponent,
      imports: [TsRadioGroupModule],
      declareComponent: false,
    });

    beforeEach(() => {
      spectator = createComponent({
        props: {
          textContent: 'Foo',
        },
      });
      rootElement = spectator.component.elementRef.nativeElement;
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
      });
    });

    describe(`tabIndex`, () => {
      test(`should default to -1`, () => {
        expect(spectator.query('input')).toHaveAttribute('tabindex', '-1');
      });

      test(`should set tabindex based on tabIndex input`, () => {
        spectator.setInput('tabIndex', '1');
        expect(spectator.query('input')).toHaveAttribute('tabindex', '1');
      });
    });

    describe(`state`, () => {
      test(`should set state based on isChecked input`, () => {
        spectator.setInput('isChecked', true);
        spectator.detectChanges();
        expect(spectator.query('input')).toHaveProperty('checked', true);
        expect(rootElement).toHaveClass('ts-radio-button--checked');
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
        expect(rootElement).toHaveClass('ts-radio-button--disabled');

        spectator.setInput('isDisabled', false);
        spectator.detectChanges();
        expect(spectator.query('input')).toHaveProperty('disabled', false);
        expect(rootElement).not.toHaveClass('ts-radio-button--disabled');
      });
    });

    describe(`ID`, () => {
      test(`should set default ID`, () => {
        expect(rootElement.getAttribute('id')).toEqual(expect.stringContaining('ts-radio-button-'));
      });

      test(`should allow custom ID and fall back to UID`, () => {
        spectator.setInput('id', 'foo');
        spectator.detectChanges();
        expect(rootElement).toHaveAttribute('id', 'foo');

        spectator.setInput('id', void 0);
        spectator.detectChanges();
        expect(rootElement.getAttribute('id')).toEqual(expect.stringContaining('ts-radio-button-'));
      });
    });

    describe(`emitters`, () => {
      test(`should emit on input change`, () => {
        const detectChanges = false;
        spectator = createComponent({ detectChanges });
        let output;
        spectator.setInput('value', 'myId');
        spectator.output('selectionChange').subscribe((result: TsRadioChange) => {
          output = result;
        });

        spectator.click(spectator.query<HTMLInputElement>('input'));
        expect(output.value).toEqual('myId');
      });
    });

    test(`should focus on underlying input element when focus() is called`, () => {
      expect(document.activeElement).not.toBe(spectator.query('input'));

      spectator.component.focus();
      spectator.detectChanges();

      expect(document.activeElement).toBe(spectator.query('input'));
    });
  });

  describe(`with host`, () => {
    describe(`content`, () => {
      let spectatorHost: SpectatorHost<TsRadioButtonComponent>;
      const createHost = createHostFactory({
        component: TsRadioButtonComponent,
        imports: [
          FormsModule,
          ReactiveFormsModule,
        ],
      });

      test(`should allow content to be set through ng-content`, () => {
        spectatorHost = createHost(`<ts-radio-button>Foo</ts-radio-button>`);
        expect(spectatorHost.query('.ts-radio-button__label-content')).toHaveText('Foo');
      });

      test(`should allow content to be set through the textContent input`, () => {
        spectatorHost = createHost(`<ts-radio-button textContent="Bar"></ts-radio-button>`);
        expect(spectatorHost.query('.ts-radio-button__label-content-default')).toHaveText('Bar');
      });
    });
  });
});

