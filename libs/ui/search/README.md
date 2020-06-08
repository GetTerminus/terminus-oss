<h1>Search</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Usage](#usage)
  - [Auto-submit](#auto-submit)
  - [Events](#events)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

```html
<ts-search
  inputHint="Enter at least 17 characters"
  inputLabel="Search for a tactic"
></ts-search>
```

### Auto-submit

When enabled, the submit button will not be shown and debounced queries will be emitted automatically.

```html
<ts-search [autoSubmit]="true"></ts-search>
```

### Events

```html
<ts-search (submitted)="myFunction($event)"></ts-search>
```

| Event       | Description                                                        | Payload            |
|:------------|:-------------------------------------------------------------------|:-------------------|
| `changed`   | Fired when the drawer expansion starts                             | `string`           |
| `cleared`   | Fired when the drawer collapse starts                              | `boolean`          |
| `submitted` | Fired when the search query is submitted manually or automatically | `TsSearchResponse` |


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/master/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/master/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-search.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-search
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-search/bundles/terminus-ui-search.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-search/bundles/terminus-ui-search.umd.js
