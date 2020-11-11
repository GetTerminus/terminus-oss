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
    '@amcharts/amcharts4-geodata: ^4.1.14',
    '@amcharts/amcharts4: ^4.9.20',
    '@angular/common: ^9.1.0',
    '@angular/core: ^9.1.0',
    '@angular/forms: ^9.1.0',
    '@angular/platform-browser: ^9.1.0',
    '@terminus/design-tokens: ^3.1.0',
    '@terminus/fe-utilities: ^1.0.0',
    '@terminus/ui-chart: ^1.0.13',
    '@terminus/ui-spacing: ^1.1.3',
    '@terminus/ui-styles: ^1.1.0',
    '@terminus/ui-utilities: ^1.0.9',
    'date-fns: ^2.14.0',
    'rxjs: ^6.5.0',
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
