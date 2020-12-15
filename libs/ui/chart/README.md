<h1>Chart</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Installation](#installation)
  - [CSS imports](#css-imports)
  - [CSS resources](#css-resources)
- [Usage](#usage)
  - [Inject the needed libraries](#inject-the-needed-libraries)
  - [Set up the chart](#set-up-the-chart)
- [Supported chart types](#supported-chart-types)
  - [Chart Type Coercion](#chart-type-coercion)
- [amCharts documentation](#amcharts-documentation)
- [Test Helpers](#test-helpers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Use the `ng add` command to quickly install all the needed dependencies:

```bash
ng add @terminus/ui-chart
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

### Inject the needed libraries

> Note:  Since the end-user of this library is the one with the actual license to use amCharts, we let the consumer pass in the library.

Create a factory function to inject the needed libraries and plugins:

```typescript
import { TS_AMCHARTS_TOKEN, TsAmChartsToken } from '@terminus/ui-chart';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_material from '@amcharts/amcharts4/themes/animated';

// `core` and `charts` are always required.
// `maps` is required if using any map visualizations.
export function amChartsFactory(): TsAmChartsToken {
  return {
    core: am4core,
    charts: am4charts,
    maps: am4maps,
    themes: [am4themes_animated, am4themes_material],
  };
}

@NgModule({
  ...
  providers: [
    // Use the factory function to overwrite the `TS_AMCHARTS_TOKEN` injectable:
    {
      provide: TS_AMCHARTS_TOKEN,
      useFactory: amChartsFactory,
    },
  ],
  ...
```

> NOTE: Themes will be applied in the order they are provided.

### Set up the chart

Add the component and set up access to the generated chart:

```html
<ts-chart (chartInitialized)="setUpChart($event)"></ts-chart>
```

```typescript
setUpChart(chart: am4charts.Chart) {
  // Add axis' and series' etc...
}
```

> See the demo app for concrete examples of the supported chart types.

## Supported chart types

- `xy`
- `pie`
- `map`
- `radar`
- `tree`
- `sankey`
- `chord`

> See `TsChartVisualizationOptions` for all supported types.

### Chart Type Coercion

The library exposes functions for coercing to specific chart types:

- `tsChartXYTypeCheck`
- `tsChartPieTypeCheck`
- `tsChartMapTypeCheck`
- `tsChartRadarTypeCheck`
- `tsChartTreeTypeCheck`
- `tsChartSankeyTypeCheck`
- `tsChartChordTypeCheck`

Example:

```typescript
if (tsChartXYTypeCheck(chart)) {
  // Now we know we are dealing with an XY chart type
}
```

## amCharts documentation

See <https://www.amcharts.com/docs/v4/> for full documentation.

## Test Helpers

Some helpers are exposed to assist with testing. These are imported from `@terminus/ui-chart/testing`;

[[source]][test-helpers-src]

|        Function        |
|------------------------|
| `getChartDebugElement` |
| `getChartInstance`     |

|   Chart service mock    |
|-------------------------|
| `AmChartsServiceMock`   |

<!-- Links -->
[test-helpers-src]:    testing/src/test-helpers.ts
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:     https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/ui-chart.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/ui-chart
[gh-release-badge]:    https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:         https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/ui-chart/bundles/terminus-ui-chart.umd.min.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/ui-chart/bundles/terminus-ui-chart.umd.js
