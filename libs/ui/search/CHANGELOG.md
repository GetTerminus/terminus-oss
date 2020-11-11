# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@3.0.1...@terminus/ui-search@3.0.2) (2020-11-11)


### Bug Fixes

* **Search:** correct dependencies, move stories ([c5a8c32](https://github.com/GetTerminus/terminus-oss/commit/c5a8c3225a2439a0acf13cd6da9129ce84617ae1))





## [3.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@3.0.0...@terminus/ui-search@3.0.1) (2020-11-06)


### Bug Fixes

* **Search:** bump icon package ([7c05afe](https://github.com/GetTerminus/terminus-oss/commit/7c05afef030198b75a6292ee52a34e9f2ddf93d8))





# [3.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.1.2...@terminus/ui-search@3.0.0) (2020-10-05)


### Bug Fixes

* **Search:** remove support for theme input ([aa4a8ac](https://github.com/GetTerminus/terminus-oss/commit/aa4a8ac86b286fb5ea83c079e35286b05a9c79f0))


### BREAKING CHANGES

* **Search:** No longer supporting `theme` input. Still supports `buttonTheme`





## [2.1.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.1.1...@terminus/ui-search@2.1.2) (2020-09-14)

**Note:** Version bump only for package @terminus/ui-search





## [2.1.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.1.0...@terminus/ui-search@2.1.1) (2020-09-11)

**Note:** Version bump only for package @terminus/ui-search





# [2.1.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.0.11...@terminus/ui-search@2.1.0) (2020-09-08)


### Features

* clean all markdown ([5249a59](https://github.com/GetTerminus/terminus-oss/commit/5249a59486be63b6d9a0be7a801defb9b6adcedc))





## [2.0.11](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.0.10...@terminus/ui-search@2.0.11) (2020-09-04)

**Note:** Version bump only for package @terminus/ui-search





## [2.0.10](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.0.9...@terminus/ui-search@2.0.10) (2020-09-03)

**Note:** Version bump only for package @terminus/ui-search

## [2.0.9](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.0.8...@terminus/ui-search@2.0.9) (2020-09-01)

### Bug Fixes

* **Search:** correctly disable button when search is disabled ([7430b0f](https://github.com/GetTerminus/terminus-oss/commit/7430b0fa67bf6fb28af57a2b2fee0ed57580a143))

## [2.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.0.7...@terminus/ui-search@2.0.8) (2020-08-14)

**Note:** Version bump only for package @terminus/ui-search

## [2.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.0.6...@terminus/ui-search@2.0.7) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-search

## [2.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.0.5...@terminus/ui-search@2.0.6) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-search

## [2.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.0.4...@terminus/ui-search@2.0.5) (2020-07-31)

**Note:** Version bump only for package @terminus/ui-search

## [2.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.0.3...@terminus/ui-search@2.0.4) (2020-07-29)

**Note:** Version bump only for package @terminus/ui-search

## [2.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.0.2...@terminus/ui-search@2.0.3) (2020-07-29)

### Bug Fixes

* fast follow updates for LPS ([f15bfd4](https://github.com/GetTerminus/terminus-oss/commit/f15bfd4fa088da2fea76e9964c664bad8844e740))

## [2.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.0.1...@terminus/ui-search@2.0.2) (2020-07-28)

**Note:** Version bump only for package @terminus/ui-search

## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@2.0.0...@terminus/ui-search@2.0.1) (2020-07-28)

### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))

## 2.0.0 (2020-07-27)

### Bug Fixes

* **Search:** new button themes configuration ([b22d66e](https://github.com/GetTerminus/terminus-oss/commit/b22d66ee60c353f073cf64fb18303621875a3bed))

### Features

* **Search:** change icon library ([19681ea](https://github.com/GetTerminus/terminus-oss/commit/19681ea750ee0f4735630e63767c1d1010a3fa44))

### BREAKING CHANGES

* **Search:** New button themes configuration
* **Search:** change icon library

#### 2.0.0 Migration Notes

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

## 1.0.7 (2020-07-13)

**Note:** Version bump only for package @terminus/ui-search

## [1.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@1.0.5...@terminus/ui-search@1.0.6) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-search

## 1.0.5 (2020-06-23)

**Note:** Version bump only for package @terminus/ui-search

## [1.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@1.0.3...@terminus/ui-search@1.0.4) (2020-06-10)

### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))

## [1.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-search@1.0.2...@terminus/ui-search@1.0.3) (2020-06-10)

### Bug Fixes

* **Search:** trigger release ([a47f983](https://github.com/GetTerminus/terminus-oss/commit/a47f9838bf1cae64eb9c7262c769bbb731f192c0))
