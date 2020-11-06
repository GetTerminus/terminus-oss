import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MAT_DATE_FORMATS,
  NativeDateModule,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { TsFormFieldModule } from '@terminus/ui-form-field';
import { TsIconModule } from '@terminus/ui-icon';
import { TsPipesModule } from '@terminus/ui-pipes';
import { TsValidationMessagesModule } from '@terminus/ui-validation-messages';
import { TsValidatorsService } from '@terminus/ui-validators';

import { TS_DATE_FORMATS } from './date-adapter/date-adapter';
import { TsInputComponent } from './input/input.component';

export * from './date-adapter/date-adapter';
export * from './input-value-accessor';
export * from './input/input.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatDatepickerModule,
    NativeDateModule,
    ReactiveFormsModule,
    TsFormFieldModule,
    TsIconModule,
    TsPipesModule,
    TsValidationMessagesModule,
  ],
  providers: [
    TsValidatorsService,
    {
      provide: MAT_DATE_FORMATS,
      useValue: TS_DATE_FORMATS,
    },
  ],
  exports: [TsInputComponent],
  declarations: [TsInputComponent],
})
export class TsInputModule {}
