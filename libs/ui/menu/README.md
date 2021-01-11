<h1>Menu</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Option styles](#option-styles)
    - [Style overrides](#style-overrides)
    - [Layout styles](#layout-styles)
  - [Checkbox menu](#checkbox-menu)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-menu
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

```html
<!-- Define the menu component. This will be the trigger to open the menu -->
<ts-menu [menuItemsTemplate]="myTemplate">Select Item</ts-menu>

<!-- Define a template for the dropdown panel and pass it to `[menuItemsTemplate]` above -->
<ng-template #myTemplate>
  <ts-button (clicked)="customItemSelected('yep')">Roger, Roger.</ts-button>

  <ts-link [destination]="'foo/'">
    A tasty link
  </ts-link>
</ng-template>
```

This allows all selection functionality to be handled by the consuming application rather than being
proxied through event emitters.

> NOTE: `<ts-link>` and `<ts-button>` will be styled the same within a menu.

### Option styles

By default, no styles are added to the options that appear in the menu. This allows other elements to be easily nested.

A directive is exposed to help with styling menu items.

#### Style overrides

Adding the directive `tsMenuItem` to a `TsButtonComponent`, `TsLinkComponent`, or `TsCheckboxComponent` will overwrite
the styles, so they will appear like standard list items:

```html
<ts-menu [menuItemsTemplate]="myTemplate">Select Item</ts-menu>

<ng-template #myTemplate>
  <ts-button tsMenuItem>Roger, Roger.</ts-button>
  <ts-link tsMenuItem>A tasty link</ts-link>
</ng-template>
```

#### Layout styles

To only add layout styles, define the directive with the `transparent` parameter:

```html
<ts-menu [menuItemsTemplate]="myTemplate">Select Item</ts-menu>

<ng-template #myTemplate>
  <ts-button tsMenuItem="transparent">Roger, Roger.</ts-button>
  <ts-link tsMenuItem="transparent">A tasty link</ts-link>
</ng-template>
```

### Checkbox menu

> This is very similar to the basic usage example, with a few small, key differences.

Create the form and array of possible options:

```typescript
// The list of column names to show in the UI
columns = [
  'Title',
  'Account',
  'Budget',
  'Enabled',
];
// We are creating a form array with 4 controls all defaulted to 'true'
myForm = this.formBuilder.group({
  showColumns: this.formBuilder.array([true, true, true, true]),
});
```

Create the menu trigger, and the dropdown contents:

```html
<!-- Define the menu component. This will be the trigger to open the menu -->
<ts-menu [menuItemsTemplate]="myTemplate">Select Item</ts-menu>

<!-- Define a template for the dropdown panel and pass it to `[menuItemsTemplate]` above -->
<ng-template #myTemplate>
  <form [formGroup]="myForm">
    <!-- Loop through the array of form controls -->
    <ng-container *ngFor="let control of myForm.controls['showColumns'].controls; let i = index">
      <!-- The menu normally closes after each interaction, so we need to stop propagation here to
      support multiple selections while open -->
      <!-- Also, add the tsMenuItem directive for style overrides -->
      <ts-checkbox [formControl]="control" (click)="$event.stopPropagation()" tsMenuItem>
        <!-- Use the index from the loop to get the appropriate UI text from our array -->
        {{ columns[i] }}
      </ts-checkbox>
    </ng-container>
  </form>
</ng-template>
```

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-menu.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-menu
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-menu/bundles/terminus-ui-menu.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-menu/bundles/terminus-ui-menu.umd.js
