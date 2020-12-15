<h1>Form Field</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

A field wrapper for form components.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Control](#control)
  - [Float label](#float-label)
  - [Hide required marker](#hide-required-marker)
  - [Hint](#hint)
  - [No validation or hint](#no-validation-or-hint)
  - [Validation trigger](#validation-trigger)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-autocomplete
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

`TsFormFieldComponent` is a component used to wrap several other components that could be used within a form and apply common styles.

```html
<ts-form-field
    [control]="myControlInstance"
    [validateOnChange]="true"
    ...etc
 ></ts-form-field>
```

### Control

Users can pass in form control to the form field component

```html
<ts-form-field [control]="myFormControl"></ts-form-field>
```

### Float label

It defines whether the label should always float or float as the user types. The value can only be set to either `always` or `auto`.

```html
<ts-form-field [floatLabel]="always"></ts-form-field>
```

### Hide required marker

Define if a required marker should be hidden.

```html
<ts-form-field [hideRequiredMarker]="true"></ts-form-field>
```

### Hint

Define a hint for the input.

```html
<ts-form-field [hint]="Please input a number"></ts-form-field>
```

### No validation or hint

A flag to define whether this form needs validations or a hint. If it needs validation or hint, space is added for
validation message or hint at the bottom.

```html
<ts-form-field [noValidationOrHint]="true"></ts-form-field>
```

### Validation trigger

Define if the validation should be shown immediately or on blur.

```html
<ts-form-field [validateOnChange]="true"></ts-form-field>
```

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-form-field.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-form-field
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-form-field/bundles/terminus-ui-form-field.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-form-field/bundles/terminus-ui-form-field.umd.js
