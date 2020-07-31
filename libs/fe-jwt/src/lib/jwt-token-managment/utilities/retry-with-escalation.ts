import { HttpErrorResponse } from '@angular/common/http';
import {
  Inject,
  Injectable,
  InjectionToken,
  Optional,
} from '@angular/core';
import {
  Actions,
  ofType,
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  merge,
  Observable,
  Scheduler,
  throwError,
  timer,
} from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
import {
  delay,
  filter,
  mergeMap,
  retryWhen,
  switchMap,
  take,
} from 'rxjs/operators';

import * as JwtActions from '../actions';
import { ClaimMap } from '../claim-map';


// TODO: Scheduler is marked as deprecated to stop others from using although it is not technically deprecated from what I can tell. The
// 'correct' path would be to create our own class extending `SchedulerLike`.
// eslint-disable-next-line deprecation/deprecation
export const SCHEDULER = new InjectionToken<Scheduler>('scheduler');
export const ESCALATION_WAIT_TIME = new InjectionToken<number>('wait time');

const FORBIDDEN_ERROR = 403;
const DEFAULT_ESCALATION_WAIT_TIME = 30000;


@Injectable()
export class RetryWithEscalation<CM = ClaimMap> {

  public retryWithEscalation(tokenName: Extract<keyof CM, string>) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (source: Observable<any>) => source.pipe(
      retryWhen((errors: Observable<HttpErrorResponse | Error>) => {
        const DELAY_MS = 10;
        let tries = 0;
        return errors.pipe(
          mergeMap(err => {
            if (tries > 0 || err instanceof Error || err.status !== FORBIDDEN_ERROR) {
              return throwError(err);
            }

            tries += 1;

            this.store.dispatch(new JwtActions.EscalateToken<CM>(tokenName));

            return merge(
              this.waitForResult(tokenName),
              this.expirationTimer(),
            ).pipe(
              take(1),
              delay(DELAY_MS, this.scheduler || async),
            );
          }),
        );
      }),
    );
  }

  private waitForResult(tokenName: Extract<keyof CM, string>) {
    return this.actions$
      .pipe(
        ofType<JwtActions.EscalationFailed<CM> | JwtActions.EscalationSuccess<CM>>(
          JwtActions.ActionTypes.EscalationFailed,
          JwtActions.ActionTypes.EscalationSuccess,
        ),
        filter(a => a.tokenName === tokenName),
        switchMap(escResult => {
          if (escResult.type === JwtActions.ActionTypes.EscalationSuccess) {
            return 'complete';
          }
          return this.failureError();

        }),
      )
    ;
  }

  private expirationTimer() {
    return timer(
      this.waitTime  || DEFAULT_ESCALATION_WAIT_TIME,
      this.scheduler || async,
    ).pipe(switchMap(() => this.failureError()));
  }

  private failureError() {
    return throwError(new Error('Failed to escalate token'));
  }

  constructor(
    private actions$: Actions,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public store: Store<any>,
    // TODO: Scheduler is marked as deprecated to stop others from using although it is not technically deprecated
    // from what I can tell. The 'correct' path would be to create our own class extending `SchedulerLike`.
    // eslint-disable-next-line deprecation/deprecation
    @Optional() @Inject(SCHEDULER) private scheduler: Scheduler,
    @Optional() @Inject(ESCALATION_WAIT_TIME) private waitTime: number,
  ) {}

}
