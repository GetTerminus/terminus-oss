<h1>Selection List</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [Packages that need to be installed](#packages-that-need-to-be-installed)
  - [Modules that need to be in NgModule](#modules-that-need-to-be-in-ngmodule)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Duplicate selections](#duplicate-selections)
  - [Keeping the panel open](#keeping-the-panel-open)
  - [Debouncing queries](#debouncing-queries)
  - [Minimum characters](#minimum-characters)
  - [Formatting](#formatting)
  - [Complex comparator](#complex-comparator)
  - [Standard dropdown mode (no typing)](#standard-dropdown-mode-no-typing)
  - [noValidationOrHint](#novalidationorhint)
  - [Events](#events)
- [Test Helpers](#test-helpers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

### Packages that need to be installed

- `@angular/cdk`
- `@angular/common`
- `@angular/core`
- `@angular/flex-layout`
- `@angular/forms`
- `@angular/material`
- `@angular/platform-browser`
- `@terminus/design-tokens`
- `@terminus/fe-utilities`
- `@terminus/ui-checkbox`
- `@terminus/ui-chip`
- `@terminus/ui-form-field`
- `@terminus/ui-icon`
- `@terminus/ui-input`
- `@terminus/ui-option`
- `@terminus/ui-pipes`
- `@terminus/ui-validators`
- `@terminus/ui-spacing`
- `@terminus/ui-styles`
- `@terminus/ui-validation-messages`
- `@terminus/ui-utilities`
- `@terminus/ui-select`
- `date-fns`
- `text-mask-addons`
- `text-mask-core`

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-selection-list
```

### Modules that need to be in NgModule

- `BrowserAnimationsModule`
- `TsOptionModule`
- `TsSelectModule`
- `FormsModule`
- `ReactiveFormsModule`

### CSS imports

In your top level stylesheet, add these imports:

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

Pass a collection of `ts-option` components inside the `selection-list`:

```html
<ts-selection-list [formControl]="myCtrl">
 <ts-option
    *ngFor="let state of states | async"
    [value]="state"
    [option]="state"
  >
    {{ state.name }}
  </ts-option>
</ts-selection-list>
```

### Duplicate selections

By default, duplicate selections are ignored. They can be allowed via a flag:

```html
<ts-selection-list
  [formControl]="myCtrl"
  [allowMultiple]="true"
  [allowDuplicateSelections]="true"
>
  ...
</ts-selection-list>
```

### Keeping the panel open

By default, the panel will close after each selection. It can be forced to stay open via a flag.

> NOTE: While the panel seems to stay open, it is actually closing and reopening immediately. That is why the `@Input` is named
`reopenAfterSelection`

```html
<ts-selection-list
  [formControl]="myCtrl"
  [allowMultiple]="true"
  [reopenAfterSelection]="true"
>
  ...
</ts-selection-list>
```

### Debouncing queries

By default, the input query will be debounced 200ms. This time may be adjusted as needed:

```html
<ts-selection-list
  [formControl]="myCtrl"
  [debounceDelay]="400"
>
  ...
</ts-selection-list>
```

### Minimum characters

By default, at least two characters must be typed before the query is fired. This limit may be adjusted:

```html
<ts-selection-list
  [formControl]="myCtrl"
  [minimumCharacters]="4"
>
  ...
</ts-selection-list>
```

### Formatting

For complex object support, a formatter function may be passed in to define the view value:

```html
<ts-selection-list
  [formControl]="myCtrl"
  [displayFormatter]="formatDisplay"
>
  ...
</ts-selection-list>
```

```typescript
import { TsSelectionListFormatter } from '@terminus/ui-selection-list';

public formatDisplay: TsSelectionListFormatter = v => v.name;
```

### Complex comparator

To compare custom objects, a compare function may be passed in:

```html
<ts-selection-list
  [formControl]="myCtrl"
  [valueComparator]="myCompareFunction"
>
  ...
</ts-selection-list>
```

```typescript
import { TsSelectionListComparator } from '@terminus/ui-selection-list';

public myCompareFunction: TsSelectionListComparator = (a, b) => a.id === b.id;
```

### Standard dropdown mode (no typing)

If the component should act as a standard dropdown with no ability to type a query, set the flag `allowUserInput` to
`false`. By default it is `true`.

```html
<ts-selection-list
  [formControl]="myCtrl"
  [allowUserInput]="false"
>
  ...
</ts-selection-list>
```

### noValidationOrHint

A flag to define whether this selectionlist field needs validation or hint. If it needs validation or hint, a padding bottom is added for the message, otherwise, no padding at the bottom.

```html
<ts-selection-list
  [formControl]="myCtrl"
  [noValidationOrHint]="true"
></ts-selection-list>
```

### Events

| Event                | Description                                | Payload                 |
|:---------------------|:-------------------------------------------|:------------------------|
| `backdropClicked`    | Fired when the overlay backdrop is clicked | `void`                  |
| `closed`             | Fired when the panel is closed             | `void`                  |
| `duplicateSelection` | Fired when a duplicate selection is made   | `TsSelectionListChange` |
| `opened`             | Fired when the panel is opened             | `void`                  |
| `optionSelected`     | Fired when an option is selected           | `TsSelectionListChange` |
| `optionDeselected`   | Fired when an option is deselected         | `TsSelectionListChange` |
| `queryChange`        | Fired when the search query changes        | `string`                |
| `selectionChange`    | Fired when the selected tab changes        | `TsSelectionListChange` |

```html
<ts-selection-list (selectionChange)="whenSelectionChanges($event)">
  ...
</ts-selection-list>
```

The `TsSelectionListChange` structure:

```typescript
class TsSelectionListChange<T = unknown> {
  constructor(
    // The associated selection list instance
    public source: TsSelectionListComponent,
    // The value
    public value: T,
  ) {}
}
```

## Test Helpers

Some helpers are exposed to assist with testing. These are imported from `@terminus/ui-selection-list/testing`;

[[source]][test-helpers-src]

| Function                           |
|------------------------------------|
| `getSelectionListDebugElement`     |
| `getSelectionListInput`            |
| `getAllSelectionListDebugElements` |
| `getAllSelectionListInstances`     |
| `getSelectionListInstance`         |
| `getSelectionListElement`          |
| `getSelectionListTriggerElement`   |
| `getAllOptionInstances`            |
| `getOptionInstance`                |
| `getOptionElement`                 |
| `getAllOptgroups`                  |
| `getOptgroup`                      |
| `getOptgroupElement`               |

<!-- Links -->
[test-helpers-src]:    testing/src/test-helpers.ts
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-selection-list.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-selection-list
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-selection-list/bundles/terminus-ui-selection-list.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-selection-list/bundles/terminus-ui-selection-list.umd.js
