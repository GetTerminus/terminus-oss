import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsSearchComponent,
  TsSearchModule,
} from '@terminus/ui-search';
import { TsSpacingModule } from '@terminus/ui-spacing';

export default {
  title: 'Components/Actions/Search',
  component: TsSearchComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        TsSearchModule,
        TsSpacingModule,
      ],
    }),
  ],
};

export const basic = () => ({
  component: TsSearchComponent,
  props: {
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

export const initialValue = () => ({
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
  component: TsSearchComponent,
  props: {
    isFocused: true,
  },
});
focusOnLoad.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const submitting = () => ({
  component: TsSearchComponent,
  props: {
    initialValue: 'My search query',
    isSubmitting: boolean('Submitting', true),
  },
});
submitting.parameters = {
  actions: { disabled: true },
};

export const autoSubmit = () => ({
  component: TsSearchComponent,
  props: {
    autoSubmit: true,
    submitted: action('Submitted'),
  },
});
autoSubmit.parameters = {
  knobs: { disabled: true },
};

export const noValidationOrHint = () => ({
  component: TsSearchComponent,
  props: {
    noValidationOrHint: true,
  },
});
noValidationOrHint.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};
