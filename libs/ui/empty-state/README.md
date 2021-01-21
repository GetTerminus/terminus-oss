<h1>Empty State</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

A component to display a responsive, empty state with optional information and action items.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Title](#title)
  - [Description](#description)
  - [Actions](#actions)
  - [SVG](#svg)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-empty-state
```

### CSS imports

In your top-level stylesheet, add these imports:

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

### Title

Title text will be output into an `<h2>` element:

```html
<ts-empty-state title="No ad impressions, yet."></ts-empty-state>
```

### Description

Any descriptive content can be passed in as the component content:

```html
<ts-empty-state>
  <p>
    There aren't any Ad Impressions within the selected reporting period and filters yet.
    Please try again later or create a new <ts-link destination="#">Ad Tactic</ts-link>.
  </p>
</ts-empty-state>
```

### Actions

Any calls to action can be placed inside the actions component:

```html
<ts-empty-state>
  <ts-empty-state-actions>
    <ts-button theme="secondary">Button one</ts-button>
    <ts-button>Button two</ts-button>
  </ts-empty-state-actions>
</ts-empty-state>
```

### SVG

A custom SVG can be passed in as a template. If no SVG is passed in, a default will be used.

```html
<ts-empty-state [svgTemplate]="mySvg"></ts-empty-state>

<ng-template #mySvg>
  <svg>...</svg>
</ng-template>
```

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-empty-state.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-empty-state
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-button/bundles/terminus-ui-empty-state.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-button/bundles/terminus-ui-empty-state.umd.js
