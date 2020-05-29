<h1>Scrollbars</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Usage](#usage)
  - [Disable](#disable)
  - [Update](#update)
  - [Manual Position Control](#manual-position-control)
    - [Scroll to fixed location](#scroll-to-fixed-location)
    - [Scroll to x/y location](#scroll-to-xy-location)
    - [Scroll to element](#scroll-to-element)
  - [Events](#events)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

You _must_ set a fixed height and/or width to enable scrollbars (otherwise the browser will just continue making the container larger to fit
the content).

```html
<ts-scrollbars style="height: 300px; width: 400px;">
  ...
</ts-scrollbars>
```


### Disable

The scrollbars can be disabled dynamically if needed:

```html
<ts-scrollbars [isDisabled]="true">
  ...
</ts-scrollbars>
```


### Update

If the scrollbars content is dynamically updated, you will need to update the scrollbars instance:

```html
<!-- Get a reference to the component class -->
<ts-scrollbars #scrollbars="tsScrollbars">
  ...
</ts-scrollbars>
```

```typescript
...

@ViewChild(TsScrollbarsComponent, {static: false})
public scrollbars!: TsScrollbarsComponent;

myUpdate() {
  // Update the content
  this.updateScrollContent();

  // Update the scrollbars
  this.scrollbars.update();
}
```

### Manual Position Control

Scrolling methods can be called directly once a reference to the component is attained:

```html
<!-- Get a reference to the component class -->
<ts-scrollbars #scrollbars="tsScrollbars">
  ...
</ts-scrollbars>
```

```typescript
...
// A reference to the component instance:
@ViewChild(TsScrollbarsComponent, {static: false})
public scrollbars!: TsScrollbarsComponent;
...
```

The following scroll examples will assume that a reference has already been created.

#### Scroll to fixed location

```typescript
@ViewChild(TsScrollbarsComponent, {static: false})
public scrollbars!: TsScrollbarsComponent;

scrollToTop() {
  // Scroll the container to the very top
  this.scrollbars.scrollToTop();
}
```

Available fixed location methods:

| Method             |
|--------------------|
| `scrollToBottom()` |
| `scrollToLeft()`   |
| `scrollToRight()`  |
| `scrollToTop()`    |


#### Scroll to x/y location

Scroll the container to a specific x/y location:

```typescript
@ViewChild(TsScrollbarsComponent, {static: false})
public scrollbars!: TsScrollbarsComponent;

scrollToCoordinates() {
  //                       x    y    speed
  this.scrollbars.scrollTo(100, 250, 200);
}
```


#### Scroll to element

The component can scroll a nested element to the top of the scroll container:

```typescript
@ViewChild(TsScrollbarsComponent, {static: false})
public scrollbars!: TsScrollbarsComponent;

scrollToElement() {
  // This supports any string that can be passed to `querySelector()`
  this.scrollbars.scrollToElement('.my-class');
}
```


### Events

```html
<ts-scrollbars (scrollDown)="myFunc($event)">
  ...
</ts-scrollbars>
```

| Available events |
|------------------|
| `scrollDown`     |
| `scrollLeft`     |
| `scrollRight`    |
| `scrollUp`       |
| `scrollX`        |
| `scrollY`        |
| `xReachEnd`      |
| `xReachStart`    |
| `yReachEnd`      |
| `yReachStart`    |


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/master/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/master/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-scrollbars.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-scrollbars
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/CI%20Release/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-scrollbars/bundles/terminus-ui-scrollbars.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-scrollbars/bundles/terminus-ui-scrollbars.umd.js
