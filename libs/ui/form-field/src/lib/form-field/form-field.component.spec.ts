import {
  Component,
  OnInit,
  Provider,
  Type,
  ViewChild,
} from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TsDocumentService } from '@terminus/ngx-tools/browser';
import { TsDocumentServiceMock } from '@terminus/ngx-tools/browser/testing';
import {
  createComponent as createComponentInner,
  createFakeEvent,
} from '@terminus/ngx-tools/testing';
import { TsFormFieldComponent } from '@terminus/ui-form-field';
import { getLabelElement } from '@terminus/ui-form-field/testing';
import {
  TsInputComponent,
  TsInputModule,
} from '@terminus/ui-input';

import { TsFormFieldModule } from '../ui-form-field.module';

/**
 * NOTE: The {@link TsInputComponent} tests cover much of the {@link TsFormFieldComponent} functionality
 */
describe(`TsFormFieldComponent`, function() {
  describe(`id`, () => {
    test(`should allow custom IDs for accessibility`, () => {
      const fixture = createComponent(Id);
      fixture.detectChanges();
      const labelElement = getLabelElement(fixture);

      expect(labelElement.getAttribute('aria-owns')).toEqual('foo');
    });

    test(`should fall back to UID if no ID is passed in`, () => {
      const fixture = createComponent(Id);
      fixture.componentInstance.myId = undefined;
      fixture.detectChanges();
      const labelElement = getLabelElement(fixture);

      expect(labelElement.getAttribute('aria-owns')).toEqual(expect.stringContaining('ts-form-field-'));
    });
  });

  test(`should allow required marker to be hidden`, () => {
    const fixture = createComponent(RequiredMarker);
    fixture.detectChanges();
    let requiredElement = fixture.debugElement.query(By.css('.ts-form-field-required-marker'));

    expect(requiredElement).toBeTruthy();

    fixture.componentInstance.hideRequiredMarker = true;
    fixture.detectChanges();

    requiredElement = fixture.debugElement.query(By.css('.ts-form-field-required-marker'));
    expect(requiredElement).toBeFalsy();
  });

  describe(`floatLabel`, () => {
    test(`should fallback to 'auto' if no value is passed in`, () => {
      const fixture = createComponent(Float);
      fixture.detectChanges();

      expect(fixture.componentInstance.formField.floatLabel).toEqual('auto');
    });
  });

  describe(`after content checked/init`, () => {
    test(`should throw an error if no control exists`, () => {
      const create = () => {
        const fixture = createComponent(NoControl);
        fixture.detectChanges();
      };

      expect(create).toThrowError();
    });

    test(`should re-trigger outline update if the flag is set`, () => {
      const fixture = createComponent(UpdateOutline);
      fixture.detectChanges();
      const formField = fixture.componentInstance.formField;

      formField['updateOutlineGap'] = jest.fn();
      formField.outlineGapCalculationNeeded = true;
      formField.ngAfterContentChecked();

      expect(formField['updateOutlineGap']).toHaveBeenCalled();
    });
  });

  describe(`updateOutlineGap`, () => {
    test(`should do nothing if no label element exists`, () => {
      const fixture = createComponent(UpdateOutline);
      fixture.detectChanges();
      const formField = fixture.componentInstance.formField;

      formField.labelElement = undefined as any;

      expect(formField['updateOutlineGap']()).toEqual(undefined);
    });

    test(`should set the flag if the label element is not in the DOM`, () => {
      const documentProvider = [
        {
          provide: TsDocumentService,
          useClass: MyDocumentService,
        },
      ];
      const fixture = createComponent(UpdateOutline, [documentProvider]);
      fixture.detectChanges();
      const formField = fixture.componentInstance.formField;

      expect(formField['updateOutlineGap']()).toEqual(undefined);
      expect(formField.outlineGapCalculationNeeded).toEqual(true);
    });
  });

  describe(`controlIsInErrorState`, () => {
    test(`should return error if dirty and validating on change`, () => {
      const fixture = createComponent(ErrorState);
      fixture.detectChanges();

      expect(fixture.componentInstance.formField.controlIsInErrorState).toEqual(true);
    });
  });

  describe(`getConnectedOverlayOrigin`, () => {
    test(`should fall back to elementRef if container is not found`, () => {
      const fixture = createComponent(Float);
      fixture.detectChanges();
      const formField = fixture.componentInstance.formField;
      formField.containerElement = undefined as any;

      expect(formField.getConnectedOverlayOrigin()).toEqual(formField.elementRef);
    });
  });

  describe(`noValidationOrHint`, () => {
    test(`should not have validation or hint added if set to true`, () => {
      const fixture = createComponent(NoValidationOrHint);
      fixture.detectChanges();
      let validationBlock = fixture.debugElement.query(By.css('.ts-form-field__subscript-wrapper'));
      const formField = fixture.componentInstance;
      expect(validationBlock).toBeTruthy();
      formField.validationFlag = true;
      fixture.detectChanges();
      validationBlock = fixture.debugElement.query(By.css('.ts-form-field__subscript-wrapper'));
      expect(validationBlock).toBeFalsy();
    });
  });

  test('should be able to animate the label up and lock it in position', () => {
    const fixture = createComponent(Id);
    fixture.detectChanges();
    const formField = fixture.componentInstance.formField;
    const label = getLabelElement(fixture);
    expect(formField.floatLabel).toBe('auto');

    formField.animateAndLockLabel();
    fixture.detectChanges();
    expect(formField.shouldAlwaysFloat).toBe(false);
    expect(formField.floatLabel).toBe('always');

    const fakeEvent = (Object as any).assign(createFakeEvent('transitionend'), { propertyName: 'transform' });
    label.dispatchEvent(fakeEvent);
    fixture.detectChanges();
    expect(formField.shouldAlwaysFloat).toBe(true);
    expect(formField.floatLabel).toBe('always');
    expect.assertions(5);
  });
});

/**
 * Create the test component
 *
 * @param component
 * @param providers
 * @param imports
 */
const createComponent =
  <T>(component: Type<T>, providers: Provider[] = [], imports: any[] = []): ComponentFixture<T> => createComponentInner<T>(
    component,
    providers,
    [
      FormsModule,
      NoopAnimationsModule,
      ReactiveFormsModule,
      TsFormFieldModule,
      TsInputModule,
      ...imports,
    ],
  );

class MyDocumentService extends TsDocumentServiceMock {
  public document: any = {
    documentElement: { contains: jest.fn(() => false) },
    createEvent: () => document.createEvent('Event'),
  };
}

@Component({
  template: `
    <ts-form-field
       [control]="inputComponent"
       [id]="myId">
      <ts-input
        [hasExternalFormField]="true"
        [formControl]="formControl"
      ></ts-input>
    </ts-form-field>
  `,
})
export class Id {
  public formControl = new FormControl();
  public myId: string | undefined = 'foo';

  @ViewChild(TsInputComponent, { static: true })
  public inputComponent!: TsInputComponent;

  @ViewChild(TsFormFieldComponent, { static: true })
  public formField!: TsFormFieldComponent;
}

@Component({
  template: `
    <ts-form-field
      [control]="inputComponent"
      [hideRequiredMarker]="hideRequiredMarker"
    >
      <ts-input
        [hasExternalFormField]="true"
        [formControl]="formControl"
      ></ts-input>
    </ts-form-field>
  `,
})
export class RequiredMarker {
  public formControl = new FormControl(null, Validators.required);
  public hideRequiredMarker = false;

  @ViewChild(TsInputComponent, { static: true })
  public inputComponent!: TsInputComponent;
}

@Component({
  template: `
    <ts-form-field
      [control]="inputComponent"
      [floatLabel]="float"
    >
      <ts-input
        [hasExternalFormField]="true"
        [formControl]="formControl"
      ></ts-input>
    </ts-form-field>
  `,
})
export class Float {
  public formControl = new FormControl();
  public float;

  @ViewChild(TsInputComponent, { static: true })
  public inputComponent!: TsInputComponent;

  @ViewChild(TsFormFieldComponent, { static: true })
  public formField!: TsFormFieldComponent;
}

@Component({
  template: `
    <ts-form-field></ts-form-field>
  `,
})
export class NoControl {
}

@Component({
  template: `
    <ts-form-field
      [control]="inputComponent"
      [validateOnChange]="true"
    >
      <ts-input
        [hasExternalFormField]="true"
        [formControl]="formControl"
      ></ts-input>
    </ts-form-field>
  `,
})
export class ErrorState implements OnInit {
  public formControl = new FormControl(null, Validators.required);

  @ViewChild(TsInputComponent, { static: true })
  public inputComponent!: TsInputComponent;

  @ViewChild(TsFormFieldComponent, { static: true })
  public formField!: TsFormFieldComponent;

  public ngOnInit() {
    this.formControl.markAsDirty();
  }
}

@Component({
  template: `
    <ts-form-field [control]="inputComponent">
      <ts-input
        [hasExternalFormField]="true"
        [formControl]="formControl"
      ></ts-input>
    </ts-form-field>
  `,
})
export class UpdateOutline {
  public formControl = new FormControl();

  @ViewChild(TsInputComponent, { static: true })
  public inputComponent!: TsInputComponent;

  @ViewChild(TsFormFieldComponent, { static: true })
  public formField!: TsFormFieldComponent;
}

@Component({
  template: `
    <ts-form-field
      [control]="inputComponent"
      [noValidationOrHint]="validationFlag"
    >
      <ts-input
        [hasExternalFormField]="true"
        [formControl]="formControl"
      ></ts-input>
    </ts-form-field>
  `,
})
export class NoValidationOrHint {
  public formControl = new FormControl();
  public validationFlag = false;

  @ViewChild(TsInputComponent, { static: true })
  public inputComponent!: TsInputComponent;

  @ViewChild(TsFormFieldComponent, { static: true })
  public formField!: TsFormFieldComponent;
}
