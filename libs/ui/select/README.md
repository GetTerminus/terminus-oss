<h1>Select :rotating_light: DEPRECATED :rotating_light:</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

---

> :rotating_light: NOTE: This component is deprecated. Please use the [Selection List Component][selection-list-src].

---

A custom select dropdown.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
  - [Packages that need to be installed](#packages-that-need-to-be-installed)
  - [Modules that need to be in NgModule](#modules-that-need-to-be-in-ngmodule)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Label](#label)
  - [Hint](#hint)
  - [No validation or hint](#no-validation-or-hint)
  - [FormControl](#formcontrol)
  - [ngModel](#ngmodel)
  - [Custom compare function](#custom-compare-function)
  - [Optgroups](#optgroups)
  - [Disabled](#disabled)
    - [Disable via Input](#disable-via-input)
    - [Disable via FormControl](#disable-via-formcontrol)
    - [Disabled Option](#disabled-option)
    - [Disabled Optgroup](#disabled-optgroup)
  - [Required](#required)
    - [Required by Input](#required-by-input)
    - [Required by FormControl](#required-by-formcontrol)
  - [Placeholder](#placeholder)
  - [Custom trigger value](#custom-trigger-value)
  - [Blank option](#blank-option)
  - [Option template](#option-template)
  - [Custom view value](#custom-view-value)
  - [Multiple selections](#multiple-selections)
  - [Custom delimiter](#custom-delimiter)
  - [Custom sort comparator](#custom-sort-comparator)
  - [Filterable](#filterable)
  - [Allow user to request update](#allow-user-to-request-update)
  - [Prompt the user to refine their search](#prompt-the-user-to-refine-their-search)
  - [Events](#events)
- [Test helpers](#test-helpers)

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
- `@terminus/ngx-tools`
- `@terminus/ui-checkbox`
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
ng add @terminus/ui-select
```

### Modules that need to be in NgModule

- `BrowserAnimationsModule,`
- `TsOptionModule,`
- `TsSelectModule,`
- `FormsModule,`
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

The most basic usage is by wrapping one or more `ts-option`s inside an `ts-select`:

```html
<!-- Define the option value by passing a property to the option's `value` input -->
<ts-select>
  <ts-option
    *ngFor="let item of items"
    [value]="item.value"
  >{{ item.name }}</ts-option>
</ts-select>
```

### Label

Define a label on the select:

```html
<ts-select label="My cool label!">
  ...
</ts-select>
```

### Hint

Define a hint on the select:

```html
<ts-select hint="Please select an option">
  ...
</ts-select>
```

### No validation or hint

A flag to define whether this select field needs validation or hint. If it needs validation or hint, a padding bottom is added for the message, otherwise, no padding at the bottom.

```html
<ts-select
  [formControl]="myCtrl"
  [noValidationOrHint]="true"
></ts-select>
```

### FormControl

To use a `FormControl` with the select, pass the control in:

```html
<ts-select [formControl]="myCtrl">
  ...
</ts-select>
```

### ngModel

To use `ngModel`, add the model to the select:

```html
<ts-select [(ngModel)]="myModel">
  ...
</ts-select>
```

### Custom compare function

If more refined control of how options are compared is needed, a custom comparator function can be used:

```html
<ts-select [compareWith]="compareByReference">
  ...
</ts-select>
```

```typescript
// Example comparing by reference:
compareByReference(f1: any, f2: any) { return f1 === f2; }

// Example comparing by value:
compareByValue(f1: any, f2: any) { return f1 && f2 && f1.text === f2.text; }
```

```typescript
TsOptionCompareWith = (o1: any, o2: any) => boolean;
```

### Optgroups

Optgroups can be used by wrapping one or more options inside an optgroup component:

```html
<ts-select>
  <ts-select-optgroup
    *ngFor="let group of itemsWithGroups"
    [label]="group.myLabel"
  >
    <ts-option
      *ngFor="let child of group.children"
      [value]="child.slug"
    >{{ child.foo }}</ts-option>
  </ts-select-optgroup>
</ts-select>
```

### Disabled

The entire select can be disabled in one of two ways:

#### Disable via Input

```html
<ts-select [isDisabled]="true">
  ...
</ts-select>
```

#### Disable via FormControl

```typescript
myCtrl = new FormControl({value: null, disabled: true});
```

```html
<ts-select [formControl]="myCtrl">
  ...
</ts-select>
```

#### Disabled Option

Individual options may also be disabled:

```html
<ts-select>
  <ts-option
    *ngFor="let option of options"
    [value]="option.value"
    [isDisabled]="option.disabled" <!-- Disabled when true -->
  >{{ option.name }}</ts-option>
</ts-select>
```

#### Disabled Optgroup

Entire optgroups can be disabled just like options. When an optgroup is disabled, all options that are children of that optgroup
are also disabled.

```html
<ts-select>
  <ts-select-optgroup
    *ngFor="let group of itemsWithGroups"
    [label]="group.myLabel"
    [isDisabled]="option.disabled" <!-- Disabled when true -->
  >
    <ts-option
      *ngFor="let child of group.children"
      [value]="child.slug"
    >{{ child.foo }}</ts-option>
  </ts-select-optgroup>
</ts-select>
```

### Required

The entire select can be marked required in one of two ways:

#### Required by Input

```html
<ts-select [isRequired]="true">
  ...
</ts-select>
```

#### Required by FormControl

```typescript
myCtrl = new FormControl(null, Validators.required);
```

```html
<ts-select [formControl]="myCtrl">
  ...
</ts-select>
```

### Placeholder

The placeholder is used for the trigger value when the control or model value is empty.

```html
<ts-select placeholder="Please make a selection.">
  ...
</ts-select>
```

### Custom trigger value

Custom HTML can be used for the trigger value by using the `ts-select-trigger` component. This trigger will be shown when the control or
model does have value.

```html
<ts-select>
  <!-- Here is my custom trigger! -->
  <ts-select-trigger>
    My custom trigger!
    With <strong>custom</strong> HTML!
  </ts-select-trigger>

  <ts-option
    [value]="option.value"
    *ngFor="let option of options"
  >{{ option.name }}</ts-option>
</ts-select>
```

### Blank option

A blank option can be implemented by adding a `ts-option` with no value:

```html
<ts-select [formControl]="myForm.get('myChoices1')">
  <ts-option>
    None
  </ts-option>

  <ts-option
    [value]="option.value"
    *ngFor="let option of options"
  >{{ option.name }}</ts-option>
</ts-select>
```

### Option template

A custom template can be used for the option content.

> NOTE: The option object *must* be passed into the option when using a custom template

```html
<ts-select>
  <ts-option
    *ngFor="let option of options"
    [value]="option.value"
    [option]="option"
  >
    <!-- The object you pass to the `option` input will be exposed as `option` in the template -->
    <ng-template let-option>
      <div class="myClass">
        <h4>{{ option.name }}</h4>
        <small>{{ option.value / 100 }}%</small>
      </div>
    </ng-template>
  </ts-option>
</ts-select>
```

### Custom view value

Part of the option view can be defined as the 'view value' which is used to define the `title` attribute for the option:

```html
<ts-select>
  <ts-option
    *ngFor="let option of options"
    [value]="option.value"
    [option]="option"
  >
    <ng-template let-option>
      <div class="myClass">
        <!-- The content of this h4 will be used for the option title -->
        <h4 tsOptionDisplay>{{ option.name }}</h4>
        <small>{{ option.value / 100 }}%</small>
      </div>
    </ng-template>
  </ts-option>
</ts-select>
```

### Multiple selections

Allow multiple selections via an `@Input`:

```html
<ts-select [allowMultiple]="true">
  ...
</ts-select>
```

This will show checkboxes next to each option and include a top-level 'Select All' toggle.

### Custom delimiter

The delimiter is used to separate multiple options when shown in the trigger. By default this is a comma (`,`). A custom delimiter may also
be set:

```html
<ts-select
  [allowMultiple]="true"
  delimiter="/"
>
  ...
</ts-select>
<!-- Standard output: `foo, bar, baz` -->
<!-- Output with custom delimiter: `foo/ bar/ baz` -->
```

### Custom sort comparator

By default, the selections will be stored in the order matching the order of items passed in. A custom sort comparator may be passed in
to alter the sort order.

```html
<ts-select [sortComparator]="myComparatorFn">
  ...
</ts-select>
```

The comparator function type is `TsSelectSortComparatorFunction` and has the following format:

```typescript
type TsSelectSortComparatorFunction = (
  a: TsOptionComponent,
  b: TsOptionComponent,
  options: TsOptionComponent[],
) => number;
```

### Filterable

A select can include an input at the top of the list to filter options:

```html
<ts-select
  [formControl]="myCtrl"
  [isFilterable]="true"
  (queryChange)="mySearchFunction($event)"
>
  ...
</ts-select>
```

Any unique, debounced query will be emitted through the `queryChange` emitter. The consumer is in control of what options are displayed. A
blank option can be used to show the user a message when no items are found by the query.

### Allow user to request update

There are times where the data may change after it is loaded. The `showRefresh` option allows the user to manually request updated data.

```html
<ts-select
  [formControl]="myCtrl"
  [showRefresh]="true"
  (optionsRefreshRequested)="userRequestedRefresh()"
>
  ...
</ts-select>
```

### Prompt the user to refine their search

For certain queries it is not always possible to return all options. In those cases, we should prompt the user to refine their search for
better results.

```html
<ts-select
  [formControl]="myCtrl"
  [showRefineSearchMessage]="true"
>
  ...
</ts-select>
```

This will show a message below all existing options:

```bash
Narrow your search to reveal hidden results.
```

If the `totalHiddenResults` input is defined, the count will be included in the message:

```html
<ts-select
  [formControl]="myCtrl"
  [showRefineSearchMessage]="true"
  [totalHiddenResults]="972"
>
  ...
</ts-select>
```

This will show a message below all existing options:

```bash
Narrow your search to reveal 972 hidden results.
```

### Events

Multiple events are fired during interaction with the select:

| Event                     | Description                                     | Payload              |
|:--------------------------|:------------------------------------------------|:---------------------|
| `closed`                  | Fired when the panel is closed                  | `undefined`          |
| `duplicateSelection`      | Fired when a duplicate selection is made        | `string`             |
| `opened`                  | Fired when the panel is open                    | `undefined`          |
| `optionDeselected`        | Fired when an option is deselected              | `TsSelectChange`     |
| `optionSelected`          | Fired when an option is selected                | `TsSelectChange`     |
| `optionsRefreshRequested` | Fired when the user selects the refresh trigger | `undefined`          |
| `queryChange`             | Fired when query changes                        | `string`             |
| `selectionChange`         | Fired when the selection changes                | `TsSelectChange`     |
| `valueChange`             | Fired when the selection value changes          | `string \| string[]` |

```html
<ts-select (selectionChange)="myFunction($event)">
  ...
</ts-select>
```

The `TsSelectChange` structure:

```typescript
class TsSelectChange {
  constructor(
    // Reference to the select that emitted the change event
    public source: TsSelectComponent,
    // The current value
    public value: any,
  ) {}
}

```

## Test helpers

Some helpers are exposed to assist with testing. These are imported from `@terminus/ui-select/testing`;

[[source]][test-helpers-src]

| Function                  |
|---------------------------|
| `getSelectInstance`       |
| `getSelectElement`        |
| `getSelectTriggerElement` |
| `getToggleAllElement`     |
| `getPanelElement`         |
| `getAllOptionInstances`   |
| `getOptionInstance`       |
| `getOptionElement`        |
| `getAllOptgroups`         |
| `getOptgroup`             |
| `getOptgroupElement`      |
| `getAllChipInstances`     |
| `getChipInstance`         |
| `getChipElement`          |
| `getFilterInputElement`   |


<!-- Links -->
[test-helpers-src]:    testing/src/test-helpers.ts
[selection-list-src]:  ../selection-list/
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-select.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-select
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-select/bundles/terminus-ui-select.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-select/bundles/terminus-ui-select.umd.js
