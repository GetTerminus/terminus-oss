# TerminusOss

TODO

## Useful commands

```bash
# Run commands on all projects:
$ nx run-many --target=test --all
$ nx run-many --target=lint --all
$ nx run-many --target=e2e --all
$ nx run-many --target=build --all

# Build a single project
$ nx build my-project

# View a graph of the dependencies:
$ nx dep-graph

# Use schematics to generate within a project:
$ nx g component my-component --project=my-project --export

# Serve a project:
$ nx serve my-project

# Print info about affected files:
$ nx print-affected

# Only run commands on affected projects:
# Note: You can swap out 'test' for 'lint', 'e2e', 'apps', or 'libs'
$ nx affected:test
$ nx affected:test --parallel --maxParallel=5
$ nx affected:test --only-failed
$ nx affected:test --all
$ nx affected:test --base=master --head=HEAD
$ nx affected:test --base=master~1 --head=master

# Generate code coverage:
$ nx test my-project --code-coverage

# List installed and available NX plugins:
$ nx list

# Manually linting (until the CLI migrates to ESLint):
$ yarn run lint:libs
$ yarn run lint:libs:fix
$ yarn run lint:apps
$ yarn run lint:apps:fix
```






## Resources

- [Nx Documentation](https://nx.dev/angular)
- [10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)
- [Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)  
- [NX Angular](https://nx.dev/angular/plugins/angular/overview)
- [NX Jest](https://nx.dev/angular/plugins/jest/overview)
- [NX Cypress](https://nx.dev/angular/plugins/cypress/overview)
- [NX Web Elements](https://nx.dev/angular/plugins/web/overview)
- [NX React](https://nx.dev/angular/plugins/react/overview)

