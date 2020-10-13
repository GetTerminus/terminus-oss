import {
  fakeAsync,
  flush,
} from '@angular/core/testing';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  createHostFactory,
  SpectatorHost,
} from '@ngneat/spectator/jest';

import {
  TsRadioButtonComponent,
  TsRadioChange,
  TsRadioGroupComponent,
  TsRadioGroupModule,
} from '@terminus/ui-radio-group';

describe(`TsRadioGroupComponent`, () => {
  describe(`ngModel`, () => {
    let spectatorHost: SpectatorHost<TsRadioGroupComponent>;
    const createHost = createHostFactory({
      component: TsRadioGroupComponent,
      imports: [
        TsRadioGroupModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declareComponent: false,
    });

    test(`should allow value control with ngModel`, fakeAsync(() => {
      spectatorHost = createHost(
        `
          <ts-radio-group [(ngModel)]="myModel">
            <ts-radio-button value="one">One</ts-radio-button>
            <ts-radio-button value="two" id="foo">Two</ts-radio-button>
            <ts-radio-button value="three">Three</ts-radio-button>
          </ts-radio-group>
        `,
        {
          hostProps: {
            myModel: 'two',
          },
        },
      );
      flush();
      spectatorHost.detectChanges();
      expect(spectatorHost.query('#foo input')).toHaveProperty('checked', true);
    }));
  });

  describe(`FormControl`, () => {
    let spectatorHost: SpectatorHost<TsRadioGroupComponent>;
    const createHost = createHostFactory({
      component: TsRadioGroupComponent,
      imports: [
        TsRadioGroupModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declareComponent: false,
    });

    test(`should allow value control with FormControl`, () => {
      spectatorHost = createHost(`
          <ts-radio-group [formControl]="myCtrl">
            <ts-radio-button value="one">One</ts-radio-button>
            <ts-radio-button value="two" id="foo">Two</ts-radio-button>
            <ts-radio-button value="three">Three</ts-radio-button>
          </ts-radio-group>
      `, {
        hostProps: {
          myCtrl: new FormControl('two'),
        },
      });
      expect(spectatorHost.query('#foo input')).toHaveAttribute('aria-checked', 'true');
    });

    test(`should respect disabled FormControl`, () => {
      spectatorHost = createHost(`
          <ts-radio-group [formControl]="myCtrl">
            <ts-radio-button value="one">One</ts-radio-button>
            <ts-radio-button value="two" id="foo">Two</ts-radio-button>
            <ts-radio-button value="three">Three</ts-radio-button>
          </ts-radio-group>
      `, {
        hostProps: {
          myCtrl: new FormControl({
            value: true,
            disabled: true,
          }),
        },
      });
      expect(spectatorHost.query('#foo input')).toHaveProperty('disabled', true);
    });
  });

  describe(`fieldset`, () => {
    let spectatorHost: SpectatorHost<TsRadioGroupComponent>;
    const createHost = createHostFactory({
      component: TsRadioGroupComponent,
      imports: [
        TsRadioGroupModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declareComponent: false,
    });

    beforeEach(() => {
      spectatorHost = createHost(`
        <ts-radio-group fieldsetId="foo" fieldsetLegend="Foo bar.">
          <ts-radio-button value="one">One</ts-radio-button>
          <ts-radio-button value="two" id="foo">Two</ts-radio-button>
          <ts-radio-button value="three">Three</ts-radio-button>
        </ts-radio-group>
      `);
    });

    test(`should allow custom fieldset ID`, () => {
      expect(spectatorHost.query('fieldset')).toHaveAttribute('form', 'foo');
    });

    test(`should allow custom fieldset legend`, () => {
      expect(spectatorHost.query('legend')).toHaveText('Foo bar.');
    });
  });

  describe(`state`, () => {
    let spectatorHost: SpectatorHost<TsRadioGroupComponent>;
    const createHost = createHostFactory({
      component: TsRadioGroupComponent,
      imports: [
        TsRadioGroupModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declareComponent: false,
    });
    let rootElement: HTMLElement;

    beforeEach(() => {
      spectatorHost = createHost(`
        <ts-radio-group>
          <ts-radio-button value="one">One</ts-radio-button>
          <ts-radio-button value="two" id="foo">Two</ts-radio-button>
          <ts-radio-button value="three">Three</ts-radio-button>
        </ts-radio-group>
      `);
      rootElement = spectatorHost.component.elementRef.nativeElement;
    });

    test(`should set state based on isRequired input`, () => {
      spectatorHost.setInput('isRequired', true);
      spectatorHost.detectChanges();
      expect(spectatorHost.query('#foo input')).toHaveProperty('required', true);
    });

    test(`should set state based on isDisabled input`, () => {
      spectatorHost.setInput('isDisabled', true);
      spectatorHost.detectChanges();
      expect(spectatorHost.query('#foo input')).toHaveProperty('disabled', true);
      expect(rootElement).toHaveClass('ts-radio-group--disabled');

      spectatorHost.setInput('isDisabled', false);
      spectatorHost.detectChanges();
      expect(spectatorHost.query('#foo input')).toHaveProperty('disabled', false);
      expect(rootElement).not.toHaveClass('ts-radio-group--disabled');
    });

    test(`should set the radio to selected when the group selection is set (if not already)`, () => {
      const buttons = spectatorHost.queryAll(TsRadioButtonComponent);
      expect(buttons[0].isChecked).toEqual(false);
      spectatorHost.component.setSelected(buttons[0]);
      spectatorHost.detectChanges();
      expect(buttons[0].isChecked).toEqual(true);
    });

    test(`should set selection to null if passing in false to isChecked`, () => {
      const buttons = spectatorHost.queryAll(TsRadioButtonComponent);
      spectatorHost.component.setSelected(buttons[0]);
      expect(spectatorHost.component.value).not.toEqual(null);
      expect(buttons[0].isChecked).toEqual(true);
      buttons[0].isChecked = false;
      expect(spectatorHost.component.value).toEqual(null);
    });
  });

  describe(`validation`, () => {
    let spectatorHost: SpectatorHost<TsRadioGroupComponent>;
    const createHost = createHostFactory({
      component: TsRadioGroupComponent,
      imports: [
        TsRadioGroupModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declareComponent: false,
    });
    let rootElement: HTMLElement;

    beforeEach(() => {
      spectatorHost = createHost(`
        <ts-radio-group>
          <ts-radio-button value="one">One</ts-radio-button>
          <ts-radio-button value="two" id="foo">Two</ts-radio-button>
          <ts-radio-button value="three">Three</ts-radio-button>
        </ts-radio-group>
      `);
      rootElement = spectatorHost.component.elementRef.nativeElement;
    });

    test(`should show validation messages when validationFormControl is passed in`, () => {
      expect(spectatorHost.query('.c-validation-message')).toBeFalsy();
      spectatorHost.setInput('validationFormControl', new FormControl(null, [Validators.required]));
      spectatorHost.detectChanges();
      expect(spectatorHost.query('.c-validation-message')).toContainText('Required');
    });

    test(`should not show validation messages if noValidationOrHint is set`, () => {
      spectatorHost.setInput('noValidationOrHint', true);
      spectatorHost.detectChanges();
      expect(spectatorHost.query('.c-validation-message')).toBeFalsy();
    });
  });

  describe(`basic`, () => {
    let spectatorHost: SpectatorHost<TsRadioGroupComponent>;
    const createHost = createHostFactory({
      component: TsRadioGroupComponent,
      imports: [
        TsRadioGroupModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declareComponent: false,
    });

    beforeEach(() => {
      spectatorHost = createHost(`
        <ts-radio-group>
          <ts-radio-button value="one" id="one">One</ts-radio-button>
          <ts-radio-button value="two" id="two">Two</ts-radio-button>
          <ts-radio-button value="three" id="three">Three</ts-radio-button>
          <input type="text" class="dummy">
        </ts-radio-group>
      `);
    });

    test(`should set the name property for all child controls`, () => {
      spectatorHost.setInput('name', 'my-name');
      spectatorHost.detectChanges();
      expect(spectatorHost.query('#one input')).toHaveProperty('name', 'my-name');
      expect(spectatorHost.query('#two input')).toHaveProperty('name', 'my-name');
      expect(spectatorHost.query('#three input')).toHaveProperty('name', 'my-name');
    });

    test(`should set the selection based on the value input`, () => {
      spectatorHost.setInput('value', 'two');
      spectatorHost.detectChanges();
      expect(spectatorHost.query('#two input')).toHaveAttribute('aria-checked', 'true');
    });

    test(`should emit on selection change`, () => {
      let output: TsRadioChange;
      spectatorHost.output('selectionChange').subscribe((result: TsRadioChange) => {
        output = result;
      });

      spectatorHost.click(spectatorHost.query<HTMLInputElement>('#two input'));
      expect(output.value).toEqual('two');
    });

    test(`should set the selection as null if no value is passed in`, () => {
      spectatorHost.component.setSelected(null);
      spectatorHost.detectChanges();
      expect(spectatorHost.component.value).toEqual(null);
    });

    test(`should call 'touch' method on radio group when button gets blur`, () => {
      const button = spectatorHost.queryAll(TsRadioButtonComponent)[2];
      button.focus();
      const mySpy = jest.spyOn(spectatorHost.component, 'touch');
      spectatorHost.query<HTMLInputElement>('.dummy').focus();
      spectatorHost.detectChanges();
      expect(mySpy).toHaveBeenCalled();
    });
  });

  describe(`visual formats`, () => {
    let spectatorHost: SpectatorHost<TsRadioGroupComponent>;
    const createHost = createHostFactory({
      component: TsRadioGroupComponent,
      imports: [
        TsRadioGroupModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declareComponent: false,
    });
    let rootElement: HTMLElement;

    beforeEach(() => {
      spectatorHost = createHost(`
        <ts-radio-group>
          <ts-radio-button value="one" id="one">One</ts-radio-button>
          <ts-radio-button value="two" id="two">Two</ts-radio-button>
          <ts-radio-button value="three" id="three">Three</ts-radio-button>
        </ts-radio-group>
      `);
      rootElement = spectatorHost.component.elementRef.nativeElement;
    });

    test(`should default to none`, () => {
      expect(rootElement).toHaveClass('ts-radio-group--default');
    });

    test(`should set appropriate visual classes`, () => {
      spectatorHost.setInput('visualFormat', 'visual');
      spectatorHost.detectChanges();
      expect(rootElement).toHaveClass('ts-radio-group--visual');
      expect(rootElement).not.toHaveClass('ts-radio-group--default');
      expect(rootElement).not.toHaveClass('ts-radio-group--visual-small');
      expect(rootElement).not.toHaveClass('ts-radio-group--visual-centered');
    });

    test(`should default to none if no acceptable value is passed in`, () => {
      spectatorHost.setInput('visualFormat', undefined);
      spectatorHost.detectChanges();
      expect(spectatorHost.component.visualFormat).toEqual('none');
    });

    test(`should set appropriate visual-centered classes`, () => {
      spectatorHost.setInput('visualFormat', 'visual-centered');
      spectatorHost.detectChanges();
      expect(rootElement).toHaveClass('ts-radio-group--visual');
      expect(rootElement).toHaveClass('ts-radio-group--visual-centered');
      expect(rootElement).not.toHaveClass('ts-radio-group--default');
      expect(rootElement).not.toHaveClass('ts-radio-group--visual-small');
    });

    test(`should set appropriate visual-small classes`, () => {
      spectatorHost.setInput('visualFormat', 'visual-small');
      spectatorHost.detectChanges();
      expect(rootElement).toHaveClass('ts-radio-group--visual');
      expect(rootElement).toHaveClass('ts-radio-group--visual-small');
      expect(rootElement).not.toHaveClass('ts-radio-group--visual-centered');
      expect(rootElement).not.toHaveClass('ts-radio-group--default');
    });

    test(`should set appropriate visual-small-centered classes`, () => {
      spectatorHost.setInput('visualFormat', 'visual-small-centered');
      spectatorHost.detectChanges();
      expect(rootElement).toHaveClass('ts-radio-group--visual');
      expect(rootElement).toHaveClass('ts-radio-group--visual-small');
      expect(rootElement).toHaveClass('ts-radio-group--visual-centered');
      expect(rootElement).not.toHaveClass('ts-radio-group--default');
    });
  });
});
