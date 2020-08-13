<h1>Utilities</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [CVA provider factory & Reactive form base](#cva-provider-factory--reactive-form-base)
- [TsUILibraryError](#tsuilibraryerror)
- [Merge](#merge)
- [Strip control characters](#strip-control-characters)
- [Types](#types)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## CVA provider factory & Reactive form base

Used together, these help implement custom form controls by implementing a custom ControlValueAccessor.

```typescript
import {
  ControlValueAccessorProviderFactory,
  TsReactiveFormBaseComponent,
} from '@terminus/ui-utilities';

@Component({
  selector: 'my-component',
  providers: [ControlValueAccessorProviderFactory<MyComponent>(MyComponent)],
})
export class MyComponent extends TsReactiveFormBaseComponent {}
```

## TsUILibraryError

A custom error for the UI library.

```typescript
import { TsUILibraryError } from '@terminus/ui-utilities';

throw new TsUILibraryError('MyComponent: Something went wrong!');
```

## Merge

Simple utility to merge 2 objects.

```typescript
import { merge } from '@terminus/ui-utilities';

const mergedObj = merge(obj1, obj2);
```

## Strip control characters

Utility to strip control characters (eg backspace or carriage return) from a string.

```typescript
import { stripControlCharacters } from '@terminus/ui-utilities';

const cleanValue = stripControlCharacters(originalValue);
```

## Types

Shared types.

|        Type         |               Description               |
|---------------------|-----------------------------------------|
| `TsStyleThemeTypes` | The supported themes for UI components. |

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=utilities
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-utilities.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-utilities
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-utilities/bundles/terminus-ui-utilities.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-utilities/bundles/terminus-ui-utilities.umd.js
