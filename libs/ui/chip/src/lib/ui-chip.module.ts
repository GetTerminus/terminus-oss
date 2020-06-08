import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

import { TsIconModule } from '@terminus/ui-icon';

import { TsChipBadgeDirective } from './badge/chip-badge.directive';
import { TsChipComponent } from './chip/chip.component';
import { TsChipCollectionComponent } from './collection/chip-collection.component';

export * from './chip/chip.component';
export * from './collection/chip-collection.component';
export * from './badge/chip-badge.directive';

const EXPORTED_DECLARATIONS = [
  TsChipBadgeDirective,
  TsChipComponent,
  TsChipCollectionComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatRippleModule,
    TsIconModule,
  ],
  declarations: EXPORTED_DECLARATIONS,
  exports: EXPORTED_DECLARATIONS,
})
export class TsChipModule {}
