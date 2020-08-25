import {
  Component,
  Input,
} from '@angular/core';
import {
  date,
  number,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { sub } from 'date-fns';

import {
  allowedTruncationTypes,
  TsPipesModule,
  TsTruncatePositionType,
} from '@terminus/ui-pipes';

const NO_ACTION_PARAMS = {
  actions: { disabled: true },
};
const DL_STYLES = `
  dd {font-weight: bold;}
  dd:first-of-type {margin-bottom: 2rem;}
  dt:after {content: ':';}
`;

export default {
  title: 'Utilities/Pipes/Strings',
  decorators: [withKnobs],
};

const MODULE_IMPORTS = [TsPipesModule];

@Component({
  selector: 'ts-sentence-pipes-wrapper',
  styles: [DL_STYLES],
  template: `
    <dl>
      <dt>
        Original value: <code>{{ value }}</code>
      </dt>
      <dd>{{ value | tsSentenceCase }}</dd>
    </dl>
  `,
})
class PipesSentenceWrapper {
  @Input() public value: string;
}
export const sentenceCase = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: PipesSentenceWrapper,
  props: {
    value: text('Value', 'THE QUICK BROWN FOX'),
  },
});
sentenceCase.parameters = NO_ACTION_PARAMS;

@Component({
  selector: 'ts-title-pipes-wrapper',
  styles: [DL_STYLES],
  template: `
    <dl>
      <dt>
        Original value: <code>{{ value1 }}</code>
      </dt>
      <dd>
        {{ value1 | tsTitleCase }}
      </dd>
      <dt>
        Original value: <code>{{ value2 }}</code>
      </dt>
      <dd>
        {{ value2 | tsTitleCase }}
      </dd>
    </dl>
  `,
})
class PipesTitleWrapper {
  @Input() public value1: string;
  @Input() public value2: string;
}
export const titleCase = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: PipesTitleWrapper,
  props: {
    value1: text('Value 1', 'Careful man, there’s a beverage here!'),
    value2: text('Value 2', 'THAT RUG REALLY TIED THE ROOM TOGETHER.'),
  },
});
titleCase.parameters = NO_ACTION_PARAMS;

@Component({
  selector: 'ts-truncate-pipes-wrapper',
  styles: [DL_STYLES],
  template: `
    <dl>
      <dt>
        Original value: <code>{{ value }}</code>
      </dt>
      <dd>
        {{ value | tsTruncateAt:count:position }}
      </dd>
    </dl>
  `,
})
class PipesTruncateWrapper {
  @Input() public value: string;
  @Input() public count: number;
  @Input() public position: TsTruncatePositionType;
}
export const truncate = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: PipesTruncateWrapper,
  props: {
    value: text('Value', 'Careful man, there’s a beverage here!'),
    count: number('Character count', 23),
    position: select('Position', allowedTruncationTypes, 'end'),
  },
});
truncate.parameters = NO_ACTION_PARAMS;
