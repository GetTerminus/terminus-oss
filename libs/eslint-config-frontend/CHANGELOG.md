# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 5.0.0 (2020-12-16)


### Bug Fixes

* **Button:** background now has correct transition ([38f4afd](https://github.com/GetTerminus/terminus-oss/commit/38f4afd779813eab15ceea23b760ff5e6940c7bc))
* **ESLintConfig:** move to ESLint 7 ([a78eb9b](https://github.com/GetTerminus/terminus-oss/commit/a78eb9b910eaeba655271d88e9de2e2e525694e1))


### BREAKING CHANGES

* **ESLintConfig:** Now requires >= ESLint 7





# 4.0.0 (2020-10-29)


### Bug Fixes

* **ESLintConfig:** update duplicate import rule to allow type imports ([6ca8703](https://github.com/GetTerminus/terminus-oss/commit/6ca87035c9fb33b46a14a6b9bf1c2f61b8c35381))


### BREAKING CHANGES

* **ESLintConfig:** `no-duplicate-imports` is now named `import/no-duplicates`. Any ESLint disable comments or rule overrides must be updated.

This change allows consumers to define `import { Foo } from ./foo` and `import type { FooType } from ./foo` without trigging the duplicate import error.





# 3.2.0 (2020-09-08)


### Features

* clean all markdown ([5249a59](https://github.com/GetTerminus/terminus-oss/commit/5249a59486be63b6d9a0be7a801defb9b6adcedc))





# [3.1.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/eslint-config-frontend@3.0.4...@terminus/eslint-config-frontend@3.1.0) (2020-08-25)

### Features

* **ESLintConfig:** treat new stories dir the same as test files ([5408872](https://github.com/GetTerminus/terminus-oss/commit/54088724fc1d3f8dcbd2724c403a12e7c79c7b35))

## [3.0.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/eslint-config-frontend@3.0.3...@terminus/eslint-config-frontend@3.0.4) (2020-08-14)

**Note:** Version bump only for package @terminus/eslint-config-frontend

## [3.0.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/eslint-config-frontend@3.0.2...@terminus/eslint-config-frontend@3.0.3) (2020-08-06)

### Bug Fixes

* **ESLintConfig:** update for new eslint rule ([08c5e42](https://github.com/GetTerminus/terminus-oss/commit/08c5e42aff3882de4e83245a704cb89b20e7f83d))

## [3.0.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/eslint-config-frontend@3.0.1...@terminus/eslint-config-frontend@3.0.2) (2020-08-05)

**Note:** Version bump only for package @terminus/eslint-config-frontend

## [3.0.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/eslint-config-frontend@3.0.0...@terminus/eslint-config-frontend@3.0.1) (2020-08-05)

### Bug Fixes

* updates for new eslint naming convention rule ([f9d1963](https://github.com/GetTerminus/terminus-oss/commit/f9d1963184a2e483274b629e6bb6504e21baa743))
* **ESLintConfig:** update for new naming convention rule ([802a8fc](https://github.com/GetTerminus/terminus-oss/commit/802a8fcfdf44bcf54c98c1ede7cfaf335d86cebf))

### Reverts

* downgrade back to eslint v6.x ([5204621](https://github.com/GetTerminus/terminus-oss/commit/5204621a0c0aef6d7892222f190f07a620497d73))

## 3.0.0 (2020-07-31)

### Bug Fixes

* **ESLintConfig:** updates for v7 ([a4eae43](https://github.com/GetTerminus/terminus-oss/commit/a4eae434b4f0fbcdfddd95e495ea81fc0b43d1ff))

### BREAKING CHANGES

ESLint upgrade

## [2.2.6](https://github.com/GetTerminus/terminus-oss/compare/@terminus/eslint-config-frontend@2.2.5...@terminus/eslint-config-frontend@2.2.6) (2020-07-13)

### Bug Fixes

* **ESLintConfig:** Fix incorrect rule ([36bf613](https://github.com/GetTerminus/terminus-oss/commit/36bf613dd663af913d538ca07008b6d825b46e89))

## [2.2.5](https://github.com/GetTerminus/terminus-oss/compare/@terminus/eslint-config-frontend@2.2.4...@terminus/eslint-config-frontend@2.2.5) (2020-07-13)

**Note:** Version bump only for package @terminus/eslint-config-frontend

## [2.2.4](https://github.com/GetTerminus/terminus-oss/compare/@terminus/eslint-config-frontend@2.2.3...@terminus/eslint-config-frontend@2.2.4) (2020-07-13)

### Bug Fixes

* **ESLintConfig:** consider stories files as spec files ([00f5ebf](https://github.com/GetTerminus/terminus-oss/commit/00f5ebf560885c390595d76f7eaeabd8c254f463))

## [2.2.3](https://github.com/GetTerminus/terminus-oss/compare/@terminus/eslint-config-frontend@2.2.2...@terminus/eslint-config-frontend@2.2.3) (2020-07-08)

**Note:** Version bump only for package @terminus/eslint-config-frontend

## [2.2.2](https://github.com/GetTerminus/terminus-oss/compare/@terminus/eslint-config-frontend@2.2.1...@terminus/eslint-config-frontend@2.2.2) (2020-07-08)

**Note:** Version bump only for package @terminus/eslint-config-frontend

## [2.2.1](https://github.com/GetTerminus/terminus-oss/compare/@terminus/eslint-config-frontend@2.2.0...@terminus/eslint-config-frontend@2.2.1) (2020-07-08)

**Note:** Version bump only for package @terminus/eslint-config-frontend

## [2.2.0](https://github.com/GetTerminus/terminus-oss/compare/@terminus/eslint-config-frontend@2.1.0...@terminus/eslint-config-frontend@2.2.0) (2020-07-08)

### Bug Fixes

* **ESLintConfig:** add build command ([b38ada9](https://github.com/GetTerminus/terminus-oss/commit/b38ada91d034ebe18b96f46b603b13b0ccbca5c0))

### Features

* **StylelintConfig:** move package into monorepo ([d04111f](https://github.com/GetTerminus/terminus-oss/commit/d04111fe906a8ed91cf17a659ac0bcb24ee4910f))

## 2.1.0 (2020-07-07)

### Bug Fixes

* **ESLintConfig:** trigger release ([4538874](https://github.com/GetTerminus/terminus-oss/commit/4538874ece4228ff44372f0ea9eda4abc664739f))

### Features

* **ESLintConfig:** add new library ([057852c](https://github.com/GetTerminus/terminus-oss/commit/057852c954ea5820db4abf7010cf5a79c61547f0))
