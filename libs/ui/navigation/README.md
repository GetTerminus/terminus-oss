<h1>Navigation</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
  - [Packages that need to be installed](#packages-that-need-to-be-installed)
  - [Modules that need to be in NgModule](#modules-that-need-to-be-in-ngmodule)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Navigation item](#navigation-item)
  - [Actions](#actions)
  - [Links](#links)
  - [Nav items array](#nav-items-array)
  - [Welcome message](#welcome-message)
  - [User](#user)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

### Packages that need to be installed

- `@angular/material`
- `@terminus/design-tokens`
- `@terminus/fe-utilities`
- `@terminus/ui-icon`
- `@terminus/ui-navigation`
- `@terminus/ui-pipes`
- `@terminus/ui-styles`
- `@terminus/ui-tooltip`
- `@terminus/ui-utilities`

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-navigation
```

### Modules that need to be in NgModule

- `BrowserAnimationsModule`
- `TsNavigationModule`
- `RouterModule.forRoot(MY_ROUTES)`


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

Create a navigation menu. A navigation menu is a collection of navigation items grouped together, with a space for a user and welcome message.

```html
<ts-navigation
  [items]="navigationItems$"
  (itemSelected)="myMethod($event)"
></ts-navigation>
```

### Navigation item

An object describing a "link" within the navigation. It gets a name, an action or destination, and a boolean `alwaysHidden`. Optionally,  
 it can receive boolean values for `isForAdmin` and `isDisabled`.

```typescript
const NEW_NAV_ITEM: TsNavigationItem = {
  name: '0 Foo',
  action: {
    type: 'my:action',
  },
  alwaysHidden: false,
};
```
\- or -
```typescript
const NEW_NAV_ITEM: TsNavigationItem = {
  name: '1 Bar',
  destination: ['/components/menu'],
  alwaysHidden: false,
};
```

### Actions

An action is an object with a `type`. It gets emitted upon click.

### Links

A link is a string or string[], with a `destination` and optional boolean `isExternal`. Without isExternal, a link is considered a router link, and with isExternal, it's treated as an href.

### Nav items array

An array of navigation items that is passed to `ts-navigation` as `items`.

```typescript
const NAV_ITEMS_MOCK: TsNavigationItem[] = [
  {
    name: '1 Components',
    destination: '/components',
    alwaysHidden: false,
  },
  {
    name: '2 Nav',
    action: 'my:navigationAction',
    alwaysHidden: false,
  },
  {
    name: '3 Buttons',
    destination: ['/components/button'],
    alwaysHidden: true,
  },
];
```

### Welcome message

A message presented with the user name in the navigation. Default message is `Welcome`. Custom messages will truncate
after exceeding `welcomeMsgLength` which is also customizable, and defaults to 25 characters. Any truncated message will appears with
ellipses and have a tooltip with the full message.

```html
<ts-navigation
  welcomeMessage="Welcome back,"
  welcomeMsgLength="15"
></ts-navigation>
```

### User

The user's name which, if defined, displays with the welcome message, in a location separate from the items. User names will truncate after  
 exceeding `userNameLength` which is also customizable, and defaults to 20 characters. A truncated user name will appear with ellipses and  
 have a tooltip with the full name.

```html
<ts-navigation
  [user]="currentUser$ | async"
  userNameLength="10"
></ts-navigation>
```


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-navigation.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-navigation
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-navigation/bundles/terminus-ui-navigation.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-navigation/bundles/terminus-ui-navigation.umd.js
