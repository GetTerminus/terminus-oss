<h1>Sidenav</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Platform switcher](#platform-switcher)
  - [Triggers](#triggers)
  - [Section breaks](#section-breaks)
  - [Panels](#panels)
    - [Panel type](#panel-type)
    - [Panel contents](#panel-contents)
    - [Styles](#styles)
    - [Do not disturb](#do-not-disturb)
  - [User panel](#user-panel)
    - [Defaults](#defaults)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-sidenav
```
  
### CSS imports

In your top-level stylesheet, add these imports:

```css
@import '~@terminus/design-tokens/css/library-design-tokens.css';
@import '~@terminus/ui-styles/terminus-ui.css';
```  

### CSS resources

Load the needed font families and icon fonts by adding this link to the `<head>` of your application:

```css
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
<!-- Don't forget to update the integrity SHA -->
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.1/css/solid.css" integrity="SHA-HERE" crossorigin="anonymous">
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.1/css/fontawesome.css" integrity="SHA-HERE" crossorigin="anonymous">
```

## Usage

The most minimal usage:

```html
<ts-sidenav
  [user]="userObject"
  [switcherCurrentTitle]="currentTitle"
  [switcherContent]="switcherContent"
></ts-sidenav>
```

This will create a sidenav with a platform switcher and a user menu, but no other navigation items.

### Platform switcher

The switcher needs the current platform title and the array of links to display in the panel:

```typescript
currentTitle = 'My Platform';
switcherContent: TS_SIDENAV_PLATFORM_SWITCHER_CONTENT = [
  {
    title: 'Account Engagement Hub',
    children: [
      {
        title: 'Data Studio',
        url: 'https://google.com',
        iconClasses: 'fas fa-shapes',
      },
      {
        title: 'Measurement Studio',
        url: 'https://google.com',
        iconClasses: 'fas fa-chart-pie',
      },
    ],
  },
  ...
];
```

```html
<ts-sidenav
  [switcherCurrentTitle]="currentTitle"
  [switcherContent]="switcherContent"
></ts-sidenav>
```

### Triggers

To add an individual navigation trigger, wrap a link or button in `<ts-sidenav-trigger>`:

```html
<ts-sidenav>
  <ts-sidenav-trigger>
    <ts-tooltip tooltipValue="ABM Scorecard" tooltipPosition="after">
      <a routerLink="/scorecard"><span class="fas fa-analytics"></span><span class="sr-only">ABM Scorecard</span></a>
    </ts-tooltip>
  </ts-sidenav-trigger>
</ts-sidenav>
```

1. Each item should have a tooltip since the navigation item is only an icon.
2. The link or button should have appropriate text wrapped with the `.sr-only` class so that the text is available for
   screen readers.
3. The tooltip position should be set to `after`.

### Section breaks

To create a break between collections of navigation links, insert the `<ts-sidenav-section-break>` component:

```html
<ts-sidenav>
  <ts-sidenav-trigger>
    <ts-tooltip tooltipValue="ABM Scorecard" tooltipPosition="after">
      <a routerLink="/scorecard"><span class="fas fa-analytics"></span><span class="sr-only">ABM Scorecard</span></a>
    </ts-tooltip>
  </ts-sidenav-trigger>
  
  <ts-sidenav-section-break></ts-sidenav-section-break>

  <ts-sidenav-trigger>
    <ts-tooltip tooltipValue="Configuration" tooltipPosition="after">
      <a routerLink="/configuration"><span class="fas fa-tools"></span><span class="sr-only">Configuration</span></a>
    </ts-tooltip>
  </ts-sidenav-trigger>
</ts-sidenav>

```

### Panels

By default, each trigger is a simple trigger that will allow the user to click on the link or button contained within.
Triggers also can be used to open panels with content.

#### Panel type

The panel type can be defined by the `panelType` input and supports `popout` and `drawer`:

```html
<ts-sidenav-trigger panelType="popout">...</ts-sidenav-trigger>
<ts-sidenav-trigger panelType="drawer">...</ts-sidenav-trigger>
```

#### Panel contents

The panel contents should be passed in to the trigger component wrapped with the directive
`tsTriggerComponentPanelContent`:

```html
<ts-sidenav-trigger panelType="popout">
  <ts-tooltip tooltipValue="Switch User" tooltipPosition="after">
    <button><span class="fas fa-people-arrows"></span><span class="sr-only">Switch User</span></button>
  </ts-tooltip>

  <div tsTriggerComponentPanelContent>
    <div class="ts-sidenav-panel-title">Switch User Menu</div>
    <ul>
      <li>
        <a href="#" class="ts-sidenav-panel-action">Link 1</a>
      </li>
      <li>
        <a href="#" class="ts-sidenav-panel-action">Link 2</a>
      </li>
    </ul>
  </div>
</ts-sidenav-trigger>
```

#### Styles

Several classes exist to allow the consumer to style panel contents appropriately:

|            Class             |           Purpose           |
|------------------------------|-----------------------------|
| `.ts-sidenav-panel-title`    | The primary panel title   |
| `.ts-sidenav-panel-subtitle` | A smaller subtitle heading |
| `.ts-sidenav-panel-action`   | The actual link or button    |

To create a break within lists, add an `<hr>` as the only content within a list item:

```html
<div tsTriggerComponentPanelContent>
  <div class="ts-sidenav-panel-title">Settings</div>
  <ul>
    <li><a routerLink="/configuration" class="ts-sidenav-panel-action">Configuration</a></li>
    <li><hr></li>
    <li><a routerLink="/permissions" class="ts-sidenav-panel-action">Permissions</a></li>
    <li><a routerLink="/stages" class="ts-sidenav-panel-action">Stages</a></li>
  </ul>
</div>
```

> NOTE: `<hr>` can also be used outside of lists.

#### Do not disturb

To support the 'Do Not Disturb' menu, the trigger component accepts a FormGroup of `<ts-toggle>` form controls that will
define the status dot for the trigger:

```typescript
toggleForm: new FormGroup({
  acme: new FormControl(true),
  ajax: new FormControl(false),
}),
```

```html
<ts-sidenav-trigger panelType="popout" [statusFormGroup]="toggleForm">
  <ts-tooltip tooltipValue="Do Not Disturb" tooltipPosition="after">
    <button><span class="fas fa-moon"></span><span class="sr-only">Do Not Disturb</span></button>
  </ts-tooltip>

  <div tsTriggerComponentPanelContent>
    <div class="ts-sidenav-panel-section-title">Do Not Disturb</div>
    <div class="ts-sidenav-panel-section-subtitle">Preferences</div>
    <hr>
    <form [formGroup]="toggleForm">
      <ul>
        <li><ts-toggle class="ts-sidenav-panel-action" formControlName="acme" labelPosition="before">ACME Co.</ts-toggle></li>
        <li><ts-toggle class="ts-sidenav-panel-action" formControlName="ajax" labelPosition="before">AJAX Corporation</ts-toggle></li>
      </ul>
    </form>
  </div>
</ts-sidenav-trigger>
```

The notification dot will be colored amber if at least one but not all controls are true. If all controls become true,
the dot will be colored red. If all controls are false, the dot will disappear.

### User panel

The user panel needs an object that defines the current user:

```typescript
userObject: TS_SIDENAV_USER = {
  name: 'Eliza Doolittle',
  email: 'eliza.doolittle@terminus.com',
  // This is optional. If not included, the user's first initial will be displayed in place of the image.
  imageUrl: 'https://picsum.photos/id/1025/150/150/',
};
```

```html
<ts-sidenav [user]="userObject"></ts-sidenav>
```

#### Defaults

The user menu has sensible defaults for routes and URLs, but these can be overridden as needed:

```typescript
// Define the new options:
const newDefaults: TsSidenavDefaultOptions {
  profileRoute: 'http://google.com',
  signOutRoute: 'http://google.com',
  academyUrl: 'http://google.com',
  knowledgeBaseUrl: 'http://google.com',
};

...

// Then pass it in as a provider:
providers: [
  {
    provide: TS_SIDENAV_DEFAULT_OPTIONS,
    useValue: newDefaults,
  },
],
```

For Profile and SignOut, you can alternatively handle the click event directly
within your app by binding to the proper EventEmitter output:

```html
<ts-sidenav
  (profileClick)="onProfileClick()"
  (signOutClick)="onSignOutClick()"
></ts-sidenav>
```

Each link will only show if either a Route/URL is passed in or a listener
is bound to the output emitter.

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-sidenav.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-sidenav
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-sidenav/bundles/terminus-ui-sidenav.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-checkbox/bundles/terminus-ui-sidenav.umd.js
