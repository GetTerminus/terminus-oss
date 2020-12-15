<h1>Checkbox</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [State](#state)
    - [Reactive Forms](#reactive-forms)
    - [`ngModel`](#ngmodel)
    - [Checked](#checked)
    - [Disabled](#disabled)
    - [Indeterminate](#indeterminate)
    - [Required](#required)
  - [a11y](#a11y)
  - [Tab Index](#tab-index)
  - [Focus](#focus)
  - [Events](#events)
  - [Default settings](#default-settings)
    - [Click action](#click-action)
- [Test Helpers](#test-helpers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-checkbox
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

The checkbox label content can be set in two ways:

```html
<!-- Pass text in through ng-content -->
<ts-checkbox>My checkbox label</ts-checkbox>

<!-- Pass text in through the label input -->
<ts-checkbox label="My checkbox label"></ts-checkbox>
```

### State

#### Reactive Forms

To use the checkbox with a reactive form, pass the `FormControl` or the `formControlName` to the checkbox:

```html
<ts-checkbox [formControl]="myForm.get('myControl')">
  I will be checked if `myForm.myControl.value` is true.
</ts-checkbox>

<ts-checkbox formControlName="myControl">
  I will be checked if `myForm.myControl.value` is true.
</ts-checkbox>
```

> NOTE: If no `FormControl` or `ngModel` is passed in, one will be assigned to manage state.

#### `ngModel`

To use the checkbox with Angular's `ngModel`, just attach the directive to the checkbox:

```html
<ts-checkbox [(ngModel)]="myValue">
  I will be checked if `myValue` is true.
</ts-checkbox>
```

#### Checked

The checked state will likely be managed by setting the `FormControl` or `ngModel` value. It can also be set via
`@Input` or programmatically:

```html
<!-- @Input -->
<ts-checkbox [isChecked]="true">I will be checked</ts-checkbox>

<!-- Programmatically -->
<ts-checkbox #myCheckbox="tsCheckbox">I can be toggled via a button</ts-checkbox>
<button (click)="myCheckbox.toggle()">Toggle the checked value</button>
```

> NOTE: Events will not be emitted when state changes programmatically.

#### Disabled

The checkbox can be disabled by disabling the associated `FormControl` or `ngModel`. It can also be set via `@Input` or
programmatically:

```html
<!-- @Input -->
<ts-checkbox [isDisabled]="true">I will be disabled</ts-checkbox>

<!-- Programmatically -->
<ts-checkbox #myCheckbox="tsCheckbox">I can be disabled via a button</ts-checkbox>
<button (click)="myCheckbox.isDisabled != myCheckbox.isDisabled">Toggle the disabled state</button>
```

#### Indeterminate

The indeterminate state can be set via `@Input`:

```html
<ts-checkbox [isIndeterminate]="true">I will be indeterminate</ts-checkbox>
```

#### Required

The checkbox can be marked as required:

```html
<ts-checkbox [isRequired]="true">I will be required</ts-checkbox>
```

### a11y

The checkbox supports aria properties:

```html
<!-- Pass the ID of an element that describes the checkbox -->
<ts-checkbox [ariaDescribedby]="myId">Foo</ts-checkbox>

<!-- Pass a space-separated list of element IDs that provide essential information about the checkbox -->
<ts-checkbox [ariaLabelledby]="myId anotherId">Foo</ts-checkbox>

<!-- Set the aria label -->
<ts-checkbox [ariaLabel]="My descriptive label.">Foo</ts-checkbox>
```

### Tab Index

Custom `tabindex` can be set to control the flow:

```html
<ts-checkbox>Foo</ts-checkbox>
<ts-checkbox [tabIndex]="-1">I will be skipped when tabbing through the DOM</ts-checkbox>
<ts-checkbox>Bar</ts-checkbox>
```

### Focus

Programmatically focus the underlying `<input>`:

```html
<ts-checkbox #myCheckbox="tsCheckbox">My checkbox</ts-checkbox>
<button (click)="myCheckbox.focus()">Focus the internal native `input`</button>
```

### Events

```html
<ts-checkbox (inputChange)="myChangeFunction($event)>Foo</ts-checkbox>
<ts-checkbox (indeterminateChange)="myIndeterminateChangeFunction($event)>Bar</ts-checkbox>
```

| Event                 | Description                                         | Payload            |
|:----------------------|:----------------------------------------------------|:-------------------|
| `inputChange`         | Fired when the checkbox checked state changes       | `TsCheckboxChange` |
| `indeterminateChange` | Fired when the checkbox indeterminate state changes | `boolean`          |

> NOTE: Events will not be emitted when state changes programmatically.

### Default settings

The default settings can be overridden via a provider:

```typescript
@Component({
  selector: 'my-component',
  providers: [
    {
      provide: TS_CHECKBOX_DEFAULT_OPTIONS,
      useValue: { clickAction: 'check' },
    },
  ],
})
export class MyComponent {}
```

Currently, only `clickAction` is a supported default.

#### Click action

- `noop`: Do not toggle checked or indeterminate
- `check`: Only toggle checked status, ignore indeterminate
- `check-indeterminate`: Toggle checked status, set indeterminate to false. Default behavior
- `undefined`: Same as check-indeterminate.

> See the previous section for usage example

## Test Helpers

Some helpers exist to assist with testing. These are imported from `@terminus/ui-checkbox/testing`;

[[source]][test-helpers-src]

| Function                  |
|---------------------------|
| `getAllCheckboxInstances` |
| `getCheckboxInstance`     |
| `getCheckboxElement`      |
| `toggleCheckbox`          |

<!-- Links -->
[test-helpers-src]:    testing/src/test-helpers.ts
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-checkbox.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-checkbox
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-checkbox/bundles/terminus-ui-checkbox.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-checkbox/bundles/terminus-ui-checkbox.umd.js
