# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.5...@terminus/ui-menu@2.0.6) (2020-07-31)

**Note:** Version bump only for package @terminus/ui-menu





## [2.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.4...@terminus/ui-menu@2.0.5) (2020-07-30)


### Bug Fixes

* more LPS tweaks ([dedfcf9](https://github.com/GetTerminus/terminus-oss/commit/dedfcf947e3bcd33041b388ccab9bcc5bf273f51))





## [2.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.3...@terminus/ui-menu@2.0.4) (2020-07-29)

**Note:** Version bump only for package @terminus/ui-menu





## [2.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.2...@terminus/ui-menu@2.0.3) (2020-07-29)


### Bug Fixes

* fast follow updates for LPS ([f15bfd4](https://github.com/GetTerminus/terminus-oss/commit/f15bfd4fa088da2fea76e9964c664bad8844e740))





## [2.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.1...@terminus/ui-menu@2.0.2) (2020-07-28)

**Note:** Version bump only for package @terminus/ui-menu





## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.0...@terminus/ui-menu@2.0.1) (2020-07-28)


### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))





# 2.0.0 (2020-07-27)


### Bug Fixes

* **Menu:** new button themes configuration ([48e7801](https://github.com/GetTerminus/terminus-oss/commit/48e78010966ffe67ce0e46dfb92759f02aba2fdd))


### Features

* **Menu:** change icon library ([d216901](https://github.com/GetTerminus/terminus-oss/commit/d2169019abe934ebecf6b219b738945b8ec321b4))


### BREAKING CHANGES

* **Menu:** New button themes configuration
* **Menu:** change icon library

#### 2.0.0 Migration Notes

##### Theme

If passing in a theme, use one of the new button themes: `default|secondary|warning`:

```diff
-<ts-menu theme="primary">Select Item</ts-menu>
+<ts-menu theme="default">Select Item</ts-menu>
```

##### Hollow

If using `format="hollow"` change to `theme="secondary"`:

```diff
-<ts-menu format="hollow">Select Item</ts-menu>
+<ts-menu theme="secondary">Select Item</ts-menu>
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




## [1.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@1.0.6...@terminus/ui-menu@1.0.7) (2020-07-13)

**Note:** Version bump only for package @terminus/ui-menu





## 1.0.6 (2020-07-13)


### Bug Fixes

* **ESLintConfig:** add build command ([b38ada9](https://github.com/GetTerminus/terminus-oss/commit/b38ada91d034ebe18b96f46b603b13b0ccbca5c0))
* **Menu:** use css properties ([322cf64](https://github.com/GetTerminus/terminus-oss/commit/322cf6474146fddff1b82515d18d24b1a501cd38)), closes [#116](https://github.com/GetTerminus/terminus-oss/issues/116)





## [1.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@1.0.4...@terminus/ui-menu@1.0.5) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-menu





## 1.0.4 (2020-06-23)

**Note:** Version bump only for package @terminus/ui-menu





## 1.0.3 (2020-06-10)


### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))





## 1.0.2 (2020-06-09)


### Bug Fixes

* **Button:** update ([a47f307](https://github.com/GetTerminus/terminus-oss/commit/a47f30757b9216d6ee76788c117e76eacf5289e5))
