import { NgModule } from '@angular/core';

import { TsValidatorsService } from './service/validators.service';

export * from './service/validators.service';
export * from './validators/creditCard/creditCard';
export * from './validators/domain/domain';
export * from './validators/email/email';
export * from './validators/equalToControl/equalToControl';
export * from './validators/greaterThan/greaterThan';
export * from './validators/inCollection/inCollection';
export * from './validators/isInRange/isInRange';
export * from './validators/lessThan/lessThan';
export * from './validators/lowercase/lowercase';
export * from './validators/maxDate/maxDate';
export * from './validators/minDate/minDate';
export * from './validators/numbers/numbers';
export * from './validators/password/password';
export * from './validators/uppercase/uppercase';
export * from './validators/url/url';

@NgModule({ providers: [TsValidatorsService] })
export class TsValidatorsModule {}
