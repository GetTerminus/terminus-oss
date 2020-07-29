# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-button@2.0.2...@terminus/ui-button@2.0.3) (2020-07-29)


### Bug Fixes

* fast follow updates for LPS ([f15bfd4](https://github.com/GetTerminus/terminus-oss/commit/f15bfd4fa088da2fea76e9964c664bad8844e740))





## [2.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-button@2.0.1...@terminus/ui-button@2.0.2) (2020-07-28)

**Note:** Version bump only for package @terminus/ui-button





## [2.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-button@2.0.0...@terminus/ui-button@2.0.1) (2020-07-28)


### Bug Fixes

* bump all package versions ([9446c0d](https://github.com/GetTerminus/terminus-oss/commit/9446c0d5cde3bd693cfba7cabbfd2db443a47b00))





# [2.0.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-button@1.0.12...@terminus/ui-button@2.0.0) (2020-07-27)


### Bug Fixes

* **Button:** update border radius ([93895e8](https://github.com/GetTerminus/terminus-oss/commit/93895e89b8f5a13875711ba6bc591bef619a4c00))


### Features

* **Button:** change icon library ([757e405](https://github.com/GetTerminus/terminus-oss/commit/757e405772171fe575493ae3f5e22b3816abc5da))
* **Button:** new themes configuration ([48129f8](https://github.com/GetTerminus/terminus-oss/commit/48129f8ca328442828f5806dd28f635f7ea010b1)), closes [#28](https://github.com/GetTerminus/terminus-oss/issues/28)


### BREAKING CHANGES

* **Button:** New themes configuration
* **Button:** Change icon library
* **Button:** Border radius change
* **Button**: Remove long deprecated button type spelling `collapsable`.

#### 2.0.0 Migration Notes

##### Theme

If passing in a theme, use one of the new button themes: `default|secondary|warning`:

```diff
-<ts-button theme="primary">Click Me!</ts-button>
+<ts-button theme="default">Click Me!</ts-button>
```

##### Icon

If passing in an icon, pass in a FontAwesome icon reference instead of a string name:

```typescript
import { faHome } from '@fortawesome/pro-solid-svg-icons/faHome';
...
public home = faHome;
```

```diff
-<ts-button iconName="home">Go Home</ts-button>
+<ts-button [icon]="home">Go Home</ts-button>
```

> NOTE: Multiple versions of each icon exist. We should always import from the 'solid' collection.

##### Hollow

If using `format="hollow"` change to `theme="secondary"`:

```diff
-<ts-button format="hollow">Click Me!</ts-button>
+<ts-button theme="secondary">Click Me!</ts-button>
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


## 1.0.12 (2020-07-24)

**Note:** Version bump only for package @terminus/ui-button





## 1.0.11 (2020-07-13)

**Note:** Version bump only for package @terminus/ui-button





## [1.0.10](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-button@1.0.9...@terminus/ui-button@1.0.10) (2020-07-07)

**Note:** Version bump only for package @terminus/ui-button





## 1.0.9 (2020-06-23)

**Note:** Version bump only for package @terminus/ui-button





## [1.0.8](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-button@1.0.7...@terminus/ui-button@1.0.8) (2020-06-10)


### Bug Fixes

* bump all internal dependencies ([ff26b80](https://github.com/GetTerminus/terminus-oss/commit/ff26b806bb599401f006996be5b567a378e68ef3))





## [1.0.7](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-button@1.0.6...@terminus/ui-button@1.0.7) (2020-06-09)


### Bug Fixes

* **Button:** trigger 3 ([ac11312](https://github.com/GetTerminus/terminus-oss/commit/ac11312f716926da51918a5de3271e4ea3a32c75))
* **Button:** trigger again ([142ba6f](https://github.com/GetTerminus/terminus-oss/commit/142ba6f079be141dab1ab4280cdf95065aff447b))





## [1.0.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-button@1.0.5...@terminus/ui-button@1.0.6) (2020-06-09)


### Bug Fixes

* **Button:** trigger release ([fc5eb9d](https://github.com/GetTerminus/terminus-oss/commit/fc5eb9d30928e79c5a29530f6237aff213d15058))





## 1.0.5 (2020-06-09)


### Bug Fixes

* **Button:** test release files ([55520f9](https://github.com/GetTerminus/terminus-oss/commit/55520f9322d8e282dc280750a14189fc795e06b8))
* **Button:** trigger release ([70b320d](https://github.com/GetTerminus/terminus-oss/commit/70b320d072a25a581451da86be72c1f5fce26398))
* **Button:** update ([a47f307](https://github.com/GetTerminus/terminus-oss/commit/a47f30757b9216d6ee76788c117e76eacf5289e5))





## [1.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/ui-button@1.0.3...@terminus/ui-button@1.0.4) (2020-06-09)


### Bug Fixes

* **Button:** trigger release ([70b320d](https://github.com/GetTerminus/terminus-oss/commit/70b320d072a25a581451da86be72c1f5fce26398))





## 1.0.3 (2020-06-09)


### Bug Fixes

* **Button:** test release files ([55520f9](https://github.com/GetTerminus/terminus-oss/commit/55520f9322d8e282dc280750a14189fc795e06b8))
* **Button:** update ([a47f307](https://github.com/GetTerminus/terminus-oss/commit/a47f30757b9216d6ee76788c117e76eacf5289e5))
