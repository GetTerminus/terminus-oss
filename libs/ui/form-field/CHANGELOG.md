# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.13](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@2.0.12...@terminus/ui-form-field@2.0.13) (2020-08-25)


### Bug Fixes

* **FormField:** lighten accent focus shadow ([ce55b00](https://github.com/GetTerminus/terminus-oss/commit/ce55b006eeb4983cfa8be43b168eda2be5a762f4))





## [2.0.12](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@2.0.11...@terminus/ui-form-field@2.0.12) (2020-08-14)

**Note:** Version bump only for package @terminus/ui-form-field





## [2.0.11](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@2.0.10...@terminus/ui-form-field@2.0.11) (2020-08-13)

### Bug Fixes

* **ValidationMessage:** suppresses regular validation message when custom message passed in ([629b09a](https://github.com/GetTerminus/terminus-oss/commit/629b09acd356208b1ba891248225d696bfa7ed0f))

## [2.0.10](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@2.0.9...@terminus/ui-form-field@2.0.10) (2020-08-10)

### Bug Fixes

* **FormField:** non-focused invalid field now has red border ([a7cb8ff](https://github.com/GetTerminus/terminus-oss/commit/a7cb8ff1e3699a45de411a649d7415ceae4ca12c))

## [2.0.9](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@2.0.8...@terminus/ui-form-field@2.0.9) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-form-field

## [2.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@2.0.7...@terminus/ui-form-field@2.0.8) (2020-08-06)

### Bug Fixes

* **FormField:** more lps tweaks ([ac977f1](https://github.com/GetTerminus/terminus-oss/commit/ac977f185c218ee9a0f042ca55bf059b55587b2d))

## [2.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@2.0.6...@terminus/ui-form-field@2.0.7) (2020-08-05)

### Bug Fixes

* More LPS tweaks ([3bfd023](https://github.com/GetTerminus/terminus-oss/commit/3bfd023788f06b3bd609493d3308f902c11f0dcd))

## [2.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@2.0.5...@terminus/ui-form-field@2.0.6) (2020-07-31)

**Note:** Version bump only for package @terminus/ui-form-field

## [2.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@2.0.4...@terminus/ui-form-field@2.0.5) (2020-07-30)

### Bug Fixes

* more LPS tweaks ([dedfcf9](https://github.com/GetTerminus/terminus-oss/commit/dedfcf947e3bcd33041b388ccab9bcc5bf273f51))

## [2.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@2.0.3...@terminus/ui-form-field@2.0.4) (2020-07-29)

**Note:** Version bump only for package @terminus/ui-form-field

## [2.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@2.0.2...@terminus/ui-form-field@2.0.3) (2020-07-29)

### Bug Fixes

* fast follow updates for LPS ([f15bfd4](https://github.com/GetTerminus/terminus-oss/commit/f15bfd4fa088da2fea76e9964c664bad8844e740))

## [2.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@2.0.1...@terminus/ui-form-field@2.0.2) (2020-07-28)

**Note:** Version bump only for package @terminus/ui-form-field

## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@2.0.0...@terminus/ui-form-field@2.0.1) (2020-07-28)

### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))

## [2.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@1.0.9...@terminus/ui-form-field@2.0.0) (2020-07-27)

### Bug Fixes

* **FormField:** update border radius ([e9a1c3e](https://github.com/GetTerminus/terminus-oss/commit/e9a1c3e3a33a62b367b034817cfdf63635fe0dff))
* **FormField:** update icon positioning ([9762d95](https://github.com/GetTerminus/terminus-oss/commit/9762d957312d848d14e7b083771bba941e4618bb))
* **FormField:** update styles for LPS ([21fd8cd](https://github.com/GetTerminus/terminus-oss/commit/21fd8cde1daaffca1ef2073d1a2b11a18c869f9f)), closes [#26](https://github.com/GetTerminus/terminus-oss/issues/26)

### BREAKING CHANGES

* **FormField:** Border radius change

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

## [1.0.9](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@1.0.8...@terminus/ui-form-field@1.0.9) (2020-07-14)

### Bug Fixes

* **FormField:** use css custom properties ([56f4b31](https://github.com/GetTerminus/terminus-oss/commit/56f4b31baf6b7bdaad5b89060f0efa3aace2a22e))

## 1.0.8 (2020-07-13)

**Note:** Version bump only for package @terminus/ui-form-field

## [1.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@1.0.6...@terminus/ui-form-field@1.0.7) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-form-field

## 1.0.6 (2020-06-23)

**Note:** Version bump only for package @terminus/ui-form-field

## [1.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@1.0.4...@terminus/ui-form-field@1.0.5) (2020-06-10)

### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))

## [1.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-form-field@1.0.3...@terminus/ui-form-field@1.0.4) (2020-06-10)

### Bug Fixes

* **FormField:** trigger release ([9a6a4bb](https://github.com/GetTerminus/terminus-oss/commit/9a6a4bbd410adc6eab94891164ae1ab8804c1350))

## 1.0.3 (2020-06-09)

### Bug Fixes

* **Button:** update ([a47f307](https://github.com/GetTerminus/terminus-oss/commit/a47f30757b9216d6ee76788c117e76eacf5289e5))
