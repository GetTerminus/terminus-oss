# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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





# [2.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon@1.0.7...@terminus/ui-icon@2.0.0) (2020-07-27)


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
