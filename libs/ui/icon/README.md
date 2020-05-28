<h1>Icons</h1>

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
  - [Theming](#theming)
  - [Background](#background)
  - [Style with CSS](#style-with-css)
  - [Usage inline with text](#usage-inline-with-text)
  - [Custom Icons](#custom-icons)
    - [Special Cases](#special-cases)
    - [Available](#available)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Usage

Include any valid Material icon name inside the component:

```html
<ts-icon>home</ts-icon>
```

If the icon name consists of multiple words, use underscores between the words:

```html
<ts-icon>open_in_new</ts-icon>
```

> See all valid icon possibilities: https://material.io/icons


### Theming

Icons support the same themes as the rest of the components:

```html
<ts-icon theme="warn"></ts-icon>
```

Search for `TsStyleThemeTypes` to see all allowed types.


### Background

Icons can be shown white with a colored background (color is determined by theme) by setting `background` to true.

```html
<ts-icon [background]="true"></ts-icon>
```


### Style with CSS

To style with CSS, simply target the `fill` inside the `ts-icon` class:

```scss
.myClass {
  .ts-icon {
    fill: color(accent);
  }
}
```


### Usage inline with text

To size and space the icons correctly for use within a block of text:

```html
<ts-icon [inline]="true"></ts-icon>
```

### Custom Icons

Custom icons are accessed via a `ts-icon` `@Input`:


```html
<!-- Access standard icon -->
<ts-icon>home</ts-icon>

<!-- Access custom icon -->
<ts-icon svgIcon="csv"></ts-icon>
```

#### Special Cases

Any icon with a -color suffix will not accept themes. Currently they accept a background, but the display might be
problematic and background should be used with extreme caution. A non "-color" version should be used instead.


#### Available

|               Name | Description                                             | Example Usage                    |
|-------------------:|:--------------------------------------------------------|:---------------------------------|
|              `csv` | A file with the text 'CSV'                              | Upload a CSV                     |
|           `engage` | A right-pointing arrow stacked on a left-pointing arrow | Navigation for Engage product    |
|        `lightbulb` | A lightbulb                                             | Pro-tip box                      |
|             `logo` | Terminus logo, default is black, but accepts theme      | Logo, negative logo              |
|       `logo_color` | Terminus logo in correct colors, does not accept theme  | Logo like it is supposed to look |
| `table_large_plus` | A table icon with a plus sign                           | Editing table columns            |


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/master/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/master/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-icon.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-icon
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/CI%20Release/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-icon/bundles/terminus-ui-icon.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-icon/bundles/terminus-ui-icon.umd.js
