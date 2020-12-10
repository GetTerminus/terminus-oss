<h1>Info Carousel</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Label](#label)
  - [Panels](#panels)
    - [Nested components](#nested-components)
    - [Styles](#styles)
  - [Active panel](#active-panel)
  - [Paginator item title](#paginator-item-title)
  - [Events](#events)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-info-carousel
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

Full example:

```html
<ts-info-carousel
  [paginatorItemTitle]="paginatorItemTitle"
  (activePanelIndexChange)="panelChange($event)"
>
  <h4 tsInfoCarouselTitle><span class="fas fa-bolt"></span> My title!</h4>

  <ng-container *ngFor="let panel of panels">
    <ng-container *tsInfoCarouselPanel>
      <h4 class="ts-info-carousel__item-title">{{ panel.title }}</h4>
      <div class="ts-info-carousel__item-content" [innerHTML]="panel.content"></div>
    </ng-container>
  </ng-container>
</ts-info-carousel>
```

### Label

Define the label element by adding the `tsInfoCarouselTitle` directive to any DOM element:

```html
<ts-info-carousel>
  <h4 tsInfoCarouselTitle><span class="fas fa-bolt"></span> My title!</h4>
  ...
</ts-info-carousel>
```

### Panels

Define the carousel panels by adding the `tsInfoCarouselPanel` directive to an `<ng-container>`:

```typescript
const panels = [
  {
    title: 'Title one',
    content: `Panel content with <a href="#">a link</a>.`,
  },
  {
    title: 'Title two',
    content: `Second panel content.`,
  },
];
```

```html
<ts-info-carousel>
  <ng-container *ngFor="let panel of panels">
    <ng-container *tsInfoCarouselPanel>
      <h4 class="ts-info-carousel__item-title">{{ panel.title }}</h4>
      <div class="ts-info-carousel__item-content" [innerHTML]="panel.content"></div>
    </ng-container>
  </ng-container>
</ts-info-carousel>
```

> NOTE: This method does not work if Angular components are passed in (see next section for solution):

```typescript
const panels = [
  {
    title: 'Title one',
    content: `Panel content with <ts-link>custom link</ts-link>.`,
  },
];
```

#### Nested components

If custom components are needed inside a panel, we cannot rely on `innerHTML`:

```html
<ts-info-carousel>
  <ng-container *tsInfoCarouselPanel>
    <h4 class="ts-info-carousel__item-title">Title One</h4>
    <div class="ts-info-carousel__item-content">My content with a ts-button: <ts-button>My button</ts-button></div>
  </ng-container>

  <ng-container *tsInfoCarouselPanel>
    <h4 class="ts-info-carousel__item-title">Title Two</h4>
    <div class="ts-info-carousel__item-content">Content with a ts-link: <ts-link [destination]="['foo', 'bar']">My link</ts-link></div>
  </ng-container>
</ts-info-carousel>
```

#### Styles

Classes are provided to style panel content:

|              Class               |                  Purpose                  |
|----------------------------------|-------------------------------------------|
| `ts-info-carousel__item-title`   | Apply default styles to the panel title   |
| `ts-info-carousel__item-content` | Apply default styles to the panel content |

```html
<ng-container *tsInfoCarouselPanel>
  <h4 class="ts-info-carousel__item-title">Title Two</h4>
  <div class="ts-info-carousel__item-content">Content with a ts-link: <ts-link [destination]="['foo', 'bar']">My link</ts-link></div>
</ng-container>
```

If the carousel is on a background color other than our default base white, update the custom CSS property:

```css
.my-wrapper {
  --ts-info-carousel-backgroundColor: #bada55;
}
```

The label color can also be adjusted this way:

```css
.my-wrapper {
  --ts-info-carousel-label-color: #bada55;
}
```

### Active panel

The active panel can be programmatically set:

```html
<ts-info-carousel activePanelIndex="2">
  ...
</ts-info-carousel>
```

### Paginator item title

The item title can be set for the paginator summary:

```html
<!-- This will render `1 of 3 Tips` as the paginator summary -->
<ts-info-carousel paginatorItemTitle="Tips">
  ...
</ts-info-carousel>
```

### Events

The current active panel index is emitted when it changes:

```html
<ts-info-carousel (activePanelIndexChange)="myChangeEvent($event)">
  ...
</ts-info-carousel>
```

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-info-carousel.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-info-carousel
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-info-carousel/bundles/terminus-ui-info-carousel.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-checkbox/bundles/terminus-ui-info-carousel.umd.js
