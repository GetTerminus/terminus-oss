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

/**
 *
 */
export const ngAdd = () => (tree: Tree, context: SchematicContext): Tree => {
  [
    '@angular/cdk: 9.2.4',
    '@angular/common: ^9.1.0',
    '@angular/core: ^9.1.0',
    '@angular/forms: ^9.1.0',
    '@angular/material: ^9.2.4',
    '@angular/platform-browser: ^9.1.0',
    '@terminus/design-tokens: ^3.1.0',
    '@terminus/fe-utilities: ^1.0.0',
    '@terminus/ui-checkbox: ^3.0.0',
    '@terminus/ui-chip: ^3.0.3',
    '@terminus/ui-cohort-date-range: ^3.0.0',
    '@terminus/ui-date-range: ^3.0.0',
    '@terminus/ui-input: ^3.0.0',
    '@terminus/ui-option: ^1.0.10',
    '@terminus/ui-pipes: ^1.1.3',
    '@terminus/ui-selection-list: ^4.0.0',
    '@terminus/ui-styles: ^1.1.0',
    '@terminus/ui-utilities: ^1.1.0',
    'date-fns: ^2.16.1',
    'rxjs: ^6.5.0',
    'text-mask-addons: ^3.8.0',
    'text-mask-core: ^5.1.2',
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
