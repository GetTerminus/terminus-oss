import {
  select,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsSpacingModule,
  TsVerticalSpacingDirective,
  tsVerticalSpacingTypes,
} from '@terminus/ui-spacing';

export default {
  title: 'Components/Structure/Spacing',
  component: TsVerticalSpacingDirective,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        TsSpacingModule,
      ],
    }),
  ],
};

export const basic = () => ({
  component: TsVerticalSpacingDirective,
  template: `
    <style>
      div {
        outline: 2px solid lightblue;
        padding: 1em;
      }
    </style>
    <div tsVerticalSpacing="small--2">tsVerticalSpacing="small--2"</div>
    <div tsVerticalSpacing="small--1">tsVerticalSpacing="small--1"</div>
    <div tsVerticalSpacing="small--0">tsVerticalSpacing="small--0"</div>
    <div tsVerticalSpacing>tsVerticalSpacing</div>
    <div tsVerticalSpacing="large--0">tsVerticalSpacing="large--0"</div>
    <div tsVerticalSpacing="large--1">tsVerticalSpacing="large--1"</div>
    <div tsVerticalSpacing="large--2">tsVerticalSpacing="large--2 </div>
    <div tsVerticalSpacing="large--3">tsVerticalSpacing="large--3 </div>
    <div tsVerticalSpacing="large--4">tsVerticalSpacing="large--4"</div>
    <div tsVerticalSpacing="large--5">tsVerticalSpacing="large--5 </div>
    <div tsVerticalSpacing="large--6">tsVerticalSpacing="large--6"</div>
    <div tsVerticalSpacing="none">tsVerticalSpacing="none"</div>
    <div>Standard content...</div>
  `,
  props: {
    spacing: select('Spacing', tsVerticalSpacingTypes, 'default--0'),
  },
});
basic.parameters = {
  docs: { iframeHeight: 1100 },
};

