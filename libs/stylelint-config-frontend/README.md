<h1>stylelint-config-frontend</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]
 
A collection of SCSS lint rules for Terminus frontend codebases.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
- [Set up](#set-up)
    - [1. Create the file and extend the base ruleset](#1-create-the-file-and-extend-the-base-ruleset)
    - [2. Add a linting command to `package.json`](#2-add-a-linting-command-to-packagejson)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
$ yarn add stylelint @terminus/stylelint-config-frontend -D
```

## Set up

#### 1. Create the file and extend the base ruleset

Create a stylelint config file at the root level named `stylelint.config.js` and extend the base ruleset:

```javascript
module.exports = {
  extends: '@terminus/stylelint-config-frontend',
}
```

#### 2. Add a linting command to `package.json`

- The `--project` flag reference should point to the primary app `tsconfig` file.
- The `--config` flag reference should point to the ci `tslint` file.

```json
{
  "name": "My Project",
  "scripts": {
    "lint:scss": "npx stylelint 'your/path/to/styles/**/*.scss'"
  }
}
```


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/stylelint-config-frontend.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/stylelint-config-frontend
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/stylelint-config-frontend/src/lib/rules.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/stylelint-config-frontend@*/
