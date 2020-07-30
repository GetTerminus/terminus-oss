import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

import {
  ClaimMap,
  EscalateJwtToken,
  EscalationFailed,
  EscalationSuccess,
  TokenEscalator,
  TokenExtractor,
} from '@terminus/fe-jwt';

interface MockClaimMap {
  foo: {bar: number};
}

describe(`TokenEscalator`, function() {
  let mockStore: {select: jest.MockInstance<any, any>; dispatch: jest.MockInstance<any, any>};
  let mockHttp: {get: jest.MockInstance<any, any>};
  let escalator: TokenEscalator<MockClaimMap>;
  let actions: Observable<any>;
  const tokenName = 'foo';
  const authorizeUrl = of('/foobar');

  beforeEach(() => {
    mockHttp = { get: jest.fn() };
    mockStore = {
      select: jest.fn(),
      dispatch: jest.fn(),
    };
    TestBed.configureTestingModule({
      providers: [
        TokenEscalator,
        TokenExtractor,
        provideMockActions(() => actions),
        {
          provide: Store,
          useValue: mockStore,
        },
        {
          provide: HttpClient,
          useValue: mockHttp,
        },
      ],
    });

    escalator = TestBed.inject<TokenEscalator<MockClaimMap>>(TokenEscalator);
  });

  test(`should dispatch success on a successful response`, () => {
    actions = cold('a', { a: new EscalateJwtToken<ClaimMap>(tokenName) });
    const responseBody = { token: 'fooBarBaz' };
    mockHttp.get.mockReturnValue(of(responseBody));
    mockStore.select.mockReturnValue(of('currentToken'));

    (
      expect(
        escalator.escalateToken({
          tokenName,
          authorizeUrl,
          isDefaultToken: true,
        }),
      ) as any
    ).toBeObservable(cold('a', { a: new EscalationSuccess<ClaimMap>(tokenName) }));
  });

  test(`should dispatch failed if the token fails to extract`, () => {
    actions = cold('a', { a: new EscalateJwtToken<ClaimMap>(tokenName) });
    const responseBody = {};
    mockHttp.get.mockReturnValue(of(responseBody));
    mockStore.select.mockReturnValue(of('currentToken'));

    (
      expect(
        escalator.escalateToken({
          tokenName,
          authorizeUrl,
          isDefaultToken: true,
        }),
      ) as any
    ).toBeObservable(cold('a', { a: new EscalationFailed<ClaimMap>(tokenName) }));
  });
});
