import {
  Component,
  Input,
} from '@angular/core';
import {
  date,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { sub } from 'date-fns';

import { TsPipesModule } from '@terminus/ui-pipes';

const NO_ACTION_PARAMS = {
  actions: { disabled: true },
};
const DL_STYLES = `
  dd {font-weight: bold;}
  dd:first-of-type {margin-bottom: 2rem;}
  dt:after {content: ':';}
`;
const customDate = new Date();
const customDateOld = sub(customDate, { days: 3 });
function myDateKnob(name, defaultValue) {
  const stringTimestamp = date(name, defaultValue);
  return new Date(stringTimestamp);
}

export default {
  title: 'Utilities/Pipes/Dates',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [TsPipesModule],
    }),
  ],
};

@Component({
  selector: 'ts-date-pipes-wrapper',
  styles: [DL_STYLES],
  template: `
    <dl>
      <dt>Original value</dt>
      <dd><code>{{ value }}</code></dd>
      <dt>short (default)</dt>
      <dd>{{ value | tsDate }}</dd>
      <dt>medium</dt>
      <dd>{{ value | tsDate:'medium' }}</dd>
      <dt>extended</dt>
      <dd>{{ value | tsDate:'extended' }}</dd>
      <dt>timestamp</dt>
      <dd>{{ value | tsDate:'timestamp' }}</dd>
    </dl>
  `,
})
class PipesDateWrapper {
  @Input() public value: Date;
}

export const datePipe = () => ({
  component: PipesDateWrapper,
  props: {
    value: myDateKnob('Value', customDate),
  },
});
datePipe.parameters = NO_ACTION_PARAMS;

@Component({
  selector: 'ts-time-ago-pipes-wrapper',
  styles: [DL_STYLES],
  template: `
    <dl>
      <dt>
        Original value: <code>{{ value }}</code>
      </dt>
      <dd>
        {{ dateNow | tsTimeAgo:value }} since I did any work
      </dd>
    </dl>
  `,
})
class PipesTimeAgoWrapper {
  @Input() public value: Date;
  @Input() public dateNow: Date;
}
export const timeAgo = () => ({
  component: PipesTimeAgoWrapper,
  props: {
    value: myDateKnob('Value', customDateOld),
    dateNow: customDate,
  },
});
timeAgo.parameters = NO_ACTION_PARAMS;
