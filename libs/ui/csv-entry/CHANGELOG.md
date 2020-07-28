# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-csv-entry@2.0.0...@terminus/ui-csv-entry@2.0.1) (2020-07-28)


### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))





# [2.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-csv-entry@1.0.8...@terminus/ui-csv-entry@2.0.0) (2020-07-27)


### Bug Fixes

* **CSVEntry:** new button themes configuration ([385a848](https://github.com/GetTerminus/terminus-oss/commit/385a848c53cd226b8c54f90c0377b83f7a64a2b3))


### Features

* **CSVEntry:** change icon library ([91fdf72](https://github.com/GetTerminus/terminus-oss/commit/91fdf721f22fdd7e23d6a9bc52bcf31b38831b34))


### BREAKING CHANGES

* **CSVEntry:** New button themes configuration
* **CSVEntry:** Change icon library

#### Migration Notes

##### CSS Resources

Remove any imports or `<link>` tags importing Material Icons:

```diff
-<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Update the imported font families:

```diff
-<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
+<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
```




## [1.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-csv-entry@1.0.7...@terminus/ui-csv-entry@1.0.8) (2020-07-24)

**Note:** Version bump only for package @terminus/ui-csv-entry





## [1.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-csv-entry@1.0.6...@terminus/ui-csv-entry@1.0.7) (2020-07-14)


### Bug Fixes

* **CSVEntry:** Fix for rtl custom content ([1e1ea45](https://github.com/GetTerminus/terminus-oss/commit/1e1ea45b8d02a0bae559b158a7f48814bdaf35a3))
* **CSVEntry:** use custom css properties ([a4960ab](https://github.com/GetTerminus/terminus-oss/commit/a4960abdc7bdf0c30a024d8d9394ed23386d4d1b)), closes [#108](https://github.com/GetTerminus/terminus-oss/issues/108)





## 1.0.6 (2020-07-13)

**Note:** Version bump only for package @terminus/ui-csv-entry





## [1.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-csv-entry@1.0.4...@terminus/ui-csv-entry@1.0.5) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-csv-entry





## 1.0.4 (2020-06-23)

**Note:** Version bump only for package @terminus/ui-csv-entry





## 1.0.3 (2020-06-10)


### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))





## 1.0.2 (2020-06-09)


### Bug Fixes

* **Button:** update ([a47f307](https://github.com/GetTerminus/terminus-oss/commit/a47f30757b9216d6ee76788c117e76eacf5289e5))
