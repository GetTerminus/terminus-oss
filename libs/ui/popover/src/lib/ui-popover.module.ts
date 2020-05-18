
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TsPopoverComponent } from './popover/popover.component';
import { TsPopoverTriggerDirective } from './trigger/popover-trigger.directive';

export * from './popover/popover.component';
export * from './trigger/popover-trigger.directive';
export * from './popover-options';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TsPopoverComponent,
    TsPopoverTriggerDirective,
  ],
  exports: [
    TsPopoverComponent,
    TsPopoverTriggerDirective,
  ],
})
export class TsPopoverModule { }
