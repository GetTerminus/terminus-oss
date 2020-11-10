import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
// eslint-disable-next-line import/no-duplicates, @typescript-eslint/naming-convention
import am4themes_material from '@amcharts/amcharts4/themes/animated';
// eslint-disable-next-line import/no-duplicates, @typescript-eslint/naming-convention
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { moduleMetadata } from '@storybook/angular';

import {
  TS_AMCHARTS_TOKEN,
  TsAmChartsToken,
  TsChartComponent,
  TsChartModule,
} from '@terminus/ui-chart';
import { TsSpacingModule } from '@terminus/ui-spacing';

import { ChartWrapper } from './chart.component';

const amChartsFactory = (): TsAmChartsToken => ({
  core: am4core,
  charts: am4charts,
  maps: am4maps,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  themes: [am4themes_animated, am4themes_material],
});

export default {
  title: 'Components/Data Display/Chart',
  component: TsChartComponent,
  decorators: [
    moduleMetadata({
      imports: [
        TsChartModule,
        TsSpacingModule,
      ],
      providers: [
        // Use the factory function to overwrite the `TS_AMCHARTS_TOKEN` injectable:
        {
          provide: TS_AMCHARTS_TOKEN,
          useFactory: amChartsFactory,
        },
      ],
    }),
  ],
};

export const XY = () => ({
  component: ChartWrapper,
  props: {
    visualization: 'xy',
  },
});
XY.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 600 },
};

export const pie = () => ({
  component: ChartWrapper,
  props: {
    visualization: 'pie',
  },
});
pie.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 640 },
};

export const map = () => ({
  component: ChartWrapper,
  props: {
    visualization: 'map',
  },
});
map.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 700 },
};

export const radar = () => ({
  component: ChartWrapper,
  props: {
    visualization: 'radar',
  },
});
radar.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 600 },
};

export const tree = () => ({
  component: ChartWrapper,
  props: {
    visualization: 'tree',
  },
});
tree.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 600 },
};

export const sankey = () => ({
  component: ChartWrapper,
  props: {
    visualization: 'sankey',
  },
});
sankey.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 640 },
};

export const chord = () => ({
  component: ChartWrapper,
  props: {
    visualization: 'chord',
  },
});
chord.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 600 },
};
