<h1>Menu</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Usage](#usage)
  - [Checkbox menu](#checkbox-menu)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


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

Create the menu trigger and the dropdown contents:

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
      <ts-checkbox [formControl]="control" (click)="$event.stopPropagation()">
        <!-- Use the index from the loop to get the appropriate UI text from our array -->
        {{ columns[i] }}
      </ts-checkbox>
    </ng-container>
  </form>
</ng-template>
```
 
 
<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/master/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/master/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-menu.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-menu
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/CI%20Release/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-menu/bundles/terminus-ui-menu.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-menu/bundles/terminus-ui-menu.umd.js
