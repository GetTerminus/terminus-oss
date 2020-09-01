import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
// eslint-disable-next-line @typescript-eslint/naming-convention
import am4themes_material from '@amcharts/amcharts4/themes/animated';
// eslint-disable-next-line no-duplicate-imports, @typescript-eslint/naming-convention
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  withKnobs,
} from '@storybook/addon-knobs';

import {
  TS_AMCHARTS_TOKEN,
  TsAmChartsToken,
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

const MODULE_METADATA = {
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
};

export default {
  title: 'Components/Data Display/Chart',
};

export const XY = () => ({
  moduleMetadata: MODULE_METADATA,
  component: ChartWrapper,
  props: {
    visualization: 'xy',
  },
});
XY.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const pie = () => ({
  moduleMetadata: MODULE_METADATA,
  component: ChartWrapper,
  props: {
    visualization: 'pie',
  },
});
pie.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const map = () => ({
  moduleMetadata: MODULE_METADATA,
  component: ChartWrapper,
  props: {
    visualization: 'map',
  },
});
map.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const radar = () => ({
  moduleMetadata: MODULE_METADATA,
  component: ChartWrapper,
  props: {
    visualization: 'radar',
  },
});
radar.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const tree = () => ({
  moduleMetadata: MODULE_METADATA,
  component: ChartWrapper,
  props: {
    visualization: 'tree',
  },
});
tree.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const sankey = () => ({
  moduleMetadata: MODULE_METADATA,
  component: ChartWrapper,
  props: {
    visualization: 'sankey',
  },
});
sankey.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const chord = () => ({
  moduleMetadata: MODULE_METADATA,
  component: ChartWrapper,
  props: {
    visualization: 'chord',
  },
});
chord.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

