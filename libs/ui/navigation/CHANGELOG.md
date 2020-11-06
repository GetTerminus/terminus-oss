# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.1.3...@terminus/ui-navigation@2.1.4) (2020-11-06)


### Bug Fixes

* **Navigation:** bump icon package ([90443de](https://github.com/GetTerminus/terminus-oss/commit/90443de898eef879e3d953a0de84e57770c95e7a))





## [2.1.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.1.2...@terminus/ui-navigation@2.1.3) (2020-10-05)

**Note:** Version bump only for package @terminus/ui-navigation





## [2.1.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.1.1...@terminus/ui-navigation@2.1.2) (2020-09-14)

**Note:** Version bump only for package @terminus/ui-navigation





## [2.1.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.1.0...@terminus/ui-navigation@2.1.1) (2020-09-11)

**Note:** Version bump only for package @terminus/ui-navigation





# [2.1.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.0.12...@terminus/ui-navigation@2.1.0) (2020-09-08)


### Bug Fixes

* force material & cdk ^9.2.4 for consumers ([ea09a6f](https://github.com/GetTerminus/terminus-oss/commit/ea09a6ff88a1ea239fe0e24cb011abfb3ffc8908)), closes [#275](https://github.com/GetTerminus/terminus-oss/issues/275)


### Features

* clean all markdown ([5249a59](https://github.com/GetTerminus/terminus-oss/commit/5249a59486be63b6d9a0be7a801defb9b6adcedc))





## [2.0.12](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.0.11...@terminus/ui-navigation@2.0.12) (2020-09-04)

**Note:** Version bump only for package @terminus/ui-navigation





## [2.0.11](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.0.10...@terminus/ui-navigation@2.0.11) (2020-09-03)

**Note:** Version bump only for package @terminus/ui-navigation

## [2.0.10](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.0.9...@terminus/ui-navigation@2.0.10) (2020-08-27)

**Note:** Version bump only for package @terminus/ui-navigation

## [2.0.9](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.0.8...@terminus/ui-navigation@2.0.9) (2020-08-14)

**Note:** Version bump only for package @terminus/ui-navigation

## [2.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.0.7...@terminus/ui-navigation@2.0.8) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-navigation

## [2.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.0.6...@terminus/ui-navigation@2.0.7) (2020-08-05)

### Bug Fixes

* More LPS tweaks ([3bfd023](https://github.com/GetTerminus/terminus-oss/commit/3bfd023788f06b3bd609493d3308f902c11f0dcd))

## [2.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.0.5...@terminus/ui-navigation@2.0.6) (2020-07-31)

**Note:** Version bump only for package @terminus/ui-navigation

## [2.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.0.4...@terminus/ui-navigation@2.0.5) (2020-07-30)

### Bug Fixes

* more LPS tweaks ([dedfcf9](https://github.com/GetTerminus/terminus-oss/commit/dedfcf947e3bcd33041b388ccab9bcc5bf273f51))

## [2.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.0.3...@terminus/ui-navigation@2.0.4) (2020-07-29)

**Note:** Version bump only for package @terminus/ui-navigation

## [2.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.0.2...@terminus/ui-navigation@2.0.3) (2020-07-29)

### Bug Fixes

* fast follow updates for LPS ([f15bfd4](https://github.com/GetTerminus/terminus-oss/commit/f15bfd4fa088da2fea76e9964c664bad8844e740))

## [2.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.0.1...@terminus/ui-navigation@2.0.2) (2020-07-28)

**Note:** Version bump only for package @terminus/ui-navigation

## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@2.0.0...@terminus/ui-navigation@2.0.1) (2020-07-28)

### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))

## [2.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@1.0.7...@terminus/ui-navigation@2.0.0) (2020-07-27)

### Features

* **Navigation:** change icon library ([52e644b](https://github.com/GetTerminus/terminus-oss/commit/52e644b5908f3557bcd340ac429c9d881dbb3a0f))

### BREAKING CHANGES

* **Navigation:** change icon library

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

## [1.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@1.0.6...@terminus/ui-navigation@1.0.7) (2020-07-14)

### Bug Fixes

* **Navigation:** use custom css properties ([21c5799](https://github.com/GetTerminus/terminus-oss/commit/21c5799cd299656450102eda99ab20ce7da5deab)), closes [#117](https://github.com/GetTerminus/terminus-oss/issues/117)

## 1.0.6 (2020-07-13)

**Note:** Version bump only for package @terminus/ui-navigation

## [1.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-navigation@1.0.4...@terminus/ui-navigation@1.0.5) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-navigation

## 1.0.4 (2020-06-23)

**Note:** Version bump only for package @terminus/ui-navigation

## 1.0.3 (2020-06-10)

### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))

## 1.0.2 (2020-06-09)

### Bug Fixes

* **Button:** update ([a47f307](https://github.com/GetTerminus/terminus-oss/commit/a47f30757b9216d6ee76788c117e76eacf5289e5))
