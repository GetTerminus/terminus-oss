<h1>Date Range</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Usage](#usage)
  - [Event driven](#event-driven)
  - [Date range boundaries](#date-range-boundaries)
  - [Disabling](#disabling)
    - [Disable a control](#disable-a-control)
    - [Disable the component](#disable-the-component)
- [Test Helpers](#test-helpers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Usage

Pass in the form control:

```html
<form [formGroup]="myForm" novalidate>
  <ts-date-range [dateFormGroup]="myForm.get('dateRange')"></ts-date-range>

  <button (click)="submit(myForm.value)">Submit</button>
</form>
```

```typescript
myForm: FormGroup = this.formBuilder.group({
  // Showing a nested example since usually a date range would be nested in a group
  dateRange: this.formBuilder.group({
    startDate: [ // This control MUST be named `startDate`
      new Date(2017, 4, 6),
    ],
    endDate: [ // This MUST be named `endDate`
      new Date(2017, 4, 8),
    ],
  }),
});
```

**NOTE:** The keys inside the `formGroup` passed to the `dateFormGroup` input must be named
`startDate` and `endDate`. (see example directly above)

**NOTE:** If using a form with nested form groups, _each group_ must be created with
`formBuilder.group` for the form `get` control to work:

```typescript
// Notice the nested `dateRange` object without using `.group`
myForm: FormGroup = this.formBuilder.group({
  dateRange: {
    startDate: [
      new Date(2017, 4, 6),
    ],
    endDate: [
      new Date(2017, 4, 8),
    ],
  },
});

// THIS WILL FAIL!
const range = myForm.get('dateRange');

//////////////////////////////////////////////////

// Notice the nested `dateRange` object IS using `.group`
myForm: FormGroup = this.formBuilder.group({
  dateRange: this.formBuilder.group({
    startDate: [
      new Date(2017, 4, 6),
      [
        Validators.required,
      ],
    ],
    endDate: [
      new Date(2017, 4, 8),
      [
        Validators.required,
      ],
    ],
  }),
});

// Now there is a group for us to 'get'
const range = myForm.get('dateRange');
```


### Event driven

There are three selection events that you can tie into:

```html
<ts-date-range
  (startSelected)="myMethod($event)"
  (endSelected)="myMethod($event)"
  (dateRangeChange)="myMethod($event)"
></ts-date-range>
```

1. `startSelected` is fired when a start date is selected.
1. `endSelected` is fired when an end date is selected.
1. `dateRangeChange` is fired when the date range changes.


### Date range boundaries

To define bounds for date selection, pass in a valid `Date` to each of these `@Inputs`:

1. `endMaxDate`
1. `endMinDate`
1. `startMaxDate`
1. `startMinDate`

```html
<ts-date-range
  [startMinDate]="startDate1"
  [startMaxDate]="startDate2"
  [endMinDate]="endDate1"
  [endMaxDate]="endDate2"
></ts-date-range>
```

```typescript
startDate1 = new Date(2017, 1, 1);
startDate2 = new Date(2017, 8, 1);
endDate1 = new Date(2017, 1, 2);
endDate2 = new Date(2017, 8, 2;
```


### Disabling

#### Disable a control

Controls can be enabled or disabled via the associated form control:

```typescript
myForm: FormGroup = this.formBuilder.group({
  dateRange: this.formBuilder.group({
    startDate: [
      {
        value: new Date(2017, 4, 6),
        disabled: true,
      },
    ],
    endDate: [
      new Date(2017, 4, 8),
    ],
  }),
});

// Enable it at any time:
const ctrl = this.myForm.get('dateRange.startDate')
if (ctr) {
  ctrl.enable();
}
```


#### Disable the component

The entire component can be disabled:

```html
<ts-date-range [isDisabled]="true"></ts-date-range>
```


## Test Helpers

Some helpers are exposed to assist with testing. These are imported from `@terminus/ui-date-range/testing`;

| Function                 |
|--------------------------|
| `createDateRangeGroup`   |
| `getDebugRangeInputs`    |
| `getRangeInputInstances` |
| `getRangeInputElements`  |


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/master/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/master/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-date-range.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-date-range
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/CI%20Release/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-date-range/bundles/terminus-ui-date-range.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-date-range/bundles/terminus-ui-date-range.umd.js

