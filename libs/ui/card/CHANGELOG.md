# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.10](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@2.0.9...@terminus/ui-card@2.0.10) (2020-08-25)

**Note:** Version bump only for package @terminus/ui-card





## [2.0.9](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@2.0.8...@terminus/ui-card@2.0.9) (2020-08-21)

**Note:** Version bump only for package @terminus/ui-card





## [2.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@2.0.7...@terminus/ui-card@2.0.8) (2020-08-14)

**Note:** Version bump only for package @terminus/ui-card





## [2.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@2.0.6...@terminus/ui-card@2.0.7) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-card

## [2.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@2.0.5...@terminus/ui-card@2.0.6) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-card

## [2.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@2.0.4...@terminus/ui-card@2.0.5) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-card

## [2.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@2.0.3...@terminus/ui-card@2.0.4) (2020-07-31)

**Note:** Version bump only for package @terminus/ui-card

## [2.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@2.0.2...@terminus/ui-card@2.0.3) (2020-07-29)

### Bug Fixes

* fast follow updates for LPS ([f15bfd4](https://github.com/GetTerminus/terminus-oss/commit/f15bfd4fa088da2fea76e9964c664bad8844e740))

## [2.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@2.0.1...@terminus/ui-card@2.0.2) (2020-07-28)

**Note:** Version bump only for package @terminus/ui-card

## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@2.0.0...@terminus/ui-card@2.0.1) (2020-07-28)

### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))

## [2.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@1.0.13...@terminus/ui-card@2.0.0) (2020-07-27)

### Bug Fixes

* **Card:** style updates for LPS ([70e4d09](https://github.com/GetTerminus/terminus-oss/commit/70e4d0965e6e67391fa16e0d6005ff0208ccd387)), closes [#28](https://github.com/GetTerminus/terminus-oss/issues/28)
* **Card:** update border radius ([c7fa097](https://github.com/GetTerminus/terminus-oss/commit/c7fa097830861a53f534587b78a076d34db1a2fc))

### Features

* **Card:** change icon library and update styles ([627daf4](https://github.com/GetTerminus/terminus-oss/commit/627daf418c94f04605398981b42c0b945f5a5bdc))
* **Card:** classes set on top-level container now preserved

### BREAKING CHANGES

* **Card:** Change icon library
* **Card:** Style changes to shadows, backgrounds, borders etc
* **Card:** Border radius change

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

## 1.0.13 (2020-07-24)

**Note:** Version bump only for package @terminus/ui-card

## [1.0.12](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@1.0.11...@terminus/ui-card@1.0.12) (2020-07-13)

**Note:** Version bump only for package @terminus/ui-card

## 1.0.11 (2020-07-13)

### Bug Fixes

* **Card:** use css custom properties ([f01f004](https://github.com/GetTerminus/terminus-oss/commit/f01f004fe7887f7b1859b79b3a39d736c9196e0c)), closes [#101](https://github.com/GetTerminus/terminus-oss/issues/101)
* **ESLintConfig:** add build command ([b38ada9](https://github.com/GetTerminus/terminus-oss/commit/b38ada91d034ebe18b96f46b603b13b0ccbca5c0))

## [1.0.10](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@1.0.9...@terminus/ui-card@1.0.10) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-card

## 1.0.9 (2020-06-23)

### Bug Fixes

* **Card:** export type arrays ([af3db96](https://github.com/GetTerminus/terminus-oss/commit/af3db96e08182f7d1044e220e80c26cc41f249cf))

## [1.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@1.0.7...@terminus/ui-card@1.0.8) (2020-06-10)

### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))

## [1.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-card@1.0.2...@terminus/ui-card@1.0.7) (2020-06-10)

### Bug Fixes

* **Card:** remove verbose ([e70279a](https://github.com/GetTerminus/terminus-oss/commit/e70279a4c8d7ed4766dfb61b2c22912d8645129d))
* **Card:** set npm config ([c6a5bfb](https://github.com/GetTerminus/terminus-oss/commit/c6a5bfbba0dabcd6da54c87d8f628568e8067af0))
* **Card:** trigger release ([74450bd](https://github.com/GetTerminus/terminus-oss/commit/74450bdeb656ef0f2937437f17d69cc9e77d3426))
* **Card:** use node action ([b0ac322](https://github.com/GetTerminus/terminus-oss/commit/b0ac3225df8ac33b9f64437f6688d1f5c5c6ef4e))
* **Card:** use verbose ([9893d37](https://github.com/GetTerminus/terminus-oss/commit/9893d3740598a043038bc396c83a5729b5170988))
* **Card:** use verbose again ([33ef20a](https://github.com/GetTerminus/terminus-oss/commit/33ef20a6e74b3bdbb74f61d0122930dfa35e7953))
* **Card:** use verbose in pckg ([4a3928a](https://github.com/GetTerminus/terminus-oss/commit/4a3928a3a62057559e6a317ee8601b295922c4e2))
