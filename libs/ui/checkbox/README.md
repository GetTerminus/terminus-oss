<h1>Checkbox</h1>

[![CI/CD Status][github-action-badge]][github-action-link]  
[![Codecov][codecov-badge]][codecov-project]  
[![MIT License][license-image]][license-url]  
<br>  
[![NPM version][npm-version-image]][npm-package]  
[![Github release][gh-release-badge]][gh-releases]  
[![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Usage](#usage)
  - [Reactive Forms](#reactive-forms)
  - [`ngModel`](#ngmodel)
  - [`isChecked`](#ischecked)
- [Test Helpers](#test-helpers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

Place your label text inside the component:

```html
<ts-checkbox>
  My checkbox label
</ts-checkbox>
```


### Reactive Forms

To use the checkbox with a reactive form, pass the `formControl` to the checkbox:

```html
<ts-checkbox [formControl]="myForm.get('myControl')">
  I will be checked if `myControl.value` is true.
</ts-checkbox>
```


### `ngModel`

To use the checkbox with Angular's `ngModel`, just attach the directive to the checkbox:

```html
<ts-checkbox [(ngModel)]="myValue">
  I will be checked if `myValue` is true.
</ts-checkbox>
```


### `isChecked`

To seed the initial checked state use the `isChecked` property:

```html
<ts-checkbox [isChecked]="true">
  I will be checked by default!
</ts-checkbox>
```

> NOTE: This should rarely be used (if ever). We should be relying on a Reactive Form or ngModel.


## Test Helpers

Some helpers are exposed to assist with testing. These are imported from `@terminus/ui-checkbox/testing`;

[[source]][test-helpers-src]

| Function                  |
|---------------------------|
| `getAllCheckboxInstances` |
| `getCheckboxInstance`     |
| `getCheckboxElement`      |
| `toggleCheckbox`          |


<!-- Links -->
[test-helpers-src]:    testing/src/test-helpers.ts
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/master/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/master/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-checkbox.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-checkbox
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/CI%20Release/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-checkbox/bundles/terminus-ui-checkbox.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-checkbox/bundles/terminus-ui-checkbox.umd.js

