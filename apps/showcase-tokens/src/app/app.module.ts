import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InlineSVGModule } from 'ng-inline-svg';
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrabComponent } from './components/grab/grab.component';
import { TokensComponent } from './components/tokens/tokens.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ColorComponent } from './features/color/color.component';
import { LandingComponent } from './features/landing/landing.component';
import { TypographyComponent } from './features/typography/typography.component';
import { ColorFormatPipe } from './pipes/color-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    GrabComponent,
    TypographyComponent,
    LandingComponent,
    ToolbarComponent,
    TokensComponent,
    ColorFormatPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ClipboardModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
