<h1>Sort</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Usage](#usage)
  - [Adding sort to table headers](#adding-sort-to-table-headers)
  - [Changing the sort order](#changing-the-sort-order)
  - [Disabling sorting](#disabling-sorting)
  - [Using sort with the `ts-table`](#using-sort-with-the-ts-table)
  - [Accessibility](#accessibility)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

### Adding sort to table headers

To add sorting behavior and styling to a set of table headers, add `ts-sort-header` to each header
and provide an id that will identify it. These headers should be contained within a parent element
with the `tsSort` directive, which will emit a `sortChange` event when the user triggers sorting
on the header.

Users can trigger the sort header through a mouse click or keyboard action. When this happens, the
`tsSort` will emit an `sortChange` event that contains the ID of the header triggered and the
direction to sort (`asc` or `desc`).


### Changing the sort order

By default, a sort header starts its sorting at `asc` and then `desc`. Triggering the sort header
after `desc` will remove sorting.

To reverse the sort order for all headers, set the `tsSortStart` to `desc` on the `tsSort`
directive. To reverse the order only for a specific header, set the start input only on the header
instead.

To prevent the user from clearing the sort sort state from an already sorted column, set
`tsSortDisableClear` to true on the `tsSort` to affect all headers, or set `disableClear` to true on
a specific header.


### Disabling sorting

If you want to prevent the user from changing the sorting order of any column, you can use the
`tsSortDisabled` binding on the `ts-sort`, or the `disabled` on an single `ts-sort-header`.


### Using sort with the `ts-table`

When used on an `ts-table` header, it is not required to set an `ts-sort-header` id on because by
default it will use the id of the column.


### Accessibility

The `aria-label` for the sort button can be set in `TsSortHeaderIntl`.


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/master/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/master/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-sort.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-sort
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-sort/bundles/terminus-ui-sort.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-sort/bundles/terminus-ui-sort.umd.js
