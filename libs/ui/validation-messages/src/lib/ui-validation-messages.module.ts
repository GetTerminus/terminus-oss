import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { TsPipesModule } from '@terminus/ui-pipes';

import { TsValidationMessagesComponent } from './messages/validation-messages.component';
import { TsValidationMessagesService } from './service/validation-messages.service';


export * from './service/validation-messages.service';
export * from './messages/validation-messages.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TsPipesModule,
  ],
  providers: [TsValidationMessagesService],
  exports: [TsValidationMessagesComponent],
  declarations: [TsValidationMessagesComponent],
})
export class TsValidationMessagesModule {}
