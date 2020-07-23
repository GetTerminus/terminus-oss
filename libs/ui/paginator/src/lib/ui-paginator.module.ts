import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { TsButtonModule } from '@terminus/ui-button';
import { TsIconModule } from '@terminus/ui-icon';
import { TsMenuModule } from '@terminus/ui-menu';
import { TsOptionModule } from '@terminus/ui-option';
import { TsSelectionListModule } from '@terminus/ui-selection-list';
import { TsTooltipModule } from '@terminus/ui-tooltip';

import { TsPaginatorComponent } from './paginator/paginator.component';

export * from './paginator/paginator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    TsButtonModule,
    TsIconModule,
    TsMenuModule,
    TsOptionModule,
    TsSelectionListModule,
    TsTooltipModule,
  ],
  exports: [TsPaginatorComponent],
  declarations: [TsPaginatorComponent],
})
export class TsPaginatorModule {}
