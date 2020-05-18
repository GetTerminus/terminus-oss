import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';


import { TsCheckboxModule } from '@terminus/ui-checkbox';
import { TsFormFieldModule } from '@terminus/ui-form-field';
import { TsIconModule } from '@terminus/ui-icon';
import { TsInputModule } from '@terminus/ui-input';

import { TsOptgroupComponent } from './optgroup/optgroup.component';
import { TsOptionDisplayDirective } from './option/option-display.directive';
import { TsOptionComponent } from './option/option.component';


export * from './option/option.component';
export * from './option-utilities';
export * from './option/option-display.directive';
export * from './optgroup/optgroup.component';

@NgModule({
  imports: [
    CommonModule,
    MatRippleModule,
    TsCheckboxModule,
    TsIconModule,
    TsFormFieldModule,
    TsInputModule,
  ],
  declarations: [
    TsOptionComponent,
    TsOptgroupComponent,
    TsOptionDisplayDirective,
  ],
  exports: [
    TsOptionComponent,
    TsOptgroupComponent,
    TsOptionDisplayDirective,
  ],
})
export class TsOptionModule { }
