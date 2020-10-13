import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { TsValidationMessagesModule } from '@terminus/ui-validation-messages';

import {
  TsRadioButtonComponent,
  TsRadioGroupComponent,
} from './radio/radio.component';

export * from './radio/radio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TsValidationMessagesModule,
  ],
  declarations: [
    TsRadioGroupComponent,
    TsRadioButtonComponent,
  ],
  exports: [
    TsRadioGroupComponent,
    TsRadioButtonComponent,
  ],
})
export class TsRadioGroupModule {}
