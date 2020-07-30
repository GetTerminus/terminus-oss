import {
  async,
  TestBed,
} from '@angular/core/testing';
import { ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import {
  cold,
  getTestScheduler,
  hot,
} from 'jasmine-marbles';
import {
  BehaviorSubject,
  of,
} from 'rxjs';

import {
  AllTokensExpired,
  InitialTokenExtracted,
  INITIAL_TOKEN_NAME,
  JwtTokenProviderEffects,
  MinimalClaimMap,
  SCHEDULER,
  SECONDS_BEFORE_EXPIRATION_TO_NOTIFY,
  State,
  StoreToken,
  TokenExpired,
  TokenNearingExpiration,
} from '@terminus/fe-jwt';
import { TsCookieService } from '@terminus/ngx-tools/browser';

/**
 * @param payload
 * @param headers
 */
const createFakeJwt = (
  payload: object,
  headers: object = {
    alg: 'HS256',
    typ: 'JWT',
  },
) => [
  window.btoa(JSON.stringify(headers)),
  window.btoa(JSON.stringify(payload)),
  'fakeSignature',
].join('.');

describe(`JWT Token Effects`, function() {
  let actions: any;
  let effects: JwtTokenProviderEffects;
  let mockStore: {select: jest.MockInstance<any, any>};
  let selectOutput: BehaviorSubject<any>;
  let mockCookieService: {get: jest.MockInstance<any, any>};
  const currentEpoch = () => Math.ceil((new Date).getTime() / 1000);

  beforeEach(async(() => {
    selectOutput = new BehaviorSubject({});
    mockStore = { select: jest.fn() };
    mockStore.select.mockReturnValue(selectOutput);
    mockCookieService = { get: jest.fn() };

    TestBed.configureTestingModule({
      providers: [
        JwtTokenProviderEffects,
        provideMockActions(() => actions),
        {
          provide: INITIAL_TOKEN_NAME,
          useValue: 'initToken',
        },
        {
          provide: TsCookieService,
          useValue: mockCookieService,
        },
        {
          provide: SCHEDULER,
          useFactory: getTestScheduler,
        },
        {
          provide: SECONDS_BEFORE_EXPIRATION_TO_NOTIFY,
          useValue: 2,
        },
        {
          provide: Store,
          useValue: mockStore,
        },
      ],
    });

    effects = TestBed.inject<JwtTokenProviderEffects>(JwtTokenProviderEffects);
    effects['cookieService'].get = jest.fn(() => 'foobar');
  }));

  describe(`initialCookieLoader$`, () => {
    const blankState: State = {
      jwtTokens: {
        initialTokenStatus: 'uninitialized',
        tokens: {},
      },
    };

    test(`should provide a cookie and store cookie message if the cookie is set`, () => {
      const currentState = of<State>(blankState);

      const expected = cold('(ab|)', {
        a: new InitialTokenExtracted('foobar'),
        b: new StoreToken({
          tokenName: 'initToken',
          token: 'foobar',
          isDefaultToken: true,
        }),
      });

      expect(
        effects.initialCookieLoader$({ currentState }),
      ).toBeObservable(expected);
    });

    test(`should emit nothing if state is loaded`, () => {
      const currentState = of<State>({
        ...blankState,
        jwtTokens: {
          ...blankState.jwtTokens,
          initialTokenStatus: 'loaded',
        },
      });
      mockCookieService.get.mockReturnValue('foobar');

      const expected = cold('|');

      expect(
        effects.initialCookieLoader$({ currentState }),
      ).toBeObservable(expected);
    });

    test(`should emit nothing if state is empty`, () => {
      const currentState = of<State>({
        ...blankState,
        jwtTokens: {
          ...blankState.jwtTokens,
          initialTokenStatus: 'empty',
        },
      });

      mockCookieService.get.mockReturnValue('foobar');

      const expected = cold('|');

      expect(
        effects.initialCookieLoader$({ currentState }),
      ).toBeObservable(expected);
    });

    it(`it should only announce the initial if the cookie is empty`, () => {
      const currentState = of<State>(blankState);
      effects['cookieService'].get = jest.fn(() => '');

      const expected = cold('(a|)', { a: new InitialTokenExtracted('') });

      expect(
        effects.initialCookieLoader$({ currentState }),
      ).toBeObservable(expected);
    });
  });

  describe(`initializationCleanup$`, () => {
    test(`should dispatch a nothing if the exp is unset`, () => {
      actions = hot('a', { a: { type: ROOT_EFFECTS_INIT } });

      const expected = cold(`${'-'.repeat(10)  }(ab|)`, {
        a: new StoreToken<MinimalClaimMap>({
          tokenName: 'foo',
          token: 'abc',
        }),
        b: new StoreToken<MinimalClaimMap>({
          tokenName: 'bar',
          token: 'abc',
        }),
      });

      selectOutput.next({
        foo: 'abc',
        bar: 'abc',
      });

      (expect(
        effects.initializationCleanup$,
      ) as any).toBeObservable(expected);
    });

    test(`should dispatch only truthy values`, () => {
      actions = hot('a', { a: { type: ROOT_EFFECTS_INIT } });

      const expected = cold(`${'-'.repeat(10)  }(a|)`, {
        a: new StoreToken<MinimalClaimMap>({
          tokenName: 'foo',
          token: 'abc',
        }),
      });

      selectOutput.next({
        foo: 'abc',
        bar: null,
      });

      (expect(
        effects.initializationCleanup$,
      ) as any).toBeObservable(expected);
    });
  });

  describe(`allTokensExpired$`, () => {
    test(`should dispatch a message when the last token expires`, () => {
      actions = hot('a', {
        a: new TokenExpired<MinimalClaimMap>({
          tokenName: 'bar',
          token: 'foo',
        }),
      });

      const expected = cold('-a', { a: new AllTokensExpired() });

      selectOutput.next({ });

      (expect(
        effects.allTokensExpired$,
      ) as any).toBeObservable(expected);
    });

    test(`should not dispatch a message when a token remains`, () => {
      actions = hot('a', {
        a: new TokenExpired<MinimalClaimMap>({
          tokenName: 'bar',
          token: 'foo',
        }),
      });

      const expected = cold('--', { });

      selectOutput.next({ foo: '123' });

      (expect(
        effects.allTokensExpired$,
      ) as any).toBeObservable(expected);
    });
  });

  describe('notifyOfTokenExpiration$', () => {
    test(`should dispatch a nothing if the exp is unset`, () => {
      actions = hot('a', {
        a: new StoreToken<{Foobar: string}>({
          tokenName: 'Foobar',
          token: createFakeJwt({ foo: 'bar' }),
        }),
      });
      const expected = cold('-');

      (expect(
        effects.notifyOfTokenExpiration$,
      ) as any).toBeObservable(expected);
    });

    test(`should dispatch a token expired action if the expiration is in the past`, () => {
      const params = {
        tokenName: 'Foobar',
        token: createFakeJwt({
          foo: 'bar',
          exp: currentEpoch() - 1,
        }),
      };
      actions = hot('a', { a: new StoreToken<MinimalClaimMap>(params) });
      const expected = cold('b', { b: new TokenExpired<MinimalClaimMap>(params) });

      (expect(
        effects.notifyOfTokenExpiration$,
      ) as any).toBeObservable(expected);
    });

    test(`should dispatch expiration and nearing expiration actions`, () => {
      getTestScheduler().maxFrames = 3500;
      const params = {
        tokenName: 'Foobar',
        token: createFakeJwt({
          foo: 'bar',
          exp: currentEpoch() + 3,
        }),
      };

      const action = new StoreToken<MinimalClaimMap>(params);

      actions = hot('a', { a: action });

      const expected = cold(`-${'-'.repeat(99)}a${'-'.repeat(199)}b`, {
        a: new TokenNearingExpiration<MinimalClaimMap>(params),
        b: new TokenExpired<MinimalClaimMap>(params),
      });

      (expect(
        effects.notifyOfTokenExpiration$,
      ) as any).toBeObservable(expected);
    });

    test(`should dispatch nearing expiration right away if within the timeout`, () => {
      getTestScheduler().maxFrames = 2500;
      const params = {
        tokenName: 'Foobar',
        token: createFakeJwt({
          foo: 'bar',
          exp: currentEpoch() + 1,
        }),
      };

      const action = new StoreToken<MinimalClaimMap>(params);

      actions = hot('a', { a: action });

      const expected = cold(`${'-'.repeat(100)}(ab)`, {
        a: new TokenNearingExpiration<MinimalClaimMap>(params),
        b: new TokenExpired<MinimalClaimMap>(params),
      });

      (expect(
        effects.notifyOfTokenExpiration$,
      ) as any).toBeObservable(expected);
    });
  });
});
