<h1>Loading Overlay</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [Packages that need to be installed](#packages-that-need-to-be-installed)
  - [Modules that need to be in NgModule](#modules-that-need-to-be-in-ngmodule)
  - [CSS imports](#css-imports)
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

### Packages that need to be installed

- `@angular/cdk`
- `@angular/flex-layout`
- `@angular/material`
- `@terminus/design-tokens`
- `@terminus/fe-utilities`
- `@terminus/ui-loading-overlay`
- `@terminus/ui-utilities`

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-loading-overlay
```

### Modules that need to be in NgModule

- `TsLoadingOverlayModule`

### CSS imports

In your top level stylesheet, add these imports:

```css
@import '~@terminus/design-tokens/css/library-design-tokens.css';
@import '~@terminus/ui-styles/terminus-ui.css';
```  

## Usage

```html
<div [tsLoadingOverlay]="true">
  My async content..
</div>
```

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-loading-overlay.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-loading-overlay
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-loading-overlay/bundles/terminus-ui-loading-overlay.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-loading-overlay/bundles/terminus-ui-loading-overlay.umd.js
