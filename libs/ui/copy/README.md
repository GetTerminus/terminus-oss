<h1>Copy</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

This component is used to contain very long strings that users may need to copy.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
  - [Packages that need to be installed](#packages-that-need-to-be-installed)
  - [Modules that need to be in NgModule](#modules-that-need-to-be-in-ngmodule)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Display format](#display-format)
  - [Initial selection](#initial-selection)

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
- `@terminus/design-tokens`
- `@terminus/fe-utilities`
- `@terminus/ui-copy`
- `@terminus/ui-checkbox`
- `@terminus/ui-confirmation`
- `@terminus/ui-form-field`
- `@terminus/ui-icon`
- `@terminus/ui-input`
- `@terminus/ui-option`
- `@terminus/ui-selection-list`
- `@terminus/ui-styles`
- `@terminus/ui-tooltip`
- `@terminus/ui-utilities`
- `date-fns`

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-copy
```

### Modules that need to be in NgModule

- `TsCopyModule`

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

Pass in text content:

```html
<ts-copy>My text to copy!</ts-copy>
```

### Display format

Three display formats are offered:

| Mode       | Description                                             |
|------------|---------------------------------------------------------|
| `standard` | The full, bordered version (default)                    |
| `minimal`  | Slightly more compact with no border (useful in tables) |
| `icon`     | Icon only, all text hidden (quick copy must be enabled) |

### Initial selection

By default, when a user focuses on this component, the text is automatically selected. This provides an easy fallback in
the instance where the user's browser does not support clipboard functionality.

It should be extremely rare, but if needed, this functionality can be disabled.

```html
<ts-copy [disableInitialSelection]="true">My text to copy!</ts-copy>
```


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-copy.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-copy
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-copy/bundles/terminus-ui-copy.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-copy/bundles/terminus-ui-copy.umd.js
