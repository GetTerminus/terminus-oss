<h1>Search</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Auto-submit](#auto-submit)
  - [Debounce Time](#debounce-time)
  - [Button theme](#button-theme)
  - [Error message](#error-message)
  - [No validation or hint](#no-validation-or-hint)
  - [Events](#events)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-search
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

```html
<ts-search
  inputHint="Enter at least 17 characters"
  inputLabel="Search for a tactic"
></ts-search>
```

### Auto-submit

When enabled, the submit button will not be shown and debounced queries will be emitted automatically.

```html
<ts-search [autoSubmit]="true"></ts-search>
```

### Debounce Time

Discard emitted values that take less than the specified time between output.

```html
<ts-search [debounceTime]="400"></ts-search>
```

### Button theme

Any valid `TsButtonThemeTypes` can be passed in:

```html
<ts-search buttonTheme="secondary"></ts-search>
```

### Error message

A custom error message can be displayed:

```html
<ts-search errorMessage="Special characters not allowed."></ts-search>
```

### No validation or hint

The space reserved for the validation message or hint can be removed if it is not needed:

```html
<ts-search [noValidationOrHint]="true"></ts-search>
```

### Events

```html
<ts-search (submitted)="myFunction($event)"></ts-search>
```

| Event       | Description                                                          | Payload            |
|:------------|:---------------------------------------------------------------------|:-------------------|
| `changed`   | Fired when the drawer expansion starts                               | `string`           |
| `cleared`   | Fired when the drawer collapse starts                                | `boolean`          |
| `submitted` | Fired when the search query is submitted (manually or automatically) | `TsSearchResponse` |

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-search.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-search
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-search/bundles/terminus-ui-search.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-search/bundles/terminus-ui-search.umd.js
