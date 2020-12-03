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
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import {
  endOfDay,
  startOfDay,
  startOfMonth,
  subDays,
  subMonths,
} from 'date-fns';

import {
  TsCohortDateRangeComponent,
  TsCohortDateRangeModule,
  TsDateCohort,
} from '@terminus/ui-cohort-date-range';
import { TsDateRangeComponent } from '@terminus/ui-date-range';

export default {
  title: 'Components/Data Entry/Cohort Date Range',
  component: TsCohortDateRangeComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        TsCohortDateRangeModule,
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
const COHORTS: TsDateCohort[] = [
  {
    display: 'Last 90 days',
    range: {
      start: startOfDay(subDays(DATES.start, 90)),
      end: DATES.start,
    },
  },
  {
    display: 'Last full month',
    range: {
      start: startOfDay(subMonths(startOfMonth(DATES.end), 1)),
      end: endOfDay(subDays(startOfMonth(DATES.end), 1)),
    },
  },
];
const COHORTS_ACTIVE: TsDateCohort[] = [
  {
    display: 'Last 90 days',
    range: {
      start: startOfDay(subDays(DATES.start, 90)),
      end: DATES.start,
    },
  },
  {
    display: 'Last full month',
    range: {
      start: startOfDay(subMonths(startOfMonth(DATES.end), 1)),
      end: endOfDay(subDays(startOfMonth(DATES.end), 1)),
    },
    active: true,
  },
];

export const basic = () => ({
  component: TsCohortDateRangeComponent,
  template: `
    <div style="margin-bottom: 2rem;">
      <ts-cohort-date-range
        [cohorts]="cohorts"
        (cohortDateRangeChanged)="cohortDateRangeChanged($event)"
      ></ts-cohort-date-range>
    </div>
    <div>
      <ts-cohort-date-range
        [cohorts]="cohorts"
        [isDisabled]="true"
      ></ts-cohort-date-range>
    </div>
  `,
  props: {
    dateFormGroup: FORM_GROUP_SEEDED,
    cohorts: COHORTS_ACTIVE,
    isDisabled: boolean('Disabled', false),
    cohortDateRangeChanged: action('Date range changed'),
  },
});
basic.parameters = {
  docs: { iframeHeight: 400 },
};

export const minMaxDate = () => ({
  component: TsCohortDateRangeComponent,
  props: {
    dateFormGroup: FORM_GROUP,
    cohorts: COHORTS,
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

export const noCustomDates = () => ({
  component: TsCohortDateRangeComponent,
  props: {
    dateFormGroup: FORM_GROUP,
    cohorts: COHORTS_ACTIVE,
    allowCustomDates: boolean('Allow custom dates', false),
  },
});
noCustomDates.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 400 },
};

export const hint = () => ({
  component: TsCohortDateRangeComponent,
  props: {
    hint: text('Hint', 'Select a date'),
    cohorts: COHORTS,
  },
});
hint.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 400 },
};

export const errorMessage = () => ({
  component: TsCohortDateRangeComponent,
  props: {
    errorMessage: text('Error message', 'Please select a valid end-date'),
    dateFormGroup: FORM_GROUP_SEEDED,
    cohorts: COHORTS,
  },
});
errorMessage.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 400 },
};
