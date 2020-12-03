import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  date,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsDateRangeComponent,
  TsDateRangeModule,
} from '@terminus/ui-date-range';

export default {
  title: 'Components/Data Entry/Date Range',
  component: TsDateRangeComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        TsDateRangeModule,
      ],
    }),
  ],
};

const DATES = {
  start: new Date(2020, 2, 18),
  startMin: new Date(2020, 2, 6),
  startMax: new Date(2020, 2, 24),

  end: new Date(2020, 2, 23),
  endMin: new Date(2020, 2, 13),
  endMax: new Date(2020, 2, 28),
};

const FORM_GROUP = new FormGroup({
  startDate: new FormControl(null, Validators.required),
  endDate: new FormControl(null, Validators.required),
});
const FORM_GROUP_SEEDED = new FormGroup({
  startDate: new FormControl(DATES.start, Validators.required),
  endDate: new FormControl(DATES.end, Validators.required),
});

export const basic = () => ({
  component: TsDateRangeComponent,
  template: `
    <div style="margin-bottom: 2rem;">
      <ts-date-range
        [dateFormGroup]="dateFormGroup"
        (startSelected)="startSelected($event)"
        (endSelected)="endSelected($event)"
        (dateRangeChange)="dateRangeChange($event)"
      ></ts-date-range>
    </div>
    <div>
      <ts-date-range
        [isDisabled]="true"
        [dateFormGroup]="dateFormGroup"
        (startSelected)="startSelected($event)"
        (endSelected)="endSelected($event)"
        (dateRangeChange)="dateRangeChange($event)"
      ></ts-date-range>
    </div>
  `,
  props: {
    dateFormGroup: FORM_GROUP_SEEDED,
    dateRangeChange: action('Date range changed'),
    startSelected: action('Start date selected'),
    endSelected: action('End date selected'),
  },
});
basic.parameters = {
  docs: { iframeHeight: 400 },
};

export const minMaxDate = () => ({
  component: TsDateRangeComponent,
  props: {
    dateFormGroup: FORM_GROUP,
    isDisabled: boolean('Disabled', false),
    startMinDate: date('Start min date', DATES.startMin),
    startMaxDate: date('Start max date', DATES.startMax),
    endMinDate: date('End min date', DATES.endMin),
    endMaxDate: date('End max date', DATES.endMax),
  },
});
minMaxDate.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 400 },
};

export const startingView = () => ({
  component: TsDateRangeComponent,
  props: {
    defaultStartDatepickerOpen: true,
    dateFormGroup: FORM_GROUP,
    startingView: 'year',
  },
});
startingView.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 400 },
};

export const locale = () => ({
  component: TsDateRangeComponent,
  props: {
    dateFormGroup: FORM_GROUP,
    defaultStartDatepickerOpen: true,
    dateLocale: text('Date locale', 'zh-cn'),
  },
});
locale.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 400 },
};

export const hint = () => ({
  component: TsDateRangeComponent,
  props: {
    hint: text('Hint', 'Select a date'),
  },
});
hint.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 400 },
};

export const errorMessage = () => ({
  component: TsDateRangeComponent,
  props: {
    errorMessage: text('Error message', 'Please select a valid end-date'),
    dateFormGroup: FORM_GROUP_SEEDED,
  },
});
errorMessage.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 400 },
};
