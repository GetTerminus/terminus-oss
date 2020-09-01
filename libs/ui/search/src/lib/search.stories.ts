import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import {
  TsSearchComponent,
  TsSearchModule,
} from '@terminus/ui-search';
import { TsSpacingModule } from '@terminus/ui-spacing';

const MODULE_METADATA = {
  imports: [
    TsSearchModule,
    TsSpacingModule,
  ],
};

export default {
  title: 'Components/Actions/Search',
  decorators: [withKnobs],
};

export const basic = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsSearchComponent,
  props: {
    initialValue: 'My search query',
    inputHint: text('Hint', 'Enter at least two characters.'),
    inputLabel: text('Label', 'Search'),
    isDisabled: boolean('Disabled', false),
    noValidationOrHint: boolean('No validation or hint', false),
    userCanClear: boolean('User can clear', true),
    changed: action('Query changed'),
    submitted: action('Submitted'),
    cleared: action('Cleared'),
  },
});

export const themes = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsSearchComponent,
  template: `
  <div tsVerticalSpacing="large--1">
    <div tsVerticalSpacing="small--0">
      theme: 'primary'<br>
      buttonTheme: 'default'
    </div>
    <ts-search [initialValue]="initialValue" theme="primary" buttonTheme="default"></ts-search>
  </div>
  <div tsVerticalSpacing="large--1">
    <div tsVerticalSpacing="small--0">
      theme: 'accent'<br>
      buttonTheme: 'secondary'
    </div>
    <ts-search [initialValue]="initialValue" theme="accent" buttonTheme="secondary"></ts-search>
  </div>
  <div tsVerticalSpacing="large--1">
    <div tsVerticalSpacing="small--0">
      theme: 'warn'<br>
      buttonTheme: 'warning'
    </div>
    <ts-search [initialValue]="initialValue" theme="warn" buttonTheme="warning"></ts-search>
  </div>
  `,
  props: {
    initialValue: 'My initial value',
  },
});
themes.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const initialValue = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsSearchComponent,
  props: {
    initialValue: 'My initial value',
  },
});
initialValue.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const focusOnLoad = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsSearchComponent,
  props: {
    isFocused: true,
  },
});
focusOnLoad.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const isSubmitting = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsSearchComponent,
  props: {
    initialValue: 'My search query',
    isSubmitting: boolean('Submitting', true),
  },
});
isSubmitting.parameters = {
  actions: { disabled: true },
};

export const autoSubmit = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsSearchComponent,
  props: {
    autoSubmit: true,
    submitted: action('Submitted'),
  },
});
autoSubmit.parameters = {
  knobs: { disabled: true },
};
