<h1>Validation Messages</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
$ yarn add @terminus/design-tokens @terminus/ngx-tools @terminus/ui-pipes date-fns @terminus/ui-validation-messages
# or
$ npm install @terminus/design-tokens @terminus/ngx-tools @terminus/ui-pipes date-fns @terminus/ui-validation-messages -S
```

Include the module:

```typescript
@NgModule({
  imports: [
    TsValidationMessagesModule,
    ...
  ],
  ...
})
export class MyModule {}

```


## Usage

This component was initially for internal use, but has been extended to support custom validation messages. Now a custom
instance of this component can be passed in to override the existing validation messages.

```
<ts-validation-messages
  <!-- This should be the same FormControl passed to the outer form component -->
  [control]="myEmailControl"
  <!-- This is the function that will determine the messaging for errors -->
  [messagesFactory]="emailMessageFactory"
  <!-- This directive is needed to help the parent TsFormField find the custom messages -->
  tsCustomValidationMessage
></ts-validation-messages>
```

```typescript
import { TsValidationMessageFactory } from '@terminus/ui-validation-messages';
...
emailMessageFactory: TsValidationMessageFactory = (a, b) => (a ? 'My custom message!' : null);
```

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-validation-messages.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-validation-messages
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-validation-messages/bundles/terminus-ui-validation-messages.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-validation-messages/bundles/terminus-ui-validation-messages.umd.js
