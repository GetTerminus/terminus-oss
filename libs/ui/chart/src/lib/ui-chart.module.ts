import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TsChartComponent } from './chart/chart.component';
import {
  TS_AMCHARTS_TOKEN,
  TsAmChartsService,
} from './service/amcharts.service';

export * from './chart/chart.component';
export * from './service/amcharts.service';
export * from './chart-type-check';


@NgModule({
  imports: [CommonModule],
  providers: [
    TsAmChartsService,
    {
      // This injection token will be overridden by the user.
      // It will provide the amCharts core library and chart library
      provide: TS_AMCHARTS_TOKEN,
      useValue: null,
    },
  ],
  declarations: [TsChartComponent],
  exports: [TsChartComponent],
})
export class TsChartModule {}
