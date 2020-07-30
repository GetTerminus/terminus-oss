import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  ActionReducerMap,
  StoreModule,
} from '@ngrx/store';

import { JwtTokenProviderEffects } from './effects';
import { DefaultTokenRequired } from './guards/defaultTokenRequired';
import { jwtTokenProviderReducer } from './reducer';
import {
  JWT_TOKEN_MANAGEMENT_STATE_TOKEN,
  State,
} from './state';
import { INITIAL_TOKEN_NAME } from './tokens';
import { RetryWithEscalation } from './utilities/retry-with-escalation';
import { TokenEscalator } from './utilities/token-escalator';
import { TokenExtractor } from './utilities/token-extractor';


// NOTE: Not sure why this second param is required in strict mode
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reducers: ActionReducerMap<State, any> = { jwtTokens: jwtTokenProviderReducer };


@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature(
      JWT_TOKEN_MANAGEMENT_STATE_TOKEN,
      reducers,
    ),
    EffectsModule.forFeature([
      JwtTokenProviderEffects,
    ]),
  ],
  providers: [
    RetryWithEscalation,
    TokenEscalator,
    TokenExtractor,
    DefaultTokenRequired,
  ],
})
export class JwtTokenManagementModule {
  public static forRoot<CM>(options: {initialTokenName: keyof CM}) {
    return {
      ngModule: JwtTokenManagementModule,
      providers: [
        {
          provide: INITIAL_TOKEN_NAME,
          useValue: options.initialTokenName,
        },
      ],
    };
  }
}
