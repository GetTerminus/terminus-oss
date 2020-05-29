import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

import { TsCheckboxModule } from '@terminus/ui-checkbox';

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
