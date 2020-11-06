# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@3.0.0...@terminus/ui-icon-button@3.0.1) (2020-11-06)


### Bug Fixes

* **IconButton:** bump icon package ([72d194f](https://github.com/GetTerminus/terminus-oss/commit/72d194fc0a52d56e6b17cb42e3593b622d3ff88b))





# [3.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.1.2...@terminus/ui-icon-button@3.0.0) (2020-10-02)


### Bug Fixes

* **IconButton:** remove theme support ([c3824e0](https://github.com/GetTerminus/terminus-oss/commit/c3824e0a5919e8c8f14ac138069474b291f30016))


### BREAKING CHANGES

* **IconButton:** Theme input no longer supported. Color can be overridden with the CSS custom property:
`--ts-ib-color`.





## [2.1.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.1.1...@terminus/ui-icon-button@2.1.2) (2020-09-14)

**Note:** Version bump only for package @terminus/ui-icon-button





## [2.1.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.1.0...@terminus/ui-icon-button@2.1.1) (2020-09-11)

**Note:** Version bump only for package @terminus/ui-icon-button





# [2.1.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.0.10...@terminus/ui-icon-button@2.1.0) (2020-09-08)


### Bug Fixes

* force material & cdk ^9.2.4 for consumers ([ea09a6f](https://github.com/GetTerminus/terminus-oss/commit/ea09a6ff88a1ea239fe0e24cb011abfb3ffc8908)), closes [#275](https://github.com/GetTerminus/terminus-oss/issues/275)


### Features

* clean all markdown ([5249a59](https://github.com/GetTerminus/terminus-oss/commit/5249a59486be63b6d9a0be7a801defb9b6adcedc))





## [2.0.10](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.0.9...@terminus/ui-icon-button@2.0.10) (2020-09-04)

**Note:** Version bump only for package @terminus/ui-icon-button





## [2.0.9](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.0.8...@terminus/ui-icon-button@2.0.9) (2020-09-03)

**Note:** Version bump only for package @terminus/ui-icon-button

## [2.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.0.7...@terminus/ui-icon-button@2.0.8) (2020-09-01)

**Note:** Version bump only for package @terminus/ui-icon-button

## [2.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.0.6...@terminus/ui-icon-button@2.0.7) (2020-08-14)

**Note:** Version bump only for package @terminus/ui-icon-button

## [2.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.0.5...@terminus/ui-icon-button@2.0.6) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-icon-button

## [2.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.0.4...@terminus/ui-icon-button@2.0.5) (2020-07-31)

**Note:** Version bump only for package @terminus/ui-icon-button

## [2.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.0.3...@terminus/ui-icon-button@2.0.4) (2020-07-29)

**Note:** Version bump only for package @terminus/ui-icon-button

## [2.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.0.2...@terminus/ui-icon-button@2.0.3) (2020-07-29)

### Bug Fixes

* fast follow updates for LPS ([f15bfd4](https://github.com/GetTerminus/terminus-oss/commit/f15bfd4fa088da2fea76e9964c664bad8844e740))

## [2.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.0.1...@terminus/ui-icon-button@2.0.2) (2020-07-28)

**Note:** Version bump only for package @terminus/ui-icon-button

## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.0.0...@terminus/ui-icon-button@2.0.1) (2020-07-28)

### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))

## [2.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@1.0.10...@terminus/ui-icon-button@2.0.0) (2020-07-27)

### Features

* **IconButton:** change icon library ([fceffdb](https://github.com/GetTerminus/terminus-oss/commit/fceffdb3ac1d610c6c130443a93a5e05a64b76d1))

### BREAKING CHANGES

* **IconButton:** Change icon library

#### 2.0.0 Migration Notes

##### Icon

If passing in an icon, pass in a FontAwesome icon reference instead of a string name:

```typescript
import { faHome } from '@fortawesome/pro-solid-svg-icons/faHome';
...
public home = faHome;
```

```diff
-<ts-icon-button>home</ts-icon-button>
+<ts-icon-button [icon]="home"></ts-icon-button>
```

> NOTE: Multiple versions of each icon exist. We should always import from the 'solid' collection.

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

## [1.0.10](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@1.0.9...@terminus/ui-icon-button@1.0.10) (2020-07-14)

### Bug Fixes

* **IconButton:** use custom css properties ([489708c](https://github.com/GetTerminus/terminus-oss/commit/489708c6f438753fe31a266da30858cf9fac2dd9))

## 1.0.9 (2020-07-13)

**Note:** Version bump only for package @terminus/ui-icon-button

## [1.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@1.0.7...@terminus/ui-icon-button@1.0.8) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-icon-button

## 1.0.7 (2020-06-23)

**Note:** Version bump only for package @terminus/ui-icon-button

## [1.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@1.0.3...@terminus/ui-icon-button@1.0.6) (2020-06-11)

### Bug Fixes

* **IconButton:** trigger release ([df36c88](https://github.com/GetTerminus/terminus-oss/commit/df36c881501ef0c514aa1772a267b34cb378d6fe))

## [1.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@1.0.3...@terminus/ui-icon-button@1.0.5) (2020-06-11)

### Bug Fixes

* **IconButton:** trigger release ([df36c88](https://github.com/GetTerminus/terminus-oss/commit/df36c881501ef0c514aa1772a267b34cb378d6fe))

## [1.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@1.0.3...@terminus/ui-icon-button@1.0.4) (2020-06-11)

### Bug Fixes

* **IconButton:** trigger release ([df36c88](https://github.com/GetTerminus/terminus-oss/commit/df36c881501ef0c514aa1772a267b34cb378d6fe))

## 1.0.3 (2020-06-10)

### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))

## 1.0.2 (2020-06-09)

### Bug Fixes

* **Button:** update ([a47f307](https://github.com/GetTerminus/terminus-oss/commit/a47f30757b9216d6ee76788c117e76eacf5289e5))
