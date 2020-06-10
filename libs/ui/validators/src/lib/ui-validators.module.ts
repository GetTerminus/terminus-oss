import { NgModule } from '@angular/core';

import { TsValidatorsService } from './service/validators.service';

export * from './service/validators.service';

@NgModule({ providers: [TsValidatorsService] })
export class TsValidatorsModule {}
