<h1>Design Tokens</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

The collection of design tokens for Terminus applications.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Formats](#formats)
  - [CSS custom properties](#css-custom-properties)
  - [Sass variables](#sass-variables)
  - [JavaScript constants](#javascript-constants)
  - [JSON](#json)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Formats

Tokens are available in the following formats:

### CSS custom properties

```scss
@import '~@terminus/design-tokens/css/design-tokens.css';

.foo {
  margin-bottom: var(--ts-space-stack-500);
}
```

### Sass variables


```scss
@import '~@terminus/design-tokens/css/design-tokens.scss';

.foo {
  margin-bottom: $ts-space-stack-500;
}
```

### JavaScript constants

Typings are also shipped with the JavaScript tokens.

```javascript
import { TS_SPACE_STACK_500 } from '@terminus/design-tokens/js/design-tokens';

const MARGIN_BOTTOM = TS_SPACE_STACK_500;
```

### JSON

Typings are also shipped with the JSON tokens.

```javascript
import TOKENS_TREE from '@terminus/design-tokens/js/design-tokens-tree';

const MARGIN_BOTTOM = TOKENS_TREE.space.stack.600.value;
```


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/design-tokens.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/design-tokens
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/design-tokens/css/design-tokens.css?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/design-tokens@*/
