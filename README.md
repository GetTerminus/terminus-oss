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


|                      Package                      |                        Description                        |               Demo               |                 Docs                 |
|---------------------------------------------------|-----------------------------------------------------------|----------------------------------|--------------------------------------|
| ui-autocomplete                                   | Deprecated. See `selection-list`                          | [Demo][demo-autocomplete]        | [Docs][docs-autocomplete]            |
| [ui-autofocus][src-autofocus]                     | Focus a focusable element on load                         | [Demo][demo-autofocus]           | [Docs][docs-autofocus]               |
| badge                                             | See `chip`                                                | [Demo][demo-chip]                |                                      |
| [ui-button][src-button]                           |                                                           | [Demo][demo-button]              | [Docs][docs-button]                  |
| [ui-card][src-card]                               | Presentational card                                       | [Demo][demo-card]                | [Docs][docs-card]                    |
| [ui-chart][src-chart]                             | Charts, graphs etc                                        | [Demo][demo-chart]               | [Docs][docs-chart]                   |
| [ui-chip][src-chip]                               | Chip                                                      | [Demo][demo-chip]                | [Docs][docs-chip]                    |
| [ui-checkbox][src-checkbox]                       |                                                           | [Demo][demo-checkbox]            | [Docs][docs-checkbox]                |
| [ui-cohort-date-range][src-cohort-date-range]     | CohortDateRange                                           | [Demo][demo-cohort-date-range]   | [Docs][docs-cohort-date-range]       |
| [ui-confirmation][src-confirmation]               | Add a confirmation step to any `ts-button`                | [Demo][demo-confirmation]        | [Docs][docs-confirmation]            |
| [ui-copy][src-copy]                               | Component to easily copy string values                    | [Demo][demo-copy]                | [Docs][docs-copy]                    |
| [ui-csv-entry][src-csv-entry]                     | Manually enter CSV values                                 | [Demo][demo-csv-entry]           | [Docs][docs-csv-entry]               |
| [ui-datepicker][src-input]                        | See `TsInputComponent`                                    | [Demo][demo-input]               | [Docs][docs-input]                   |
| [ui-date-range][src-date-range]                   | Dual inputs with calendar pop-ups                         | [Demo][demo-date-range]          | [Docs][docs-date-range]              |
| [ui-drawer][src-drawer]                           | Slide-out drawer panel                                    | [Demo][demo-drawer]              | [Docs][docs-drawer]                  |
| [ui-expansion-panel][src-expansion-panel]         | Expansion panel with accordion & stepper functionality    | [Demo][demo-expansion-panel]     | [Docs][docs-expansion-panel]         |
| [ui-file-upload][src-file-upload]                 | File upload with drag and drop                            | [Demo][demo-file-upload]         | [Docs][docs-file-upload]             |
| [ui-icon][src-icon]                               | Supported icons: https://material.io/icons                | [Demo][demo-icon]                | [Docs][docs-icon]                    |
| [ui-icon-button][src-icon-button]                 | Icon only button                                          | [Demo][demo-icon-button]         | [Docs][docs-icon-button]             |
| [ui-input][src-input]                             | Input with masking, datepicker, etc                       | [Demo][demo-input]               | [Docs][docs-input]                   |
| [ui-link][src-link]                               |                                                           | [Demo][demo-link]                | [Docs][docs-link]                    |
| [ui-loading overlay][src-loading-overlay]         | Overlay with loading spinner                              | [Demo][demo-loading-overlay]     | [Docs][docs-loading-overlay]         |
| [ui-login form][src-login-form]                   | Email/password with 'remember me' checkbox                | [Demo][demo-log-in-form]         | [Docs][docs-login-form]              |
| [ui-logo][src-logo]                               | Variations of the official logo, certain colors available | [Demo][demo-logo]                | [Docs][docs-logo]                    |
| [ui-menu][src-menu]                               |                                                           | [Demo][demo-menu]                | [Docs][docs-menu]                    |
| [ui-navigation][src-navigation]                   | Global navigation menu                                    | [Demo][demo-navigation]          | [Docs][docs-navigation]              |
| [ui-paginator][src-paginator]                     | Paging controls for collections                           | [Demo][demo-paginator]           | [Docs][docs-paginator]               |
| [ui-pipes][src-pipes]                             | A collection of pipes for Angular                         | [Demo][demo-pipes]               | [Docs][docs-pipes]                   |
| [ui-popover][src-popover]                         | Popover with templates                                    | [Demo][demo-popover]             | [Docs][docs-popover]                 |
| [ui-radio-group][src-radio-group]                 |                                                           | [Demo][demo-radio-group]         | [Docs][docs-radio-group]             |
| [ui-scrollbars][src-scrollbars]                   | Custom scrollbars for both axis'                          | [Demo][demo-scrollbars]          | [Docs][docs-scrollbars]              |
| [ui-search][src-search]                           | Input with search capabilities                            | [Demo][demo-search]              | [Docs][docs-search]                  |
| select                                            | Deprecated. See `selection-list`                          | [Demo][demo-select]              | [Docs][docs-select]                  |
| [ui-selection-list][src-selection-list]           | Classic select dropdown / autocomplete                    | [Demo][demo-selection-list]      | [Docs][docs-selection-list]          |
| [ui-spacing][src-spacing]                         | Helpers for consistent spacing                            | [Demo][demo-spacing]             | [Docs][docs-spacing]                 |
| [ui-sort][src-sort]                               | Used by `table` for column sorting                        | <small>(see table demo)</small>  | [Docs][docs-sort]                    |
| [ui-table][src-table]                             |                                                           | [Demo][demo-table]               | [Docs][docs-table]                   |
| [ui-tabs][src-tabs]                               | Horizontal tab interface                                  | [Demo][demo-tabs]                | [Docs][docs-tabs]                    |
| textarea                                          | See `input`                                               | <small>(see input demo)</small>  |                                      |
| [ui-toggle][src-toggle]                           | Toggle switch                                             | [Demo][demo-toggle]              | [Docs][docs-toggle]                  |
| [ui-tooltip][src-tooltip]                         | Simple tooltip                                            | [Demo][demo-tooltip]             | [Docs][docs-tooltip]                 |
| [ui-validation-messages][src-validation-messages] | A component to display form validation errors             | [Demo][demo-validation-messages] | [Docs][docs-validation-messages]     |
| [ui-validators][src-validators]                   | A collection of form validators                           | [Demo][demo-validators]          | [Docs][docs-validators]              |






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
[src-selection-list]:      https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/selection-list/
[src-sort]:                https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/sort/
[src-spacing]:             https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/spacing/
[src-table]:               https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/table/
[src-tabs]:                https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/tabs/
[src-toggle]:              https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/toggle/
[src-tooltip]:             https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/tooltip/
[src-validation-messages]: https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/validation-messages/
[src-validators]:          https://github.com/GetTerminus/terminus-oss/blob/master/libs/ui/validators/

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
[docs-table]:               http://uilibrary-docs.terminus.ninja/release/components/TsTableComponent.html
[docs-tabs]:                http://uilibrary-docs.terminus.ninja/release/components/TsTabCollectionComponent.html
[docs-toggle]:              http://uilibrary-docs.terminus.ninja/release/components/TsToggleComponent.html
[docs-tooltip]:             http://uilibrary-docs.terminus.ninja/release/components/TsTooltipComponent.html
[docs-validation-messages]: http://uilibrary-docs.terminus.ninja/release/injectables/TsValidationMessagesComponent.html
[docs-validators]:          http://uilibrary-docs.terminus.ninja/release/injectables/TsValidatorsService.html
