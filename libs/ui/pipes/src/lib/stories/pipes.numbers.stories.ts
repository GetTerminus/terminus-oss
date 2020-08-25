import {
  Component,
  Input,
} from '@angular/core';
import {
  number,
  withKnobs,
} from '@storybook/addon-knobs';

import { TsPipesModule } from '@terminus/ui-pipes';

const NO_ACTION_PARAMS = {
  actions: { disabled: true },
};
const DL_STYLES = `
  dd {font-weight: bold;}
  dd:first-of-type {margin-bottom: 2rem;}
  dt:after {content: ':';}
`;

export default {
  title: 'Utilities/Pipes/Numbers',
  decorators: [withKnobs],
};

const MODULE_IMPORTS = [TsPipesModule];

@Component({
  selector: 'ts-abbreviate-pipes-wrapper',
  styles: [DL_STYLES],
  template: `
    <dl>
      <dt>
        Original value: <code>{{ value }}</code>
      </dt>
      <dd>{{ value | tsAbbreviateNumber:decimalPlaces }}</dd>
    </dl>
  `,
})
class PipesAbbreviateWrapper {
  @Input() public value: number;
  @Input() public decimalPlaces: number;
}

export const abbreviateNumber = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: PipesAbbreviateWrapper,
  props: {
    value: number('Value', 12345),
    decimalPlaces: number('Decimal places', 1),
  },
});
abbreviateNumber.parameters = NO_ACTION_PARAMS;

@Component({
  selector: 'ts-round-number-pipes-wrapper',
  styles: [DL_STYLES],
  template: `
    <dl>
      <dt>
        Original value: <code>{{ value }}</code>
      </dt>
      <dd>{{ value | tsRoundNumber:decimalPlaces }}</dd>
    </dl>
  `,
})
class PipesRoundNumberWrapper {
  @Input() public value: number;
  @Input() public decimalPlaces: number;
}
export const roundNumber = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: PipesRoundNumberWrapper,
  props: {
    value: number('Value', 1234.9876),
    decimalPlaces: number('Decimal places', 0),
  },
});
roundNumber.parameters = NO_ACTION_PARAMS;

