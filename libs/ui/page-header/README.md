<h1>Page Header</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Title](#title)
    - [Heading levels](#heading-levels)
    - [Page menu](#page-menu)
  - [Breadcrumbs](#breadcrumbs)
  - [Updated date](#updated-date)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-page-header
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

For the most minimal implementation, add the component and define the title:

```html
<ts-page-header title="My page title!"></ts-page-header>
```

#### Heading levels

By default, an `<h1>` is used for the page title. If the usage requires the page header to not define the top level
heading, it can be set to use `<h2>` or `<h3>`:

```html
<ts-page-header title="My page title!" titleLevel="h2"></ts-page-header>
```

#### Page menu

If an array of pages is passed to `pageMenuContent` then the title will become a trigger to open a dropdown menu with
links to the passed in pages. Unlike breadcrumbs, these items _must_ have an associated route.

```typescript
const myPages: TS_PAGE_HEADER_ROUTE[] = [
  {
    display: 'Report 1',
    route: '/reports/1',
  },
  {
    display: 'Report 2',
    route: '/reports/2',
  },
];
```

```html
<ts-page-header title="My page title!" [pageMenuContents]="myPages"></ts-page-header>
```

### Breadcrumbs

If an array of breadcrumbs is passed in, the component will display breadcrumbs. A breadcrumb may or may not have an
associated route:

```typescript
// This breadcrumb will display as plain text:
const crumbWithNoRoute: TS_PAGE_HEADER_STATIC_BREADCRUMB = {
  display: 'Crumb with NO route',
  // ...my other properties
};
// This breadcrumb will display as a link:
const crumbWithRoute: TS_PAGE_HEADER_ROUTE = {
  display: 'Reports',
  route: '/reports', // accepts any valid `routerLink` input
};
const myBreadcrumbs: TS_PAGE_HEADER_ROUTES = [crumbWithNoRoute, crumbWithRoute];
```

```html
<ts-page-header title="My page title!" [breadcrumbs]="myBreadcrumbs"></ts-page-header>
```

### Updated date

If passed in, the time since last update will display in the top right:

```typescript
const myDate = new Date(2020, 9, 14);
```

```html
<ts-page-header title="My page title!" [lastUpdatedDate]="myDate"></ts-page-header>
```

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-page-header.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-page-header
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-page-header/bundles/terminus-ui-page-header.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-paginator/bundles/terminus-ui-page-header.umd.js
