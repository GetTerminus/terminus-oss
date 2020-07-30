import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { StoreTokenConstructor } from '../lib/jwt-token-managment/actions';
import { ClaimMap } from '../lib/jwt-token-managment/claim-map';
import { TokenExtractor } from '../lib/jwt-token-managment/utilities/token-extractor';

export interface ExtractTokenParams<C = ClaimMap> extends Partial<StoreTokenConstructor<C>> {
  tokenName: Extract<keyof C, string>;
}

export const TOKEN_NOT_FOUND = new Error('Token Not found in response');

@Injectable()
export class TokenExtractorMock<CM = ClaimMap> extends TokenExtractor {
  public extractedTokens: string[] = [];

  public static forTestBed() {
    return {
      provide: TokenExtractor,
      useFactory: tokenExtractorMockFactory,
    };
  }

  public extractJwtToken<T extends Object | HttpResponse<any>>({ tokenName, isDefaultToken }: ExtractTokenParams<CM>) {
    return (source: Observable<T>) => source.pipe(
      tap(request => {
        const token = this.extractTokenFromResponse(request);

        if (token === '') {
          throw TOKEN_NOT_FOUND;
        } else {
          this.extractedTokens.push(token);
        }
      }),
    );
  }
}

/**
 * Return mock
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function tokenExtractorMockFactory() {
  return new TokenExtractorMock(undefined as any);
}
