import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  isHttpResponse,
  isTokenResponse,
} from '@terminus/fe-utilities';

import {
  StoreToken,
  StoreTokenConstructor,
} from '../actions';
import { ClaimMap } from '../claim-map';

export interface ExtractTokenParams<C = ClaimMap> extends Partial<StoreTokenConstructor<C>> {
  tokenName: Extract<keyof C, string>;
}

export const TOKEN_NOT_FOUND_ERROR = new Error('Token Not found in response');

@Injectable()
export class TokenExtractor<CM = ClaimMap> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public extractJwtToken<T extends Object | HttpResponse<any>>({ tokenName, isDefaultToken }: ExtractTokenParams<CM>) {
    return (source: Observable<T>) => source.pipe(
      tap(request => {
        const token = this.extractTokenFromResponse(request);

        if (token === '') {
          throw TOKEN_NOT_FOUND_ERROR;
        } else {
          this.store.dispatch(new StoreToken<CM>({
            tokenName,
            token,
            isDefaultToken,
          }));
        }
      }),
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public extractTokenFromResponse<T extends Object | HttpResponse<any>>(input: T): string {
    let token = '';

    if (isTokenResponse(input)) {
      token = input.token;
    } else if (isHttpResponse(input)) {
      const authHeader = input.headers.get('Authorization');
      const tokenStartsAtChar = 7;

      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substr(tokenStartsAtChar);
      }
    }

    return token;
  }

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public store: Store<any>,
  ) {}

}
