<h1>Paginator</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Summary](#summary)
  - [Events](#events)
  - [Simple mode](#simple-mode)
  - [Tooltips](#tooltips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-paginator
```

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

Pass in an array of pages, and the currently active page:

```html
<ts-paginator
  [pages]="myPages"
  [activePage]="myActivePage"
></ts-paginator>
```

```typescript
export class Example {
  myPages: TS_PAGINATOR_PAGE[] = [
    { pageNumber: 0, pageDisplay: 1 },
    { pageNumber: 1, pageDisplay: 2 },
    { pageNumber: 2, pageDisplay: 3 },
  ];
  myActivePage: TS_PAGINATOR_PAGE = this.myPages[0];
}
```

### Summary

Pass in the summary text:

```html
<ts-paginator
  [pages]="myPages"
  [activePage]="myActivePage"
  paginatorSummary="1 - 25 of 243 Accounts"
></ts-paginator>
```

### Events

In order to know where the user has requested to navigate, listen for 3 events:

```html
<ts-paginator
  [pages]="myPages"
  [activePage]="myActivePage"
  (previousPageClicked)="goBack()"
  (nextPageClicked)="goForward()"
  (pageClicked)="jumpToPage($event)"
></ts-paginator>
```

### Simple mode

Simple mode hides all page buttons and only shows the previous and next buttons:

```html
<ts-paginator
  [pages]="myPages"
  [activePage]="myActivePage"
  [isSimpleMode]="true"
></ts-paginator>
```

### Tooltips

The next and previous button tooltips can be customized:

```html
<ts-paginator
  [pages]="myPages"
  [activePage]="myActivePage"
  previousPageTooltip="Go back one page"
  nextPageTooltip="Go forward one page"
></ts-paginator>
```

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-paginator.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-paginator
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-paginator/bundles/terminus-ui-paginator.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-paginator/bundles/terminus-ui-paginator.umd.js
