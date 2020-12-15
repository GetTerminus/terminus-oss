<h1>Confirmation</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

This directive can be attached to any `<ts-button>` to enable a confirmation step before triggering
the button's action.

Basic flow:

1. The user clicks the button
1. A pop-up appears asking user to cancel or confirm
1. If the user clicks 'confirm', the original `ts-button` event is emitted
1. If the user clicks 'cancel' the pop-up is closed and no button event is emitted

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Cancelled event](#cancelled-event)
  - [Text customization](#text-customization)
    - [Confirm button](#confirm-button)
    - [Cancel button](#cancel-button)
    - [Explanation text](#explanation-text)
  - [Position](#position)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-confirmation
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

Add the directive to any `ts-button`:

```html
<ts-button
  tsConfirmation
  (clicked)="myContinueFn($event)"
>Click me!</ts-button>
```

### Cancelled event

This directive exposes a new event that can be used to determine when a user has chosen 'cancel'
from the confirmation pop-up.

```html
<ts-button
  tsConfirmation
  (cancelled)="myCancelEvent($event)"
>Click me!</ts-button>
```

### Text customization

#### Confirm button

Customizes the confirmation button text in the overlay. This defaults to `Confirm`.

```html
<ts-button
  tsConfirmation
  confirmationButtonText="Custom Confirmation Button Text"
>Click Me!</ts-button>
```

#### Cancel button

Customizes the text in the overlay of the cancel button; default is "Cancel".

```html
<ts-button
  tsConfirmation
  cancelButtonText="Custom Cancel Button Text"
>Click Me!</ts-button>
```

#### Explanation text

Optional text to appear inside of the overlay, generally to use as a warning, for example, "Are you sure you want to do
this action?". No explanation text exists by default.

```html
<ts-button
  tsConfirmation
  explanationText="This will permanently delete this record."
>Click Me!</ts-button>
```

### Position

The position of the panel is centered below the trigger by default. This position can be changed to any of the  
`TsConfirmationOverlayPositionTypes` (`above`|`below`|`before`|`after`).

```html
<ts-button
  tsConfirmation
  overlayPosition="before"
>Click Me!</ts-button>
```

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-confirmation.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-confirmation
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-confirmation/bundles/terminus-ui-confirmation.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-confirmation/bundles/terminus-ui-confirmation.umd.js
