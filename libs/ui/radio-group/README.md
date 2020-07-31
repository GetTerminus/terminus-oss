<h1>Radio Group</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
  - [Packages that need to be installed](#packages-that-need-to-be-installed)
  - [Modules that need to be in NgModule](#modules-that-need-to-be-in-ngmodule)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Sub-labels](#sub-labels)
  - [No validation or hint](#no-validation-or-hint)
  - [Event driven](#event-driven)
  - [Required](#required)
  - [Disabled](#disabled)
    - [Disabled option](#disabled-option)
  - [Visual mode](#visual-mode)
    - [Small](#small)
  - [Centered content](#centered-content)
  - [Custom content](#custom-content)
- [Test Helpers](#test-helpers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

### Packages that need to be installed

- `@angular/cdk`
- `@angular/common`
- `@angular/core`
- `@angular/flex-layout`
- `@angular/forms`
- `@angular/material`
- `@angular/platform-browser`
- `@popperjs/core`
- `@terminus/design-tokens`
- `@terminus/fe-utilities`
- `@terminus/ui-icon`
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

Pass in:

1. An array of items
1. A form control
1. A formatter function to determine the UI display value
1. A formatter function to determine the model value

```html
<form [formGroup]="myForm">
  <ts-radio-group
    [options]="items$ | async"
    [formControl]="myForm.get('myRadioGroup')"
    [formatUILabelFn]="uiFormatter"
    [formatModelValueFn]="modelFormatter"
  ></ts-radio-group>

  <button (click)="submit(myForm.value)">Submit</button>
</form>
```

```typescript
// Define items to be passed to the radio group
items$: Observable<TsRadioOption[]> = of([
  {
    foo: 'foo_value',
    bar: 'Foo Display',
    bing: 'Some helper text for my item',
  },
  {
    foo: 'bar_value',
    bar: 'Bar Display',
    bing: 'Some helper text for my item',
    disabled: true,
  },
  {
    foo: 'baz_value',
    bar: 'Baz Display',
    bing: 'Some helper text for my item',
  },
]);

// Create a form
myForm = this.formBuilder.group({
  myRadioGroup: [null],
});

// Use the 'bar' value as the UI display
uiFormatter = (v) => v.bar;
// Use the 'foo' value to save to the model
modelFormatter = (v) => v.foo;
```

### Sub-labels

Passing a formatter function to `formatUISubLabelFn` will enable sub-label support:

```html
<ts-radio-group
  [options]="items$ | async"
  [formControl]="myForm.get('myRadioGroup')"
  [formatUISubLabelFn]="uiSubFormatter"
  [formatUILabelFn]="uiFormatter"
  [formatModelValueFn]="modelFormatter"
></ts-radio-group>
```

```typescript
// Use the 'bing' value as a sub-label
uiSubFormatter = (v) => v.bing;
// Use the 'bar' value as the UI display
uiFormatter = (v) => v.bar;
// use the 'foo' value to save to the model
modelFormatter = (v) => v.foo;
```

### No validation or hint

A flag to define whether this radio group field needs validation or hint. If it needs validation or hint, a padding bottom is added for the message, otherwise, no padding at the bottom.

```html
<ts-radio-group
  [formControl]="myFormCtrl"
  [noValidationOrHint]="true"
></ts-radio-group>
```

### Event driven

Listen for change events:

```html
<ts-radio-group
  [options]="items$ | async"
  (selectionChange)="selected($event)"
></ts-radio-group>
```

### Required

To define the radio group as 'required', set the required validator on the form group:

```typescript
myForm = this.formBuilder.group({
  myRadioGroup: [null, [Validators.required]],
});
```

### Disabled

To disable the entire radio group, set `isDisabled` to true:

```html
<ts-radio-group
  [options]="items$ | async"
  [formControl]="myForm.get('myRadioGroup')"
  [formatUISubLabelFn]="uiSubFormatter"
  [formatUILabelFn]="uiFormatter"
  [formatModelValueFn]="modelFormatter"
  [isDisabled]="true"
></ts-radio-group>
```

#### Disabled option

To disabled only a single option, define the `disabled` key on the item object:

```typescript
// Define items to be passed to the radio group
items$: Observable<TsRadioOption[]> = of([
  {
    foo: 'foo_value',
    bar: 'Foo Display',
  },
  {
    foo: 'bar_value',
    bar: 'Bar Display',
    disabled: true, // This radio option will be disabled
  },
  {
    foo: 'baz_value',
    bar: 'Baz Display',
  },
]);
```

### Visual mode

Visual mode displays radio options as large clickable areas containing content.

Enable by setting the `isVisual` flag:

```html
<ts-radio-group [isVisual]="true"></ts-radio-group>
```

#### Small

For a smaller clickable area, use the `small` flag.

NOTE: The maximum content should be a title with two lines and body with 3 lines

```html
<ts-radio-group [isVisual]="true" [small]="true"></ts-radio-group>
```

### Centered content

By default the content is centered when in visual mode. Setting `centeredContent` to `false` will use standard top/left alignment.

```html
<ts-radio-group
  [isVisual]="true"
  [centeredContent]="false"
  ...
></ts-radio-group>
```

### Custom content

`TsRadioOption` now accepts an optional `template` key with a string template:

```typescript
items$: Observable<TsRadioOption[]> = of([
  {
    foo: 'foo_value',
    bar: 'Foo Display',
    template: `<a href="${this.myLink}">My link!</a>`
  },
  {
    foo: 'bar_value',
    bar: 'Bar Display',
    // if no template is defined, it will fall back to `formatUILabelFn` for the display value
  },
  {
    foo: 'baz_value',
    bar: 'Baz Display',
    template: `<h3>Hi!</h3> <p>Here is a thing!</p>`
  },
]);
```

```html
<ts-radio-group
  [isVisual]="true"
  [options]="items$ | async"
  [formControl]="myForm.get('myRadioGroup')"
  [formatUILabelFn]="uiFormatter"
  [formatModelValueFn]="modelFormatter"
></ts-radio-group>
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
