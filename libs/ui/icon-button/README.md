<h1>Icon Button</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Usage](#usage)
  - [Theme](#theme)
  - [Accessibility](#accessibility)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Usage

Pass a valid [Material icon][material-icons] name as the content of the button:

```html
<ts-icon-button (clicked)="myMethod()">delete_forever</ts-icon-button>
```

### Theme

Use the `theme` parameter to change the color.

```html
<!-- Will be colored with the 'primary' color -->
<ts-icon-button theme="primary">forum</ts-icon-button>

<!-- Will be colored with the 'accent' color -->
<ts-icon-button theme="accent">forum</ts-icon-button>

<!-- Will be colored with the 'warn' color -->
<ts-icon-button theme="warn">forum</ts-icon-button>
```

> By default the icon will use the library base text color.


### Accessibility

For accessibility purposes we should set the `actionName` and `buttonType`.

1. `actionName` can be one of the `TsButtonActionTypes` and will be used for the `aria-label`.
1. `buttonType` can be one of the `TsButtonFunctionTypes` and will be used for the `type` attribute.

```html
<ts-icon-button
  actionName="Menu"
  buttonType="button"
  (clicked)="myMethod()"
>bookmark</ts-icon-button>
```


<!-- Links -->
[material-icons]:      https://material.io/icons/
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-icon-button.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-icon-button
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-icon-button/bundles/terminus-ui-icon-button.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-icon-button/bundles/terminus-ui-icon-button.umd.js
