import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

import { TsButtonModule } from '@terminus/ui-button';

import { TsMenuItemDirective } from './menu-item.directive';
import { TsMenuComponent } from './menu/menu.component';

export * from './menu/menu.component';

const DECLARATIONS_EXPORTS = [
  TsMenuComponent,
  TsMenuItemDirective,
];

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    TsButtonModule,
  ],
  exports: [...DECLARATIONS_EXPORTS],
  declarations: [...DECLARATIONS_EXPORTS],
})
export class TsMenuModule {}
