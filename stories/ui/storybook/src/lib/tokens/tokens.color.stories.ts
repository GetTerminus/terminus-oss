import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from 'ngx-clipboard';

import { ColorComponent } from './color/color.component';
import { GrabComponent } from './shared/grab/grab.component';
import { ColorFormatPipe } from './shared/pipes/color-format.pipe';
import { TokensComponent } from './shared/tokens/tokens.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

const MODULE_METADATA = {
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ClipboardModule,
    FlexLayoutModule,
    FormsModule,
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ColorComponent,
    ColorFormatPipe,
    GrabComponent,
    TokensComponent,
    ToolbarComponent,
  ],
};

export default {
  title: 'Tokens/Color',
};

export const color = () => ({
  moduleMetadata: MODULE_METADATA,
  component: ColorComponent,
});
color.parameters = {
  knobs: { disabled: true },
  actions: { disabled: true },
};

