import {
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import {
  addPackageJsonDependency,
  NodeDependency,
  NodeDependencyType,
} from '@schematics/angular/utility/dependencies';

export const ngAdd = () => (tree: Tree, context: SchematicContext): Tree => {
  [
    '@angular/common: ^11.0.4',
    '@angular/core: ^11.0.4',
    '@angular/forms: ^11.0.4',
    '@angular/router: ^11.0.4',
    '@terminus/design-tokens: ^3.1.0',
    '@terminus/fe-utilities: ^2.0.0',
    '@terminus/ui-link: ^4.0.0',
    '@terminus/ui-styles: ^2.0.0',
    'date-fns: ^2.16.1',
    'rxjs: ^6.6.1',
  ].map(p => {
    const individualPackage = p.split(':');
    const nodeDependency: NodeDependency = {
      type: NodeDependencyType.Default,
      name: individualPackage[0],
      version: individualPackage[1].trim(),
      overwrite: false,
    };
    addPackageJsonDependency(tree, nodeDependency);
    context.logger.info(
      `✅️ Added dependency: ${individualPackage[0]}@${
        individualPackage[1]
      }`,
    );
    context.addTask(new NodePackageInstallTask());
  });
  return tree;
};
