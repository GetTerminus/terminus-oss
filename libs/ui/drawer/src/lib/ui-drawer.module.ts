import { PlatformModule } from '@angular/cdk/platform';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

import { TsDrawerContainerComponent } from './container/drawer-container.component';
import { TsDrawerContentComponent } from './drawer/drawer-content.component';
import { TsDrawerFooterComponent } from './drawer/drawer-footer.component';
import { TsDrawerHeaderComponent } from './drawer/drawer-header.component';
import { TsDrawerComponent } from './drawer/drawer.component';

export * from './drawer/drawer.component';
export * from './container/drawer-container.component';
export * from './drawer/drawer-content.component';
export * from './drawer/drawer-animations';
export * from './drawer/drawer-header.component';
export * from './drawer/drawer-footer.component';


@NgModule({
  imports: [
    CommonModule,
    MatRippleModule,
    ScrollingModule,
    PlatformModule,
  ],
  declarations: [
    TsDrawerComponent,
    TsDrawerContainerComponent,
    TsDrawerContentComponent,
    TsDrawerFooterComponent,
    TsDrawerHeaderComponent,
  ],
  exports: [
    TsDrawerComponent,
    TsDrawerContainerComponent,
    TsDrawerContentComponent,
    TsDrawerFooterComponent,
    TsDrawerHeaderComponent,
  ],
})
export class TsDrawerModule { }
