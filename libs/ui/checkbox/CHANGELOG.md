# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.13](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@2.0.12...@terminus/ui-checkbox@2.0.13) (2020-09-04)

**Note:** Version bump only for package @terminus/ui-checkbox





## [2.0.12](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@2.0.11...@terminus/ui-checkbox@2.0.12) (2020-09-03)

**Note:** Version bump only for package @terminus/ui-checkbox





## [2.0.11](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@2.0.10...@terminus/ui-checkbox@2.0.11) (2020-08-26)

**Note:** Version bump only for package @terminus/ui-checkbox





## [2.0.10](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@2.0.9...@terminus/ui-checkbox@2.0.10) (2020-08-25)

**Note:** Version bump only for package @terminus/ui-checkbox





## [2.0.9](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@2.0.8...@terminus/ui-checkbox@2.0.9) (2020-08-21)

**Note:** Version bump only for package @terminus/ui-checkbox





## [2.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@2.0.7...@terminus/ui-checkbox@2.0.8) (2020-08-14)

**Note:** Version bump only for package @terminus/ui-checkbox





## [2.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@2.0.6...@terminus/ui-checkbox@2.0.7) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-checkbox

## [2.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@2.0.5...@terminus/ui-checkbox@2.0.6) (2020-07-31)

**Note:** Version bump only for package @terminus/ui-checkbox

## [2.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@2.0.4...@terminus/ui-checkbox@2.0.5) (2020-07-30)

### Bug Fixes

* more LPS tweaks ([dedfcf9](https://github.com/GetTerminus/terminus-oss/commit/dedfcf947e3bcd33041b388ccab9bcc5bf273f51))

## [2.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@2.0.3...@terminus/ui-checkbox@2.0.4) (2020-07-29)

**Note:** Version bump only for package @terminus/ui-checkbox

## [2.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@2.0.2...@terminus/ui-checkbox@2.0.3) (2020-07-29)

### Bug Fixes

* fast follow updates for LPS ([f15bfd4](https://github.com/GetTerminus/terminus-oss/commit/f15bfd4fa088da2fea76e9964c664bad8844e740))

## [2.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@2.0.1...@terminus/ui-checkbox@2.0.2) (2020-07-28)

**Note:** Version bump only for package @terminus/ui-checkbox

## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@2.0.0...@terminus/ui-checkbox@2.0.1) (2020-07-28)

### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))

## [2.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@1.0.7...@terminus/ui-checkbox@2.0.0) (2020-07-27)

### Bug Fixes

* **Checkbox:** remove themability and set fixed styles ([3502836](https://github.com/GetTerminus/terminus-oss/commit/350283666e2b764c307dec68d2799b48d2387257)), closes [#31](https://github.com/GetTerminus/terminus-oss/issues/31)

### BREAKING CHANGES

* **Checkbox:** No longer allows theme input

#### 2.0.0 Migration Notes

##### Theme

Remove any theme set on the checkbox:

```diff
-<ts-checkbox theme="primary">My checkbox</ts-checkbox>
+<ts-checkbox>My checkbox</ts-checkbox>
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

## [1.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@1.0.6...@terminus/ui-checkbox@1.0.7) (2020-07-14)

### Bug Fixes

* **Checkbox:** use css custom properties ([461dd83](https://github.com/GetTerminus/terminus-oss/commit/461dd83ad6d371700a82a508f24353d74d81bfd0)), closes [#111](https://github.com/GetTerminus/terminus-oss/issues/111)

## 1.0.6 (2020-07-13)

**Note:** Version bump only for package @terminus/ui-checkbox

## [1.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-checkbox@1.0.4...@terminus/ui-checkbox@1.0.5) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-checkbox

## 1.0.4 (2020-06-23)

**Note:** Version bump only for package @terminus/ui-checkbox

## 1.0.3 (2020-06-10)

### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))

## 1.0.2 (2020-06-09)

### Bug Fixes

* **Button:** update ([a47f307](https://github.com/GetTerminus/terminus-oss/commit/a47f30757b9216d6ee76788c117e76eacf5289e5))
