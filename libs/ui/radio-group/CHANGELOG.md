# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@3.0.0...@terminus/ui-radio-group@3.0.1) (2020-10-14)

**Note:** Version bump only for package @terminus/ui-radio-group





# [3.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.1.3...@terminus/ui-radio-group@3.0.0) (2020-10-14)


### Features

* **RadioGroup:** full redesign ([3a5e503](https://github.com/GetTerminus/terminus-oss/commit/3a5e503d4e889fe99f8073b38868a233d783693c)), closes [#373](https://github.com/GetTerminus/terminus-oss/issues/373)


### BREAKING CHANGES

* **RadioGroup:** Full rewrite - three primary API changes.

### Migration notes

> NOTE: There are stories demonstrating all new functionality.

#### Passing in options

Options are now passed in as child components:

```diff
<ts-radio-group
-  [options]="items$ | async"
-  [formatUILabelFn]="uiFormatter"
-  [formatUISubLabelFn]="uiSubFormatter"
-  [formatModelValueFn]="modelFormatter"
>
+  <ng-container *ngFor="let item of items$ | async">
+    <ts-radio-button [value]="item.value">{{ item.title }}</ts-radio-button>
+  </ng-container>
</ts-radio-group>
```

This means that the various formatter functions are no longer needed. You can continue to use them to pass in values if you wish:

```html
<ng-container *ngFor="let item of items$ | async">
  <ts-radio-button
    [value]="myModelFormatter(item)"
    [textContent]="myUiFormatter(item)"
  ></ts-radio-button>
</ng-container>
```

#### Visual mode

Visual mode was always a bit confusing as there were multiple inputs to control the visual mode but it was very unclear that some were dependent on others. Visual mode has now been rolled into a single API:

The possible options are defined by `TS_VISUAL_FORMATS` and currently include: 

- `none`
- `visual`
- `visual-centered`
- `visual-small`
- `visual-small-centered`

```diff
<ts-radio-group
-  [isVisual]="true"
+  visualFormat="visual"
></ts-radio-group>

<ts-radio-group
-  [isVisual]="true"
-  [isCentered]="true"
+  visualFormat="visual-centered"
></ts-radio-group>

<ts-radio-group
-  [isVisual]="true"
-  [isSmall]="true"
+  visualFormat="visual-small"
></ts-radio-group>

<ts-radio-group
-  [isVisual]="true"
-  [isSmall]="true"
-  [isCentered]="true"
+  visualFormat="visual-small-centered"
></ts-radio-group>
```

#### Validations

Since the component no longer requires model control, a `FormControl` is not passed in via an `@Input`. To better support backward compatibility we still include the `<ts-validation-messages>` component internally. That component does need access to your `FormControl` in order to display the correct message(s) so it can be passed in via the `validationFormControl` input:

```diff
<ts-radio-group
  [formControl]="myControl"
+  [validationFormControl]="myControl">
  ...
</ts-radio-group>
```

### Non-breaking changes

#### a11y

Now all modes fully pass accessibility standards.

#### Fieldset support

The radio group is now wrapped by a fieldset which supports a form ID and legend text:

```html
<ts-radio-group fieldsetId="myFormId" fieldsetLegend="My radio group!">
  ...
</ts-radio-group>
```

#### Aspect ratio control

Previously, the aspect ratio of the visual format radio buttons were hard-coded. While the defaults stay the same, the aspect ratio can now easily be changed by updating the associated CSS property:

```scss
.my-class {
  // For a 16/9 aspect ratio:
  --ts-radio-visual-aspectRatio: calc(16 / 9);
}
```





## [2.1.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.1.2...@terminus/ui-radio-group@2.1.3) (2020-10-05)

**Note:** Version bump only for package @terminus/ui-radio-group





## [2.1.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.1.1...@terminus/ui-radio-group@2.1.2) (2020-09-14)

**Note:** Version bump only for package @terminus/ui-radio-group





## [2.1.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.1.0...@terminus/ui-radio-group@2.1.1) (2020-09-11)

**Note:** Version bump only for package @terminus/ui-radio-group





# [2.1.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.16...@terminus/ui-radio-group@2.1.0) (2020-09-08)


### Bug Fixes

* force material & cdk ^9.2.4 for consumers ([ea09a6f](https://github.com/GetTerminus/terminus-oss/commit/ea09a6ff88a1ea239fe0e24cb011abfb3ffc8908)), closes [#275](https://github.com/GetTerminus/terminus-oss/issues/275)


### Features

* clean all markdown ([5249a59](https://github.com/GetTerminus/terminus-oss/commit/5249a59486be63b6d9a0be7a801defb9b6adcedc))





## [2.0.16](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.15...@terminus/ui-radio-group@2.0.16) (2020-09-04)

**Note:** Version bump only for package @terminus/ui-radio-group





## [2.0.15](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.14...@terminus/ui-radio-group@2.0.15) (2020-09-03)

**Note:** Version bump only for package @terminus/ui-radio-group

## [2.0.14](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.13...@terminus/ui-radio-group@2.0.14) (2020-08-26)

**Note:** Version bump only for package @terminus/ui-radio-group

## [2.0.13](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.12...@terminus/ui-radio-group@2.0.13) (2020-08-25)

**Note:** Version bump only for package @terminus/ui-radio-group

## [2.0.12](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.11...@terminus/ui-radio-group@2.0.12) (2020-08-25)

**Note:** Version bump only for package @terminus/ui-radio-group

## [2.0.11](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.10...@terminus/ui-radio-group@2.0.11) (2020-08-21)

### Bug Fixes

* **RadioGroup:** correctly passing theme info to material component ([54ee0ff](https://github.com/GetTerminus/terminus-oss/commit/54ee0ffd2d7d8f55848bf9221d70776999992f58))

## [2.0.10](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.9...@terminus/ui-radio-group@2.0.10) (2020-08-20)

### Bug Fixes

* **RadioGroup:** fix radio button css order on borders. ([b22c1fd](https://github.com/GetTerminus/terminus-oss/commit/b22c1fdbfbe60ef58ef4cebc55752b31549986dd))

## [2.0.9](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.8...@terminus/ui-radio-group@2.0.9) (2020-08-14)

**Note:** Version bump only for package @terminus/ui-radio-group

## [2.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.7...@terminus/ui-radio-group@2.0.8) (2020-08-10)

**Note:** Version bump only for package @terminus/ui-radio-group

## [2.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.6...@terminus/ui-radio-group@2.0.7) (2020-08-05)

### Bug Fixes

* More LPS tweaks ([3bfd023](https://github.com/GetTerminus/terminus-oss/commit/3bfd023788f06b3bd609493d3308f902c11f0dcd))

## [2.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.5...@terminus/ui-radio-group@2.0.6) (2020-07-31)

**Note:** Version bump only for package @terminus/ui-radio-group

## [2.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.4...@terminus/ui-radio-group@2.0.5) (2020-07-31)

**Note:** Version bump only for package @terminus/ui-radio-group

## [2.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.3...@terminus/ui-radio-group@2.0.4) (2020-07-29)

**Note:** Version bump only for package @terminus/ui-radio-group

## [2.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.2...@terminus/ui-radio-group@2.0.3) (2020-07-29)

### Bug Fixes

* fast follow updates for LPS ([f15bfd4](https://github.com/GetTerminus/terminus-oss/commit/f15bfd4fa088da2fea76e9964c664bad8844e740))

## [2.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.1...@terminus/ui-radio-group@2.0.2) (2020-07-28)

**Note:** Version bump only for package @terminus/ui-radio-group

## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@2.0.0...@terminus/ui-radio-group@2.0.1) (2020-07-28)

### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))

## 2.0.0 (2020-07-27)

### Features

* **RadioGroup:** change icon library ([92e7863](https://github.com/GetTerminus/terminus-oss/commit/92e78639a84011cf6ee7182a4ff4dfa1a4b101d7))

### BREAKING CHANGES

* **RadioGroup:** change icon library

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

## [1.1.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@1.1.2...@terminus/ui-radio-group@1.1.3) (2020-07-13)

**Note:** Version bump only for package @terminus/ui-radio-group

## [1.1.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@1.1.1...@terminus/ui-radio-group@1.1.2) (2020-07-13)

### Bug Fixes

* **RadioGroup:** correct tokens dep version ([eb4eb8f](https://github.com/GetTerminus/terminus-oss/commit/eb4eb8fe06dc91dcf9bde4d20be54a3544f98df3))

## [1.1.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@1.1.0...@terminus/ui-radio-group@1.1.1) (2020-07-10)

### Bug Fixes

* **RadioGroup:** move to custom css properties ([48ccd6c](https://github.com/GetTerminus/terminus-oss/commit/48ccd6ca5cfaa94edf006226b2e74079efb28779)), closes [#121](https://github.com/GetTerminus/terminus-oss/issues/121)

## [1.1.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@1.0.5...@terminus/ui-radio-group@1.1.0) (2020-07-09)

### Features

* **DesignTokens:** add all existing typography styles ([e0c8b8e](https://github.com/GetTerminus/terminus-oss/commit/e0c8b8e9065ac584d6f1908981aaf29b5ae17118))

## [1.0.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-radio-group@1.0.4...@terminus/ui-radio-group@1.0.5) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-radio-group

## 1.0.4 (2020-06-23)

**Note:** Version bump only for package @terminus/ui-radio-group

## 1.0.3 (2020-06-10)

### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))

## 1.0.2 (2020-06-09)

### Bug Fixes

* **Button:** update ([a47f307](https://github.com/GetTerminus/terminus-oss/commit/a47f30757b9216d6ee76788c117e76eacf5289e5))
