# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-selection-list@2.0.1...@terminus/ui-selection-list@2.0.2) (2020-07-28)

**Note:** Version bump only for package @terminus/ui-selection-list





## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-selection-list@2.0.0...@terminus/ui-selection-list@2.0.1) (2020-07-28)


### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))





# 2.0.0 (2020-07-27)


### Features

* **SelectionList:** change icon library ([ff94744](https://github.com/GetTerminus/terminus-oss/commit/ff9474441a4cdd4c6e399c7bf65b508cc8ba98a0))


### BREAKING CHANGES

* **SelectionList:** change icon library

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




## [1.0.9](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-selection-list@1.0.8...@terminus/ui-selection-list@1.0.9) (2020-07-13)

**Note:** Version bump only for package @terminus/ui-selection-list





## 1.0.8 (2020-07-13)


### Bug Fixes

* **ESLintConfig:** add build command ([b38ada9](https://github.com/GetTerminus/terminus-oss/commit/b38ada91d034ebe18b96f46b603b13b0ccbca5c0))
* **SelectionList:** use custom css properties ([3dbdfc6](https://github.com/GetTerminus/terminus-oss/commit/3dbdfc6f520c1fea0acc3c7225fe98470a27dfbd))





## [1.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-selection-list@1.0.6...@terminus/ui-selection-list@1.0.7) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-selection-list





## 1.0.6 (2020-06-23)

**Note:** Version bump only for package @terminus/ui-selection-list





## [1.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-selection-list@1.0.4...@terminus/ui-selection-list@1.0.5) (2020-06-10)


### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))





## [1.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-selection-list@1.0.3...@terminus/ui-selection-list@1.0.4) (2020-06-10)


### Bug Fixes

* **SelectionList:** update peer deps ([165f32c](https://github.com/GetTerminus/terminus-oss/commit/165f32c987eb351bf6f46eb398450a66f326d70a))
