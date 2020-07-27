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
    '@angular/cdk: ^9.2.4',
    '@angular/common: ^9.1.0',
    '@angular/core: ^9.1.0',
    '@angular/flex-layout: ~9.0.0-beta.29',
    '@angular/forms: ^9.1.0',
    '@angular/material: ^9.1.0',
    '@angular/platform-browser: ^9.1.0',
    '@terminus/design-tokens: ^3.1.0',
    '@terminus/ngx-tools: ^8.0.6',
    '@terminus/ui-checkbox: ^2.0.0',
    '@terminus/ui-form-field: ^2.0.0',
    '@terminus/ui-icon: ^2.0.0',
    '@terminus/ui-input: ^2.0.0',
    '@terminus/ui-option: ^1.0.8',
    '@terminus/ui-pipes: ^1.0.7',
    '@terminus/ui-validators: ^1.0.7',
    '@terminus/ui-spacing: ^1.0.9',
    '@terminus/ui-styles: ^1.0.9',
    '@terminus/ui-validation-messages: ^1.0.11',
    '@terminus/ui-utilities: ^1.0.7',
    '@terminus/ui-select: ^2.0.0',
    'date-fns: ^2.14.0',
    'text-mask-addons: 3.8.0',
    'text-mask-core: 5.1.2',
  ].map(p => {
    const individualPackage = p.split(':');
    const nodeDependency: NodeDependency = {
      type: NodeDependencyType.Default,
      name: individualPackage[0],
      version: individualPackage[1],
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
