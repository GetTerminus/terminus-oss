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
    '@angular/animations: ^9.1.0',
    '@angular/cdk: ^9.2.4',
    '@angular/common: ^9.1.0',
    '@angular/core: ^9.1.0',
    '@angular/flex-layout: ~9.0.0-beta.29',
    '@angular/forms: ^9.1.0',
    '@angular/material: ^9.2.4',
    '@angular/platform-browser: ^9.1.0',
    '@fortawesome/angular-fontawesome: ^0.6.0',
    '@fortawesome/fontawesome-svg-core: ^1.2.30',
    '@fortawesome/pro-solid-svg-icons: ^5.14.0',
    '@terminus/design-tokens: ^3.1.0',
    '@terminus/fe-utilities: ^1.0.0',
    '@terminus/ui-button: ^2.1.5',
    '@terminus/ui-checkbox: ^3.0.0',
    '@terminus/ui-chip: ^3.0.3',
    '@terminus/ui-form-field: ^2.1.0',
    '@terminus/ui-icon: ^2.1.5',
    '@terminus/ui-input: ^2.1.6',
    '@terminus/ui-menu: ^3.0.2',
    '@terminus/ui-option: ^1.1.2',
    '@terminus/ui-paginator: ^2.2.4',
    '@terminus/ui-pipes: ^1.2.0',
    '@terminus/ui-selection-list: ^3.0.0',
    '@terminus/ui-sort: ^1.1.3',
    '@terminus/ui-spacing: ^1.1.3',
    '@terminus/ui-table: ^3.1.5',
    '@terminus/ui-tooltip: ^1.1.3',
    '@terminus/ui-utilities: ^1.1.0',
    '@terminus/ui-validation-messages: ^1.1.3',
    '@terminus/ui-validators: ^2.0.4',
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
