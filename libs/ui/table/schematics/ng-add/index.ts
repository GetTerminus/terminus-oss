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
    '@angular/animations: ^11.0.4',
    '@angular/cdk: ^11.0.3',
    '@angular/common: ^11.0.4',
    '@angular/core: ^11.0.4',
    '@angular/flex-layout: ~11.0.0-beta.33',
    '@angular/forms: ^11.0.4',
    '@angular/material: ^11.0.3',
    '@angular/platform-browser: ^11.0.4',
    '@terminus/design-tokens: ^3.1.0',
    '@terminus/fe-utilities: ^2.0.0',
    '@terminus/ui-button: ^4.0.0',
    '@terminus/ui-checkbox: ^4.0.0',
    '@terminus/ui-chip: ^4.0.0',
    '@terminus/ui-form-field: ^3.0.0',
    '@terminus/ui-input: ^4.0.0',
    '@terminus/ui-menu: ^5.0.0',
    '@terminus/ui-option: ^2.0.0',
    '@terminus/ui-paginator: ^4.0.0',
    '@terminus/ui-pipes: ^2.0.0',
    '@terminus/ui-selection-list: ^3.0.0',
    '@terminus/ui-sort: ^2.0.0',
    '@terminus/ui-spacing: ^2.0.0',
    '@terminus/ui-styles: ^2.0.0',
    '@terminus/ui-table: ^4.0.0',
    '@terminus/ui-tooltip: ^2.0.0',
    '@terminus/ui-utilities: ^2.0.0',
    '@terminus/ui-validation-messages: ^2.0.0',
    '@terminus/ui-validators: ^3.0.0',
    'date-fns: ^2.16.1',
    'rxjs: ^6.6.1',
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
