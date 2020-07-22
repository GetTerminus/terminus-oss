import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import {
  TsButtonModule,
  TsButtonComponent,
  tsButtonFormatTypesArray,
} from '@terminus/ui-button';

const allowedButtonFormatTypes = tsButtonFormatTypesArray.filter(t => t !== 'collapsable');

export default {
  title: 'TsButtonComponent',
  decorators: [withKnobs],
};

export const theme = () => ({
  moduleMetadata: { imports: [TsButtonModule] },
  component: TsButtonComponent,
  template: `<ts-button [isDisabled]="isDisabled" [theme]="theme">My Button</ts-button>`,
  props: {
    isDisabled: boolean('isDisabled', false),
    theme: select('theme', ['primary', 'accent', 'warn'], 'primary'),
  },
});

export const collapsible = () => ({
  moduleMetadata: { imports: [TsButtonModule] },
  component: TsButtonComponent,
  template: `
    <ts-button
      [collapsed]="collapsed"
      format="collapsible"
      [iconName]="iconName"
      [theme]="theme"
    >My Button</ts-button>
  `,
  props: {
    collapsed: boolean('collapsed', false),
    format: select('format', tsButtonFormatTypesArray, 'filled'),
    iconName: text('iconName', 'add'),
  },
});

export const clicked = () => ({
  moduleMetadata: { imports: [TsButtonModule] },
  component: TsButtonComponent,
  template: `<ts-button (clicked)="onClick($event)">My Button</ts-button>`,
  props: {
    onClick: action('log'),
  },
});

export const allToggles = () => ({
  moduleMetadata: { imports: [TsButtonModule] },
  component: TsButtonComponent,
  template: `
    <ts-button
      [actionName]="actionName"
      [buttonType]="buttonType"
      [collapsed]="collapsed"
      [format]="format"
      [iconName]="iconName"
      [isDisabled]="isDisabled"
      [id]="id"
      [showProgress]="showProgress"
      [tabIndex]="tabIndex"
      [theme]="theme"
    >Button content</ts-button>
  `,
  props: {
    actionName: select('actionName', ['Button', 'Submit', 'Menu', 'Reset'], 'Button'),
    buttonType: select('buttonType', ['button', 'search', 'submit'], 'button'),
    collapsed: boolean('collapsed', false),
    format: select('format', allowedButtonFormatTypes, 'filled'),
    iconName: text('iconName', ''),
    isDisabled: boolean('isDisabled', false),
    id: text('id', ''),
    showProgress: boolean('showProgress', false),
    tabIndex: number('tabIndex', 0),
    theme: select('theme', ['primary', 'accent', 'warn'], 'primary'),
  },
});
