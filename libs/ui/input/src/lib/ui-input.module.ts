import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MAT_DATE_FORMATS,
  NativeDateModule,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { TsPipesModule } from '@terminus/ui-pipes';

import { TS_DATE_FORMATS } from './date-adapter/date-adapter';
import { TsInputComponent } from './input/input.component';

export * from './date-adapter/date-adapter';
export * from './input-value-accessor';
export * from './input/input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    NativeDateModule,
    ReactiveFormsModule,
    TsPipesModule,
  ],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: TS_DATE_FORMATS,
    },
  ],
  exports: [TsInputComponent],
  declarations: [TsInputComponent],
})
export class TsInputModule {}
