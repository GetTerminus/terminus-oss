<h1>Styles</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-css]

A collection of base CSS for the UI library and a collection of SCSS mixins and functions.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Usage](#usage)
  - [Base CSS](#base-css)
  - [SCSS Helpers](#scss-helpers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

NOTE: Many styles are now driven by our design tokens. See [available tokens here][tokens].

### Base CSS

Import base CSS and theme styles in the root stylesheet:

```scss
@import '~@terminus/ui-styles/terminus-ui.css';
```

### SCSS Helpers

Import helper mixins in any SCSS file that needs access:

```scss
@import '~@terminus/ui-styles/helpers';

.example {
  color: color(utility, light);
}
```


<!-- Links -->
[tokens]:               ../../design-tokens/
[license-url]:          https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:        http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:      https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:        https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:    http://img.shields.io/npm/v/@terminus/ui-styles.svg
[npm-package]:          https://www.npmjs.com/package/@terminus/ui-styles
[github-action-badge]:  https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:   https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:      http://img.badgesize.io/https://unpkg.com/@terminus/ui-styles/terminus-ui.css?compression=gzip
[raw-distribution-css]: https://unpkg.com/@terminus/ui-styles/terminus-ui.css
