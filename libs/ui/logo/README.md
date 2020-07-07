<h1>Logo</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Usage](#usage)
  - [Type](#type)
  - [Colors](#colors)
  - [Sizing](#sizing)
  - [Special Cases](#special-cases)
  - [Available logos](#available-logos)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

The most basic implementation is only HTML:

```html
<ts-logo></ts-logo>
```

### Type

Multiple logo types are available:

```html
<ts-logo type="full-solid"></ts-logo>
<ts-logo type="mark-gradient"></ts-logo>
```

See `TS_LOGO_TYPES` to see all allowed types.

### Colors

Solid logos are white by default, but can also be black (Terminus Dark) or gray (logo-gray).

```html
<ts-logo type="full-solid" logoColor="gray"></ts-logo>
<ts-logo type="mark-solid" logoColor="black"></ts-logo>
```

See for `TS_LOGO_COLORS` to see all allowed logo colors.

### Sizing

The four main logos are full-size so they will adapt to the width of their container.

### Special Cases

Any logo with a gradient will not honor a logoColor.

### Available logos

|               Name | Description                                                    |
|-------------------:|:---------------------------------------------------------------|
| `full-account-hub` | Special logo for Account Hub, includes spacing and color       |
|    `full-gradient` | Default. Gradient mark with logo gray "terminus" text          |
|       `full-solid` | Mark with "terminus" text, white by default, accepts logoColor |
|    `mark-gradient` | Mark with gradient                                             |
|       `mark-solid` | Mark without gradient                                          |


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-logo.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-logo
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-logo/bundles/terminus-ui-logo.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-logo/bundles/terminus-ui-logo.umd.js
