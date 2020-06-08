<h1>Paginator</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Usage](#usage)
  - [Events](#events)
  - [Current page](#current-page)
  - [Zero or one based pagination](#zero-or-one-based-pagination)
  - [Record count too high](#record-count-too-high)
    - [Max records](#max-records)
    - [Record count message](#record-count-message)
  - [Records per page](#records-per-page)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Usage

For the most minimal implementation, just pass in the total number of records:

```html
<ts-paginator totalRecords="100"></ts-paginator>
```

### Events

The paginator will emit the current page each time the page is changed or the records-per-page count is changed:

```html
<ts-paginator
  [totalRecords]="100"
  (recordsPerPageChange)="myChangeFunc($event)"
  (pageSelect)="mySelectFunc($event)"
></ts-paginator>
```

```typescript
mySelectFunc(v: TsPaginatorMenuItem) {
  // v:
  // {
  //   name: "1 - 10",
  //   value: 1,
  // }
}

myChangeFunc(v: number) {
  // v: 50
}
```


### Current page

Define the current active page by index:

```html
<ts-paginator
  [totalRecords]="100"
  [currentPageIndex]="2"
></ts-paginator>
```


### Zero or one based pagination

By default the paginator starts the pages array with a value of '0'. If your API starts it's
pagination at 1 (such as Rails) you can set `isZeroBased` to `false`:

```html
<!-- The first page will have the value: 1 -->
<ts-paginator
  [totalRecords]="100"
  [isZeroBased]="false"
></ts-paginator>

<!-- The first page will have the value: 0 -->
<ts-paginator
  [totalRecords]="100"
  [isZeroBased]="true"
></ts-paginator>
```

### Record count too high

The paginator will display a message if too many records are found. This is to encourage better filtering rather than
spending time paging through results.

#### Max records

By default, anything over `100` is considered too many records. To change this value, pass in a number to
`maxPreferredRecords`:

```html
<ts-paginator
  [totalRecords]="100"
  [maxPreferredRecords]="50"
></ts-paginator>
```

#### Record count message

A custom message may be defined:

```html
<ts-paginator
  [totalRecords]="100"
  recordCountTooHighMessage="What the heck are you looking for?"
></ts-paginator>
```

A custom message template can also be defined. This allows dynamic links to documentation, help, or a better set of
filters.

```html
<ts-paginator
  [totalRecords]="100"
  recordCountTooHighMessage="What the heck are you looking for?"
  [paginatorMessageTemplate]="myTemplate"
></ts-paginator>

<!--
  The message set on `recordCountTooHighMessage` will be exposed via the variable `message` in this
  example.
-->
<ng-template #myTemplate let-message>
  <a routerLink="/my/route">{{ message }}</a>
</ng-template>
```

### Records per page

Define the choices for how many records will be displayed on a single 'page':

```html
<ts-paginator
  [totalRecords]="100"
  [recordsPerPageChoices]="[100, 200, 500]"
></ts-paginator>
```

This menu can be removed if desired:

```html
<ts-paginator
  [totalRecords]="100"
  [showRecordsPerPageSelector]="false"
></ts-paginator>
```


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/master/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/master/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-paginator.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-paginator
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-paginator/bundles/terminus-ui-paginator.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-paginator/bundles/terminus-ui-paginator.umd.js
