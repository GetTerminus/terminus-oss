<h1>Button</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
  - [Packages that need to be installed:](#packages-that-need-to-be-installed)
  - [Modules that need to be in NgModule](#modules-that-need-to-be-in-ngmodule)
  - [Styles to be added](#styles-to-be-added)
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

### Packages that need to be installed:

  * @angular/cdk
  * @angular/material
  * @terminus/ngx-tools
  * @terminus/design-tokens
  * @terminus/ui-button
  * @terminus/ui-icon
  * @terminus/ui-utilities
  * @terminus/ui-styles
  * date-fns
  
  Using `ng add` command can help getting all the dependencies installed:
  ```bash
    ng add @terminus/ui-button
  ```

### Modules that need to be in NgModule

  * TsButtonModule

### Styles to be added

 At top level `styles.scss`, add these styles:

```css
@import '~@terminus/design-tokens/css/library-design-tokens.css';
@import '~@terminus/ui-styles/terminus-ui.css';
```

## Usage
```html
<ts-button
  [buttonType]="buttonType"
  [collapsed]="collapsed"
  [format]="format"
  [isDisabled]="isDisabled"
  [id]="id"
  [showProgress]="showProgress"
  [tabIndex]="tabIndex"
  [theme]="theme"
>Button content</ts-button>
```

 * Use the `theme` parameter to change the color. Support three different themes: `primary`, `accent` and `warn`.
 * There are three different `buttonType`: `button`, `search` and `submit`.
 * Use `format` to set the style as `filled` or `hollow`.
 * `isDisabled` and `showProgress` are boolean inputs.



<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-button.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-button
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-button/bundles/terminus-ui-button.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-button/bundles/terminus-ui-button.umd.js

