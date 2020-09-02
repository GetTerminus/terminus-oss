import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { TsButtonModule } from '@terminus/ui-button';
import { TsCheckboxModule } from '@terminus/ui-checkbox';
import { TsInputModule } from '@terminus/ui-input';
import { TsLinkModule } from '@terminus/ui-link';
import { TsDatePipe } from '@terminus/ui-pipes';
import { TsSpacingModule } from '@terminus/ui-spacing';
import { TsValidatorsService } from '@terminus/ui-validators';

import { TsLoginFormComponent } from './form/login-form.component';

export * from './form/login-form.component';


/**
 * @deprecated This module is no longer maintained.
 */
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    TsButtonModule,
    TsCheckboxModule,
    TsInputModule,
    TsLinkModule,
    TsSpacingModule,
  ],
  providers: [
    TsValidatorsService,
    TsDatePipe,
  ],
  // eslint-disable-next-line deprecation/deprecation
  exports: [TsLoginFormComponent],
  // eslint-disable-next-line deprecation/deprecation
  declarations: [TsLoginFormComponent],
})
export class TsLoginFormModule {}
