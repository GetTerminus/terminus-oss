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
    '@angular/cdk: ^11.0.3',
    '@angular/common: ^11.0.4',
    '@angular/core: ^11.0.4',
    '@angular/flex-layout: ~11.0.0-beta.33',
    '@angular/forms: ^11.0.4',
    '@angular/material: ^11.0.3',
    '@fortawesome/angular-fontawesome: ^0.8.1',
    '@fortawesome/fontawesome-svg-core: ^1.2.32',
    '@fortawesome/pro-solid-svg-icons: ^5.15.1',
    '@terminus/design-tokens: ^3.1.0',
    '@terminus/fe-utilities: ^2.0.0',
    '@terminus/ui-button: ^4.0.0',
    '@terminus/ui-confirmation: ^3.0.0',
    '@terminus/ui-icon: ^3.0.0',
    '@terminus/ui-spacing: ^2.0.0',
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
