<h1>Popover</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

Popover component is designed to pop up simple or complex content based on a user trigger.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [popper.js](#popperjs)
  - [popper.js documentation](#popperjs-documentation)
- [Usage](#usage)
  - [Position](#position)
  - [Hide on blur](#hide-on-blur)
  - [Open on load](#open-on-load)
  - [Events](#events)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## popper.js

This popover component is built on top of a 3rd party library called [popper.js][popper].

`popper.js` can be installed by running: `yarn add popper.js`

### popper.js documentation

- [popper.js docs][popper-docs]
- [popper.js supported placements][popper-placements]


## Usage

Define a popover trigger and popover content:

```html
<button tsPopoverTrigger="myPopper">Click me!</button>

<ts-popover #myPopper>
  <h1>My Title</h1>
  <p>Any HTML can be placed here!</p>
</ts-popover>
```

### Position

Defines where the popover is positioned, relative to current element:

```html
<button 
  tsPopoverTrigger="myPopper"
  [position]="top"
>Click me!</button>

<ts-popover #myPopper>My popover</ts-popover>
```

The default is `bottom`. For all available positions, please see the [popper.js placement docs][popper-placements].

### Hide on blur

By default, the popover will be closed by clicking outside the popover. If this functionality is not desired, it can be
disabled:

```html
<button 
  tsPopoverTrigger="myPopper"
  [hideOnBlur]="false"
>Click me!</button>

<ts-popover #myPopper>
  My popover
</ts-popover>
```

It defaults to `true`.

### Open on load

The popover can be defined to open on load:

```html
<button 
  tsPopoverTrigger="myPopper"
  [defaultOpened]="true"
>Click me!</button>

<ts-popover #myPopper>My popover</ts-popover>
```

It defaults to `false`.

### Events

| Event             | Description                 | Payload         |
|:------------------|:----------------------------|:----------------|
| `popoverOnShown`  | Fired when popover shows up | popoverInstance |
| `popoverOnHidden` | Fired when popover hides    | popoverInstance |


<!-- Links -->
[popper]:              https://github.com/popperjs/popper.js
[popper-docs]:         https://github.com/popperjs/popper.js/blob/master/docs/_includes/popper-documentation.md
[popper-placements]:   https://github.com/FezVrasta/popper.js/blob/master/packages/popper/src/methods/placements.js
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/master/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/master/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-popover.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-popover
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-popover/bundles/terminus-ui-popover.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-popover/bundles/terminus-ui-popover.umd.js
