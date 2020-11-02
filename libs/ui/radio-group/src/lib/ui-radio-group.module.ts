import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { TsValidationMessagesModule } from '@terminus/ui-validation-messages';

import { TsRadioButtonBadgeComponent } from './radio/radio-button-badge/radio-button-badge.component';
import {
  TsRadioButtonComponent,
  TsRadioGroupComponent,
} from './radio/radio.component';

export * from './radio/radio.component';
export * from './radio/radio-button-badge/radio-button-badge.component';

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
    TsRadioButtonBadgeComponent,
  ],
  exports: [
    TsRadioGroupComponent,
    TsRadioButtonComponent,
    TsRadioButtonBadgeComponent,
  ],
})
export class TsRadioGroupModule {}
