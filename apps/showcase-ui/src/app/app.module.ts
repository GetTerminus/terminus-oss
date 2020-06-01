import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { TsAutofocusModule } from '@terminus/ui-autofocus';
import { TsButtonModule } from '@terminus/ui-button';
import { TsCheckboxModule } from '@terminus/ui-checkbox';
import { TsIconModule } from '@terminus/ui-icon';
import { TsInputModule } from '@terminus/ui-input';
import { TsLinkModule } from '@terminus/ui-link';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TsAutofocusModule,
    TsButtonModule,
    TsCheckboxModule,
    TsIconModule,
    TsInputModule,
    TsLinkModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ComponentsComponent],
})
export class AppModule {}
