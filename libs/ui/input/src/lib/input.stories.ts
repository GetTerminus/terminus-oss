import { APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faAirFreshener } from '@fortawesome/pro-solid-svg-icons';
import { faHome } from '@fortawesome/pro-solid-svg-icons/faHome';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  date,
  number,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import {
  add,
  sub,
} from 'date-fns';

import { TsIconModule } from '@terminus/ui-icon';
import {
  TsInputComponent,
  TsInputModule,
} from '@terminus/ui-input';

const MODULE_METADATA = {
  imports: [
    BrowserAnimationsModule,
    FontAwesomeModule,
    TsIconModule,
    TsInputModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (iconLibrary: FaIconLibrary) => async() => {
        // Add the necessary icons inside the initializer body.
        iconLibrary.addIcons(faHome);
      },
      // When using a factory provider you need to explicitly specify its dependencies.
      deps: [FaIconLibrary],
      multi: true,
    },
  ],
};

// NOTE: Using the storybook states causes a circular issue with the plugin
// "Converting circular structure to JSON"
export default {
  title: 'Components/Input',
  decorators: [withKnobs],
};

export const basic = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsInputComponent,
  template: `
    <div [style.width.px]="width">
      <ts-input
        [(ngModel)]="myValue"
        [label]="label"
        [theme]="theme"
        (inputBlur)="onBlur($event)"
        (inputFocus)="onFocus($event)"
      ></ts-input>
    </div>
  `,
  props: {
    label: text('label', 'My Input'),
    myValue: 'hello there',
    onBlur: action('Blur: '),
    onFocus: action('Focus: '),
    theme: select('theme', ['primary', 'accent', 'warn'], 'primary'),
    width: number('Container width', 300),
  },
});

export const clearable = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsInputComponent,
  template: `
    <div [style.width.px]="width">
      <ts-input
        [(ngModel)]="myValue"
        label="My clearable input"
        [isClearable]="true"
        (cleared)="cleared($event)"
      ></ts-input>
    </div>
  `,
  props: {
    myValue: 'Test content..',
    cleared: action('Cleared: '),
    width: number('Container width', 300),
  },
});

const DEFAULT_DATE = new Date();
const MIN_DATE = sub(DEFAULT_DATE, { days: 7 });
const MAX_DATE = add(DEFAULT_DATE, { days: 7 });
export const datepicker = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsInputComponent,
  template: `
    <ts-input
      label="My datepicker input"
      [datepicker]="true"
      [maxDate]="maxDate"
      [minDate]="minDate"
      [startingView]="startingView"
      [(ngModel)]="myValue"
      (selected)="selected($event)"
    ></ts-input>
  `,
  props: {
    maxDate: date('Maximum Date', MAX_DATE),
    minDate: date('Minimum Date', MIN_DATE),
    myValue: DEFAULT_DATE,
    openTo: date('Open calendar to', DEFAULT_DATE),
    selected: action('Selected: '),
    startingView: select('Starting View', ['month', 'year'], 'month'),
  },
});

export const hideRequiredMarker = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsInputComponent,
  template: `
    <div [style.width.px]="width">
      <ts-input
        [(ngModel)]="myValue"
        [isRequired]="true"
        [hideRequiredMarker]="hideRequiredMarker"
        [label]="label"
        [theme]="theme"
      ></ts-input>
    </div>
  `,
  props: {
    label: text('label', 'My input'),
    hideRequiredMarker: boolean('Hide required marker', true),
    myValue: 'hello there',
    theme: select('theme', ['primary', 'accent', 'warn'], 'primary'),
    width: number('Container width', 300),
  },
});

export const hint = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsInputComponent,
  template: `
    <div [style.width.px]="width">
      <ts-input
        [(ngModel)]="myValue"
        [label]="label"
        [hint]="hint"
      ></ts-input>
    </div>
  `,
  props: {
    label: text('label', 'My input'),
    hint: text('hint', 'My custom hint'),
    myValue: 'hello there',
    width: number('Container width', 300),
  },
});

export const mask = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsInputComponent,
  template: `
    <div [style.width.px]="width">
      <label>
        Input mask:
        <select id="mask" [(ngModel)]="activeMask" style="margin-bottom:1rem;">
          <option value="none">None</option>
          <option value="currency">Currency</option>
          <option value="date">Date</option>
          <option value="number">Number</option>
          <option value="percentage">Percentage</option>
          <option value="phone">Phone</option>
          <option value="postal">Postal</option>
        </select>
      </label>

      <ts-input
        [(ngModel)]="myValue"
        label="My masked input"
        [maskAllowDecimal]="allowDecimal"
        [maskSanitizeValue]="sanitizeValue"
        [mask]="activeMask"
      ></ts-input>

      <pre>Model value: {{ myValue }}</pre>
    </div>
  `,
  props: {
    activeMask: 'phone',
    allowDecimal: boolean('Allow decimal', true),
    myValue: '8081234567',
    sanitizeValue: boolean('Sanitize value (update input value after changing)', true),
    width: number('Container width', 300),
  },
});

export const prefixIcon = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsInputComponent,
  template: `
    <div [style.width.px]="width">
      <ts-input
        [(ngModel)]="myValue"
        label="My input with a prefix"
        [prefixIcon]="prefixIcon"
      ></ts-input>
    </div>
  `,
  props: {
    prefixIcon: faAirFreshener,
    myValue: 'hello there',
    width: number('Container width', 300),
  },
});
