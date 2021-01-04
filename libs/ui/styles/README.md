<h1>Styles</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-css]

A collection of base CSS for the UI library and a collection of SCSS mixins and functions.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Usage](#usage)
  - [Base CSS](#base-css)
  - [Mixins, variables & functions](#mixins-variables--functions)
- [SCSS helpers](#scss-helpers)
  - [Breakpoints](#breakpoints)
    - [Available breakpoints](#available-breakpoints)
  - [Controls](#controls)
    - [Input placeholder](#input-placeholder)
  - [Layout](#layout)
    - [Flexbox](#flexbox)
    - [Grid](#grid)
    - [Opposite direction](#opposite-direction)
    - [Responsive ratio](#responsive-ratio)
    - [Take space](#take-space)
  - [Scrollbars](#scrollbars)
    - [Visible scrollbars](#visible-scrollbars)
    - [Hidden scrollbars](#hidden-scrollbars)
  - [Shapes](#shapes)
    - [Triangle](#triangle)
  - [Spacing](#spacing)
  - [Typography](#typography)
    - [Typography styles](#typography-styles)
    - [Truncate overflow](#truncate-overflow)
  - [z-index](#z-index)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

NOTE: Many styles are now driven by our design tokens. See [available tokens here][tokens].

### Base CSS

Import base CSS and theme styles in the root stylesheet:

```scss
@import '~@terminus/ui-styles/terminus-ui.css';
```

### Mixins, variables & functions

Import helper mixins in any SCSS file that needs access:

```scss
@import '~@terminus/ui-styles/helpers';

.example {
  @include take-space;
}
```

## SCSS helpers

### Breakpoints

Predefined breakpoints for a responsive layout. We should be building 'mobile first' so the available breakpoints are
designed from smallest to largest.

```scss
.foo {
  width: 100%;
  
  @include bp(layout-gt-sm) {
    width: 30%;

    &:not(:last-of-type) {
      margin-right: 2%;
    }
  }
}
```

#### Available breakpoints

- `layout-xs`
- `layout-gt-xs`
- `layout-sm`
- `layout-gt-sm`
- `layout-med`
- `layout-gt-med`
- `layout-lg`
- `layout-gt-lg`
- `layout-xl`

### Controls

#### Input placeholder

Easily style the placeholder for an input:

```scss
input {
  @include input-placeholder {
    color: red;
  }
}
```

### Layout

#### Flexbox

##### `flex-container`

Parameters and their defaults:

```scss
flex-container($direction: row, $wrap: nowrap, $mainAxis: normal, $crossAxis: normal)
```

Example usage:

```scss
.foo {
  @include flex-container($direction: row-reverse, $crossAxisAlign: center);
}

.bar {
  @include flex-container(row, nowrap, flex-start, center);
}
```

##### `flex-item`

Parameters and their defaults:

```scss
flex-item($flexGrow: 0, $flexShrink: 1, $flexBasis: auto, $order: 0, $alignSelf: auto)
```

Example usage:

```scss
.foo {
  @include flex-item($flexGrow: 1, $flexBasis: 50%, $alignSelf: baseline);
}

.bar {
  @include flex-item(1, 1, 100%);
}
```

##### `center-content`

Example usage:

```scss
// Children of `.foo` will be verticaly and horizontally centered:
.foo {
  @include center-content;
}
```

#### Grid

##### `grid-container`

Parameters and their defaults:

```scss
grid-container($columns: null, $rows: auto, $gap: 1em)
```

Example usage:

```scss
.foo {
  @include grid-container(150px auto 150px, repeat(3, 100px));
}

.bar {
  @include grid-container(repeat(5, 6vw), repeat(5, 6vw));
}
```

##### `grid-column`

Parameters and their defaults:

```scss
grid-column($start: null, $end: null)
```

Example usage:

```scss
.foo {
  @include grid-column(1, 4);
}

.bar {
  @include grid-column(1, span 3);
}

.baz {
  @include grid-column;
}
```

#### Opposite direction

Return the opposite direction.

```scss
.foo {
  $direction: bottom;

  @if $direction == bottom {
    top: 100%;
  }

  // Will output: `border-top: 4px solid black;`
  border-#{opposite-direction($direction)}: 4px solid black;
}
```

#### Responsive ratio

Parameters and their defaults:

```scss
responsive-ratio($x, $y, $pseudo: true, $image: null)
```

Example usage:

```scss
.foo {
  @include responsive-ratio(3, 4);
}

.bar {
  @include responsive-ratio(20, 9, true, url('/images/landing-hero.jpg'));
}
```

#### Take space

Parameters and their defaults:

```scss
take-space($margin: 0)
```

Example usage:

```scss
// .inner will completely fill the space inside .outer
.outer {
  position: relative;
  .inner {
    @include take-space;
  }
}

// .inner will fill the space inside .outer leaving a 1em space around itself
.outer {
  position: relative;
  .inner {
    @include take-space(1em);
  }
}
```

### Scrollbars

#### Visible scrollbars

Set the style to make the scrollbars always visible:

```scss
.container {
  @include visible-scrollbars;
}

.container-2 {
  @include visible-scrollbars(red);
}
```

#### Hidden scrollbars

Set the style to make the scrollbars always hidden:

```scss
.container {
  @include hidden-scrollbars;
}
```

### Shapes

#### Triangle

Create a triangle element. Useful for tooltips etc.

Parameters and their defaults:

```scss
triangle($direction: top, $color: currentcolor, $size: 1em)
```

```scss
input {
  @include triangle(top);
}
```

### Spacing

> NOTE: We should be migrating to rely on design tokens for spacing rather than this mixin.

```scss
ul {
  margin-bottom: spacing;

  li {
    margin-bottom: spacing(large, 2);
  }
}
```

### Typography

#### Typography styles

A mixin to assist setting font styles.

> NOTE: We are transitioning our typography styles to be set through design tokens in place of this mixin.

```scss
.foo {
  @include typography;
}

.bar {
  @include typography(display, 2, monospaced);
}
```

#### Truncate overflow

Truncate text and show an ellipsis.

```scss
.foo {
  @include truncate-overflow;
}
```

### z-index

We manage our z-index' through a Sass list. This allows infinite scalability without relying on large numbers.

```scss
.foo {
  @include z(drawer);
}

.bar {
  @include z(global-header);
}
```

<!-- Links -->
[tokens]:               ../../design-tokens/
[license-url]:          https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:        http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:      https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:        https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:    http://img.shields.io/npm/v/@terminus/ui-styles.svg
[npm-package]:          https://www.npmjs.com/package/@terminus/ui-styles
[github-action-badge]:  https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:   https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:      http://img.badgesize.io/https://unpkg.com/@terminus/ui-styles/terminus-ui.css?compression=gzip
[raw-distribution-css]: https://unpkg.com/@terminus/ui-styles/terminus-ui.css
