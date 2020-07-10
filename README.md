# Terminus Open-Source Software

The monorepo that contains all Terminus open-source libraries and tools.

[![Release CI][github-badge-release]][github-ci-link] [![codecov][codecov-badge]][codecov-project]
[![DavidDM][david-badge]][david-link] [![DavidDM Dev][david-dev-badge]][david-link]

[![MIT License][license-badge]][license-url] [![semantic-release][semantic-release-badge]][semantic-release]
[![Renovate][renovate-badge]][renovate-link] [![ZenHub][zenhub-image]][zenhub-url]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Packages](#packages)
  - [Live Demos](#live-demos)
  - [Generated Documentation](#generated-documentation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Packages

|                      Package                      |                        Description                        |                 Changelog                  |               Demo               |               Docs               |                  Legacy Code                  |                 Coverage                 |                           `@latest`                           |                          `@next`                           |
|---------------------------------------------------|-----------------------------------------------------------|--------------------------------------------|----------------------------------|----------------------------------|-----------------------------------------------|------------------------------------------|---------------------------------------------------------------|------------------------------------------------------------|
| [design-tokens][src-tokens]                       | Terminus design tokens in CSS/SCSS/JS/JSON form           | [Changelog][changelog-tokens]              | [Demo][demo-tokens]              |                                  | [Legacy Code][legacy-src-tokens]              |                                          | ![Design Tokens latest][badge-latest-tokens]                  | ![Tokens next][badge-next-tokens]                          |
| [eslint-config-frontend][src-eslint-config]       | ESLint configuration for front-end repos                  | [Changelog][changelog-eslint-config]       |                                  | [Docs][docs-eslint-config]       | [Legacy Code][legacy-src-eslint-config]       |                                          | ![ESLint config latest][badge-latest-eslint-config]           | ![ESLint config next][badge-next-eslint-config]            |
| [stylelint-config-frontend][src-stylelint-config] | StyleLint configuration for front-end repos               | [Changelog][changelog-stylelint-config]    |                                  | [Docs][docs-stylelint-config]    | [Legacy Code][legacy-src-stylelint-config]    |                                          | ![StyleLint config latest][badge-latest-stylelint-config]     | ![Stylelint config next][badge-next-stylelint-config]      |
| [ui-autocomplete][src-autocomplete]               | Deprecated. See `selection-list`                          | [Changelog][changelog-autocomplete]        | [Demo][demo-autocomplete]        | [Docs][docs-autocomplete]        | [Legacy Code][legacy-src-autocomplete]        | ![codecov][cov-badge-autocomplete]       | ![Autocomplete latest][badge-latest-autocomplete]             | ![Autocomplete next][badge-next-autocomplete]              |
| [ui-autofocus][src-autofocus]                     | Focus a focusable element on load                         | [Changelog][changelog-autofocus]           | [Demo][demo-autofocus]           | [Docs][docs-autofocus]           | [Legacy Code][legacy-src-autofocus]           | ![codecov][cov-badge-autofocus]          | ![autofocus latest][badge-latest-autofocus]                   | ![Autofocus next][badge-next-autofocus]                    |
| ui-badge                                          | See `chip`                                                |                                            | [Demo][demo-chip]                |                                  | [Legacy Code][legacy-src-chip]                |                                          |                                                               |                                                            |
| [ui-button][src-button]                           |                                                           | [Changelog][changelog-button]              | [Demo][demo-button]              | [Docs][docs-button]              | [Legacy Code][legacy-src-button]              | ![codecov][cov-badge-button]             | ![button latest][badge-latest-button]                         | ![Button next][badge-next-button]                          |
| [ui-card][src-card]                               | Presentational card                                       | [Changelog][changelog-card]                | [Demo][demo-card]                | [Docs][docs-card]                | [Legacy Code][legacy-src-card]                | ![codecov][cov-badge-card]               | ![card latest][badge-latest-card]                             | ![Card next][badge-next-card]                              |
| [ui-chart][src-chart]                             | Charts, graphs etc                                        | [Changelog][changelog-chart]               | [Demo][demo-chart]               | [Docs][docs-chart]               | [Legacy Code][legacy-src-chart]               | ![codecov][cov-badge-chart]              | ![chart latest][badge-latest-chart]                           | ![Chart next][badge-next-chart]                            |
| [ui-chip][src-chip]                               | Chip                                                      | [Changelog][changelog-chip]                | [Demo][demo-chip]                | [Docs][docs-chip]                | [Legacy Code][legacy-src-chip]                | ![codecov][cov-badge-chip]               | ![chip latest][badge-latest-chip]                             | ![Chip next][badge-next-chip]                              |
| [ui-checkbox][src-checkbox]                       |                                                           | [Changelog][changelog-checkbox]            | [Demo][demo-checkbox]            | [Docs][docs-checkbox]            | [Legacy Code][legacy-src-checkbox]            | ![codecov][cov-badge-checkbox]           | ![checkbox latest][badge-latest-checkbox]                     | ![Checkbox next][badge-next-checkbox]                      |
| [ui-cohort-date-range][src-cohort-date-range]     | CohortDateRange                                           | [Changelog][changelog-cohort-date-range]   | [Demo][demo-cohort-date-range]   | [Docs][docs-cohort-date-range]   | [Legacy Code][legacy-src-cohort-date-range]   | ![codecov][cov-badge-cohortDateRange]    | ![cohortDateRange latest][badge-latest-cohortDateRange]       | ![Cohort Date Range next][badge-next-cohortDateRange]      |
| [ui-confirmation][src-confirmation]               | Add a confirmation step to any `ts-button`                | [Changelog][changelog-confirmation]        | [Demo][demo-confirmation]        | [Docs][docs-confirmation]        | [Legacy Code][legacy-src-confirmation]        | ![codecov][cov-badge-confirmation]       | ![confirmation latest][badge-latest-confirmation]             | ![Confirmation next][badge-next-confirmation]              |
| [ui-copy][src-copy]                               | Component to easily copy string values                    | [Changelog][changelog-copy]                | [Demo][demo-copy]                | [Docs][docs-copy]                | [Legacy Code][legacy-src-copy]                | ![codecov][cov-badge-copy]               | ![copy latest][badge-latest-copy]                             | ![Copy next][badge-next-copy]                              |
| [ui-csv-entry][src-csv-entry]                     | Manually enter CSV values                                 | [Changelog][changelog-csv-entry]           | [Demo][demo-csv-entry]           | [Docs][docs-csv-entry]           | [Legacy Code][legacy-src-csv-entry]           | ![codecov][cov-badge-csvEntry]           | ![csvEntry latest][badge-latest-csvEntry]                     | ![CSV Entry next][badge-next-csvEntry]                     |
| ui-datepicker                                     | See [`TsInputComponent`][src-input]                       |                                            | [Demo][demo-input]               | [Docs][docs-input]               |                                               |                                          |                                                               |                                                            |
| [ui-date-range][src-date-range]                   | Dual inputs with calendar pop-ups                         | [Changelog][changelog-date-range]          | [Demo][demo-date-range]          | [Docs][docs-date-range]          | [Legacy Code][legacy-src-date-range]          | ![codecov][cov-badge-dateRange]          | ![dateRange latest][badge-latest-dateRange]                   | ![Date Range next][badge-next-dateRange]                   |
| [ui-drawer][src-drawer]                           | Slide-out drawer panel                                    | [Changelog][changelog-drawer]              | [Demo][demo-drawer]              | [Docs][docs-drawer]              | [Legacy Code][legacy-src-drawer]              | ![codecov][cov-badge-drawer]             | ![drawer latest][badge-latest-drawer]                         | ![Drawer next][badge-next-drawer]                          |
| [ui-expansion-panel][src-expansion-panel]         | Expansion panel with accordion & stepper functionality    | [Changelog][changelog-expansion-panel]     | [Demo][demo-expansion-panel]     | [Docs][docs-expansion-panel]     | [Legacy Code][legacy-src-expansion-panel]     | ![codecov][cov-badge-expansionPanel]     | ![expansionPanel latest][badge-latest-expansionPanel]         | ![Expansion Panel next][badge-next-expansionPanel]         |
| [ui-file-upload][src-file-upload]                 | File upload with drag and drop                            | [Changelog][changelog-file-upload]         | [Demo][demo-file-upload]         | [Docs][docs-file-upload]         | [Legacy Code][legacy-src-file-upload]         | ![codecov][cov-badge-fileUpload]         | ![fileUpload latest][badge-latest-fileUpload]                 | ![File Upload next][badge-next-fileUpload]                 |
| [ui-icon][src-icon]                               | Supported icons: https://material.io/icons                | [Changelog][changelog-icon]                | [Demo][demo-icon]                | [Docs][docs-icon]                | [Legacy Code][legacy-src-icon]                | ![codecov][cov-badge-icon]               | ![icon latest][badge-latest-icon]                             | ![Icon next][badge-next-icon]                              |
| [ui-icon-button][src-icon-button]                 | Icon only button                                          | [Changelog][changelog-icon-button]         | [Demo][demo-icon-button]         | [Docs][docs-icon-button]         | [Legacy Code][legacy-src-icon-button]         | ![codecov][cov-badge-iconButton]         | ![iconButton latest][badge-latest-iconButton]                 | ![Icon Button next][badge-next-iconButton]                 |
| [ui-input][src-input]                             | Input with masking, datepicker, etc                       | [Changelog][changelog-input]               | [Demo][demo-input]               | [Docs][docs-input]               | [Legacy Code][legacy-src-input]               | ![codecov][cov-badge-input]              | ![input latest][badge-latest-input]                           | ![Input next][badge-next-input]                            |
| [ui-link][src-link]                               |                                                           | [Changelog][changelog-link]                | [Demo][demo-link]                | [Docs][docs-link]                | [Legacy Code][legacy-src-link]                | ![codecov][cov-badge-link]               | ![link latest][badge-latest-link]                             | ![Link next][badge-next-link]                              |
| [ui-loading overlay][src-loading-overlay]         | Overlay with loading spinner                              | [Changelog][changelog-loading-overlay]     | [Demo][demo-loading-overlay]     | [Docs][docs-loading-overlay]     | [Legacy Code][legacy-src-loading-overlay]     | ![codecov][cov-badge-loadingOverlay]     | ![loadingOverlay latest][badge-latest-loadingOverlay]         | ![Loading Overlay next][badge-next-loadingOverlay]         |
| [ui-login form][src-login-form]                   | Email/password with 'remember me' checkbox                | [Changelog][changelog-login-form]          | [Demo][demo-log-in-form]         | [Docs][docs-login-form]          | [Legacy Code][legacy-src-login-form]          | ![codecov][cov-badge-loginForm]          | ![loginForm latest][badge-latest-loginForm]                   | ![Login Form next][badge-next-loginForm]                   |
| [ui-logo][src-logo]                               | Variations of the official logo, certain colors available | [Changelog][changelog-logo]                | [Demo][demo-logo]                | [Docs][docs-logo]                | [Legacy Code][legacy-src-logo]                | ![codecov][cov-badge-logo]               | ![logo latest][badge-latest-logo]                             | ![Logo next][badge-next-logo]                              |
| [ui-menu][src-menu]                               |                                                           | [Changelog][changelog-menu]                | [Demo][demo-menu]                | [Docs][docs-menu]                | [Legacy Code][legacy-src-menu]                | ![codecov][cov-badge-menu]               | ![menu latest][badge-latest-menu]                             | ![Menu next][badge-next-menu]                              |
| [ui-navigation][src-navigation]                   | Global navigation menu                                    | [Changelog][changelog-navigation]          | [Demo][demo-navigation]          | [Docs][docs-navigation]          | [Legacy Code][legacy-src-navigation]          | ![codecov][cov-badge-navigation]         | ![navigation latest][badge-latest-navigation]                 | ![Navigation next][badge-next-navigation]                  |
| [ui-paginator][src-paginator]                     | Paging controls for collections                           | [Changelog][changelog-paginator]           | [Demo][demo-paginator]           | [Docs][docs-paginator]           | [Legacy Code][legacy-src-paginator]           | ![codecov][cov-badge-paginator]          | ![paginator latest][badge-latest-paginator]                   | ![Paginator next][badge-next-paginator]                    |
| [ui-pipes][src-pipes]                             | A collection of pipes for Angular                         | [Changelog][changelog-pipes]               | [Demo][demo-pipes]               | [Docs][docs-pipes]               | [Legacy Code][legacy-src-pipes]               | ![codecov][cov-badge-pipes]              | ![pipes latest][badge-latest-pipes]                           | ![Pipes next][badge-next-pipes]                            |
| [ui-popover][src-popover]                         | Popover with templates                                    | [Changelog][changelog-popover]             | [Demo][demo-popover]             | [Docs][docs-popover]             | [Legacy Code][legacy-src-popover]             | ![codecov][cov-badge-popover]            | ![popover latest][badge-latest-popover]                       | ![Popover next][badge-next-popover]                        |
| [ui-radio-group][src-radio-group]                 |                                                           | [Changelog][changelog-radio-group]         | [Demo][demo-radio-group]         | [Docs][docs-radio-group]         | [Legacy Code][legacy-src-radio-group]         | ![codecov][cov-badge-radioGroup]         | ![radioGroup latest][badge-latest-radioGroup]                 | ![Radio Group next][badge-next-radioGroup]                 |
| [ui-scrollbars][src-scrollbars]                   | Custom scrollbars for both axis'                          | [Changelog][changelog-scrollbars]          | [Demo][demo-scrollbars]          | [Docs][docs-scrollbars]          | [Legacy Code][legacy-src-scrollbars]          | ![codecov][cov-badge-scrollbars]         | ![scrollbars latest][badge-latest-scrollbars]                 | ![Scrollbars next][badge-next-scrollbars]                  |
| [ui-search][src-search]                           | Input with search capabilities                            | [Changelog][changelog-search]              | [Demo][demo-search]              | [Docs][docs-search]              | [Legacy Code][legacy-src-search]              | ![codecov][cov-badge-search]             | ![search latest][badge-latest-search]                         | ![Search next][badge-next-search]                          |
| [ui-select][src-select]                           | Deprecated. See `selection-list`                          | [Changelog][changelog-select]              | [Demo][demo-select]              | [Docs][docs-select]              | [Legacy Code][legacy-src-select]              | ![codecov][cov-badge-select]             | ![select latest][badge-latest-select]                         | ![Select next][badge-next-select]                          |
| [ui-selection-list][src-selection-list]           | Classic select dropdown / autocomplete                    | [Changelog][changelog-selection-list]      | [Demo][demo-selection-list]      | [Docs][docs-selection-list]      | [Legacy Code][legacy-src-selection-list]      | ![codecov][cov-badge-selectionList]      | ![selectionList latest][badge-latest-selectionList]           | ![Selection List next][badge-next-selectionList]           |
| [ui-spacing][src-spacing]                         | Helpers for consistent spacing                            | [Changelog][changelog-spacing]             | [Demo][demo-spacing]             | [Docs][docs-spacing]             | [Legacy Code][legacy-src-spacing]             | ![codecov][cov-badge-spacing]            | ![spacing latest][badge-latest-spacing]                       | ![Spacing next][badge-next-spacing]                        |
| [ui-sort][src-sort]                               | Used by `table` for column sorting                        | [Changelog][changelog-sort]                | <small>(see table demo)</small>  | [Docs][docs-sort]                | [Legacy Code][legacy-src-sort]                | ![codecov][cov-badge-sort]               | ![sort latest][badge-latest-sort]                             | ![Sort next][badge-next-sort]                              |
| [ui-styles][src-styles]                           | A collection of base CSS, SCSS mixins and functions.      | [Changelog][changelog-styles]              |                                  | [Docs][docs-styles]              |                                               |                                          | ![styles latest][badge-latest-styles]                         | ![Styles next][badge-next-styles]                          |
| [ui-table][src-table]                             | Datatable w/pinning, sorting, resizing                    | [Changelog][changelog-table]               | [Demo][demo-table]               | [Docs][docs-table]               | [Legacy Code][legacy-src-table]               | ![codecov][cov-badge-table]              | ![table latest][badge-latest-table]                           | ![Table next][badge-next-table]                            |
| [ui-tabs][src-tabs]                               | Horizontal tab interface                                  | [Changelog][changelog-tabs]                | [Demo][demo-tabs]                | [Docs][docs-tabs]                | [Legacy Code][legacy-src-tabs]                | ![codecov][cov-badge-tabs]               | ![tabs latest][badge-latest-tabs]                             | ![Tabs next][badge-next-tabs]                              |
| ui-textarea                                       | See `input`                                               |                                            | <small>(see input demo)</small>  |                                  |                                               |                                          |                                                               |                                                            |
| [ui-toggle][src-toggle]                           | Toggle switch                                             | [Changelog][changelog-toggle]              | [Demo][demo-toggle]              | [Docs][docs-toggle]              | [Legacy Code][legacy-src-toggle]              | ![codecov][cov-badge-toggle]             | ![toggle latest][badge-latest-toggle]                         | ![Toggle next][badge-next-toggle]                          |
| [ui-tooltip][src-tooltip]                         | Simple tooltip                                            | [Changelog][changelog-tooltip]             | [Demo][demo-tooltip]             | [Docs][docs-tooltip]             | [Legacy Code][legacy-src-tooltip]             | ![codecov][cov-badge-tooltip]            | ![tooltip latest][badge-latest-tooltip]                       | ![Tooltip next][badge-next-tooltip]                        |
| [ui-validation-messages][src-validation-messages] | A component to display form validation errors             | [Changelog][changelog-validation-messages] | [Demo][demo-validation-messages] | [Docs][docs-validation-messages] | [Legacy Code][legacy-src-validation-messages] | ![codecov][cov-badge-validationMessages] | ![validationMessages latest][badge-latest-validationMessages] | ![Validation Messages next][badge-next-validationMessages] |
| [ui-validators][src-validators]                   | A collection of form validators                           | [Changelog][changelog-validators]          | [Demo][demo-validators]          | [Docs][docs-validators]          | [Legacy Code][legacy-src-validators]          | ![codecov][cov-badge-validators]         | ![validators latest][badge-latest-validators]                 | ![Validators next][badge-next-validators]                  |

|                  App                   |             Description              |                                   |
|----------------------------------------|--------------------------------------|-----------------------------------|
| [UI Showcase][src-showcase-ui]         | Various live demos                   | [Visit Site][url-showcase-ui]     |
| [Tokens Showcase][src-showcase-tokens] | Live reference for our design tokens | [Visit Site][url-showcase-tokens] |

### Live Demos

See the 'demos' column in the [table above](#packages).

### Generated Documentation

[http://uilibrary-docs.terminus.ninja/release](http://uilibrary-docs.terminus.ninja/release)


<!-- Links -->
[semantic-release]:       https://github.com/semantic-release/semantic-release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[codecov-project]:        https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:          https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg
[renovate-badge]:         https://img.shields.io/badge/renovate-enabled-brightgreen.svg
[renovate-link]:          https://renovatebot.com
[david-dev-badge]:        https://david-dm.org/GetTerminus/terminus-oss/dev-status.svg
[david-badge]:            https://david-dm.org/GetTerminus/terminus-oss.svg
[david-link]:             https://david-dm.org/GetTerminus/terminus-oss?view=list
[license-url]:            https://github.com/GetTerminus/terminus-ui/blob/release/LICENSE
[license-badge]:          http://img.shields.io/badge/license-MIT-blue.svg
[zenhub-image]:           https://dxssrr2j0sq4w.cloudfront.net/3.2.0/img/external/zenhub-badge.png
[zenhub-url]:             https://github.com/GetTerminus/terminus-oss#zenhub
[github-badge-release]:   https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg
[github-ci-link]:         https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22Release+CI%22
[url-showcase-ui]:        https://getterminus.github.io/ui-demos-release/components
[url-showcase-tokens]:    https://getterminus.github.io/design-tokens/color

<!-- Source Directories -->
[src-tokens]:              https://github.com/GetTerminus/terminus-oss/blob/release/libs/design-tokens/
[src-eslint-config]:       https://github.com/GetTerminus/terminus-oss/blob/release/libs/eslint-config-frontend/
[src-stylelint-config]:    https://github.com/GetTerminus/terminus-oss/blob/release/libs/stylelint-config-frontend/
[src-autocomplete]:        https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/autocomplete/
[src-autofocus]:           https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/autofocus/
[src-button]:              https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/button/
[src-card]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/card/
[src-chart]:               https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/chart/
[src-checkbox]:            https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/checkbox/
[src-chip]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/chip/
[src-cohort-date-range]:   https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/cohort-date-range/
[src-confirmation]:        https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/confirmation/
[src-copy]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/copy/
[src-csv-entry]:           https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/csv-entry/
[src-date-range]:          https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/date-range/
[src-drawer]:              https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/drawer/
[src-expansion-panel]:     https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/expansion-panel/
[src-file-upload]:         https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/file-upload/
[src-icon-button]:         https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/icon-button/
[src-icon]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/icon/
[src-input]:               https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/input/
[src-link]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/link/
[src-loading-overlay]:     https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/loading-overlay/
[src-login-form]:          https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/login-form/
[src-logo]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/logo/
[src-menu]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/menu/
[src-navigation]:          https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/navigation/
[src-paginator]:           https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/paginator/
[src-pipes]:               https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/pipes/
[src-popover]:             https://github.com/Getterminus/terminus-oss/blob/release/libs/ui/popover/
[src-radio-group]:         https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/radio-group/
[src-scrollbars]:          https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/scrollbars/
[src-search]:              https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/search/
[src-select]:              https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/select/
[src-selection-list]:      https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/selection-list/
[src-sort]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/sort/
[src-spacing]:             https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/spacing/
[src-styles]:              https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/styles/
[src-table]:               https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/table/
[src-tabs]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/tabs/
[src-toggle]:              https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/toggle/
[src-tooltip]:             https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/tooltip/
[src-validation-messages]: https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/validation-messages/
[src-validators]:          https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/validators/
[src-showcase-ui]:         https://github.com/GetTerminus/terminus-oss/blob/release/apps/showcase-ui/
[src-showcase-tokens]:     https://github.com/GetTerminus/terminus-oss/blob/release/apps/showcase-tokens/

<!-- Changelogs -->
[changelog-tokens]:              https://github.com/GetTerminus/terminus-oss/blob/release/libs/design-tokens/CHANGELOG.md
[changelog-eslint-config]:       https://github.com/GetTerminus/terminus-oss/blob/release/libs/eslint-config-frontend/CHANGELOG.md
[changelog-stylelint-config]:    https://github.com/GetTerminus/terminus-oss/blob/release/libs/stylelint-config-frontend/CHANGELOG.md
[changelog-autocomplete]:        https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/autocomplete/CHANGELOG.md
[changelog-autofocus]:           https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/autofocus/CHANGELOG.md
[changelog-button]:              https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/button/CHANGELOG.md
[changelog-card]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/card/CHANGELOG.md
[changelog-chart]:               https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/chart/CHANGELOG.md
[changelog-checkbox]:            https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/checkbox/CHANGELOG.md
[changelog-chip]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/chip/CHANGELOG.md
[changelog-cohort-date-range]:   https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/cohort-date-range/CHANGELOG.md
[changelog-confirmation]:        https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/confirmation/CHANGELOG.md
[changelog-copy]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/copy/CHANGELOG.md
[changelog-csv-entry]:           https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/csv-entry/CHANGELOG.md
[changelog-date-range]:          https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/date-range/CHANGELOG.md
[changelog-drawer]:              https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/drawer/CHANGELOG.md
[changelog-expansion-panel]:     https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/expansion-panel/CHANGELOG.md
[changelog-file-upload]:         https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/file-upload/CHANGELOG.md
[changelog-icon-button]:         https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/icon-button/CHANGELOG.md
[changelog-icon]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/icon/CHANGELOG.md
[changelog-input]:               https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/input/CHANGELOG.md
[changelog-link]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/link/CHANGELOG.md
[changelog-loading-overlay]:     https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/loading-overlay/CHANGELOG.md
[changelog-login-form]:          https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/login-form/CHANGELOG.md
[changelog-logo]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/logo/CHANGELOG.md
[changelog-menu]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/menu/CHANGELOG.md
[changelog-navigation]:          https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/navigation/CHANGELOG.md
[changelog-paginator]:           https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/paginator/CHANGELOG.md
[changelog-pipes]:               https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/pipes/CHANGELOG.md
[changelog-popover]:             https://github.com/Getterminus/terminus-oss/blob/release/libs/ui/popover/CHANGELOG.md
[changelog-radio-group]:         https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/radio-group/CHANGELOG.md
[changelog-scrollbars]:          https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/scrollbars/CHANGELOG.md
[changelog-search]:              https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/search/CHANGELOG.md
[changelog-select]:              https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/select/CHANGELOG.md
[changelog-selection-list]:      https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/selection-list/CHANGELOG.md
[changelog-sort]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/sort/CHANGELOG.md
[changelog-spacing]:             https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/spacing/CHANGELOG.md
[changelog-styles]:              https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/styles/CHANGELOG.md
[changelog-table]:               https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/table/CHANGELOG.md
[changelog-tabs]:                https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/tabs/CHANGELOG.md
[changelog-toggle]:              https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/toggle/CHANGELOG.md
[changelog-tooltip]:             https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/tooltip/CHANGELOG.md
[changelog-validation-messages]: https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/validation-messages/CHANGELOG.md
[changelog-validators]:          https://github.com/GetTerminus/terminus-oss/blob/release/libs/ui/validators/CHANGELOG.md

<!-- Legacy source code -->
[legacy-src-tokens]:              https://github.com/GetTerminus/design-tokens
[legacy-src-eslint-config]:       https://github.com/GetTerminus/eslint-config-frontend
[legacy-src-stylelint-config]:    https://github.com/GetTerminus/stylelint-config-frontend
[legacy-src-autocomplete]:        https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/autocomplete/
[legacy-src-autofocus]:           https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/autofocus/
[legacy-src-button]:              https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/button/
[legacy-src-card]:                https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/card/
[legacy-src-chart]:               https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/chart/
[legacy-src-checkbox]:            https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/checkbox/
[legacy-src-chip]:                https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/chip/
[legacy-src-cohort-date-range]:   https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/cohort-date-range/
[legacy-src-confirmation]:        https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/confirmation/
[legacy-src-copy]:                https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/copy/
[legacy-src-csv-entry]:           https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/csv-entry/
[legacy-src-date-range]:          https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/date-range/
[legacy-src-drawer]:              https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/drawer/
[legacy-src-expansion-panel]:     https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/expansion-panel/
[legacy-src-file-upload]:         https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/file-upload/
[legacy-src-icon-button]:         https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/icon-button/
[legacy-src-icon]:                https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/icon/
[legacy-src-input]:               https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/input/
[legacy-src-link]:                https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/link/
[legacy-src-loading-overlay]:     https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/loading-overlay/
[legacy-src-login-form]:          https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/login-form/
[legacy-src-logo]:                https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/logo/
[legacy-src-menu]:                https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/menu/
[legacy-src-navigation]:          https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/navigation/
[legacy-src-paginator]:           https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/paginator/
[legacy-src-pipes]:               https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/pipes/
[legacy-src-popover]:             https://github.com/Getterminus/terminus-ui/blob/release/projects/library/popover/
[legacy-src-radio-group]:         https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/radio-group/
[legacy-src-scrollbars]:          https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/scrollbars/
[legacy-src-search]:              https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/search/
[legacy-src-select]:              https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/select/
[legacy-src-selection-list]:      https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/selection-list/
[legacy-src-sort]:                https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/sort/
[legacy-src-spacing]:             https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/spacing/
[legacy-src-table]:               https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/table/
[legacy-src-tabs]:                https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/tabs/
[legacy-src-toggle]:              https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/toggle/
[legacy-src-tooltip]:             https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/tooltip/
[legacy-src-validation-messages]: https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/validation-messages/
[legacy-src-validators]:          https://github.com/GetTerminus/terminus-ui/blob/release/projects/library/validators/

<!-- Demos -->
[demo-tokens]:              https://getterminus.github.io/design-tokens
[demo-autocomplete]:        https://getterminus.github.io/ui-demos-release/components/autocomplete
[demo-autofocus]:           https://getterminus.github.io/ui-demos-release/components/autofocus
[demo-button]:              https://getterminus.github.io/ui-demos-release/components/button
[demo-card]:                https://getterminus.github.io/ui-demos-release/components/card
[demo-chart]:               https://getterminus.github.io/ui-demos-release/components/chart
[demo-chip]:                https://getterminus.github.io/ui-demos-release/components/chip
[demo-checkbox]:            https://getterminus.github.io/ui-demos-release/components/checkbox
[demo-cohort-date-range]:   https://getterminus.github.io/ui-demos-release/components/cohort-date-range
[demo-confirmation]:        https://getterminus.github.io/ui-demos-release/components/confirmation
[demo-copy]:                https://getterminus.github.io/ui-demos-release/components/copy
[demo-csv-entry]:           https://getterminus.github.io/ui-demos-release/components/csv-entry
[demo-date-range]:          https://getterminus.github.io/ui-demos-release/components/date-range
[demo-drawer]:              https://getterminus.github.io/ui-demos-release/components/drawer
[demo-expansion-panel]:     https://getterminus.github.io/ui-demos-release/components/expansion-panel
[demo-file-upload]:         https://getterminus.github.io/ui-demos-release/components/file-upload
[demo-icon-button]:         https://getterminus.github.io/ui-demos-release/components/icon-button
[demo-icon]:                https://getterminus.github.io/ui-demos-release/components/icon
[demo-input]:               https://getterminus.github.io/ui-demos-release/components/input
[demo-link]:                https://getterminus.github.io/ui-demos-release/components/link
[demo-loading-overlay]:     https://getterminus.github.io/ui-demos-release/components/loading-overlay
[demo-log-in-form]:         https://getterminus.github.io/ui-demos-release/components/log-in-form
[demo-logo]:                https://getterminus.github.io/ui-demos-release/components/logo
[demo-menu]:                https://getterminus.github.io/ui-demos-release/components/menu
[demo-navigation]:          https://getterminus.github.io/ui-demos-release/components/navigation
[demo-paginator]:           https://getterminus.github.io/ui-demos-release/components/paginator
[demo-pipes]:               https://getterminus.github.io/ui-demos-release/components/pipes
[demo-popover]:             https://getterminus.github.io/ui-demos-release/components/popover
[demo-radio-group]:         https://getterminus.github.io/ui-demos-release/components/radio
[demo-scrollbars]:          https://getterminus.github.io/ui-demos-release/components/scrollbars
[demo-search]:              https://getterminus.github.io/ui-demos-release/components/search
[demo-select]:              https://getterminus.github.io/ui-demos-release/components/select
[demo-selection-list]:      https://getterminus.github.io/ui-demos-release/components/selection-list
[demo-spacing-constant]:    https://getterminus.github.io/ui-demos-release/components/spacing-constant
[demo-spacing]:             https://getterminus.github.io/ui-demos-release/components/spacing
[demo-table]:               https://getterminus.github.io/ui-demos-release/components/table
[demo-tabs]:                https://getterminus.github.io/ui-demos-release/components/tabs
[demo-toggle]:              https://getterminus.github.io/ui-demos-release/components/toggle
[demo-tooltip]:             https://getterminus.github.io/ui-demos-release/components/tooltip
[demo-validation-messages]: https://getterminus.github.io/ui-demos-release/components/validation-messages
[demo-validators]:          https://getterminus.github.io/ui-demos-release/components/validation

<!-- TS Primary Docs -->
[docs-eslint-config]:       https://github.com/GetTerminus/terminus-oss/blob/release/libs/eslint-config-frontend/README.md
[docs-stylelint-config]:    https://github.com/GetTerminus/terminus-oss/blob/release/libs/stylelint-config-frontend/README.md
[docs-autocomplete]:        http://uilibrary-docs.terminus.ninja/release/components/TsAutocompleteComponent.html
[docs-autofocus]:           http://uilibrary-docs.terminus.ninja/release/directives/TsAutofocusDirective.html
[docs-button]:              http://uilibrary-docs.terminus.ninja/release/components/TsButtonComponent.html
[docs-card]:                http://uilibrary-docs.terminus.ninja/release/components/TsCardComponent.html
[docs-chart]:               http://uilibrary-docs.terminus.ninja/release/components/TsChartComponent.html
[docs-checkbox]:            http://uilibrary-docs.terminus.ninja/release/components/TsCheckboxComponent.html
[docs-chip]:                http://uilibrary-docs.terminus.ninja/release/components/TsChipCollectionComponent.html
[docs-cohort-date-range]:   http://uilibrary-docs.terminus.ninja/release/components/TsCohortDateRangeComponent.html
[docs-confirmation]:        http://uilibrary-docs.terminus.ninja/release/directives/TsConfirmationDirective.html
[docs-copy]:                http://uilibrary-docs.terminus.ninja/release/components/TsCopyComponent.html
[docs-csv-entry]:           http://uilibrary-docs.terminus.ninja/release/components/TsCSVEntryComponent.html
[docs-date-range]:          http://uilibrary-docs.terminus.ninja/release/components/TsDateRangeComponent.html
[docs-drawer]:              http://uilibrary-docs/terminus.ninja/release/components/TsDrawerComponent.html
[docs-expansion-panel]:     http://uilibrary-docs.terminus.ninja/release/components/TsExpansionPanelComponent.html
[docs-file-upload]:         http://uilibrary-docs.terminus.ninja/release/components/TsFileUploadComponent.html
[docs-icon-button]:         http://uilibrary-docs.terminus.ninja/release/components/TsIconButtonComponent.html
[docs-icon]:                http://uilibrary-docs.terminus.ninja/release/components/TsIconComponent.html
[docs-input]:               http://uilibrary-docs.terminus.ninja/release/components/TsInputComponent.html
[docs-link]:                http://uilibrary-docs.terminus.ninja/release/components/TsLinkComponent.html
[docs-loading-overlay]:     http://uilibrary-docs.terminus.ninja/release/components/TsLoadingOverlayComponent.html
[docs-login-form]:          http://uilibrary-docs.terminus.ninja/release/components/TsLoginFormComponent.html
[docs-logo]:                http://uilibrary-docs.terminus.ninja/release/components/TsLogoComponent.html
[docs-menu]:                http://uilibrary-docs.terminus.ninja/release/components/TsMenuComponent.html
[docs-navigation]:          http://uilibrary-docs.terminus.ninja/release/components/TsNavigationComponent.html
[docs-paginator]:           http://uilibrary-docs.terminus.ninja/release/components/TsPaginatorComponent.html
[docs-pipes]:               http://uilibrary-docs.terminus.ninja/release/modules/TsPipesModule.html
[docs-popover]:             http://uilibrary-docs.terminus.ninja/release/modules/TsPopoverComponent.html
[docs-radio-group]:         http://uilibrary-docs.terminus.ninja/release/components/TsRadioGroupComponent.html
[docs-scrollbars]:          http://uilibrary-docs.terminus.ninja/release/components/TsScrollbarsComponent.html
[docs-search]:              http://uilibrary-docs.terminus.ninja/release/components/TsSearchComponent.html
[docs-select]:              http://uilibrary-docs.terminus.ninja/release/components/TsSelectComponent.html
[docs-selection-list]:      http://uilibrary-docs.terminus.ninja/release/components/TsSelectionListComponent.html
[docs-sort]:                http://uilibrary-docs.terminus.ninja/release/directives/TsSortDirective.html
[docs-spacing]:             http://uilibrary-docs.terminus.ninja/release/directives/TsVerticalSpacingDirective.html
[docs-styles]:              https://github.com/GetTerminus/terminus-oss/tree/release/libs/ui/styles
[docs-table]:               http://uilibrary-docs.terminus.ninja/release/components/TsTableComponent.html
[docs-tabs]:                http://uilibrary-docs.terminus.ninja/release/components/TsTabCollectionComponent.html
[docs-toggle]:              http://uilibrary-docs.terminus.ninja/release/components/TsToggleComponent.html
[docs-tooltip]:             http://uilibrary-docs.terminus.ninja/release/components/TsTooltipComponent.html
[docs-validation-messages]: http://uilibrary-docs.terminus.ninja/release/injectables/TsValidationMessagesComponent.html
[docs-validators]:          http://uilibrary-docs.terminus.ninja/release/injectables/TsValidatorsService.html

<!-- Coverage Badges -->
[cov-badge-autocomplete]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=autocomplete
[cov-badge-autofocus]:          https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=autofocus
[cov-badge-button]:             https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=button
[cov-badge-card]:               https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=card
[cov-badge-chart]:              https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=chart
[cov-badge-checkbox]:           https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=checkbox
[cov-badge-chip]:               https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=chip
[cov-badge-cohortDateRange]:    https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=cohortDateRange
[cov-badge-confirmation]:       https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=confirmation
[cov-badge-copy]:               https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=copy
[cov-badge-csvEntry]:           https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=csvEntry
[cov-badge-dateRange]:          https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=dateRange
[cov-badge-drawer]:             https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=drawer
[cov-badge-expansionPanel]:     https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=expansionPanel
[cov-badge-fileUpload]:         https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=fileUpload
[cov-badge-iconButton]:         https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=iconButton
[cov-badge-icon]:               https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=icon
[cov-badge-input]:              https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=input
[cov-badge-link]:               https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=link
[cov-badge-loadingOverlay]:     https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=loadingOverlay
[cov-badge-loginForm]:          https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=loginForm
[cov-badge-logo]:               https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=logo
[cov-badge-menu]:               https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=menu
[cov-badge-navigation]:         https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=navigation
[cov-badge-paginator]:          https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=paginator
[cov-badge-pipes]:              https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=pipes
[cov-badge-popover]:            https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=popover
[cov-badge-radioGroup]:         https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=radioGroup
[cov-badge-scrollbars]:         https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=scrollbars
[cov-badge-search]:             https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=search
[cov-badge-select]:             https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=select
[cov-badge-selectionList]:      https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=selectionList
[cov-badge-sort]:               https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=sort
[cov-badge-spacing]:            https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=spacing
[cov-badge-table]:              https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=table
[cov-badge-tabs]:               https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=tabs
[cov-badge-toggle]:             https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=toggle
[cov-badge-tooltip]:            https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=tooltip
[cov-badge-validationMessages]: https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=validationMessages
[cov-badge-validators]:         https://codecov.io/gh/GetTerminus/terminus-oss/branch/release/graph/badge.svg?flag=validators

<!-- Version Badges -->
<!-- @latest -->
[badge-latest-tokens]:             https://img.shields.io/npm/v/@terminus/design-tokens/latest?color=%2345aaf2
[badge-latest-eslint-config]:      https://img.shields.io/npm/v/@terminus/eslint-config-frontend/latest?color=%2345aaf2
[badge-latest-stylelint-config]:   https://img.shields.io/npm/v/@terminus/stylelint-config-frontend/latest?color=%2345aaf2
[badge-latest-autocomplete]:       https://img.shields.io/npm/v/@terminus/ui-autocomplete/latest?color=%2345aaf2
[badge-latest-autofocus]:          https://img.shields.io/npm/v/@terminus/ui-autofocus/latest?color=%2345aaf2
[badge-latest-button]:             https://img.shields.io/npm/v/@terminus/ui-button/latest?color=%2345aaf2
[badge-latest-card]:               https://img.shields.io/npm/v/@terminus/ui-card/latest?color=%2345aaf2
[badge-latest-chart]:              https://img.shields.io/npm/v/@terminus/ui-chart/latest?color=%2345aaf2
[badge-latest-chip]:               https://img.shields.io/npm/v/@terminus/ui-chip/latest?color=%2345aaf2
[badge-latest-checkbox]:           https://img.shields.io/npm/v/@terminus/ui-checkbox/latest?color=%2345aaf2
[badge-latest-cohortDateRange]:    https://img.shields.io/npm/v/@terminus/ui-cohort-date-range/latest?color=%2345aaf2
[badge-latest-confirmation]:       https://img.shields.io/npm/v/@terminus/ui-confirmation/latest?color=%2345aaf2
[badge-latest-copy]:               https://img.shields.io/npm/v/@terminus/ui-copy/latest?color=%2345aaf2
[badge-latest-csvEntry]:           https://img.shields.io/npm/v/@terminus/ui-csv-entry/latest?color=%2345aaf2
[badge-latest-dateRange]:          https://img.shields.io/npm/v/@terminus/ui-date-range/latest?color=%2345aaf2
[badge-latest-drawer]:             https://img.shields.io/npm/v/@terminus/ui-drawer/latest?color=%2345aaf2
[badge-latest-expansionPanel]:     https://img.shields.io/npm/v/@terminus/ui-expansion-panel/latest?color=%2345aaf2
[badge-latest-fileUpload]:         https://img.shields.io/npm/v/@terminus/ui-file-upload/latest?color=%2345aaf2
[badge-latest-icon]:               https://img.shields.io/npm/v/@terminus/ui-icon/latest?color=%2345aaf2
[badge-latest-iconButton]:         https://img.shields.io/npm/v/@terminus/ui-icon-button/latest?color=%2345aaf2
[badge-latest-input]:              https://img.shields.io/npm/v/@terminus/ui-input/latest?color=%2345aaf2
[badge-latest-link]:               https://img.shields.io/npm/v/@terminus/ui-link/latest?color=%2345aaf2
[badge-latest-loadingOverlay]:     https://img.shields.io/npm/v/@terminus/ui-loading-overlay/latest?color=%2345aaf2
[badge-latest-loginForm]:          https://img.shields.io/npm/v/@terminus/ui-login-form/latest?color=%2345aaf2
[badge-latest-logo]:               https://img.shields.io/npm/v/@terminus/ui-logo/latest?color=%2345aaf2
[badge-latest-menu]:               https://img.shields.io/npm/v/@terminus/ui-menu/latest?color=%2345aaf2
[badge-latest-navigation]:         https://img.shields.io/npm/v/@terminus/ui-navigation/latest?color=%2345aaf2
[badge-latest-paginator]:          https://img.shields.io/npm/v/@terminus/ui-paginator/latest?color=%2345aaf2
[badge-latest-pipes]:              https://img.shields.io/npm/v/@terminus/ui-pipes/latest?color=%2345aaf2
[badge-latest-popover]:            https://img.shields.io/npm/v/@terminus/ui-popover/latest?color=%2345aaf2
[badge-latest-radioGroup]:         https://img.shields.io/npm/v/@terminus/ui-radio-group/latest?color=%2345aaf2
[badge-latest-scrollbars]:         https://img.shields.io/npm/v/@terminus/ui-scrollbars/latest?color=%2345aaf2
[badge-latest-search]:             https://img.shields.io/npm/v/@terminus/ui-search/latest?color=%2345aaf2
[badge-latest-select]:             https://img.shields.io/npm/v/@terminus/ui-select/latest?color=%2345aaf2
[badge-latest-selectionList]:      https://img.shields.io/npm/v/@terminus/ui-selection-list/latest?color=%2345aaf2
[badge-latest-spacing]:            https://img.shields.io/npm/v/@terminus/ui-spacing/latest?color=%2345aaf2
[badge-latest-sort]:               https://img.shields.io/npm/v/@terminus/ui-sort/latest?color=%2345aaf2
[badge-latest-styles]:             https://img.shields.io/npm/v/@terminus/ui-styles/latest?color=%2345aaf2
[badge-latest-table]:              https://img.shields.io/npm/v/@terminus/ui-table/latest?color=%2345aaf2
[badge-latest-tabs]:               https://img.shields.io/npm/v/@terminus/ui-tabs/latest?color=%2345aaf2
[badge-latest-toggle]:             https://img.shields.io/npm/v/@terminus/ui-toggle/latest?color=%2345aaf2
[badge-latest-tooltip]:            https://img.shields.io/npm/v/@terminus/ui-tooltip/latest?color=%2345aaf2
[badge-latest-validationMessages]: https://img.shields.io/npm/v/@terminus/ui-validation-messages/latest?color=%2345aaf2
[badge-latest-validators]:         https://img.shields.io/npm/v/@terminus/ui-validators/latest?color=%2345aaf2
<!-- @next -->
[badge-next-tokens]:             https://img.shields.io/npm/v/@terminus/design-tokens/next?color=%2345aaf2
[badge-next-eslint-config]:      https://img.shields.io/npm/v/@terminus/eslint-config-frontend/next?color=%2345aaf2
[badge-next-stylelint-config]:   https://img.shields.io/npm/v/@terminus/stylelint-config-frontend/next?color=%2345aaf2
[badge-next-autocomplete]:       https://img.shields.io/npm/v/@terminus/ui-autocomplete/next?color=%2345aaf2
[badge-next-autofocus]:          https://img.shields.io/npm/v/@terminus/ui-autofocus/next?color=%2345aaf2
[badge-next-button]:             https://img.shields.io/npm/v/@terminus/ui-button/next?color=%2345aaf2
[badge-next-card]:               https://img.shields.io/npm/v/@terminus/ui-card/next?color=%2345aaf2
[badge-next-chart]:              https://img.shields.io/npm/v/@terminus/ui-chart/next?color=%2345aaf2
[badge-next-chip]:               https://img.shields.io/npm/v/@terminus/ui-chip/next?color=%2345aaf2
[badge-next-checkbox]:           https://img.shields.io/npm/v/@terminus/ui-checkbox/next?color=%2345aaf2
[badge-next-cohortDateRange]:    https://img.shields.io/npm/v/@terminus/ui-cohort-date-range/next?color=%2345aaf2
[badge-next-confirmation]:       https://img.shields.io/npm/v/@terminus/ui-confirmation/next?color=%2345aaf2
[badge-next-copy]:               https://img.shields.io/npm/v/@terminus/ui-copy/next?color=%2345aaf2
[badge-next-csvEntry]:           https://img.shields.io/npm/v/@terminus/ui-csv-entry/next?color=%2345aaf2
[badge-next-dateRange]:          https://img.shields.io/npm/v/@terminus/ui-date-range/next?color=%2345aaf2
[badge-next-drawer]:             https://img.shields.io/npm/v/@terminus/ui-drawer/next?color=%2345aaf2
[badge-next-expansionPanel]:     https://img.shields.io/npm/v/@terminus/ui-expansion-panel/next?color=%2345aaf2
[badge-next-fileUpload]:         https://img.shields.io/npm/v/@terminus/ui-file-upload/next?color=%2345aaf2
[badge-next-icon]:               https://img.shields.io/npm/v/@terminus/ui-icon/next?color=%2345aaf2
[badge-next-iconButton]:         https://img.shields.io/npm/v/@terminus/ui-icon-button/next?color=%2345aaf2
[badge-next-input]:              https://img.shields.io/npm/v/@terminus/ui-input/next?color=%2345aaf2
[badge-next-link]:               https://img.shields.io/npm/v/@terminus/ui-link/next?color=%2345aaf2
[badge-next-loadingOverlay]:     https://img.shields.io/npm/v/@terminus/ui-loading-overlay/next?color=%2345aaf2
[badge-next-loginForm]:          https://img.shields.io/npm/v/@terminus/ui-login-form/next?color=%2345aaf2
[badge-next-logo]:               https://img.shields.io/npm/v/@terminus/ui-logo/next?color=%2345aaf2
[badge-next-menu]:               https://img.shields.io/npm/v/@terminus/ui-menu/next?color=%2345aaf2
[badge-next-navigation]:         https://img.shields.io/npm/v/@terminus/ui-navigation/next?color=%2345aaf2
[badge-next-paginator]:          https://img.shields.io/npm/v/@terminus/ui-paginator/next?color=%2345aaf2
[badge-next-pipes]:              https://img.shields.io/npm/v/@terminus/ui-pipes/next?color=%2345aaf2
[badge-next-popover]:            https://img.shields.io/npm/v/@terminus/ui-popover/next?color=%2345aaf2
[badge-next-radioGroup]:         https://img.shields.io/npm/v/@terminus/ui-radio-group/next?color=%2345aaf2
[badge-next-scrollbars]:         https://img.shields.io/npm/v/@terminus/ui-scrollbars/next?color=%2345aaf2
[badge-next-search]:             https://img.shields.io/npm/v/@terminus/ui-search/next?color=%2345aaf2
[badge-next-select]:             https://img.shields.io/npm/v/@terminus/ui-select/next?color=%2345aaf2
[badge-next-selectionList]:      https://img.shields.io/npm/v/@terminus/ui-selection-list/next?color=%2345aaf2
[badge-next-spacing]:            https://img.shields.io/npm/v/@terminus/ui-spacing/next?color=%2345aaf2
[badge-next-sort]:               https://img.shields.io/npm/v/@terminus/ui-sort/next?color=%2345aaf2
[badge-next-styles]:             https://img.shields.io/npm/v/@terminus/ui-styles/next?color=%2345aaf2
[badge-next-table]:              https://img.shields.io/npm/v/@terminus/ui-table/next?color=%2345aaf2
[badge-next-tabs]:               https://img.shields.io/npm/v/@terminus/ui-tabs/next?color=%2345aaf2
[badge-next-toggle]:             https://img.shields.io/npm/v/@terminus/ui-toggle/next?color=%2345aaf2
[badge-next-tooltip]:            https://img.shields.io/npm/v/@terminus/ui-tooltip/next?color=%2345aaf2
[badge-next-validationMessages]: https://img.shields.io/npm/v/@terminus/ui-validation-messages/next?color=%2345aaf2
[badge-next-validators]:         https://img.shields.io/npm/v/@terminus/ui-validators/next?color=%2345aaf2
