import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { TsButtonModule } from '@terminus/ui-button';

import { TsMenuComponent } from './menu/menu.component';

export * from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    TsButtonModule,
  ],
  exports: [TsMenuComponent],
  declarations: [TsMenuComponent],
})
export class TsMenuModule {}
