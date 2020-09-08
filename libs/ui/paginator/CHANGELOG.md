# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.2.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@2.1.3...@terminus/ui-paginator@2.2.0) (2020-09-08)


### Bug Fixes

* force material & cdk ^9.2.4 for consumers ([ea09a6f](https://github.com/GetTerminus/terminus-oss/commit/ea09a6ff88a1ea239fe0e24cb011abfb3ffc8908)), closes [#275](https://github.com/GetTerminus/terminus-oss/issues/275)


### Features

* clean all markdown ([5249a59](https://github.com/GetTerminus/terminus-oss/commit/5249a59486be63b6d9a0be7a801defb9b6adcedc))





## [2.1.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@2.1.2...@terminus/ui-paginator@2.1.3) (2020-09-04)

**Note:** Version bump only for package @terminus/ui-paginator





## [2.1.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@2.1.1...@terminus/ui-paginator@2.1.2) (2020-09-03)

**Note:** Version bump only for package @terminus/ui-paginator

## [2.1.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@2.1.0...@terminus/ui-paginator@2.1.1) (2020-08-27)

**Note:** Version bump only for package @terminus/ui-paginator

# [2.1.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@2.0.7...@terminus/ui-paginator@2.1.0) (2020-08-26)

### Features

* **Paginator:** Emit previous and next page button click events ([92462ae](https://github.com/GetTerminus/terminus-oss/commit/92462aed5d3e93fac84192f1c9e1b8165e77c9ab))

## [2.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@2.0.6...@terminus/ui-paginator@2.0.7) (2020-08-14)

**Note:** Version bump only for package @terminus/ui-paginator

## [2.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@2.0.5...@terminus/ui-paginator@2.0.6) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-paginator

## [2.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@2.0.4...@terminus/ui-paginator@2.0.5) (2020-07-31)

**Note:** Version bump only for package @terminus/ui-paginator

## [2.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@2.0.3...@terminus/ui-paginator@2.0.4) (2020-07-29)

**Note:** Version bump only for package @terminus/ui-paginator

## [2.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@2.0.2...@terminus/ui-paginator@2.0.3) (2020-07-29)

### Bug Fixes

* fast follow updates for LPS ([f15bfd4](https://github.com/GetTerminus/terminus-oss/commit/f15bfd4fa088da2fea76e9964c664bad8844e740))

## [2.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@2.0.1...@terminus/ui-paginator@2.0.2) (2020-07-28)

**Note:** Version bump only for package @terminus/ui-paginator

## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@2.0.0...@terminus/ui-paginator@2.0.1) (2020-07-28)

### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))

## 2.0.0 (2020-07-27)

### Bug Fixes

* **Paginator:** new button themes configuration ([91752b9](https://github.com/GetTerminus/terminus-oss/commit/91752b9654f9c1349e9132edba66b017e21a0668))

### Features

* **Paginator:** change icon library ([2cec8f1](https://github.com/GetTerminus/terminus-oss/commit/2cec8f18377fc0133b7ea9af8fdbe4ce8a278d95))

### BREAKING CHANGES

* **Paginator:** New button themes configuration
* **Paginator:** change icon library

#### 2.0.0 Migration Notes

##### Theme

If passing in a theme, use one of the new button themes: `default|secondary|warning`:

```diff
-<ts-paginator theme="primary"></ts-paginator>
+<ts-paginator theme="default"></ts-paginator>
```

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

## [1.0.10](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@1.0.9...@terminus/ui-paginator@1.0.10) (2020-07-13)

**Note:** Version bump only for package @terminus/ui-paginator

## 1.0.9 (2020-07-13)

### Bug Fixes

* **ESLintConfig:** add build command ([b38ada9](https://github.com/GetTerminus/terminus-oss/commit/b38ada91d034ebe18b96f46b603b13b0ccbca5c0))
* **Paginator:** use css custom properties ([f4d180e](https://github.com/GetTerminus/terminus-oss/commit/f4d180ef51c4a00c218c46a3c94cc64b4a164f3d)), closes [#119](https://github.com/GetTerminus/terminus-oss/issues/119)

## [1.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@1.0.7...@terminus/ui-paginator@1.0.8) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-paginator

## 1.0.7 (2020-06-23)

**Note:** Version bump only for package @terminus/ui-paginator

## [1.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@1.0.5...@terminus/ui-paginator@1.0.6) (2020-06-10)

### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))

## [1.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-paginator@1.0.4...@terminus/ui-paginator@1.0.5) (2020-06-10)

### Bug Fixes

* **Paginator:** update peer deps ([8163095](https://github.com/GetTerminus/terminus-oss/commit/8163095c3902ad4bb9334e8385e1f74bc38fd344))

## 1.0.4 (2020-06-10)

### Bug Fixes

* **Button:** update ([a47f307](https://github.com/GetTerminus/terminus-oss/commit/a47f30757b9216d6ee76788c117e76eacf5289e5))
* **Paginator:** trigger release ([01fc602](https://github.com/GetTerminus/terminus-oss/commit/01fc6022d7d49806801de85b77d14b0c988f89f3))

## 1.0.3 (2020-06-09)

### Bug Fixes

* **Button:** update ([a47f307](https://github.com/GetTerminus/terminus-oss/commit/a47f30757b9216d6ee76788c117e76eacf5289e5))
