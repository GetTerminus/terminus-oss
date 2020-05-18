import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TsAutofocusDirective } from './autofocus/autofocus.directive';

export * from './autofocus/autofocus.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [TsAutofocusDirective],
  exports: [TsAutofocusDirective],
})
export class TsAutofocusModule {}
