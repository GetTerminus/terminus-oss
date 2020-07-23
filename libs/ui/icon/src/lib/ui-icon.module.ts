import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TsIconComponent } from './icon/icon.component';

export * from './icon/icon.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: [TsIconComponent],
  exports: [TsIconComponent],
})
export class TsIconModule {}
