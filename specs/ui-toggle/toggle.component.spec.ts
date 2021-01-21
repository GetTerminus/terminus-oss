import { FocusMonitor } from '@angular/cdk/a11y';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { SpectatorHost } from '@ngneat/spectator';
import { createHostFactory } from '@ngneat/spectator/jest';

import {
  TsToggleComponent,
  TsToggleModule,
} from '@terminus/ui-toggle';

describe(`TsToggleComponent`, () => {
  let spectator: SpectatorHost<TsToggleComponent>;
  const createHost = createHostFactory({
    component: TsToggleComponent,
    imports: [
      ReactiveFormsModule,
      TsToggleModule,
    ],
    declareComponent: false,
  });

  test(`should display the text content`, () => {
    spectator = createHost(`<ts-toggle>Foo bar</ts-toggle>`);
    expect(spectator.query('.ts-toggle__content')).toHaveText('Foo bar');
  });

  test(`should set the 'for' attribute to the id of the input element`, () => {
    spectator = createHost(`<ts-toggle>Foo bar</ts-toggle>`);
    expect(spectator.component.inputElement.nativeElement.getAttribute('id')).toBeTruthy();
    expect(spectator.queryHost('label').getAttribute('for')).toBe(spectator.component.inputElement.nativeElement.getAttribute('id'));
  });

  test(`should forward the tabIndex to the underlying input`, () => {
    spectator = createHost(`<ts-toggle>Foo bar</ts-toggle>`);
    expect(spectator.component.inputElement.nativeElement.tabIndex).toBe(0);
    spectator.setInput('tabIndex', 4);
    expect(spectator.component.inputElement.nativeElement.tabIndex).toBe(4);
  });

  test(`should forward the specified name to the input`, () => {
    spectator = createHost(`<ts-toggle name="myName">Foo bar</ts-toggle>`);
    const inputElement = spectator.component.inputElement.nativeElement;
    expect.assertions(3);
    expect(inputElement.name).toBe('myName');
    spectator.setInput('name', 'nextName');
    expect(inputElement.name).toBe('nextName');
    spectator.setInput('name', null);
    expect(inputElement.name).toBe('');
  });

  test(`should forward the aria-label attribute to the input`, () => {
    spectator = createHost(`<ts-toggle aria-label="my-label">Foo bar</ts-toggle>`);
    const inputElement = spectator.component.inputElement.nativeElement;
    expect(inputElement.getAttribute('aria-label')).toBe('my-label');
    spectator.setInput('ariaLabel', null);
    expect(inputElement.hasAttribute('aria-label')).toBeFalsy();
  });

  test(`should forward the aria-labelledby attribute to the input`, () => {
    spectator = createHost(`<ts-toggle aria-labelledby="my-labelledby">Foo bar</ts-toggle>`);
    const inputElement = spectator.component.inputElement.nativeElement;
    expect(inputElement.getAttribute('aria-labelledby')).toBe('my-labelledby');
    spectator.setInput('ariaLabelledby', null);
    expect(inputElement.hasAttribute('aria-labelledby')).toBeFalsy();
  });

  describe(`label position`, () => {
    test(`should default to displaying the label after the toggle`, () => {
      spectator = createHost(`<ts-toggle>Foo bar</ts-toggle>`);
      expect(spectator.element).not.toHaveClass('ts-toggle--label-before');
    });

    test(`should allow label to be displayed before the toggle`, () => {
      spectator = createHost(`<ts-toggle labelPosition="before">Foo bar</ts-toggle>`);
      expect(spectator.element).toHaveClass('ts-toggle--label-before');
    });
  });

  describe(`form control`, () => {
    test(`should set value based on form control`, () => {
      spectator = createHost(`<ts-toggle [formControl]="myCtrl">Foo bar</ts-toggle>`, {
        hostProps: { myCtrl: new FormControl(true) },
      });
      expect(spectator.component.inputElement.nativeElement.checked).toEqual(true);
      expect(spectator.element).toHaveClass('ts-toggle--checked');
    });
  });

  describe(`disabled`, () => {
    beforeEach(() => {
      spectator = createHost(`<ts-toggle>Foo bar</ts-toggle>`);
    });

    test(`should not be disabled by default`, () => {
      expect(spectator.component.inputElement.nativeElement).not.toBeDisabled();
      spectator.setInput('isDisabled', true);
      spectator.detectChanges();
      expect(spectator.component.inputElement.nativeElement).toBeDisabled();
      expect(spectator.element).toHaveClass('ts-toggle--disabled');
    });

    test(`should toggle disabled state with public method`, () => {
      expect(spectator.component.inputElement.nativeElement).not.toBeDisabled();
      spectator.component.setDisabledState(true);
      spectator.detectChanges();
      expect(spectator.component.inputElement.nativeElement).toBeDisabled();
      expect(spectator.element).toHaveClass('ts-toggle--disabled');
    });
  });

  describe(`emitters`, () => {
    test(`should emit on selection change`, () => {
      spectator = createHost(`<ts-toggle>Foo bar</ts-toggle>`);
      let output;
      spectator.output('selectionChange').subscribe(result => (output = result));
      spectator.click(spectator.queryHost('.ts-toggle__label'));
      expect(output).toEqual(expect.objectContaining({ checked: true }));
    });
  });

  describe(`ID`, () => {
    test(`should set default ID and the input ID`, () => {
      spectator = createHost(`<ts-toggle>Foo bar</ts-toggle>`);
      expect(spectator.element.getAttribute('id')).toEqual(expect.stringContaining('ts-toggle-'));
      expect(spectator.component.inputElement.nativeElement.getAttribute('id')).toEqual(expect.stringContaining('ts-toggle-'));
      expect(spectator.component.inputElement.nativeElement.getAttribute('id')).toEqual(expect.stringContaining('-input'));
    });

    test(`should allow custom ID and fall back to UID`, () => {
      spectator = createHost(`<ts-toggle id="my-id">Foo bar</ts-toggle>`);
      expect(spectator.element).toHaveAttribute('id', 'my-id');
      expect(spectator.component.inputElement.nativeElement.getAttribute('id')).toEqual(expect.stringContaining('my-id-input'));

      spectator.setInput('id', void 0);
      spectator.detectChanges();
      expect(spectator.element.getAttribute('id')).toEqual(expect.stringContaining('ts-toggle-'));
      expect(spectator.component.inputElement.nativeElement.getAttribute('id')).toEqual(expect.stringContaining('ts-toggle-'));
      expect(spectator.component.inputElement.nativeElement.getAttribute('id')).toEqual(expect.stringContaining('-input'));
    });
  });

  describe(`focus`, () => {
    beforeEach(() => {
      spectator = createHost(`<ts-toggle>Foo bar</ts-toggle>`);
    });

    test(`should focus on underlying input element when focus() is called`, () => {
      expect(document.activeElement).not.toBe(spectator.component.inputElement.nativeElement);
      spectator.component.focus();
      spectator.detectChanges();
      expect(document.activeElement).toBe(spectator.component.inputElement.nativeElement);
    });

    test('should focus on underlying input element when the host is focused', () => {
      expect(document.activeElement).not.toBe(spectator.component.inputElement.nativeElement);
      spectator.element.focus();
      spectator.detectChanges();
      expect(document.activeElement).toBe(spectator.component.inputElement.nativeElement);
    });

    test('should not manually move focus to underlying input when focus comes from mouse or touch', () => {
      const focusMonitor = spectator.inject(FocusMonitor);
      expect(document.activeElement).not.toBe(spectator.component.inputElement.nativeElement);

      focusMonitor.focusVia(spectator.element, 'mouse');
      spectator.detectChanges();
      expect(document.activeElement).not.toBe(spectator.component.inputElement.nativeElement);

      focusMonitor.focusVia(spectator.element, 'touch');
      spectator.detectChanges();
      expect(document.activeElement).not.toBe(spectator.component.inputElement.nativeElement);
    });

    test(`should not change focus origin if origin not specified`, () => {
      spectator.component.focus(undefined, 'mouse');
      spectator.component.focus();
      spectator.detectChanges();

      expect(spectator.element.classList).toContain('cdk-focused');
      expect(spectator.element.classList).toContain('cdk-mouse-focused');
    });
  });

  describe(`toggle`, () => {
    test(`should toggle the checked state`, () => {
      spectator = createHost(`<ts-toggle>Foo bar</ts-toggle>`);
      expect(spectator.component.isChecked).toEqual(false);
      spectator.component.toggle();
      expect(spectator.component.isChecked).toEqual(true);
    });
  });
});
