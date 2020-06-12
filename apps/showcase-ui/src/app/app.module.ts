import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {
  TsDocumentService,
  TsWindowService,
} from '@terminus/ngx-tools/browser';
import { TsAutofocusModule } from '@terminus/ui-autofocus';
import { TsButtonModule } from '@terminus/ui-button';
import { TsCheckboxModule } from '@terminus/ui-checkbox';
import { TsIconModule } from '@terminus/ui-icon';
import { TsInputModule } from '@terminus/ui-input';
import { TsLinkModule } from '@terminus/ui-link';
import { TsOptionModule } from '@terminus/ui-option';
import { TsSelectionListModule } from '@terminus/ui-selection-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule.withConfig({ useColumnBasisZero: false }),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    TsAutofocusModule,
    TsButtonModule,
    TsCheckboxModule,
    TsIconModule,
    TsInputModule,
    TsLinkModule,
    TsOptionModule,
    TsSelectionListModule,
  ],
  providers: [
    TsDocumentService,
    TsWindowService,
  ],
  declarations: [
    AppComponent,
    ComponentsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
