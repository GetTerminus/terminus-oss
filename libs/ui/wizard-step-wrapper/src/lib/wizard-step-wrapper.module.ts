import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TsExpansionPanelModule } from '@terminus/ui-expansion-panel';

import { TsWizardStepWrapperComponent } from './wizard-step-wrapper/wizard-step-wrapper.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TsExpansionPanelModule,
  ],
  declarations: [TsWizardStepWrapperComponent],
  exports: [TsWizardStepWrapperComponent],
})
export class TsWizardStepWrapperModule {
}
