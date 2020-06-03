# Terminus Open-Source Software

The monorepo that contains all Terminus open-source libraries and tools.

[![CircleCI][circle-badge]][circle-link]
[![codecov][codecov-badge]][codecov-project]
[![DavidDM][david-badge]][david-link]
[![DavidDM Dev][david-dev-badge]][david-link]
<br>
[![semantic-release][semantic-release-badge]][semantic-release]
[![Renovate][renovate-badge]][renovate-link]
[![MIT License][license-image]][license-url]
[![ZenHub][zenhub-image]][zenhub-url]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Packages](#packages)
- [Useful commands](#useful-commands)
- [Resources](#resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Packages


|                      Package                      |                        Description                        |               Demo               |                 Docs                 |                   Legacy Code                     |
|---------------------------------------------------|-----------------------------------------------------------|----------------------------------|--------------------------------------|---------------------------------------------------|
| [ui-autocomplete][src-autocomplete]               | Deprecated. See `selection-list`                          | [Demo][demo-autocomplete]        | [Docs][docs-autocomplete]            | [Legacy Code][legacy-src-autocomplete]            |
| [ui-autofocus][src-autofocus]                     | Focus a focusable element on load                         | [Demo][demo-autofocus]           | [Docs][docs-autofocus]               | [Legacy Code][legacy-src-autofocus]               | 
| badge                                             | See `chip`                                                | [Demo][demo-chip]                |                                      | [Legacy Code][legacy-src-chip]                    |
| [ui-button][src-button]                           |                                                           | [Demo][demo-button]              | [Docs][docs-button]                  | [Legacy Code][legacy-src-button]                  |
| [ui-card][src-card]                               | Presentational card                                       | [Demo][demo-card]                | [Docs][docs-card]                    | [Legacy Code][legacy-src-card]                    |
| [ui-chart][src-chart]                             | Charts, graphs etc                                        | [Demo][demo-chart]               | [Docs][docs-chart]                   | [Legacy Code][legacy-src-chart]                   |
| [ui-chip][src-chip]                               | Chip                                                      | [Demo][demo-chip]                | [Docs][docs-chip]                    | [Legacy Code][legacy-src-chip]                    |
| [ui-checkbox][src-checkbox]                       |                                                           | [Demo][demo-checkbox]            | [Docs][docs-checkbox]                | [Legacy Code][legacy-src-checkbox]                |
| [ui-cohort-date-range][src-cohort-date-range]     | CohortDateRange                                           | [Demo][demo-cohort-date-range]   | [Docs][docs-cohort-date-range]       | [Legacy Code][legacy-src-cohort-date-range]       |
| [ui-confirmation][src-confirmation]               | Add a confirmation step to any `ts-button`                | [Demo][demo-confirmation]        | [Docs][docs-confirmation]            | [Legacy Code][legacy-src-confirmation]            |
| [ui-copy][src-copy]                               | Component to easily copy string values                    | [Demo][demo-copy]                | [Docs][docs-copy]                    | [Legacy Code][legacy-src-copy]                    |
| [ui-csv-entry][src-csv-entry]                     | Manually enter CSV values                                 | [Demo][demo-csv-entry]           | [Docs][docs-csv-entry]               | [Legacy Code][legacy-src-csv-entry]               |
| [ui-datepicker][src-input]                        | See `TsInputComponent`                                    | [Demo][demo-input]               | [Docs][docs-input]                   | [Legacy Code][legacy-src-input]                   |
| [ui-date-range][src-date-range]                   | Dual inputs with calendar pop-ups                         | [Demo][demo-date-range]          | [Docs][docs-date-range]              | [Legacy Code][legacy-src-date-range]              |
| [ui-drawer][src-drawer]                           | Slide-out drawer panel                                    | [Demo][demo-drawer]              | [Docs][docs-drawer]                  | [Legacy Code][legacy-src-drawer]                  |
| [ui-expansion-panel][src-expansion-panel]         | Expansion panel with accordion & stepper functionality    | [Demo][demo-expansion-panel]     | [Docs][docs-expansion-panel]         | [Legacy Code][legacy-src-expansion-panel]         |
| [ui-file-upload][src-file-upload]                 | File upload with drag and drop                            | [Demo][demo-file-upload]         | [Docs][docs-file-upload]             | [Legacy Code][legacy-src-file-upload]             |
| [ui-icon][src-icon]                               | Supported icons: https://material.io/icons                | [Demo][demo-icon]                | [Docs][docs-icon]                    | [Legacy Code][legacy-src-icon]                    |
| [ui-icon-button][src-icon-button]                 | Icon only button                                          | [Demo][demo-icon-button]         | [Docs][docs-icon-button]             | [Legacy Code][legacy-src-icon-button]             |
| [ui-input][src-input]                             | Input with masking, datepicker, etc                       | [Demo][demo-input]               | [Docs][docs-input]                   | [Legacy Code][legacy-src-input]                   |
| [ui-link][src-link]                               |                                                           | [Demo][demo-link]                | [Docs][docs-link]                    | [Legacy Code][legacy-src-link]                    |
| [ui-loading overlay][src-loading-overlay]         | Overlay with loading spinner                              | [Demo][demo-loading-overlay]     | [Docs][docs-loading-overlay]         | [Legacy Code][legacy-src-loading-overlay]         |
| [ui-login form][src-login-form]                   | Email/password with 'remember me' checkbox                | [Demo][demo-log-in-form]         | [Docs][docs-login-form]              | [Legacy Code][legacy-src-login-form]              |
| [ui-logo][src-logo]                               | Variations of the official logo, certain colors available | [Demo][demo-logo]                | [Docs][docs-logo]                    | [Legacy Code][legacy-src-logo]                    |
| [ui-menu][src-menu]                               |                                                           | [Demo][demo-menu]                | [Docs][docs-menu]                    | [Legacy Code][legacy-src-menu]                    |
| [ui-navigation][src-navigation]                   | Global navigation menu                                    | [Demo][demo-navigation]          | [Docs][docs-navigation]              | [Legacy Code][legacy-src-navigation]              |
| [ui-paginator][src-paginator]                     | Paging controls for collections                           | [Demo][demo-paginator]           | [Docs][docs-paginator]               | [Legacy Code][legacy-src-paginator]               |
| [ui-pipes][src-pipes]                             | A collection of pipes for Angular                         | [Demo][demo-pipes]               | [Docs][docs-pipes]                   | [Legacy Code][legacy-src-pipes]                   |
| [ui-popover][src-popover]                         | Popover with templates                                    | [Demo][demo-popover]             | [Docs][docs-popover]                 | [Legacy Code][legacy-src-popover]                 |
| [ui-radio-group][src-radio-group]                 |                                                           | [Demo][demo-radio-group]         | [Docs][docs-radio-group]             | [Legacy Code][legacy-src-radio-group]             |
| [ui-scrollbars][src-scrollbars]                   | Custom scrollbars for both axis'                          | [Demo][demo-scrollbars]          | [Docs][docs-scrollbars]              | [Legacy Code][legacy-src-scrollbars]              |
| [ui-search][src-search]                           | Input with search capabilities                            | [Demo][demo-search]              | [Docs][docs-search]                  | [Legacy Code][legacy-src-search]                  |
| [ui-select][src-select]                           | Deprecated. See `selection-list`                          | [Demo][demo-select]              | [Docs][docs-select]                  | [Legacy Code][legacy-src-select]                  |
| [ui-selection-list][src-selection-list]           | Classic select dropdown / autocomplete                    | [Demo][demo-selection-list]      | [Docs][docs-selection-list]          | [Legacy Code][legacy-src-selection-list]          |
| [ui-spacing][src-spacing]                         | Helpers for consistent spacing                            | [Demo][demo-spacing]             | [Docs][docs-spacing]                 | [Legacy Code][legacy-src-spacing]                 |
| [ui-sort][src-sort]                               | Used by `table` for column sorting                        | <small>(see table demo)</small>  | [Docs][docs-sort]                    | [Legacy Code][legacy-src-sort]                    |
| [ui-styles][src-styles]                           | A collection of base CSS, SCSS mixins and functions.      |                                  | [Docs][docs-styles]                  |                                                   |
| [ui-table][src-table]                             |                                                           | [Demo][demo-table]               | [Docs][docs-table]                   | [Legacy Code][legacy-src-table]                   |
| [ui-tabs][src-tabs]                               | Horizontal tab interface                                  | [Demo][demo-tabs]                | [Docs][docs-tabs]                    | [Legacy Code][legacy-src-tabs]                    |
| textarea                                          | See `input`                                               | <small>(see input demo)</small>  |                                      |                                                   |
| [ui-toggle][src-toggle]                           | Toggle switch                                             | [Demo][demo-toggle]              | [Docs][docs-toggle]                  | [Legacy Code][legacy-src-toggle]                  |
| [ui-tooltip][src-tooltip]                         | Simple tooltip                                            | [Demo][demo-tooltip]             | [Docs][docs-tooltip]                 | [Legacy Code][legacy-src-tooltip]                 |
| [ui-validation-messages][src-validation-messages] | A component to display form validation errors             | [Demo][demo-validation-messages] | [Docs][docs-validation-messages]     | [Legacy Code][legacy-src-validation-messages]     |
| [ui-validators][src-validators]                   | A collection of form validators                           | [Demo][demo-validators]          | [Docs][docs-validators]              | [Legacy Code][legacy-src-validators]              |






## Useful commands

(temporary - will move to development readme)

```bash
# Run commands on all projects:
# NOTE: Currently there is no command to build all libraries only - when running all, 
#   all libraries and all applications will be built.
$ nx run-many --target=test --all
$ nx run-many --target=e2e --all
$ nx run-many --target=build --all

# Build a single project
$ nx build my-project

# Linting
# NOTE: Currently we cannot use the built in NX lint tools as they still rely on TSLint. For now we
# rely on custom commands:
$ yarn run lint[:fix]
$ yarn run libraries:lint[:fix]
$ yarn run apps:lint[:fix]

# View a graph of the dependencies:
$ nx dep-graph

# Use schematics to generate within a project:
$ nx g component my-component --project=my-project --export

# Serve a project:
$ nx serve my-project

# Print info about affected files:
$ nx print-affected

# Only run commands on affected projects:
# Note: You can swap out 'test' for 'lint', 'e2e', 'apps', or 'libs'
$ nx affected:test
$ nx affected:test --parallel --maxParallel=5
$ nx affected:test --only-failed
$ nx affected:test --all
$ nx affected:test --base=master --head=HEAD
$ nx affected:test --base=master~1 --head=master

# Generate code coverage:
$ nx test my-project --code-coverage

# List installed and available NX plugins:
$ nx list

# Manually linting (until the CLI migrates to ESLint):
$ yarn run lint:libs
$ yarn run lint:libs:fix
$ yarn run lint:apps
$ yarn run lint:apps:fix

# Help
$ yarn run help
```






## Resources

- NX
    - [Nx Angular][nx-angular]
    - [10-minute video showing all Nx features][nx-video]
    - [NX Jest][nx-jest]
    - [NX Cypress][nx-cypress]
    - [NX Web Elements][nx-web-elements]
    - [NX React][nx-react]
- [Semantic Release][semantic-release] - Automatically release versioned release to NPM, generate a changelog etc.
- [Commitizen][commitizen] - Interactive cli for enforcing commit message format.
- [Doctoc][doctoc] - Generate documentation table of contents.
- [CodeCov][codecov] - Code coverage reporting.


<!-- Links -->
[codecov]:          https://codecov.io
[commitizen]:       https://github.com/commitizen
[doctoc]:           https://github.com/thlorenz/doctoc
[semantic-release]: https://github.com/semantic-release/semantic-release
[nx-angular]:       https://nx.dev/angular
[nx-video]:         https://nx.dev/angular/getting-started/what-is-nx
[nx-jest]:          https://nx.dev/angular/plugins/jest/overview
[nx-cypress]:       https://nx.dev/angular/plugins/cypress/overview
[nx-web-elements]:  https://nx.dev/angular/plugins/web/overview
[nx-react]:         https://nx.dev/angular/plugins/react/overview

[codecov-project]:  https://codecov.io/gh/GetTerminus/terminus-ui
[circle-link]:      https://circleci.com/gh/GetTerminus/terminus-oss/tree/master
[renovate-badge]:   https://img.shields.io/badge/renovate-enabled-brightgreen.svg
[renovate-link]:    https://renovatebot.com
[david-dev-badge]:  https://david-dm.org/GetTerminus/terminus-oss/dev-status.svg
[david-badge]:      https://david-dm.org/GetTerminus/terminus-oss.svg
[david-link]:       https://david-dm.org/GetTerminus/terminus-oss?view=list
[license-url]:      https://github.com/GetTerminus/terminus-ui/blob/release/LICENSE
[zenhub-image]:     https://dxssrr2j0sq4w.cloudfront.net/3.2.0/img/external/zenhub-badge.png
[zenhub-url]:       https://github.com/GetTerminus/terminus-oss#zenhub

<!-- Source Directories -->
[src-autocomplete]:        https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/autocomplete/
[src-autofocus]:           https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/autofocus/
[src-button]:              https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/button/
[src-card]:                https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/card/
[src-chart]:               https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/chart/
[src-checkbox]:            https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/checkbox/
[src-chip]:                https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/chip/
[src-cohort-date-range]:   https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/cohort-date-range/
[src-confirmation]:        https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/confirmation/
[src-copy]:                https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/copy/
[src-csv-entry]:           https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/csv-entry/
[src-date-range]:          https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/date-range/
[src-drawer]:              https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/drawer/
[src-expansion-panel]:     https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/expansion-panel/
[src-file-upload]:         https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/file-upload/
[src-icon-button]:         https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/icon-button/
[src-icon]:                https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/icon/
[src-input]:               https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/input/
[src-link]:                https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/link/
[src-loading-overlay]:     https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/loading-overlay/
[src-login-form]:          https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/login-form/
[src-logo]:                https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/logo/
[src-menu]:                https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/menu/
[src-navigation]:          https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/navigation/
[src-paginator]:           https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/paginator/
[src-pipes]:               https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/pipes/
[src-popover]:             https://github.com/Getterminus/terminus-oss/blob/master/libs/ui/popover/
[src-radio-group]:         https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/radio-group/
[src-scrollbars]:          https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/scrollbars/
[src-search]:              https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/search/
[src-select]:              https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/select/
[src-selection-list]:      https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/selection-list/
[src-sort]:                https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/sort/
[src-spacing]:             https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/spacing/
[src-styles]:              https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/styles/
[src-table]:               https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/table/
[src-tabs]:                https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/tabs/
[src-toggle]:              https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/toggle/
[src-tooltip]:             https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/tooltip/
[src-validation-messages]: https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/validation-messages/
[src-validators]:          https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/validators/

<!-- Legacy source code -->

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

<!-- TODO: Verify links are still correct after the move -->
<!-- Demos -->
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

<!-- TODO: Verify links are still correct after the move -->
<!-- TS Primary Docs -->
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
[docs-styles]:              https://github.com/GetTerminus/terminus-oss/tree/master/libs/ui/styles
[docs-table]:               http://uilibrary-docs.terminus.ninja/release/components/TsTableComponent.html
[docs-tabs]:                http://uilibrary-docs.terminus.ninja/release/components/TsTabCollectionComponent.html
[docs-toggle]:              http://uilibrary-docs.terminus.ninja/release/components/TsToggleComponent.html
[docs-tooltip]:             http://uilibrary-docs.terminus.ninja/release/components/TsTooltipComponent.html
[docs-validation-messages]: http://uilibrary-docs.terminus.ninja/release/injectables/TsValidationMessagesComponent.html
[docs-validators]:          http://uilibrary-docs.terminus.ninja/release/injectables/TsValidatorsService.html
