<h1>Option & Optgroup</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Optgroup](#optgroup)
  - [Display directive](#display-directive)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-option
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
<ts-option value="My value!">My value!</ts-option>
```

### Optgroup

```html
<ts-select-optgroup label="My optgroup">
  <ts-option value="My value!">My value!</ts-option>
</ts-select-optgroup>
```

### Display directive

If options are complex, the `tsOptionDisplay` directive can be used to mark which part of the option should be used as
the selected label.

```html
<ts-option value="My value!">
  <div>
    <!-- Only the contents inside the element the directive is on will be used: "My Value!" -->
    <span tsOptionDisplay>My Value!</span>
    <p>A description</p>
  </div>
My value!</ts-option>
```

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-option.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-option
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-option/bundles/terminus-ui-option.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-option/bundles/terminus-ui-option.umd.js
