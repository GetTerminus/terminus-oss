import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from 'ngx-clipboard';

import { GrabComponent } from './shared/grab/grab.component';
import { TokensComponent } from './shared/tokens/tokens.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { TypographyComponent } from './typography/typography.component';

const MODULE_METADATA = {
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ClipboardModule,
    FlexLayoutModule,
  ],
  declarations: [
    GrabComponent,
    TokensComponent,
    ToolbarComponent,
    TypographyComponent,
  ],
};

export default {
  title: 'Tokens/Typography',
};

export const typography = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TypographyComponent,
});
