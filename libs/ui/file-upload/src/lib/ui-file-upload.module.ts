import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { TsDocumentService } from '@terminus/fe-utilities';
import { TsButtonModule } from '@terminus/ui-button';
import { TsPipesModule } from '@terminus/ui-pipes';
import { TsTooltipModule } from '@terminus/ui-tooltip';
import { TsValidationMessagesModule } from '@terminus/ui-validation-messages';

import { TsDropProtectionService } from './drop-protection/drop-protection.service';
import { TsFileUploadComponent } from './file-upload/file-upload.component';
import { SelectedFileViewComponent } from './selected-file-view/selected-file-view.component';

export * from './drop-protection/drop-protection.service';
export * from './file-upload/file-upload.component';
export * from './image-dimension-constraints';
export * from './image-dimensions';
export * from './mime-types';
export * from './selected-file/selected-file';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatProgressBarModule,
    TsButtonModule,
    TsPipesModule,
    TsTooltipModule,
    TsValidationMessagesModule,
  ],
  declarations: [TsFileUploadComponent, SelectedFileViewComponent],
  providers: [
    TsDocumentService,
    TsDropProtectionService,
  ],
  exports: [TsFileUploadComponent],
})
export class TsFileUploadModule {}
