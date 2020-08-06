# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-file-upload@2.0.7...@terminus/ui-file-upload@2.0.8) (2020-08-06)


### Bug Fixes

* **FileUpload:** more lps tweaks ([5eab44c](https://github.com/GetTerminus/terminus-oss/commit/5eab44c050563701ef9971b76dc05ca18caa7bee))





## [2.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-file-upload@2.0.6...@terminus/ui-file-upload@2.0.7) (2020-08-05)


### Bug Fixes

* More LPS tweaks ([3bfd023](https://github.com/GetTerminus/terminus-oss/commit/3bfd023788f06b3bd609493d3308f902c11f0dcd))





## [2.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-file-upload@2.0.5...@terminus/ui-file-upload@2.0.6) (2020-07-31)

**Note:** Version bump only for package @terminus/ui-file-upload





## [2.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-file-upload@2.0.4...@terminus/ui-file-upload@2.0.5) (2020-07-30)


### Bug Fixes

* more LPS tweaks ([dedfcf9](https://github.com/GetTerminus/terminus-oss/commit/dedfcf947e3bcd33041b388ccab9bcc5bf273f51))





## [2.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-file-upload@2.0.3...@terminus/ui-file-upload@2.0.4) (2020-07-29)

**Note:** Version bump only for package @terminus/ui-file-upload





## [2.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-file-upload@2.0.2...@terminus/ui-file-upload@2.0.3) (2020-07-29)


### Bug Fixes

* fast follow updates for LPS ([f15bfd4](https://github.com/GetTerminus/terminus-oss/commit/f15bfd4fa088da2fea76e9964c664bad8844e740))





## [2.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-file-upload@2.0.1...@terminus/ui-file-upload@2.0.2) (2020-07-28)

**Note:** Version bump only for package @terminus/ui-file-upload





## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-file-upload@2.0.0...@terminus/ui-file-upload@2.0.1) (2020-07-28)


### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))





# [2.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-file-upload@1.0.7...@terminus/ui-file-upload@2.0.0) (2020-07-27)


### Bug Fixes

* **FileUpload:** new button themes configuration ([596ba94](https://github.com/GetTerminus/terminus-oss/commit/596ba941d576cdcd83f3df0039ab16e2f9bd202d))


### Features

* **FileUpload:** change icon library ([45212fb](https://github.com/GetTerminus/terminus-oss/commit/45212fb4630fcab823ccdc47ec7a41bdb6efadf1))


### BREAKING CHANGES

* **FileUpload:** New button themes configuration
* **FileUpload:** change icon library

#### 2.0.0 Migration Notes

##### Theme

If passing in a theme, use one of the new button themes: `default|secondary|warning`:

```diff
-<ts-file-upload theme="primary"></ts-file-upload>
+<ts-file-upload theme="default"></ts-file-upload>
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




## [1.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-file-upload@1.0.6...@terminus/ui-file-upload@1.0.7) (2020-07-14)


### Bug Fixes

* **FileUpload:** use custom css properties ([7c93dc0](https://github.com/GetTerminus/terminus-oss/commit/7c93dc0b55718bc7b5f7faab4e1f3d7a1d871e6d)), closes [#105](https://github.com/GetTerminus/terminus-oss/issues/105)





## 1.0.6 (2020-07-13)

**Note:** Version bump only for package @terminus/ui-file-upload





## [1.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-file-upload@1.0.4...@terminus/ui-file-upload@1.0.5) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-file-upload





## 1.0.4 (2020-06-23)

**Note:** Version bump only for package @terminus/ui-file-upload





## 1.0.3 (2020-06-10)


### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))





## 1.0.2 (2020-06-09)


### Bug Fixes

* **Button:** update ([a47f307](https://github.com/GetTerminus/terminus-oss/commit/a47f30757b9216d6ee76788c117e76eacf5289e5))
