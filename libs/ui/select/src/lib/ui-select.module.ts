import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { TsCheckboxModule } from '@terminus/ui-checkbox';
import { TsFormFieldModule } from '@terminus/ui-form-field';
import { TsIconModule } from '@terminus/ui-icon';
import { TsInputModule } from '@terminus/ui-input';
import { TsOptionModule } from '@terminus/ui-option';
import { TsValidationMessagesModule } from '@terminus/ui-validation-messages';

import { TsSelectComponent } from './select/select.component';
import { TsSelectTriggerComponent } from './trigger/select-trigger.component';


/* eslint-disable deprecation/deprecation */

export * from './select/select.component';
export * from './trigger/select-trigger.component';
export * from './select-animations';


// @deprecated Please use `TsSelectionListModule`
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    OverlayModule,
    ReactiveFormsModule,
    TsCheckboxModule,
    TsFormFieldModule,
    TsIconModule,
    TsInputModule,
    TsOptionModule,
    TsValidationMessagesModule,
  ],
  exports: [
    TsSelectComponent,
    TsSelectTriggerComponent,
  ],
  declarations: [
    TsSelectComponent,
    TsSelectTriggerComponent,
  ],
})
export class TsSelectModule {}
