<h1>Autofocus</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

A directive that gives focus to an element on load.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
  - [Packages that need to be included](#packages-that-need-to-be-included)
  - [Modules that need to be in NgModule](#modules-that-need-to-be-in-ngmodule)
- [Usage](#usage)
  - [Binding](#binding)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

### Packages that need to be included

  * @terminus/ui-autofocus
  * @terminus/ui-utilities
  * @terminus/ngx-tools
  * date-fns
  
  Using `ng add` command can help getting all the dependencies installed:
  ```bash
  ng add @terminus/ui-autofocus
  ```

### Modules that need to be in NgModule

  * TsAutofocusModule

## Usage

The `tsAutofocus` directive can be used on any element that has a `.focus()` method. This includes
inputs, select menus, textarea, buttons, links, iframes and any element with a defined `tabindex`
above -1.

Add the directive to a focusable element:

```html
<input type="text" tsAutofocus />
```

### Binding

Passing in any value _except_ `false`, `'false'`, `null`, or `undefined` will enable the directive.

```html
<!-- enabled -->
<input type="text" [tsAutofocus]="myProperty" />
<input type="text" [tsAutofocus]="true" />
<input type="text" tsAutofocus="" />

<!-- disabled -->
<input type="text" [tsAutofocus]="false" />
<input type="text" [tsAutofocus]="null" />
```

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-autofocus.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-autofocus
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-autofocus/bundles/terminus-ui-autofocus.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-autofocus/bundles/terminus-ui-autofocus.umd.js
