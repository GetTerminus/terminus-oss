<h1>File Upload</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

A drag'n'drop file upload component.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [`TsSelectedFile`](#tsselectedfile)
  - [File types](#file-types)
  - [File size](#file-size)
  - [Image dimensions](#image-dimensions)
  - [Image ratio constraints](#image-ratio-constraints)
  - [Showing upload progress](#showing-upload-progress)
  - [Enable multiple file selection](#enable-multiple-file-selection)
  - [Handle multiple files](#handle-multiple-files)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-file-upload
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

Collect the selected file via the `selected` event:

```html
<ts-file-upload (selected)="handleFile($event)"></ts-file-upload>
```

```typescript
@import { TsSelectedFile } from '@terminus/ui-file-upload';

...

  handleFile(e: TsSelectedFile[]) {
    // e.fileContents is the selected file
  }
```

### `TsSelectedFile`

The `TsSelectedFile` instance will have several items available:

```typescript
file.fileContents // string
file.height       // number (will be 0 for CSVs)
file.isCSV        // boolean
file.isImage      // boolean
file.isValid      // boolean
file.mimeType     // string
file.name         // string
file.size         // number
file.validations  // TsFileValidations
file.width        // number (will be 0 for CSVs)
```

### File types

Accepted file types can be set by the `accept` input:

```typescript
@import { TsFileAcceptedMimeTypes } from '@terminus/ui-file-upload';

...

  myMimeTypes: TsFileAcceptedMimeTypes = ['image/png', 'image/jpg'];
```

```html
<ts-file-upload [accept]="myMimeTypes"></ts-file-upload>
```

If a file is loaded with the incorrect MIME/type, a validation message will appear below the file input.

The default types can be found by importing `TS_ACCEPTED_MIME_TYPES`;

### File size

Set a maximum size for files in kilobytes:

```html
<ts-file-upload [maximumKilobytesPerFile]="{{ 6 * 1024 }}"></ts-file-upload>
```

If a file is loaded that exceeds the size limit, a validation message will appear below the file input.

### Image dimensions

Image dimension validation is controlled by an array of constraints passed to the component.

A single constraint has this structure:

```typescript
interface TsFileImageDimensionConstraint {
  height: {
    min: number;
    max: number;
  };
  width: {
    min: number;
    max: number;
  };
}
```

You can pass the array of constraints to the component through the `dimensionConstraints` Input:

Example:

```typescript
@import { TsFileImageDimensionConstraints } from '@terminus/ui-file-upload';

...

  myDimensionConstraints: TsFileImageDimensionConstraints = [
    {
      height: {
        min: 72,
        max: 72,
      },
      width: {
        min: 72,
        max: 72,
      },
    },
    {
      height: {
        min: 400,
        max: 500,
      },
      width: {
        min: 700,
        max: 800,
      },
    },
  ];
```

```html
<ts-file-upload [dimensionConstraints]="myDimensionConstraints"></ts-file-upload>
```

If an image is selected that does not meet the dimension constraints, a validation message will appear below the file input.

### Image ratio constraints

Image ratio validation is controlled by an array of constraints passed to the component.

```html
<ts-file-upload [ratioConstraints]='["1:2", "3:4"]'></ts-file-upload>
```

If a file is loaded that do not meet any ratio constraints, a validation message will appear below the file input.

### Showing upload progress

TODO!!

### Enable multiple file selection

Set `multiple` to `true`:

```html
<ts-file-upload [multiple]="true"></ts-file-upload>
```

### Handle multiple files

TODO!!

<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-file-upload.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-file-upload
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-file-upload/bundles/terminus-ui-file-upload.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-file-upload/bundles/terminus-ui-file-upload.umd.js
