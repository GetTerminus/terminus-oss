import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { TsCheckboxComponent } from './checkbox/checkbox.component';

export * from './checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [TsCheckboxComponent],
  declarations: [TsCheckboxComponent],
})
export class TsCheckboxModule { }
