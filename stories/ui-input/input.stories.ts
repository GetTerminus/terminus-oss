import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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

import {
  TsInputComponent,
  TsInputModule,
} from '@terminus/ui-input';

export default {
  title: 'Components/Data Entry/Input',
  component: TsInputComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        TsInputModule,
      ],
    }),
  ],
};

export const basic = () => ({
  template: `
    <div [style.width.px]="width">
      <div style="margin-bottom: 2rem;">
        <ts-input
          [(ngModel)]="myValue"
          [label]="label"
          (inputBlur)="onBlur($event)"
          (inputFocus)="onFocus($event)"
        ></ts-input>
      </div>
      <div>
        <ts-input
          [(ngModel)]="myValue"
          [label]="label"
          [isDisabled]="true"
        ></ts-input>
      </div>
    </div>
  `,
  props: {
    myValue: 'Lane Price',
    label: text('Label', 'Email Address'),
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
    <div [style.width.px]="width">
      <ts-input
        label="My datepicker input"
        [datepicker]="true"
        [maxDate]="maxDate"
        [minDate]="minDate"
        [startingView]="startingView"
        [(ngModel)]="myValue"
        (selected)="selected($event)"
      ></ts-input>
    </div>
  `,
  props: {
    maxDate: date('Maximum Date', MAX_DATE),
    minDate: date('Minimum Date', MIN_DATE),
    myValue: DEFAULT_DATE,
    openTo: date('Open calendar to', DEFAULT_DATE),
    startingView: select('Starting View', ['month', 'year'], 'month'),
    width: number('Container width', 300),
    selected: action('Selected: '),
  },
});
datepicker.parameters = {
  docs: { iframeHeight: 440 },
};
export const datepickerDefaultOpen = () => ({
  template: `
    <div [style.width.px]="width">
      <ts-input
        label="My datepicker input"
        [datepicker]="true"
        [datepickerDefaultOpen]="true"
        [maxDate]="maxDate"
        [minDate]="minDate"
        [startingView]="startingView"
        [(ngModel)]="myValue"
        (selected)="selected($event)"
      ></ts-input>
    </div>
  `,
  props: {
    maxDate: date('Maximum Date', MAX_DATE),
    minDate: date('Minimum Date', MIN_DATE),
    myValue: DEFAULT_DATE,
    openTo: date('Open calendar to', DEFAULT_DATE),
    startingView: select('Starting View', ['month', 'year'], 'month'),
    width: number('Container width', 300),
    selected: action('Selected: '),
  },
});
datepickerDefaultOpen.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 440 },
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

export const errorMessage = () => ({
  template: `
    <div [style.width.px]="width">
      <div style="margin-bottom: 2rem;">
        <ts-input
          [(ngModel)]="myValue"
          label="My error message"
          [errorMessage]="errorMessage"
        ></ts-input>
      </div>
      <div>
        <ts-input
          [(ngModel)]="myValue"
          label="My error message"
          [isDisabled]="true"
          [errorMessage]="errorMessage"
        ></ts-input>
      </div>
    </div>
  `,
  props: {
    myValue: 'hello there',
    errorMessage: text('Error message', 'Must be a valid email address.'),
    label: text('Label', 'My input'),
    width: number('Container width', 300),
  },
});
errorMessage.parameters = {
  actions: { disabled: true },
};

export const placeholder = () => ({
  template: `
    <div [style.width.px]="width">
      <ts-input
        [(ngModel)]="myValue"
        [label]="label"
        [placeholder]="placeholder"
      ></ts-input>
    </div>
  `,
  props: {
    myValue: '',
    placeholder: text('Placeholder', 'My custom placeholder'),
    label: text('Label', 'My input'),
    width: number('Container width', 300),
  },
});
placeholder.parameters = {
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

export const formControlName = () => ({
  template: `
    <form [formGroup]="myForm" [style.width.px]="width">
      <ts-input
        formControlName="inputValue"
        label="My input"
      ></ts-input>
    </form>
  `,
  props: {
    myForm: new FormGroup({
      inputValue: new FormControl('My seeded value!'),
    }),
    width: number('Container width', 300),
  },
});
formControlName.parameters = {
  actions: { disabled: true },
};
