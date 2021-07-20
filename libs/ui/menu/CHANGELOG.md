# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [6.1.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@6.0.1...@terminus/ui-menu@6.1.0) (2021-07-20)


### Features

* **Scoreboard:** Add isDisabled flag to ts-menu-item ([#571](https://github.com/GetTerminus/terminus-oss/issues/571)) ([6dfd02c](https://github.com/GetTerminus/terminus-oss/commit/6dfd02cbb099863083717385f0c93a21af6efa23))





## [6.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@6.0.0...@terminus/ui-menu@6.0.1) (2021-01-12)

**Note:** Version bump only for package @terminus/ui-menu





# [6.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@5.0.0...@terminus/ui-menu@6.0.0) (2021-01-12)


### Features

* **Menu:** now allows buttons and links without style overrides ([c118b97](https://github.com/GetTerminus/terminus-oss/commit/c118b9731a36ad295a12e8aa0a4870b36cdbf52b)), closes [#495](https://github.com/GetTerminus/terminus-oss/issues/495)


### BREAKING CHANGES

* **Menu:** No longer overriding default styles of buttons and links within menus.


#### Migration Notes 6.0.0

##### Style overrides

If you were previously relying on the menu overriding `<ts-button>` or `<ts-link>` styles, this will be a breaking change:

```diff
<ts-menu [menuItemsTemplate]="myTemplate">Select Item</ts-menu>

<ng-template #myTemplate>
-  <ts-button>My button</ts-button>
+  <ts-button tsMenuItem>My button</ts-button>

-  <ts-link>My button</ts-link>
+  <ts-link tsMenuItem>My button</ts-link>
</ng-template>
```

If you need to add the layout styles but do not want to override the design itself, pass the `transparent` parameter:

```diff
<ts-menu [menuItemsTemplate]="myTemplate">Select Item</ts-menu>

<ng-template #myTemplate>
-  <ts-button>My button</ts-button>
+  <ts-button tsMenuItem="transparent">My button</ts-button>

-  <ts-link>My button</ts-link>
+  <ts-link tsMenuItem="transparent">My button</ts-link>
</ng-template>
```

##### Dependency

The depency on `@terminus/ui-styles` has been increased to `2.1.5`. This is the release that contains the new menu styles.

# 5.0.0 (2020-12-16)


### Bug Fixes

* **Button:** background now has correct transition ([38f4afd](https://github.com/GetTerminus/terminus-oss/commit/38f4afd779813eab15ceea23b760ff5e6940c7bc))
* **Menu:** upgrade to NG11 & TS4 ([de7d964](https://github.com/GetTerminus/terminus-oss/commit/de7d964dcc8c973a50e2c09ac1cea15ca7c364ab))


### BREAKING CHANGES

* **Menu:** Now requires NG11+ and TS4+





# [4.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@3.0.4...@terminus/ui-menu@4.0.0) (2020-11-17)


### Bug Fixes

* **Menu:** remove dependency on FontAwesome ([698da45](https://github.com/GetTerminus/terminus-oss/commit/698da457e85072199f56adc25cd57ebfb5136c04)), closes [#458](https://github.com/GetTerminus/terminus-oss/issues/458)


### BREAKING CHANGES

* **Menu:** Now depends on @terminus/ui-button@3.0.0





## [3.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@3.0.3...@terminus/ui-menu@3.0.4) (2020-11-11)


### Bug Fixes

* **Menu:** add ui-styles to schematic ([380375c](https://github.com/GetTerminus/terminus-oss/commit/380375ceacf31e31659ac2bdd5b74349b2e7a352))





## [3.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@3.0.2...@terminus/ui-menu@3.0.3) (2020-11-11)


### Bug Fixes

* **Menu:** correct dependencies, move stories ([13f13c3](https://github.com/GetTerminus/terminus-oss/commit/13f13c383e5d90e0bc4d9d05e67e1fb962660ae6))





## [3.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@3.0.1...@terminus/ui-menu@3.0.2) (2020-11-06)


### Bug Fixes

* **Menu:** bump icon package ([4fccd7e](https://github.com/GetTerminus/terminus-oss/commit/4fccd7e98e0363fbb41c5d37313700b63dc6ea3e))





## [3.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@3.0.0...@terminus/ui-menu@3.0.1) (2020-10-14)


### Bug Fixes

* **Menu:** remove unused theme class ([d5b365b](https://github.com/GetTerminus/terminus-oss/commit/d5b365b6a45cbaffe33128f0ba799252103da00c)), closes [#386](https://github.com/GetTerminus/terminus-oss/issues/386)





# [3.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.1.2...@terminus/ui-menu@3.0.0) (2020-10-02)


### Bug Fixes

* **Menu:** convert theme support to trigger theme support ([572d7e4](https://github.com/GetTerminus/terminus-oss/commit/572d7e44a062b61116e160300e7fbe9166032f14))


### BREAKING CHANGES

* **Menu:** Theme input no longer supported





## [2.1.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.1.1...@terminus/ui-menu@2.1.2) (2020-09-14)

**Note:** Version bump only for package @terminus/ui-menu





## [2.1.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.1.0...@terminus/ui-menu@2.1.1) (2020-09-11)

**Note:** Version bump only for package @terminus/ui-menu





# [2.1.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.16...@terminus/ui-menu@2.1.0) (2020-09-08)


### Bug Fixes

* force material & cdk ^9.2.4 for consumers ([ea09a6f](https://github.com/GetTerminus/terminus-oss/commit/ea09a6ff88a1ea239fe0e24cb011abfb3ffc8908)), closes [#275](https://github.com/GetTerminus/terminus-oss/issues/275)


### Features

* clean all markdown ([5249a59](https://github.com/GetTerminus/terminus-oss/commit/5249a59486be63b6d9a0be7a801defb9b6adcedc))





## [2.0.16](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.15...@terminus/ui-menu@2.0.16) (2020-09-04)

**Note:** Version bump only for package @terminus/ui-menu





## [2.0.15](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.14...@terminus/ui-menu@2.0.15) (2020-09-03)

**Note:** Version bump only for package @terminus/ui-menu

## [2.0.14](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.13...@terminus/ui-menu@2.0.14) (2020-09-01)

### Bug Fixes

* **Menu:** add button specific styles ([ab8fe9f](https://github.com/GetTerminus/terminus-oss/commit/ab8fe9fb50fea82390542eddbec7e93b1609bd5b))

## [2.0.13](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.12...@terminus/ui-menu@2.0.13) (2020-08-26)

**Note:** Version bump only for package @terminus/ui-menu

## [2.0.12](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.11...@terminus/ui-menu@2.0.12) (2020-08-25)

**Note:** Version bump only for package @terminus/ui-menu

## [2.0.11](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.10...@terminus/ui-menu@2.0.11) (2020-08-21)

**Note:** Version bump only for package @terminus/ui-menu

## [2.0.10](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.9...@terminus/ui-menu@2.0.10) (2020-08-14)

**Note:** Version bump only for package @terminus/ui-menu

## [2.0.9](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.8...@terminus/ui-menu@2.0.9) (2020-08-10)

### Bug Fixes

* **Menu:** set custom trigger border for non-default themes ([3642b0f](https://github.com/GetTerminus/terminus-oss/commit/3642b0ff18bc8449f30a35871c1da006d3d7635c))

## [2.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.7...@terminus/ui-menu@2.0.8) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-menu

## [2.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-menu@2.0.6...@terminus/ui-menu@2.0.7) (2020-08-06)

### Bug Fixes

* **Menu:** more lps tweaks ([cd195b1](https://github.com/GetTerminus/terminus-oss/commit/cd195b1bb0afeb80bd8d15e22f7b695d4a11c665))

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

## 2.0.0 (2020-07-27)

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
