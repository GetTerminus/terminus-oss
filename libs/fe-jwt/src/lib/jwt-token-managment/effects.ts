import {
  Inject,
  Injectable,
  InjectionToken,
  Optional,
} from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  merge,
  of,
  Scheduler,
  timer,
} from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
import {
  delay,
  filter,
  flatMap,
  map,
  mergeMap,
  take,
  withLatestFrom,
} from 'rxjs/operators';

import { TsCookieService } from '@terminus/fe-utilities';

import { jwtDecode } from '../jwt-decode/jwt-decode';
import * as JwtTokenProviderActions from './actions';
import {
  getJwtTokenRoot,
  getTokens,
} from './selectors';
import { INITIAL_TOKEN_NAME } from './tokens';
import { SCHEDULER } from './utilities/retry-with-escalation';


export interface Claims { exp: number; }

export interface MinimalClaimMap {
  [id: string]: Claims;
}

export const SECONDS_BEFORE_EXPIRATION_TO_NOTIFY = new InjectionToken<number>('wait time');

const SECONDS_IN_MINUTE = 60;
const DEFAULT_MINUTES_BEFORE_EXPIRATION_TO_NOTIFY = 5;
const DEFAULT_SECONDS_BEFORE_EXPIRATION_TO_NOTIFY = DEFAULT_MINUTES_BEFORE_EXPIRATION_TO_NOTIFY * SECONDS_IN_MINUTE;
const CLEANUP_DELAY = 100;
const TOKENS_EXPIRED_DELAY = 10;
const MS_IN_SECONDS = 1000;

type PartialClaimTuple = [
  JwtTokenProviderActions.StoreToken<MinimalClaimMap>,
  Partial<Claims>
];

type FullClaimsTuple = [
  JwtTokenProviderActions.StoreToken<MinimalClaimMap>,
  Claims
];


@Injectable()
export class JwtTokenProviderEffects {

  constructor(
    private actions$: Actions<JwtTokenProviderActions.Actions<MinimalClaimMap>>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private store: Store<any>,
    private cookieService: TsCookieService,

    @Inject(INITIAL_TOKEN_NAME)
    private initialTokenName: string,

    @Optional()
    @Inject(SCHEDULER)
    // TODO: Scheduler is marked as deprecated to stop others from using although it is not technically deprecated from
    // what I can tell. The 'correct' path would be to create our own class extending `SchedulerLike`.
    // https://github.com/GetTerminus/ngx-tools/issues/287
    // eslint-disable-next-line deprecation/deprecation
    private scheduler: Scheduler,

    @Optional()
    @Inject(SECONDS_BEFORE_EXPIRATION_TO_NOTIFY)
    private timeToWaitBeforeExpiration: number,
  ) {}


  @Effect()
  public initializationCleanup$ = of(true)
    .pipe(
      delay(CLEANUP_DELAY, this.scheduler || async),
      withLatestFrom(
        this.store.select(getTokens<MinimalClaimMap>()),
      ),
      map(([_, tokens]) => tokens),
      take(1),
      flatMap(tokens => {
        const actions: JwtTokenProviderActions.StoreToken<MinimalClaimMap>[] = [];

        for (const tokenName in tokens) {
          if (tokens.hasOwnProperty(tokenName)) {
            const token = tokens[tokenName];
            if (token) {
              actions.push(
                new JwtTokenProviderActions.StoreToken({
                  tokenName,
                  token,
                }),
              );
            }
          }
        }
        return actions;
      }),
    )
  ;


  @Effect()
  public allTokensExpired$ = this.actions$
    .pipe(
      ofType<never>(JwtTokenProviderActions.ActionTypes.TokenExpired),
      delay(TOKENS_EXPIRED_DELAY, this.scheduler || async),
      withLatestFrom(
        this.store.select(getTokens<MinimalClaimMap>()),
      ),
      map(([_, tokens]) => tokens),
      filter(tokens => Object.keys(tokens).length === 0),
      map(tokens => new JwtTokenProviderActions.AllTokensExpired()),
    )
  ;


  @Effect()
  public notifyOfTokenExpiration$ = this.actions$
    .pipe(
      ofType<JwtTokenProviderActions.StoreToken<MinimalClaimMap>>(JwtTokenProviderActions.ActionTypes.StoreToken),
      // eslint-disable-next-line max-len
      map((action: JwtTokenProviderActions.StoreToken<MinimalClaimMap>): PartialClaimTuple => [action, jwtDecode<Partial<Claims>>(action.token)]),
      filter((a: PartialClaimTuple): a is FullClaimsTuple => a[1].exp !== undefined),
      mergeMap(([action, claims]) => {
        const currentEpoch = Math.ceil((new Date()).getTime() / MS_IN_SECONDS);

        if (claims.exp > currentEpoch) {
          const expiresIn = claims.exp - currentEpoch;
          const expirationBuffer = this.timeToWaitBeforeExpiration || DEFAULT_SECONDS_BEFORE_EXPIRATION_TO_NOTIFY;
          let expirationNearIn = 0;

          if (expiresIn < expirationBuffer) {
            expirationNearIn = 1;
          } else {
            expirationNearIn = expiresIn - expirationBuffer;
          }

          return merge(
            this.buildDelayedExpirationObservable(expirationNearIn * MS_IN_SECONDS, action, false),
            this.buildDelayedExpirationObservable(expiresIn * MS_IN_SECONDS, action, true),
          );
        }
        return of(new JwtTokenProviderActions.TokenExpired<MinimalClaimMap>({
          tokenName: action.tokenName,
          token: action.token,
        }));

      }),
    )
  ;


  @Effect()
  public initialCookieLoader$ = ({
    currentState = this.store.select(getJwtTokenRoot()),
  } = {}) => of(true).pipe(
    take(1),
    withLatestFrom(currentState),
    filter(([_, state]) => !!(state && state.jwtTokens.initialTokenStatus === 'uninitialized')),
    mergeMap(([a, _]) => {
      const cookie = this.cookieService.get('jwt_cookie');
      if (cookie.length > 0) {
        return [
          new JwtTokenProviderActions.InitialTokenExtracted(cookie),
          new JwtTokenProviderActions.StoreToken({
            tokenName: this.initialTokenName,
            token: cookie,
            isDefaultToken: true,
          }),
        ];
      }
      return [
        new JwtTokenProviderActions.InitialTokenExtracted(cookie),
      ];

    }),
  );


  /*
   * This next function is being excluded from coverage due the complexities of testing the `delay` function.
   * In order to test as much as possible, each piece has been separated into smaller testable functions.
   */
  public buildDelayedExpirationObservable(
    emitTime: number | Date,
    action: JwtTokenProviderActions.StoreToken<MinimalClaimMap>,
    expired: boolean,
  ) {
    const outputActionArgs = {
      tokenName: action.tokenName,
      token: action.token,
    };

    return timer(emitTime, this.scheduler || async).pipe(
      take(1),
      map(() => (expired
        ? new JwtTokenProviderActions.TokenExpired<MinimalClaimMap>(outputActionArgs)
        : new JwtTokenProviderActions.TokenNearingExpiration<MinimalClaimMap>(outputActionArgs))),
    );
  }
}
