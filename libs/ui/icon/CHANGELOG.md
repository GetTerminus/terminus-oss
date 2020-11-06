# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.1.4...@terminus/ui-icon@2.1.5) (2020-11-06)


### Bug Fixes

* **Icon:** bump icon package ([24b832a](https://github.com/GetTerminus/terminus-oss/commit/24b832a3d12617a8ea295e40ed3a1c2ecdb3829f))





## [2.1.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.1.3...@terminus/ui-icon@2.1.4) (2020-11-02)


### Bug Fixes

* **Icon:** remove outdated param ([9ac4342](https://github.com/GetTerminus/terminus-oss/commit/9ac434282b123e18696f468bf0e6b513e7e1338e))





## [2.1.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.1.2...@terminus/ui-icon@2.1.3) (2020-10-02)

**Note:** Version bump only for package @terminus/ui-icon





## [2.1.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.1.1...@terminus/ui-icon@2.1.2) (2020-09-14)

**Note:** Version bump only for package @terminus/ui-icon





## [2.1.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.1.0...@terminus/ui-icon@2.1.1) (2020-09-11)

**Note:** Version bump only for package @terminus/ui-icon





# [2.1.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.0.12...@terminus/ui-icon@2.1.0) (2020-09-08)


### Bug Fixes

* force material & cdk ^9.2.4 for consumers ([ea09a6f](https://github.com/GetTerminus/terminus-oss/commit/ea09a6ff88a1ea239fe0e24cb011abfb3ffc8908)), closes [#275](https://github.com/GetTerminus/terminus-oss/issues/275)


### Features

* clean all markdown ([5249a59](https://github.com/GetTerminus/terminus-oss/commit/5249a59486be63b6d9a0be7a801defb9b6adcedc))





## [2.0.12](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.0.11...@terminus/ui-icon@2.0.12) (2020-09-04)

**Note:** Version bump only for package @terminus/ui-icon





## [2.0.11](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.0.10...@terminus/ui-icon@2.0.11) (2020-09-03)

**Note:** Version bump only for package @terminus/ui-icon

## [2.0.10](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.0.9...@terminus/ui-icon@2.0.10) (2020-08-28)

### Bug Fixes

* **Icon:** remove input that is not supported by the underlying lib ([61a8090](https://github.com/GetTerminus/terminus-oss/commit/61a809043185cef61f7d5c48b0828f3022308dc8))

## [2.0.9](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.0.8...@terminus/ui-icon@2.0.9) (2020-08-24)

**Note:** Version bump only for package @terminus/ui-icon

## [2.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.0.7...@terminus/ui-icon@2.0.8) (2020-08-14)

**Note:** Version bump only for package @terminus/ui-icon

## [2.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.0.6...@terminus/ui-icon@2.0.7) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-icon

## [2.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.0.5...@terminus/ui-icon@2.0.6) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-icon

## [2.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.0.4...@terminus/ui-icon@2.0.5) (2020-07-31)

**Note:** Version bump only for package @terminus/ui-icon

## [2.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.0.3...@terminus/ui-icon@2.0.4) (2020-07-29)

### Bug Fixes

* **Icon:** add missing dependency to schematic ([0a5224a](https://github.com/GetTerminus/terminus-oss/commit/0a5224a821c192232994abba08e8a66d9e6c5bbf))

## [2.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.0.2...@terminus/ui-icon@2.0.3) (2020-07-29)

### Bug Fixes

* fast follow updates for LPS ([f15bfd4](https://github.com/GetTerminus/terminus-oss/commit/f15bfd4fa088da2fea76e9964c664bad8844e740))

## [2.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.0.1...@terminus/ui-icon@2.0.2) (2020-07-28)

**Note:** Version bump only for package @terminus/ui-icon

## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@2.0.0...@terminus/ui-icon@2.0.1) (2020-07-28)

### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))

## [2.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@1.0.7...@terminus/ui-icon@2.0.0) (2020-07-27)

### Features

* **Icon:** switch to fontawesome ([0343b27](https://github.com/GetTerminus/terminus-oss/commit/0343b2772de7249ff6ebcb0c7cfd682d7e1ae808))

### BREAKING CHANGES

* **Icon:** Change icon library

#### 2.0.0 Migration Notes

This was a full rewrite of the component so I suggest checking the API docs or source code to better understand the full capabilities.

Basic usage example of the new component API:

```typescript
import { faHome } from '@fortawesome/pro-solid-svg-icons/faHome';
...
public home = faHome;
```

```html
<ts-icon [icon]="home"></ts-icon>
```

> NOTE: Multiple versions of each icon exist. We should always import from the 'solid' collection.

##### CSS Resources

Remove any imports or `<link>` tags importing Material Icons:

```diff
-<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

## [1.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@1.0.6...@terminus/ui-icon@1.0.7) (2020-07-14)

### Bug Fixes

* **Icon:** use custom css properties ([056787d](https://github.com/GetTerminus/terminus-oss/commit/056787d9427e334b967f5aa4cb9e8ef7d857bdca)), closes [#104](https://github.com/GetTerminus/terminus-oss/issues/104)

## 1.0.6 (2020-07-13)

**Note:** Version bump only for package @terminus/ui-icon

## [1.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@1.0.4...@terminus/ui-icon@1.0.5) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-icon

## 1.0.4 (2020-06-23)

**Note:** Version bump only for package @terminus/ui-icon

## 1.0.3 (2020-06-10)

### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))

## 1.0.2 (2020-06-09)

### Bug Fixes

* **Button:** update ([a47f307](https://github.com/GetTerminus/terminus-oss/commit/a47f30757b9216d6ee76788c117e76eacf5289e5))
