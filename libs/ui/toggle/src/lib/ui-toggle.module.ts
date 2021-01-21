import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TsToggleComponent } from './toggle/toggle.component';

export * from './toggle/toggle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [TsToggleComponent],
  declarations: [TsToggleComponent],
})
export class TsToggleModule {}
