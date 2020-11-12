<h1>Button</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [Packages that need to be included](#packages-that-need-to-be-included)
  - [Modules that need to be in NgModule](#modules-that-need-to-be-in-ngmodule)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Text content](#text-content)
  - [Theme](#theme)
  - [Format](#format)
  - [Size](#size)
  - [Button type](#button-type)
  - [Action name](#action-name)
  - [Show progress](#show-progress)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

### Packages that need to be included

- `@angular/cdk`
- `@angular/material`
- `@terminus/fe-utilities`
- `@terminus/design-tokens`
- `@terminus/ui-button`
- `@terminus/ui-icon`
- `@terminus/ui-utilities`
- `@terminus/ui-styles`
- `date-fns`

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-button
```

### Modules that need to be in NgModule

- `TsButtonModule`

### CSS imports

In your top level stylesheet, add these imports:

```css
@import '~@terminus/design-tokens/css/library-design-tokens.css';
@import '~@terminus/ui-styles/terminus-ui.css';
```  

### CSS resources

Load the needed font families by adding this link to the `<head>` of your application:

```css
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
```

## Usage

```html
<ts-button (clicked)="myFunc($event)">Click me!</ts-button>
```

### Text content

Text content can be passed in through the element, or through an @Input:

```html
<ts-button>Click me!</ts-button>
<ts-button textContent="Click Me!"></ts-button>
```

### Theme

Set any available theme type:

```html
<ts-button theme="secondary">Click Me!</ts-button>
```

See `TsButtonThemeTypes` for all available themes.

### Format

Set any available format:

```html
<ts-button format="collapsible">Click Me!</ts-button>
```

See `TsButtonFormatTypes` for all available button formats.

### Size

For a smaller button, set the `isSmall` flag:

```html
<ts-button [isSmall]="true">Click Me!</ts-button>
```

### Button type

Set any available type:

```html
<ts-button buttonType="submit">Click Me!</ts-button>
```

See `TsButtonFunctionTypes` for all available button types.

### Action name

Any valid action name can be set:

```html
<ts-button actionName="Reset">Click Me!</ts-button>
```

See `TsButtonActionTypes` for all available action names.

### Show progress

When 'showing progress', the button will be disabled and a spinner will be shown:

```html
<ts-button [showProgress]="true">Click Me!</ts-button>
```

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-button.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-button
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-button/bundles/terminus-ui-button.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-button/bundles/terminus-ui-button.umd.js
