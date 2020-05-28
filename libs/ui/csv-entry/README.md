<h1>CSV Entry</h1>

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
  - [Column count](#column-count)
  - [Row count](#row-count)
  - [Max rows](#max-rows)
  - [Column validation](#column-validation)
  - [Static column headers](#static-column-headers)
  - [Full width table](#full-width-table)
  - [Custom footer content](#custom-footer-content)
  - [Footer direction](#footer-direction)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Usage

The most basic implementation only needs the HTML and a single method. Each time the CSV table is updated, a new File
Blob is generated and emitted:

```html
<ts-csv-entry (blobGenerated)="myFunc($event)"></ts-csv-entry>
```

```typescript
myFunc(blob: Blob) { ... }
```


### Column count

Define the number of columns (default is 2):

```html
<ts-csv-entry [columnCount]="7">
  <!-- Will generate a csv entry with 7 columns -->
</ts-csv-entry>
```

> NOTE: Column count does not restrict how many columns can be pasted into the table.


### Row count

Define the number of rows (default is 4):

```html
<ts-csv-entry [rowCount]="5">
  <!-- Will generate a csv entry with 5 rows -->
</ts-csv-entry>
```

> NOTE: Row count does not restrict how may rows can be pasted into the table.


### Max rows

Define the maximum number of rows a table will allow (default is 2000):

```html
<ts-csv-entry [maxRows]="100"></ts-csv-entry>
```

If the user attempts to paste or manually add more rows than are allowed, a validation message will appear below the table.


### Column validation

> NOTE: Currently, custom validation messaging is only supported for the URL validator. More will be added as needs arise.

Pass in an array of validators matching the column count.

```typescript
myValidators = [null, this.validatorsService.url(), null, null];
```

```html
<ts-csv-entry [columnCount]="4" [columnValidators]="myValidators"></ts-csv-entry>
```

This example would add the URL validation to the second column only.


### Static column headers

If there are certain headers that must be available, these can be set via an input:

```html
<ts-csv-entry [columnHeaders]="['Header One', 'Header Two']">
</ts-csv-entry>
```

Setting static column headers will set the header cells to `readonly`. This will still allow keyboard navigation but will not allow the user
to change the contents of the set header cells.

### Full width table

If the table should be a single, full-width column, set both `columnCount` and `fullWidth`:

```html
<ts-csv-entry [columnCount]="1" [fullWidth]="true"></ts-csv-entry>
```
> NOTE: full width should only be used with a single column

### Custom footer content

Consumer's can add custom footer content by enclosing it within the CSV entry component:

```html
<ts-csv-entry>
  <button>My custom footer button!</button>
</ts-csv-entry>
```

This content will be added opposite the default footer buttons set.


### Footer direction

The footer layout defaults to `ltr` mode which lays out the default buttons on the left and any custom content on the
right. This can be reversed:

```html
<ts-csv-entry footerDirection="rtl"></ts-csv-entry>
```

Allowed directions are: `ltr`, `rtl`.


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/master/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/master/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-csv-entry.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-csv-entry
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/CI%20Release/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-csv-entry/bundles/terminus-ui-csv-entry.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-csv-entry/bundles/terminus-ui-csv-entry.umd.js
