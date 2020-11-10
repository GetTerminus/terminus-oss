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
    '@angular/common: ^9.1.0',
    '@angular/core: ^9.1.0',
    '@angular/forms: ^9.1.0',
    '@popperjs/core: 2.4.4',
    '@terminus/design-tokens: ^3.1.0',
    '@terminus/fe-utilities: ^1.0.0',
    '@terminus/ui-utilities: ^1.0.9',
    '@terminus/ui-popover: ^2.0.4',
    'date-fns: ^2.14.0',
    'rxjs: ^6.5.5',
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
