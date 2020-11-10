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
import { moduleMetadata } from '@storybook/angular';
import {
  add,
  sub,
} from 'date-fns';

import { TsIconModule } from '@terminus/ui-icon';
import {
  TsInputComponent,
  TsInputModule,
} from '@terminus/ui-input';

// NOTE: Using the storybook states causes a circular issue with the plugin
// "Converting circular structure to JSON"
export default {
  title: 'Components/Data Entry/Input',
  component: TsInputComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
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
    }),
  ],
};

export const basic = () => ({
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
    myValue: 'hello there',
    label: text('Label', 'My Input'),
    theme: select('Theme', ['primary', 'accent', 'warn'], 'primary'),
    width: number('Container width', 300),
    onBlur: action('Blur: '),
    onFocus: action('Focus: '),
  },
});

export const clearable = () => ({
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
    width: number('Container width', 300),
    cleared: action('Cleared: '),
  },
});

const DEFAULT_DATE = new Date(2020, 2, 12);
const MIN_DATE = sub(DEFAULT_DATE, { days: 7 });
const MAX_DATE = add(DEFAULT_DATE, { days: 7 });
export const datepicker = () => ({
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
    startingView: select('Starting View', ['month', 'year'], 'month'),
    selected: action('Selected: '),
  },
});
datepicker.parameters = {
  docs: { iframeHeight: 440 },
};

export const hideRequiredMarker = () => ({
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
    myValue: 'hello there',
    hideRequiredMarker: boolean('Hide required marker', true),
    label: text('Label', 'My input'),
    theme: select('Theme', ['primary', 'accent', 'warn'], 'primary'),
    width: number('Container width', 300),
  },
});
hideRequiredMarker.parameters = {
  actions: { disabled: true },
};

export const hint = () => ({
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
    myValue: 'hello there',
    hint: text('Hint', 'My custom hint'),
    label: text('Label', 'My input'),
    width: number('Container width', 300),
  },
});
hint.parameters = {
  actions: { disabled: true },
};

export const mask = () => ({
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
    myValue: '8081234567',
    allowDecimal: boolean('Allow decimal', true),
    sanitizeValue: boolean('Sanitize value (update input value after changing)', true),
    width: number('Container width', 300),
  },
});
mask.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 200 },
};

export const prefixIcon = () => ({
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
prefixIcon.parameters = {
  actions: { disabled: true },
};

export const textarea = () => ({
  template: `
    <div [style.width.px]="width">
      <ts-input
        [isTextarea]="true"
        [textareaRows]="textareaRows"
        [(ngModel)]="myValue"
        label="My textarea"
      ></ts-input>
    </div>
  `,
  props: {
    myValue: 'hello there',
    width: number('Container width', 300),
    textareaRows: number('Textarea rows', 4),
  },
});
textarea.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 140 },
};
