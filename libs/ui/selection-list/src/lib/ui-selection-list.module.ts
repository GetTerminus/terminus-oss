import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { TsChipModule } from '@terminus/ui-chip';
import { TsInputModule } from '@terminus/ui-input';
import { TsOptionModule } from '@terminus/ui-option';

import { TsSelectionListPanelComponent } from './selection-list-panel/selection-list-panel.component';
import { TsSelectionListComponent } from './selection-list/selection-list.component';
import {
  TS_SELECTION_LIST_SCROLL_STRATEGY_FACTORY_PROVIDER,
  TsSelectionListTriggerDirective,
} from './trigger/selection-list-trigger.directive';

export * from './selection-list/selection-list.component';
export * from './selection-list-panel/selection-list-panel.component';
export * from './trigger/selection-list-trigger.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    ReactiveFormsModule,
    TsChipModule,
    TsInputModule,
    TsOptionModule,
  ],
  providers: [TS_SELECTION_LIST_SCROLL_STRATEGY_FACTORY_PROVIDER],
  declarations: [
    TsSelectionListComponent,
    TsSelectionListPanelComponent,
    TsSelectionListTriggerDirective,
  ],
  exports: [
    TsSelectionListComponent,
    TsSelectionListPanelComponent,
    TsSelectionListTriggerDirective,
  ],
})
export class TsSelectionListModule {}
