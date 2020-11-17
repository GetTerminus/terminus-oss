import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TsButtonComponent } from './button/button.component';

export * from './button/button.component';

@NgModule({
  imports: [CommonModule],
  exports: [TsButtonComponent],
  declarations: [TsButtonComponent],
})
export class TsButtonModule {}
