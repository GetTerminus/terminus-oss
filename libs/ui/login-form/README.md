<h1>Login Form</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
  - [Packages that need to be installed](#packages-that-need-to-be-installed)
  - [Modules that need to be in NgModule](#modules-that-need-to-be-in-ngmodule)
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

### Packages that need to be installed

   *  @angular/cdk
   *  @angular/common
   *  @angular/core
   *  @angular/flex-layout
   *  @angular/forms
   *  @angular/platform-browser
   *  @terminus/design-tokens
   *  @terminus/ngx-tools
   *  @terminus/ui-utilities
   *  @terminus/ui-login-form
   *  @terminus/ui-button
   *  @terminus/ui-checkbox
   *  @terminus/ui-input
   *  @terminus/ui-link
   *  @terminus/ui-spacing
   *  @terminus/ui-validators
   *  @terminus/ui-form-field
   *  @terminus/ui-pipes
   *  @terminus/ui-validation-messages
   *  text-mask-addons
   *  text-mask-core
   *  date-fns

Using `ng add` command can help getting all the dependencies installed:

```bash
    ng add @terminus/ui-login-form
```

### Modules that need to be in NgModule

  * TsLoginFormModule

## Usage

Create a basic login form with submit function:

```html
<ts-login-form (submission)="mySubmitFunction($event)"></ts-login-form>
```


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-login-form.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-login-form
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-login-form/bundles/terminus-ui-login-form.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-login-form/bundles/terminus-ui-login-form.umd.js
