<h1>Icons</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
  - [Packages that need to be installed](#packages-that-need-to-be-installed)
  - [Modules that need to be in NgModule](#modules-that-need-to-be-in-ngmodule)
  - [CSS imports](#css-imports)
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

### Packages that need to be installed

- `@angular/material`
- `@terminus/design-tokens`
- `@terminus/ngx-tools`
- `@terminus/ui-icon`
- `@terminus/ui-utilities`
- `@fortawesome/pro-solid-svg-icons`

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-icon
```

### Modules that need to be in NgModule

- `TsIconModule`

### CSS imports

In your top level stylesheet, add these imports:

```css
@import '~@terminus/design-tokens/css/library-design-tokens.css';
@import '~@terminus/ui-styles/terminus-ui.css';
```  

## Usage

Import any FontAwesome icon and pass it in:

```typescript
import { faHome } from '@fortawesome/pro-solid-svg-icons/faHome';
...
public home = faHome;
```

```html
<ts-icon [icon]="home"></ts-icon>
```

> See all valid icon possibilities: https://fontawesome.com/icons  
> See the underlaying API: https://github.com/FortAwesome/angular-fontawesome/blob/master/docs/usage/features.md


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-icon.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-icon
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-icon/bundles/terminus-ui-icon.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-icon/bundles/terminus-ui-icon.umd.js
