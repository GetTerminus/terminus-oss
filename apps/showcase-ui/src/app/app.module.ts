import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TsIconModule } from '@terminus/ui-icon';


import { TsAutofocusModule } from '@terminus/ui-autofocus';
import { TsButtonModule } from '@terminus/ui-button';
import { TsCheckboxModule } from '@terminus/ui-checkbox';
import { TsLinkModule } from '@terminus/ui-link';
import { ComponentsComponent } from './components/components.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TsAutofocusModule,
    TsButtonModule,
    TsCheckboxModule,
    TsIconModule,
    TsIconModule,
    TsLinkModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ComponentsComponent],
})
export class AppModule {}
