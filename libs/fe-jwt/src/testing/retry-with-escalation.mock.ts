import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  mergeMap,
  retryWhen,
} from 'rxjs/operators';

import { ClaimMap } from '../lib/jwt-token-managment/claim-map';
import { RetryWithEscalation } from '../lib/jwt-token-managment/utilities/retry-with-escalation';

@Injectable()
export class RetryWithEscalationMock<CM = ClaimMap> extends RetryWithEscalation implements RetryWithEscalation {
  public tokenEscalationsRequested: string[] = [];
  public escalationSuccessful = true;

  public static forTestBed() {
    return {
      provide: RetryWithEscalation,
      useFactory: retryWithEscalationFactory,
    };
  }

  public retryWithEscalation(tokenName: Extract<keyof CM, string>) {
    return (source: Observable<any>) => source.pipe(
      retryWhen((errors: Observable<HttpErrorResponse | Error>) => {
        let tries = 0;
        return errors.pipe(
          mergeMap(err => {
            if (
              tries > 0
                || err instanceof Error
                || err.status !== 403
            ) {
              return throwError(err);
            }

            tries += 1;

            this.tokenEscalationsRequested.push(tokenName);

            if (this.escalationSuccessful) {
              return 'complete';
            }

            return throwError(new Error('Failed to escalate token'));
          }),
        );
      }),
    );
  }
}

/**
 * Return mock
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function retryWithEscalationFactory() {
  return new RetryWithEscalationMock(undefined as any, undefined as any, undefined as any, undefined as any);
}
