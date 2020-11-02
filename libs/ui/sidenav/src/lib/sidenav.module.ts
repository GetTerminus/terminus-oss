import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TsButtonModule } from '@terminus/ui-button';
import { TsLogoModule } from '@terminus/ui-logo';

import { TsSidenavPlatformSwitcherComponent } from './sidenav-platform-switcher/sidenav-platform-switcher.component';
import { TsSidenavSectionBreakComponent } from './sidenav-section-break/sidenav-section-break.component';
import { TsSidenavTriggerComponent } from './sidenav-trigger/sidenav-trigger.component';
import { TsSidenavComponent } from './sidenav/sidenav.component';
import { TsTriggerComponentPanelContentDirective } from './trigger-component-panel-content.directive';

export * from './sidenav-platform-switcher/sidenav-platform-switcher.component';
export * from './sidenav-section-break/sidenav-section-break.component';
export * from './sidenav-trigger/sidenav-trigger.component';
export * from './sidenav/sidenav.component';
export * from './trigger-component-panel-content.directive';

const DECLARE_EXPORT = [
  TsSidenavComponent,
  TsSidenavPlatformSwitcherComponent,
  TsSidenavSectionBreakComponent,
  TsSidenavTriggerComponent,
  TsTriggerComponentPanelContentDirective,
];

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    RouterModule,
    TsButtonModule,
    TsLogoModule,
  ],
  declarations: [...DECLARE_EXPORT],
  exports: [...DECLARE_EXPORT],
})
export class TsSidenavModule {}
