# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@2.0.0...@terminus/ui-icon-button@2.0.1) (2020-07-28)


### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))





# [2.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-icon-button@1.0.10...@terminus/ui-icon-button@2.0.0) (2020-07-27)


### Features

* **IconButton:** change icon library ([fceffdb](https://github.com/GetTerminus/terminus-oss/commit/fceffdb3ac1d610c6c130443a93a5e05a64b76d1))


### BREAKING CHANGES

* **IconButton:** Change icon library

#### Migration Notes

##### Icon

If passing in an icon, pass in a FontAwesome icon reference instead of a string name:

```typescript
import { faHome } from '@fortawesome/pro-regular-svg-icons/faHome';
...
public home = faHome;
```

```diff
-<ts-icon-button>home</ts-icon-button>
+<ts-icon-button [icon]="home"></ts-icon-button>
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
