import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TsButtonModule } from '@terminus/ui-button';
import { TsInputModule } from '@terminus/ui-input';

import { TsSearchComponent } from './search/search.component';

export * from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TsButtonModule,
    TsInputModule,
  ],
  exports: [TsSearchComponent],
  declarations: [TsSearchComponent],
})
export class TsSearchModule {}
