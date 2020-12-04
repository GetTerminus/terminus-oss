<h1>Input</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Hint](#hint)
  - [Error message](#error-message)
  - [No validation or hint](#no-validation-or-hint)
  - [Disabled](#disabled)
  - [Required](#required)
  - [Clearable](#clearable)
  - [Focused](#focused)
  - [Input Type](#input-type)
  - [Input Attributes](#input-attributes)
  - [Component reference](#component-reference)
  - [Usage with Reactive Forms](#usage-with-reactive-forms)
  - [Event Emitters](#event-emitters)
  - [Small mode](#small-mode)
  - [Masks](#masks)
    - [Available Masks](#available-masks)
    - [Sanitize the model value](#sanitize-the-model-value)
    - [Allow decimals in number-based masks](#allow-decimals-in-number-based-masks)
  - [Datepicker](#datepicker)
    - [Filter out available dates](#filter-out-available-dates)
    - [Set a min/max date range](#set-a-minmax-date-range)
    - [Open the calendar to a specific date](#open-the-calendar-to-a-specific-date)
    - [Open the calendar to a specific view](#open-the-calendar-to-a-specific-view)
    - [Default open](#default-open)
    - [Example with dynamic validation](#example-with-dynamic-validation)
  - [Textarea](#textarea)
    - [Rows](#rows)
- [Test Helpers](#test-helpers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-input
```

### CSS imports

In your top-level stylesheet, add these imports:

```css
@import '~@terminus/design-tokens/css/library-design-tokens.css';
@import '~@terminus/ui-styles/terminus-ui.css';
```  

### CSS resources

Load the needed font families by adding this link to the `<head>` of your application:

```css
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
```

## Usage

Attach an `NgModel` or `FormControl` to the input:

```html
<ts-input [formControl]="myForm.get('myControl')"></ts-input>
<!-- OR -->
<ts-input formControlName="myControl"></ts-input>
<!-- OR -->
<ts-input [(ngModel)]="myModel"></ts-input>
```

We should _almost always_ being using a `FormControl`.

### Hint

A 'hint' can be displayed below the input on the right-hand side. This should be used for helpful user information such as input
requirements.

```html
<ts-input
  formControlName="myControl"
  hint="Must contain only numbers and letters."
></ts-input>
```

### Error message

Pass in an error message:

```html
<ts-input
  formControlName="myControl"
  errorMessage="Must be a valid email address"
></ts-input>
```

### No validation or hint

A flag to define whether this input field needs validation or hint. If it needs validation or hint, space below the
input is added for the message.

```html
<ts-input
  formControlName="myControl"
  [noValidationOrHint]="true"
></ts-input>
```

### Disabled

Inputs can be disabled by setting the component flag OR by setting the associated `FormControl` to `disabled`.

The `isDisabled` flag works with both `ngModel` and `FormControl` inputs:

```html
<ts-input [isDisabled]="true"></ts-input>
```

When using Reactive Forms, controls should be disabled via the control:

```typescript
myControl: FormControl = new FormControl({value: '', disabled: true});
```

### Required

When using a `FormControl`, set the required validator on the control:

```typescript
myControl = new FormControl(null, Validators.required);
```

When using `ngModel`, validations are placed on the input as data-attributes (just like native HTML inputs):

```html
<ts-input
  formControlName="myControl"
  required
></ts-input>
```

The `isRequired` flag can also be used:

```html
<ts-input
  formControlName="myControl"
  [isRequired]="true"
></ts-input>
```

### Clearable

If the input should be easily reset, include the `isClearable` flag to enable a 'clear input'
button: (button will appear as small `x` icon at the far right of the input)

```html
<ts-input
  formControlName="myControl"
  [isClearable]="true"
></ts-input>
```

When the input is cleared, the `cleared` event emitter will be fired with the value `true`.

### Focused

Auto-focus the input when the view loads:

```html
<ts-input
  formControlName="myControl"
  [isFocused]="true"
></ts-input>
```

> NOTE: If multiple inputs within the same view set `isFocused` to true, the _**last one rendered
> will receive the final focus**_.

This can also be used to dynamically focus an existing input:

```html
<ts-input
  formControlName="myControl"
  [isFocused]="myFocusedFlag"
></ts-input>
```

```typescript
myFocusedFlag = false;

toggleInputFocus() {
  this.myFocusedFlag = !this.myFocusedFlag;
}
```

### Input Type

The input type can be defined with the type input:

```html
<ts-input type="email"></ts-input>
```

> For all allowed types, see `TsInputTypes`.

### Input Attributes

`autocapitalize`, `autocomplete`, `spellcheck`, `readonly`

```html
<ts-input
  [autocapitalize]="true"
  autocomplete="email"
  [spellcheck]="true"
  [readOnly]="false"
></ts-input>
```

> For all allowed `autocomplete` types, see `TsInputAutocompleteTypes`.

### Component reference

To get a reference to the component class, assign the exported name to a local variable:

```html
<ts-input
  formControlName="myControl"
  #myInput="tsInput"
></ts-input>
```

```typescript
@ViewChild(TsInputComponent, {static: false})
myInput: TsInputComponent;

console.log('Component Class: ', this.myInput);
```

### Usage with Reactive Forms

Pass in the form control:

```html
<form [formGroup]="myForm" novalidate>
  <ts-input [formControl]="myForm.get('date')"></ts-input>

  <button (click)="submit(myForm.value)">Submit</button>
</form>
```

```typescript
myForm = this.formBuilder.group({
  date: [
    null, // If you need a default value, change this `null` to your value
    [
      Validators.required,
    ],
  ],
});
```

**NOTE:** If using a form with nested form groups, _each group_ must be created with
`formBuilder.group` for the form `get` control to work:

```typescript
// Notice the nested `dateRange` object without using `.group`
myForm: FormGroup = this.formBuilder.group({
  dateRange: {
    startDate: [
      new Date(2017, 4, 6),
    ],
    endDate: [
      new Date(2017, 4, 8),
    ],
  },
});

// THIS WILL FAIL!
const range = myForm.get('dateRange');

//////////////////////////////////////////////////

// Notice the nested `dateRange` object IS using `.group`
myForm: FormGroup = this.formBuilder.group({
  dateRange: this.formBuilder.group({
    startDate: [
      new Date(2017, 4, 6),
      [
        Validators.required,
      ],
    ],
    endDate: [
      new Date(2017, 4, 8),
      [
        Validators.required,
      ],
    ],
  }),
});

// Now there is a group for us to 'get'
const range = myForm.get('dateRange');
```

### Event Emitters

Supported event emitters:

```html
<ts-input
  (inputBlur)="inputLostFocus($event)"
  (cleared)="inputWasBlurred($event)"
  (inputFocus)="inputGainedFocus($event)"
  (selected)="newDateSelected($event)"
  (inputPaste)="inputValuePasted($event)"
></ts-input>
```

> NOTE: The `selected` input is only available when `datepicker` is true.

### Small mode

A smaller version of the input can be used:

```html
<ts-input [isSmall]="true"></ts-input>
```

### Masks

Masks enable the input to enforce specific formatting for values; such as postal codes: `12345-1234`.

#### Available Masks

| Mask         | Input value  | Masked Value     |
|--------------|--------------|------------------|
| `currency`   | `12.34`      | `$12.34`         |
| `date`       | `12121982`   | `12-12-1982`     |
| `number`     | `1234.56`    | `1,234.56`       |
| `percentage` | `12.4`       | `12.4%`          |
| `phone`      | `1231231234` | `(123) 123-1234` |
| `postal`     | `123456789`  | `12345-6789`     |

#### Sanitize the model value

Most often you will not want the mask characters to be saved as part of the actual value. By default this component will sanitize the value
before saving it to the model. This can be disabled if needed:

```html
<ts-input mask="phone" [maskSanitizeValue]="false"></ts-input>
```

This setup will format the value displayed in the UI: `(123) 456-7890`)while saving the pure value to the model: `1234567890`.

#### Allow decimals in number-based masks

By default, number based masks (`number`, `percentage`) allow decimals. This can be disabled:

```html
<ts-input mask="number" [maskAllowDecimal]="false"></ts-input>
```

This means when the user types `12.34`, the input UI and model value will both be `1234`.

### Datepicker

To add datepicker abilities to an input, set the `datepicker` input:

```html
<ts-input [datepicker]="true"></ts-input>
```

#### Filter out available dates

If, for instance, you need to prohibit weekend days (sat/sun) from being selected you can pass in a
custom method to filter dates:

```html
<ts-input
  [datepicker]="true"
  [dateFilter]="myFilter"
></ts-datepicker>
```

```typescript
myFilter = (d: Date): boolean => {
  const day = d.getDay();
  // Prevent Saturday and Sunday from being selected.
  return day !== 0 && day !== 6;
}
```

#### Set a min/max date range

To define bounds for date selection, pass in a valid `Date` to `minDate` and/or `maxDate`:

```html
<ts-input
  [datepicker]="true"
  [minDate]="date1"
  [minDate]="date2"
></ts-input>
```

```typescript
date1 = new Date(2017, 2, 1);
date2 = new Date(2017, 8, 1);
```

#### Open the calendar to a specific date

Pass in a `Date` to `openTo`:

```html
<ts-datepicker [openTo]="myDate"></ts-datepicker>
```

```typescript
myDate = new Date(2017, 5, 12);
```

#### Open the calendar to a specific view

By default, the calendar opens up to show the month view. This can be changed to show the year view initially:

```html
<ts-datepicker [startingView]="year"></ts-datepicker>
```

`year` and `month` are the only two valid values.

#### Default open

The datepicker can be opened on load:

```html
<ts-input [datepickerDefaultOpen]="true"></ts-input>
```

#### Example with dynamic validation

We can recreate a version of the {@link TsDateRangeComponent} using dynamic validation:

```html
<form [formGroup]="myForm" novalidate>
  <ts-input
    [datepicker]="true"
    formControlName="startDate"
    (selected)="rangeStartChange($event)"
  ></ts-input>

  <ts-input
    [datepicker]="true"
    formControlName="endDate"
    (selected)="rangeEndChange($event)"
  ></ts-input>

  <button (click)="submit(myForm.value)">Submit</button>
</form>
```

```typescript
myForm = this.formBuilder.group({
  startDate: [
    null,
    [
      Validators.required,
    ],
  ],
  endDate: [
    null,
    [
      Validators.required,
    ],
  ],
});

// When the startDate changes, we want to set that date as the minDate for the endDate
rangeStartChange(event: MatDatepickerInputEvent) {
  if (event) {
    // Get the from control
    const control = this.formTwo.get('endDate');

    // Set all validators.
    // NOTE: setting validators will clear ALL existing validators, so we must add the required
    // validator here again
    control.setValidators([
      Validators.required,
      this.validatorsService.minDate(event.value),
    ]);
    // Tell the control to update according to the new validators
    control.updateValueAndValidity();
  }
}

// When the endDate changes, we want to set that date as the maxDate for the startDate
rangeEndChange(event: MatDatepickerInputEvent) {
  if (event) {
    // Get the from control
    const control = this.formTwo.get('startDate');

    // Set all validators.
    // NOTE: setting validators will clear ALL existing validators, so we must add the required
    // validator here again
    control.setValidators([
      Validators.required,
      this.validatorsService.maxDate(event.value),
    ]);
    // Tell the control to update according to the new validators
    control.updateValueAndValidity();
  }
}
```

### Textarea

Switch from a standard input to a textarea:

```html
<ts-input
  formControlName="myControl"
  [isTextarea]="true"
></ts-input>
```

#### Rows

The row count can be dynamically adjusted:

```html
<ts-input
  formControlName="myControl"
  [isTextarea]="true"
  textareaRows="12"
></ts-input>
```

## Test Helpers

Some helpers are exposed to assist with testing. These are imported from `@terminus/ui-input/testing`;

[[source]][test-helpers-src]

| Function               |
|------------------------|
| `getAllInputInstances` |
| `getInputInstance`     |
| `getInputElement`      |
| `sendInput`            |

<!-- Links -->
[test-helpers-src]:    testing/src/test-helpers.ts
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-input.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-input
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-input/bundles/terminus-ui-input.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-input/bundles/terminus-ui-input.umd.js
