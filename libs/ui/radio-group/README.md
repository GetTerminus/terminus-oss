<h1>Radio Group</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [Packages that need to be installed](#packages-that-need-to-be-installed)
  - [Modules that need to be in NgModule](#modules-that-need-to-be-in-ngmodule)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [State control](#state-control)
  - [Sub-labels](#sub-labels)
  - [Validation](#validation)
    - [Validation messages](#validation-messages)
    - [No validation or hint](#no-validation-or-hint)
  - [Fieldset](#fieldset)
  - [Events](#events)
  - [Required](#required)
  - [Disabled](#disabled)
  - [Manually set selection](#manually-set-selection)
  - [Visual mode](#visual-mode)
  - [Segmented mode](#segmented-mode)
- [Test Helpers](#test-helpers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

### Packages that need to be installed

- `@angular/cdk`
- `@angular/common`
- `@angular/core`
- `@angular/forms`
- `@angular/platform-browser`
- `@popperjs/core`
- `@terminus/design-tokens`
- `@terminus/fe-utilities`
- `@terminus/ui-pipes`
- `@terminus/ui-styles`
- `@terminus/ui-utilities`
- `@terminus/ui-radio-group`
- `@terminus/ui-validation-messages`
- `date-fns`

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-radio-group
```

### Modules that need to be in NgModule

- `TsRadioGroupModule`

### CSS imports

In your top level stylesheet, add these imports:

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

Pass in one or more `<ts-radio-button>` components to a `<ts-radio-group>`:

```html
<ts-radio-group>
  <ts-radio-button value="1">One</ts-radio-button>
  <ts-radio-button value="2">Two</ts-radio-button>
  <ts-radio-button value="3">Three</ts-radio-button>
</ts-radio-group>

<!-- Or dynamically -->
<ts-radio-group>
  <ng-container *ngFor="let item of items">
    <ts-radio-button [value]="item.id">{{ item.title }}</ts-radio-button>
  </ng-container>
</ts-radio-group>
```

### State control

State can be managed by `ngModel`, `FormControl` or `formControlName`:

```html
<!-- FormGroup -->
<form [formGroup]="formGroupForm">
  <ts-radio-group [formControl]="formGroupForm.get('myGroup')">
    <ng-container *ngFor="let item of items;">
      <ts-radio-button [value]="item.id">{{ item.title }}</ts-radio-button>
    </ng-container>
  </ts-radio-group>
</form>

<!-- formGroupName -->
<form [formGroup]="formGroupNameForm">
  <ts-radio-group formControlName="myGroup">
    <ng-container *ngFor="let item of items;">
      <ts-radio-button [value]="item.id">{{ item.title }}</ts-radio-button>
    </ng-container>
  </ts-radio-group>
</form>

<!-- ngModel -->
<ts-radio-group [(ngModel)]="myModel">
  <ng-container *ngFor="let item of items;">
    <ts-radio-button [value]="item.id">{{ item.title }}</ts-radio-button>
  </ng-container>
</ts-radio-group>
```

### Sub-labels

Consumers have full control over the content of each radio button. Extra content such as icons or sub-labels can be
added directly in the template:

```html
<ts-radio-group>
  <ts-radio-button value="1">
    One
    <small>My sublabel</small>
  </ts-radio-button>
  <ts-radio-button value="2">
    Two
    <small>My second sublabel</small>
  </ts-radio-button>
</ts-radio-group>
```

### Validation

#### Validation messages

To enable validation messages the `<ts-radio-group>` must be using a control to manage state - and that control must be
passed in to the `validationFormControl` input:

```html
<ts-radio-group formControlName="myGroup" [validationFormControl]="formGroupForm.get('myGroup')">
  ...
</ts-radio-group>
```

#### No validation or hint

Disable the validation and hint section for the control

```html
<ts-radio-group [noValidationOrHint]="true">
  ...
</ts-radio-group>
```

### Fieldset

The wrapping fieldset supports a `form` ID and a legend value:

```html
<ts-radio-group fieldsetId="myFormId" fieldsetLegend="My radio group!">
  ...
</ts-radio-group>
```

### Events

The group and individual radio buttons both emit selection change events:

```html
<ts-radio-group (selectionChange)="groupChange($event)">
  <ts-radio-button value="one" (selectionChange)="optionChange($event)">One</ts-radio-button>
</ts-radio-group>
```

| Event                      | Description                                   | Payload         |
|:---------------------------|:----------------------------------------------|:----------------|
| `selectionChange` (group)  | Fired when the radio group selection changes  | `TsRadioChange` |
| `selectionChange` (button) | Fired when the radio button selection changes | `TsRadioChange` |

### Required

The `required` DOM attribute must be added by setting the `@Input` at the group or button level:

```html
<!-- This will set the required attribute on all child radio buttons -->
<ts-radio-group [isRequired]="true">
  <ts-radio-button value="one">One</ts-radio-button>
  <ts-radio-button value="two">Two</ts-radio-button>
</ts-radio-group>

<!-- Or, set at an individual level -->
<ts-radio-group>
  <ts-radio-button value="one" [isRequired]="true">One</ts-radio-button>
  <ts-radio-button value="two" [isRequired]="true">Two</ts-radio-button>
</ts-radio-group>
```

If using ReactiveForms, also set the `FormControl` as required:

```typescript
myForm = this.formBuilder.group({
  myRadioGroup: [null, [Validators.required]],
});
```

### Disabled

To disable the entire radio group, set `isDisabled` to true:

```html
<!-- This will disable all child radio buttons -->
<ts-radio-group [isDisabled]="true">
  <ts-radio-button value="one">One</ts-radio-button>
  <ts-radio-button value="two">Two</ts-radio-button>
</ts-radio-group>

<!-- Or, disable at an individual level -->
<ts-radio-group>
  <ts-radio-button value="one" [isDisabled]="true">One</ts-radio-button>
  <ts-radio-button value="two" [isDisabled]="false">Two</ts-radio-button>
</ts-radio-group>
```

### Manually set selection

A single option can be programmatically marked as selected:

```html
<ts-radio-group>
  <ts-radio-button value="one">One</ts-radio-button>
  <ts-radio-button value="two" [isChecked]="true">Two</ts-radio-button>
</ts-radio-group>
```

### Visual mode

Visual mode displays radio options as large clickable areas containing content.

This input defaults to `none` which outputs a standard radio group.

```typescript
// All available visual format options:
export type TS_VISUAL_FORMATS
  = 'none'
  | 'visual'
  | 'visual-centered'
  | 'visual-small'
  | 'visual-small-centered'
  | 'segmented'
  | 'segmented-vertical'
;
```

```html
<ts-radio-group visualFormat="visual-centered"></ts-radio-group>
```

### Segmented mode

Segmented mode displays radio options much like 'tabs' or 'button groups'. This mode can display in horizontal or
vertical layout:

```html
<ts-radio-group visualFormat="segmented">...</ts-radio-group>
<ts-radio-group visualFormat="segmented-vertical">...</ts-radio-group>
```

## Test Helpers

Some helpers are exposed to assist with testing. These are imported from `@terminus/ui-radio-group/testing`;

[[source]][test-helpers-src]

| Function                     |
|------------------------------|
| `getAllRadioGroupInstances`  |
| `getRadioGroupInstance`      |
| `getRadioGroupParentElement` |
| `selectStandardRadio`        |
| `selectVisualRadio`          |

<!-- Links -->
[test-helpers-src]:    testing/src/test-helpers.ts
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-radio-group.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-radio-group
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-radio-group/bundles/terminus-ui-radio-group.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-radio-group/bundles/terminus-ui-radio-group.umd.js
