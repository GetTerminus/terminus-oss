<h1>Option & Optgroup</h1>

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
  - [Optgroup](#optgroup)
  - [Display directive](#display-directive)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/master/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/master/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-option.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-option
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/CI%20Release/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-option/bundles/terminus-ui-option.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-option/bundles/terminus-ui-option.umd.js
