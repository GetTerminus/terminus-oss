import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TsEmptyStateActionsComponent } from './empty-state-actions.component';
import { TsEmptyStateComponent } from './empty-state/empty-state.component';

export * from './empty-state/empty-state.component';
export * from './empty-state-actions.component';

const EXPORTS_DECLARATIONS = [
  TsEmptyStateActionsComponent,
  TsEmptyStateComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...EXPORTS_DECLARATIONS],
  exports: [...EXPORTS_DECLARATIONS],
})
export class TsEmptyStateModule {}
