# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@4.0.0...@terminus/ui-input@4.0.1) (2021-03-24)


### Bug Fixes

* **Input:** set 0 as a value for input ([#554](https://github.com/GetTerminus/terminus-oss/issues/554)) ([a1dc6a6](https://github.com/GetTerminus/terminus-oss/commit/a1dc6a6a71920abaf3664d2ce06b96e9801bda93)), closes [#553](https://github.com/GetTerminus/terminus-oss/issues/553)





# [4.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@3.0.1...@terminus/ui-input@4.0.0) (2020-12-16)


### Bug Fixes

* **Input:** upgrade to NG11 & TS4 ([64763c4](https://github.com/GetTerminus/terminus-oss/commit/64763c4d7f529699cd671adac2f44e0e6e76170f))


### BREAKING CHANGES

* **Input:** Now requires NG11+ and TS4+





## [3.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@3.0.0...@terminus/ui-input@3.0.1) (2020-12-08)

**Note:** Version bump only for package @terminus/ui-input





# [3.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.2.0...@terminus/ui-input@3.0.0) (2020-12-04)

### Bug Fixes

* **Input:** no longer re-exporting date formats twice ([b688a11](https://github.com/GetTerminus/terminus-oss/commit/b688a110fd07ba34475cc6b8e5b292cd67f19e46))


### Features

* **Input:** allow custom dom to be passed in ([570c41e](https://github.com/GetTerminus/terminus-oss/commit/570c41eb715ab174415796f537abe864966fdea8))
* **Input:** allow datepicker to be opened on load ([611edeb](https://github.com/GetTerminus/terminus-oss/commit/611edebc2e7dbbf06920cca3638ce2fa29ecbb87))
* **Input:** redesign ([dbd9527](https://github.com/GetTerminus/terminus-oss/commit/dbd9527f581fc98943d5f5504e7fafe11a12806b))
* **Input:** support small format ([587935c](https://github.com/GetTerminus/terminus-oss/commit/587935c44f02b19649997b9cb138119c60c9a2d6))

### Migration notes for 3.0.0

No longer supporting:

1. prefix icon
1. suffix icon
1. theme
1. built in validation messages


#### Prefix and Suffix icons

```diff
<ts-input
-  prefixIcon="faHome"
-  suffixIcon="faCancel"
></ts-input>
```

Designs won't have prefix or suffix icons going forward. The input component still supports the clear icon and the datepicker icon. Any other components (such as Search) will need to add their own prefix/suffix support as needed.

#### Theme

```diff
<ts-input
-  theme="warn"
></ts-input>
```

#### Validation messages

Pulling validation messages from the form control was a pain point for some teams; especially as they approach localization. Now the input accepts a string error message:

```diff
<ts-input
+  errorMessage="A valid email address is required."
></ts-input>
```



## [2.1.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.1.7...@terminus/ui-input@2.1.8) (2020-11-11)


### Bug Fixes

* **Input:** add ui-styles to schematic ([3746a09](https://github.com/GetTerminus/terminus-oss/commit/3746a09f963f1ded60c2b51f2737b8a906b3c654))





## [2.1.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.1.6...@terminus/ui-input@2.1.7) (2020-11-11)


### Bug Fixes

* **Input:** correct dependencies, move stories ([c780e45](https://github.com/GetTerminus/terminus-oss/commit/c780e45d7d96f39c58cc6ab2a1cb2f0279bfb39d))





## [2.1.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.1.5...@terminus/ui-input@2.1.6) (2020-11-09)


### Bug Fixes

* **Input:** update to allow version ranges ([a0b062a](https://github.com/GetTerminus/terminus-oss/commit/a0b062af5892a98e5477a2b27c289381d52299bc))





## [2.1.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.1.4...@terminus/ui-input@2.1.5) (2020-11-06)


### Bug Fixes

* **Input:** bump icon package ([74aed9b](https://github.com/GetTerminus/terminus-oss/commit/74aed9b55750bb1327244a066f8c24ab9d57cff3))





## 2.1.4 (2020-11-06)


### Bug Fixes

* **Input:** import pipes module ([1d28420](https://github.com/GetTerminus/terminus-oss/commit/1d2842069a17270e415eeee49d15cd93a1796268)), closes [#431](https://github.com/GetTerminus/terminus-oss/issues/431)


### Reverts

* **Dependencies:** remove fe-utilities as node dep ([0fe39e0](https://github.com/GetTerminus/terminus-oss/commit/0fe39e0ca0be1f0e4c7baef7b3301f33db92b524))





## [2.1.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.1.2...@terminus/ui-input@2.1.3) (2020-09-14)

**Note:** Version bump only for package @terminus/ui-input





## [2.1.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.1.1...@terminus/ui-input@2.1.2) (2020-09-11)

**Note:** Version bump only for package @terminus/ui-input





## [2.1.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.1.0...@terminus/ui-input@2.1.1) (2020-09-11)

**Note:** Version bump only for package @terminus/ui-input





# [2.1.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.14...@terminus/ui-input@2.1.0) (2020-09-08)


### Bug Fixes

* force material & cdk ^9.2.4 for consumers ([ea09a6f](https://github.com/GetTerminus/terminus-oss/commit/ea09a6ff88a1ea239fe0e24cb011abfb3ffc8908)), closes [#275](https://github.com/GetTerminus/terminus-oss/issues/275)


### Features

* clean all markdown ([5249a59](https://github.com/GetTerminus/terminus-oss/commit/5249a59486be63b6d9a0be7a801defb9b6adcedc))





## [2.0.14](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.13...@terminus/ui-input@2.0.14) (2020-09-04)

**Note:** Version bump only for package @terminus/ui-input





## [2.0.13](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.12...@terminus/ui-input@2.0.13) (2020-09-03)

**Note:** Version bump only for package @terminus/ui-input

## [2.0.12](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.11...@terminus/ui-input@2.0.12) (2020-08-26)

**Note:** Version bump only for package @terminus/ui-input

## [2.0.11](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.10...@terminus/ui-input@2.0.11) (2020-08-26)

**Note:** Version bump only for package @terminus/ui-input

## [2.0.10](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.9...@terminus/ui-input@2.0.10) (2020-08-25)

**Note:** Version bump only for package @terminus/ui-input

## [2.0.9](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.8...@terminus/ui-input@2.0.9) (2020-08-14)

**Note:** Version bump only for package @terminus/ui-input

## [2.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.7...@terminus/ui-input@2.0.8) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-input

## [2.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.6...@terminus/ui-input@2.0.7) (2020-08-06)

**Note:** Version bump only for package @terminus/ui-input

## [2.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.5...@terminus/ui-input@2.0.6) (2020-08-05)

### Bug Fixes

* updates for new eslint naming convention rule ([f9d1963](https://github.com/GetTerminus/terminus-oss/commit/f9d1963184a2e483274b629e6bb6504e21baa743))

### Reverts

* downgrade back to eslint v6.x ([5204621](https://github.com/GetTerminus/terminus-oss/commit/5204621a0c0aef6d7892222f190f07a620497d73))

## [2.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.4...@terminus/ui-input@2.0.5) (2020-07-31)

**Note:** Version bump only for package @terminus/ui-input

## [2.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.3...@terminus/ui-input@2.0.4) (2020-07-29)

**Note:** Version bump only for package @terminus/ui-input

## [2.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.2...@terminus/ui-input@2.0.3) (2020-07-29)

### Bug Fixes

* fast follow updates for LPS ([f15bfd4](https://github.com/GetTerminus/terminus-oss/commit/f15bfd4fa088da2fea76e9964c664bad8844e740))

## [2.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.1...@terminus/ui-input@2.0.2) (2020-07-28)

**Note:** Version bump only for package @terminus/ui-input

## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@2.0.0...@terminus/ui-input@2.0.1) (2020-07-28)

### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))

## [2.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@1.0.9...@terminus/ui-input@2.0.0) (2020-07-27)

### Features

* **Input:** change icon library ([bfd28d9](https://github.com/GetTerminus/terminus-oss/commit/bfd28d96ba7355e4bc5596b0c34030ecdc71adf7))

### BREAKING CHANGES

* **Input:** Change icon library

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

## [1.0.9](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@1.0.8...@terminus/ui-input@1.0.9) (2020-07-14)

### Bug Fixes

* **Input:** use css custom properties ([6eb8b9d](https://github.com/GetTerminus/terminus-oss/commit/6eb8b9d15a33e9d893573b9f19daa95e23f26a45)), closes [#102](https://github.com/GetTerminus/terminus-oss/issues/102)

## 1.0.8 (2020-07-13)

**Note:** Version bump only for package @terminus/ui-input

## [1.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@1.0.6...@terminus/ui-input@1.0.7) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-input

## 1.0.6 (2020-06-23)

**Note:** Version bump only for package @terminus/ui-input

## [1.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@1.0.4...@terminus/ui-input@1.0.5) (2020-06-10)

### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))

## [1.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-input@1.0.3...@terminus/ui-input@1.0.4) (2020-06-10)

### Bug Fixes

* **Input:** trigger release ([31cff28](https://github.com/GetTerminus/terminus-oss/commit/31cff28952acd04da2fe8e090a2d362178ea9aeb))
