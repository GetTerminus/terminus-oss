<h1>Copy</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

This component is used to contain very long strings that users may need to copy.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Usage](#usage)
  - [Display format](#display-format)
  - [Initial selection](#initial-selection)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-copy/bundles/terminus-ui-copy.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-copy/bundles/terminus-ui-copy.umd.js

