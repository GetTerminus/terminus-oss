<h1>Developing the Terminus UI</h1>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Developing](#developing)
  - [General commands](#general-commands)
  - [Showcase-ui](#showcase-ui)
  - [Visual Regression (vr)](#visual-regression-vr)
  - [Setting up NX cloud](#setting-up-nx-cloud)
  - [Setting up FontAwesomePro](#setting-up-fontawesomepro)
- [Adding a Component for UI Library](#adding-a-component-for-ui-library)
  - [Branching](#branching)
    - [Naming](#naming)
    - [Workflow](#workflow)
    - [Hotfixes](#hotfixes)
  - [Committing](#committing)
    - [Breaking Changes](#breaking-changes)
  - [Linting](#linting)
  - [Testing](#testing)
  - [Pull Requests](#pull-requests)
  - [Releasing](#releasing)
  - [Code Comments](#code-comments)
    - [JSDoc Tags](#jsdoc-tags)
  - [Usage Docs](#usage-docs)
  - [Schematics](#schematics)
- [Releases](#releases)
- [Code Style](#code-style)
  - [Lint configurations](#lint-configurations)
  - [Member Ordering](#member-ordering)
  - [Underscores](#underscores)
  - [Setters & Getters](#setters--getters)
  - [Decorators](#decorators)
- [Issues](#issues)
- [Storybook and Chromatic](#storybook-and-chromatic)
  - [Build storybook for each project](#build-storybook-for-each-project)
  - [Build storybook for all the projects](#build-storybook-for-all-the-projects)
  - [Run Chromatic on affected projects](#run-chromatic-on-affected-projects)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Developing

### General commands

```bash
# Run a task for all projects:
$ nx run-many --target=build --all
$ nx run-many --target=<test|lint|build|build> --all

# Run a task for a single project:
$ nx build ui-button [--with-deps]
$ nx <test|lint|build|deploy> ui-button [--with-deps]

# Only run commands on affected projects:
# Note: You can swap out 'test' for 'lint', 'e2e', 'apps', or 'libs'
$ nx affected:test
$ nx affected:test --parallel --maxParallel=5
$ nx affected:test --only-failed
$ nx affected:test --all
$ nx affected:test --base=release --head=HEAD
$ nx affected:test --base=release~1 --head=release

# Generate code coverage:
$ nx test my-project --codeCoverage

# Serve an application:
$ nx serve showcase-ui

# Add yourself as a contributor
# See contribution types here: http://bnj.bz/3C1S0A0d1c3U
$ yarn run contributors:add [your-github-handle] [contribution-type]
$ yarn run contributors:generate
```

Alternatively, a user can be added as a contributor through a GitHub comment. e.g.

```bash
@all-contributors please add @user for docs and tests
```

See the [bot usage docs][all-contrib-bot] for more.

> :bulb: Check [package.json][pkg-json] for all available commands

### Showcase-ui

1. `nx build showcase-ui && nx serve showcase-ui`
2. Navigate to `http://localhost:4200/components/`
3. Select a component from the menu (top right)

![Showcase UI Screenshot](https://user-images.githubusercontent.com/270193/35576969-67e0eab6-05ae-11e8-9c38-7d44bcf2c848.png)

### Visual Regression (vr)

1. `nx build vr && nx serve vr`
2. `npx cypress open` to actively develop on visual regression tests.
3. `yarn run vr:percy:run` to trigger visual regression tests on command line.

All cypress scripts live under `cypress/integration/`. Visual regression related tests are located at `cypress/integration/visual-regression/`.
Currently each component has its own test file. The HTML and Typescript files that are used to build visual regression pages are stored at
`apps/vr/src/app/components`.

### Setting up NX cloud

We leverage [NX cloud][nx-cloud] to share our build, test, & lint caches across local and CI runs.

To enable the cache locally, an environment variable must be made available:

```bash
# NOTE: The token can be found in the UXE 1Password vault
NX_CLOUD_AUTH_TOKEN=<TOKEN>
```

### Setting up FontAwesomePro

We leverage the pro-version of FontAwesome which requires a key to download. Add a environment variable called
`FONTAWESOME_NPM_AUTH_TOKEN` with the Terminus token:

```bash
# NOTE: The token can be found in the UXE 1Password vault
FONTAWESOME_NPM_AUTH_TOKEN=<TOKEN>
```

## Adding a Component for UI Library

1. Create a new package using NX
   - `nx g lib my-lib --skip-package-json --publishable --style scss`
2. Comment all methods, constants & `@Input`s using the supported [JSDoc style][compodoc_comments].
3. Add installation and usage examples in the component documentation with every possible input and output included.
4. Add the component to the [primary README's packages table][packages-table].

See the [official NX docs][nx-angular-docs] for more information.

### Branching

Note: Our base branch, `release`, is **always deployable**.

#### Naming

1. Branches should have a brief but comprehensive name.
    - The name should clearly encompass the work that the branch will contain. A name like
    `user-view` may make sense now, but some time later it will be difficult to know what work was
    done on the branch. A better name could be `27-create-user-detail-view`. Be as specific as
    possible, while keeping the length as short as possible.
1. Branches should have the associated GitHub issue number in the name.
    - This is a helpful reference to the issue details. More importantly, it forces everyone to
    create the issue _before_ the work begins. If it is worth doing, than it deserves an issue. This
    creates better historical data and more importantly, gives everyone visibility into the work
    being done.
    - The number should be at the beginning of the branch name: `45-update-payment-gateways`. This
    enables quick auto-completion in most terminals.

#### Workflow

##### Beginning a feature

1. Checkout `release`
2. Pull `release`
3. Create a feature branch from `release` (see [branch naming](#naming))

##### Working on a feature

1. Commit all work on the feature branch
1. Create a [pull request](#pull-requests) at any time (just don't request a review until you are
   finished)
1. Keep the remote up to date with your latest changes. Committing often locally is good, but those
   commits should be pushed to the remote (i.e. GitHub) at _least_ once a day so that the code is
   available to all engineers.

##### Finish a feature

1. If there are conflicts, merge `release` into the feature branch
    - Only do this if there are conflicts
    - See [Pull Requests](#pull-requests) for more information
1. Verify **all** [linters](#linting) run successfully
1. Verify all [tests](#testing) are passing **and** code coverage did not decrease (bonus points if
   it increases)
1. If you haven't yet, create a pull request from the feature branch into `release`
1. Add as much [information into the pull request body](#pull-requests) as possible
1. Request a review

#### Hotfixes

Hotfixes follow the same strategy as features.

### Committing

When code gets merged to `release`, many of our projects are automatically versioned and released. In order to give our
tooling the information it needs, we write our commit messages in a specific format. This has the added benefit of
improving the readability of our commit history.

```bash
# The format:
type(scope): message

# Examples:
fix(Button): Aria label is now correctly read by JAWS
feat(Tooltip): Add a tooltip component
chore(): Bump lodash version
```

For a friendlier prompt, you can run `yarn run cm` in the repo. This will ask several questions
and then construct the commit in the proper format for you. The prompt will allow you to choose
from a list of types and then a list of scopes. This is much easier than trying to remember all
possible scopes.

> Optional: Installing teh committizen cli tool (`yarn add -g committizen`) will allow you to run `git cz` or even alias
> to your preferred git command.

You **must** use one of the defined types since the types have specific meaning to the automatic
versioning tool.

- A type `fix` will increase the patch version (`x.x.1`)
- A type `feat` will increase the minor version (`x.1.x`)

To see all valid types for a project, look for the file `cz-config.js`.

#### Breaking Changes

When a commit contains a breaking change, it _must_ be included in the commit message body (not the
title). Both words should be uppercase and the comment body should include everything that other
engineers may need to know: `BREAKING CHANGE: A description of the breaking change`. This could
include comments, images, code examples, and more. Generally speaking, **more information is
better**.  (Note: when using the cli prompt, it will ask you about any breaking changes and add the
prefix `BREAKING CHANGES:` automatically)

Learn more about the automatic versioning tools we use:

- [semantic-release][semantic-release]
- [Conference talk on semantic-release][semantic-release-video]
- [validate-commit-msg][validate-commit-msg]

### Linting

All projects should pass all available linters _before_ committing.

TypeScript & JavaScript projects use ESLint and SASS/SCSS projects use Stylelint.

To edit configuration, look for the files `.eslintrc`, or `stylelint.config.js`. **These files should not be edited
without a discussion with the team.**

Look at the scripts section in the project's `package.json` for the command to run tests.

### Testing

All projects should work towards full test coverage. This is often not practical in a quickly
changing software startup, but a project should never dip below 80% coverage.

We use [Jest][jest] for unit tests.

Look at the scripts section in the project's `package.json` for the command to run tests.

### Pull Requests

When it is time merge a branch into `release`, create a pull request from the feature into `release`.

1. At the top of the pull request, link to the original issue.
    - If the [ZenHub][zenhub] extension is installed in your browser, you can attach an issue to the
      PR via the built in controls
1. If the pull request includes more than one item, include a high level list of what was done.
1. If the pull request covers UI changes, include a GIF or image to clearly show the change (bonus
   points for before and after images).
1. Request a review from someone on the UI team (any code owners will be notified by default).
1. A pull request may be opened before the work is complete. This makes it easier to get feedback
   while the work is in progress. Include `WIP:` at the beginning of the pull request title, add
   the `DO NOT MERGE` label so that it is not accidentally merged and `cc/ @mention` anyone that
   should take a look.
1. There are two options to check for merge conflicts between your branch and release:
   - Create a pull request against release. (Note: This will cause any associated CI service to begin building the feature
      branch on every push)
   - Use GitHub's compare view: `https://github.com/GetTerminus/terminus-oss/compare/your-branch-name...release`
1. The pull request body, just like the issue body, is the **single source of truth**. Any
   discussions, decisions or relevant information should be added to the pull request body
   immediately.

### Releasing

Releases are handled automatically when code is merged to `release`. Never merge code to `release` that is not ready for
consumers!

1. [Semantic Release][semantic-release] looks at all commits since the last tag on `release`.
2. Based on those commits it will [bump the version number appropriately][semver].
3. The package changelog is generated on [Github][oss-github].
4. The new version is published to [NPM][ui-npm] under the `next` tag.
5. When the new functionality is verified, it is tagged as `latest`:
   - `npm dist-tag add @terminus/ui-<package>@<version to promote> latest`

> NOTE: currently `yarn tag` outputs an error even though the tagging seems to work. Because of
> this, we will continue using NPM for tagging.

You can view published files using the [unpkg CDN][unpkg]. An example link:
`https://unpkg.com/browse/@terminus/ui-button@1.0.8/`

### Code Comments

When writing code, an engineer should be mindful that others will need to understand and edit this
code in the future. For this reason we don't assume that the future editor has the context.

Modern tooling will handle cleaning up comments and white space so we write for humans - not
machines.

1. Always include a JSDoc-style comment above all methods/functions:

```typescript
/**
 * Get a customer by ID
 *
 * @param customerId - The customer's ID
 * @returns The customer object
 */
```

1. For general notes, always include the prefix if one applies:

```typescript
// NOTE: A general informational note. Not for every comment; just when there is an important
//       piece of unusual information.
// TODO: A note about missing logic.
// HACK: A note about a 'hacky' solution.
// FIXME: A note about something that needs refactoring.
// BUG: A note about a bug. Include the associated issue number in the note.
```

1. All engineers should do their best to never need most of these note types. However, if needed,
  _always_ include the reason the note is needed. Remember, more information is better!

#### JSDoc Tags

##### Type

We don't use the type tag since the types are documented ina the TypeScript code.

##### Deprecated

The `@deprecated` flag can be used to mark deprecated code. It should be accompanied by a migration note if possible.

```typescript
/**
 * @deprecated This method has been merged into `myNewMethod()`
 */
```

##### Ignore

The `@ignore` flag should be used on all code that is not part of the library (such as test host components etc).

```typescript
/**
 * @ignore
 */
export class MyTestHost {}
```

##### Internal

The `@internal` flag should be used on code that is not ignored (as it is part of the library) but still should not
appear in the generated documentation.

```typescript
/**
 * @internal
 */
export function myPrivateHelperFunction() {}
```

##### Link

The `@link` flag can be used to link to other components or web locations.

```typescript
/**
 * Component B.
 *
 * Used by {@link ComponentA}
 * Learn more at [Google]{@link http://www.google.com}
 */
export class ComponentB {}
```

### Usage Docs

Usage docs should be added to all components and directives. These docs are created by adding a markdown file named to match the component
or directive:

```typescript
// component:
foo.component.ts
// usage docs:
foo.component.md
```

When the documentation published, this usage doc will be automatically consumed by the API docs generation.

When editing or creating usage documentation, add headlines and appropriate content, then run `yarn run docs:toc` to update (or generate)
the table of contents.

### Schematics

Schematics is used to provide installation help. With that consumer can add each individual package via:

```bash
ng add @terminus/ui-input
```

When creating a new component, add one folder named `schematics` under the component. Go to `schematics/ng-add/` folder, create the main file, `index.ts`. Then add `ngAdd` function in `index.ts`.

If there is any change to an existing package's `package.json` dependency block, make sure update that in `schematics/ng-add/index.ts`.

## Releases

Any code merged to the `release` branch gets published under the `next` tag:

```bash
yarn add @terminus/ui@next
```

Once the code is ready to be promoted to `latest` a member of our NPM organization can promote it:

```bash
# Replace `0.0.0` with the version to promote
npm dist-tag add @terminus/ui@0.0.0 latest
```

## Code Style

Most code style is enforced through ESLint, TSLint and Stylelint, so make sure to run all of the linters.

### Lint configurations

- [ESLint configuration][eslint-config]
- [Stylelint configuration][stylelint-config]

### Member Ordering

When writing a class, this is the basic order of items:

1. Private properties
1. Public properties
1. Getters (setter goes before getter, which is before the associated private property)
1. View references (`@ViewChild` etc)
1. `@Input`s
1. `@Output`s
1. Constructor
1. Lifecycle methods (in the order they are called by Angular) (`ngOnInit` etc)
1. Public methods
1. Protected or static methods
1. Private methods

### Underscores

Prefixing private methods and properties is a common pattern. We have opted to rely on TypeScript's member access rather than the
 underscore method.

> Caveat: The one place we do use the underscore is to prefix the private property that is used with a getter and setter:

```typescript
public set active(v: boolean) {
  this._foo = v;
}
public get active(): boolean {
  return this._foo;
}
private _foo = false;
```

### Setters & Getters

Our setters always come before the getter; which is in turn before the private property. (See the above code example)

### Decorators

Decorators go on their own line above the item they are decorating:

```typescript
@Input()
public foo;
```

## Issues

1. Always create an issue for things you work on. If it is worth spending time on, it is worth
   creating an issue for it since that enables other people to learn and help. You can always edit
   the description or close it when the problem is something different or disappears.
1. Always include a link to the original issue when submitting a pull request.
1. If two issues are related, cross link them (a link from each issue to the other one). Put the
   link at the top of each issue's description with a short mention of the relationship (Report,
   etc.). If there are more than 2 issues, use one issue as the central one and cross link all
   issues to this one.
1. After a discussion about a feature update the issue body with the consensus or final conclusions.
   This makes it much easier to see the state of an issue for everyone involved in the
   implementation and prevents confusion and discussion later on.
1. Submit the smallest item of work that makes sense. When creating an issue describe the smallest
   fix possible, put suggestions for enhancements in separate issues and link them.
1. Do not leave issues open for a long time, issues should be actionable and realistic. If you are
   assigned to an issue but don't have time to work on it, remove your assignment so that the next
   available engineer can pick it up.
1. Make a conscious effort to prioritize your work. The priority of items depends on multiple
   factors: Is there a team member waiting for the answer? What is the impact if you delay it? How
   many people does it affect, etc.?
1. If the project is using milestones, pick issues from the current milestone.
1. Assign an issue to yourself as soon as you start to work on it, but not before that time. If you
   complete part of an issue and need someone else to take the next step, re-assign the issue to
   that person.
1. When re-assigning an issue, make sure that the issue body contains the latest information. The
   issue body should be the single source of truth.
1. When working on an issue, ask for feedback from your peers. For example, if you're a designer and
   you propose a design, ping a fellow designer to review your work. If they approve, you can move
   it to the next step. If they suggest changes, you get the opportunity to improve your design.
   This promotes collaboration and advances everyone's skills.
1. Even when something is not done, share it internally so people can comment early and prevent
   rework. Mark the pull request `Work In Progress` or `WIP` so it is not merged by accident.
1. When you create a pull request, mention the issue(s) that it solves in the description. After the
   merge, if any followup actions are required on the issue like reporting back to any customers or
   writing documentation, avoid auto closing it by including text such as 'Fixes #1' or 'Closes #1'.
1. When the pull request is complete, remove the `WIP` prefix and assign the pull request to someone
   to review and merge it. You can still make changes based on feedback, but by removing the WIP
   prefix it clarifies that the main body of work has been completed.
1. If a pull request is assigned to you and there is a merge conflict, consider trying to resolve it
   yourself instead of asking the pull request creator to resolve the conflict. If it is easy to
   resolve, you avoid a round trip between you and the creator, and the pull request gets merged
   sooner. This is a suggestion, not an obligation.
1. If you ask a question to a specific person, always start the comment by mentioning them; this
   will ensure they see it and other people will understand they don't have to respond.
1. Do not close an issue until it is fully complete, which means code has been merged, tested, all
   issue trackers are updated, and any documentation is written and merged.
1. When closing an issue, leave a comment explaining why you are closing the issue.
1. If you notice that the tests for the `release` branch of any project are failing (red) or broken
   (green as a false positive), fixing this takes priority over everything else development related,
   since everything we do while test are broken may break functionality, or introduce new bugs and
   security issues. If the problem cannot be fixed by you within a few hours, because if it is too
   much work for one person and/or you have other priorities, create an issue, post about it in
   development Slack channel.

## Storybook and Chromatic

We use storybook to build our demo site and chromatic for automating gathering visual comparison and testing.

### Build storybook for each project

We use nx to manage our mono repo. In a Nrwl Nx workspace, when you add Storybook support, what you get by default is a
separate instance of Storybook for each feature library.

You can generate Storybook configuration for an individual project with this command:

```bash
nx g @nrwl/angular:storybook-configuration ui-button
```

If there's no .storybook folder at the root of the workspace, one is created:

```bash
<terminus-oss>/
├── .storybook/
│   ├── addons.js
│   ├── tsconfig.json
│   └── webpack.config.js
├── apps/
├── libs/
├── nx.json
├── package.json
├── README.md
└── etc...
```

Also, a project-specific .storybook folder is added in the root of the project:

```bash
<terminus-oss>/
|---.storybook/
|---apps/
|---libs/
|--- ui
|--- button
|--- .storybook/
|--- addons.js
|--- tsconfig.json
|--- webpack.config.js
|--- tokens
├── tsconfig.json
└── etc...
```

Then you can build the storybook with:

```bash
nx run ui-button:build-storybook
```

Or build and serve the storybook with:

```bash
nx run ui-button:storybook
```

This allows to quickly spin up one Storybook instance for development.

### Build storybook for all the projects

There are cases when we'd want to see stories from multiple or even all of libraries, together in a single Storybook
instance. For example, a demo page for our library needs to contain stories from all the components. Storybook doesn't
support this out of the box.

What we could do is to create a separate project, which references all the stories that we'd like to include.

In our case, we create a stories folder at the root level:

```bash
<terminus-oss>/
|---.storybook/
|---apps/
|---libs/
   |--- ui
       |--- button
       |--- card
       |--- csv-entry
   |--- tokens
|--- stories/
    |--- ui/
        |--- storybook/
            |--- .storybook/
                 |--- config.js
                 |--- tsconfig.js
                 |--- webpack.config.js
```

And inside this `config.js`, we reference to the stories that we'd like it to include with:

```typescript
configure(require.context('../../../../libs/ui/', true, /\.stories\.tsx?$/), module);
```

Then in `angular.json` config, we config how we'd like it to run:

```json
    "ui-storybook": {
      "projectType": "application",
      "root": "stories",
      "sourceRoot": "stories/ui/storybook",
      "prefix": "uistorybook",
      "architect": {
        "allstorybook": {
          "builder": "@nrwl/storybook:storybook",
          "options": {
            "uiFramework": "@storybook/angular",
            "port": 4400,
            "config": {
              "configFolder": "stories/ui/storybook/.storybook"
            }
          },
          "configurations": {
            "ci": {
              "quiet": true
            }
          }
        },
        "build-allstorybook": {
          "builder": "@nrwl/storybook:build",
          "options": {
            "uiFramework": "@storybook/angular",
            "outputPath": "dist/storybook",
            "config": {
              "configFolder": "stories/ui/storybook/.storybook"
            }
          },
          "configurations": {
            "ci": {
              "quiet": true
            }
          }
        }
      }
```

Then we'll be able to run this command to build all the stories in one storybook:

```bash
nx run ui-storybook:build-allstorybook
```

### Run Chromatic on affected projects

We use chromatic for our regression visual tests.

Ideally we'd like to run chromatic on changed projects only. NX provides a way to get a list of affected projects.
However, each individual project builds its own storybook, and chromatic doesn't support multiple storybooks for one
repo.

The solution we have is to use nx provided changed projects list to dynamically update root level storybook config.

For example, if `nx affected:libs` returns:

```bash
ui-button
ui-card
ui-csv-entry
```

A bash script will pipe that in and update `.storybook/main.js` with:

```javascript
stories: [
  'libs/ui/button',
  'libs/ui/card',
  'libs/ui/csv-entry'
],
```

---

NOTE: `.storybook/main.js` needs to have this entry"

```bash
stories: [STORIES]
```

to start with. Then bash script will replace `STORIES` with proper affected project story link.

PLEASE **DO NOT** COMMIT CHANGES in `storybook/main.js`

---

After that, we'd use `build-storybook -c .storybook -o dist/storybook` to build one storybook with the stories from
`button`, `card` and `csv-entry`. Then chromatic could run through that storybook for visual comparison.

🎉 Happy Coding! 🎉

<!-- Links -->
[semantic-release]: https://github.com/semantic-release/semantic-release
[compodoc_comments]: https://compodoc.github.io/website/guides/comments.html
[semantic-release-video]: https://youtu.be/tc2UgG5L7WM
[validate-commit-msg]: https://github.com/kentcdodds/validate-commit-msg
[ui-npm]: https://www.npmjs.com/package/@terminus/ui
[oss-github]: https://github.com/GetTerminus/terminus-oss
[semver]: http://semver.org/
[unpkg]: https://unpkg.com/  
[pkg-json]: https://github.com/GetTerminus/terminus-oss/blob/release/package.json
[jest]: https://facebook.github.io/jest/
[zenhub]: https://www.zenhub.com/
[eslint-config]: https://github.com/GetTerminus/eslint-config-frontend
[stylelint-config]: https://github.com/GetTerminus/stylelint-config-frontend
[nx-angular-docs]: https://nx.dev/react/plugins/angular/schematics/library
[packages-table]: https://github.com/GetTerminus/terminus-oss/blob/release/README.md#packages
[all-contrib-bot]: https://allcontributors.org/docs/en/bot/usage
[nx-cloud]: https://nx.app/
