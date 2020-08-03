<h1>JWT Token</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

A collection of helpers for dealing with JWT tokens.

**Import from:** `@terminus/fe-jwt`

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
- [Getting started](#getting-started)
  - [Step 1: Setup your claim map](#step-1-setup-your-claim-map)
  - [Step 2: The Module](#step-2-the-module)
  - [Step 3: Start collecting you token](#step-3-start-collecting-you-token)
  - [Step 4: Use the token for a service.](#step-4-use-the-token-for-a-service)
  - [Step 5: Request token escalation and retry](#step-5-request-token-escalation-and-retry)
  - [Step 6: Escalate a token when requested](#step-6-escalate-a-token-when-requested)
  - [Step 7: Profit!](#step-7-profit)
- [Initial Acquisition of a token](#initial-acquisition-of-a-token)
- [Other common patterns](#other-common-patterns)
  - [Ensure a JWT Token is present](#ensure-a-jwt-token-is-present)
  - [Renewal of a token](#renewal-of-a-token)
  - [Take action when all tokens expire](#take-action-when-all-tokens-expire)
  - [Pre-escalation of a token](#pre-escalation-of-a-token)
- [Testing Mocks](#testing-mocks)
  - [RetryWithEscalationMock](#retrywithescalationmock)
  - [TokenExtractorMock](#tokenextractormock)
  - [Default Token](#default-token)
- [Selectors](#selectors)
  - [`tokenFor<ClaimMap, ServiceName>(serviceName)`](#tokenforclaimmap-servicenameservicename)
  - [`claimsFor<ClaimMap, ServiceName>(serviceName)` selector](#claimsforclaimmap-servicenameservicename-selector)
  - [`claimValue<ClaimMap, ServiceName, ClaimName>(serviceName, claimName)`](#claimvalueclaimmap-servicename-claimnameservicename-claimname)
- [Actions](#actions)
  - [`StoreToken<ClaimMap>`](#storetokenclaimmap)
  - [`claimsFor<ClaimMap, ServiceName>(serviceName)` action](#claimsforclaimmap-servicenameservicename-action)
  - [`TokenNearingExpiration<ClaimMap>`](#tokennearingexpirationclaimmap)
  - [`EscalateToken<ClaimMap>`](#escalatetokenclaimmap)
  - [`EscalationSuccess<ClaimMap>`](#escalationsuccessclaimmap)
  - [`EscalationFailed<ClaimMap>`](#escalationfailedclaimmap)
- [Claim Map](#claim-map)
  - [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```bash
$ yarn add @terminus/{fe-jwt,fe-utilities} rxjs date-fns @ngrx/{store,effects}
```

## Getting started

This JWT management module provides everything you will need for the common JWT
use case in NGRX.

### Step 1: Setup your claim map

The claim map provides strong types for your JWT token interaction.

In `app.claims.ts`

```typescript
export interface ClaimMap {
  'Service 1': {
    sub: string;
    exp: number;
  }
}
```

### Step 2: The Module

Import the module into your main application:

```typescript
import { JwtTokenManagementModule } from '@terminus/fe-jwt';
import { ClaimMap } from './your-claim-map';

@NgModule({
  imports: [
    JwtTokenManagementModule.forRoot<ClaimMap>({
      initialTokenName: 'Service 1' // When a token is found on startup it is
                                    // stored with this token name
    }),
  ],
})
export class AppModule {}
```

Check out your Redux Dev tools, you should now see the tokens store content and effects have been setup.

### Step 3: Start collecting you token

In `user-login.effects.ts`:

```typescript
import { TokenExtractor } from '@terminus/fe-jwt';

  ...

  constructor(
    public http: HttpClient, // NOTE: Only works with HttpClient
    public tokenExtractor: TokenExtractor<ClaimMap>,
  ) { }

  @Effect()
  performLogin$ = this.actions$.pipe(
    ofType<Actions.LoginRequest>(Actions.ActionTypes.LoginRequest),
    switchMap((a) => {
      return this.http.post('/api/login', {
        username: a.username,
        password: a.password
      }, {
        observe: 'response' // extractJwtToken takes two return values:
                            //  1. A body of { token: 'new token' }. If this is the expected
                            //     return, this observe 'response' should be omitted.
                            //  2. A new token in the `Authorization` header.
                            //     in order to parse this response, `observe: 'response'` is require
      }).pipe(
        this.tokenExtractor.extractJwtToken({
          tokenName: 'Service 1', // Will thrown TS error if not in ClaimMap
          isDefaultToken: true,   // Uses this token as the base escalation point
        }),
        map(() => new LoginSucceeded()),
        catchError((e) => new LoginFailed()),
      )
    })
  );
```

After you perform this login, you will see that the new token is stored in your state.

### Step 4: Use the token for a service.

In `some-service-related.effects.ts`:

```typescript
import { tokenFor } from '@terminus/fe-jwt';

  ...

  constructor(
    public http: HttpClient, // Only works with HttpClient
  ) { }

  @Effect()
  performLogin$ = this.actions$.pipe(
    ofType<Actions.LoginRequest>(Actions.ActionTypes.LoginRequest),
    switchMap((a) => {
      return this.store.select(tokenFor<ClaimMap, 'Service 1'>('Service 1'))
        .pipe(
          switchMap( (token) => this.http.post('/do_something', {}, {
              headers: new HttpHeaders({
                Authorization: `Bearer ${token}`
              })
            }).pipe(
              this.retryer.retryWithEscalation('Service 1'),
              // Do stuff with the response
            )
          )
        )
    })
  );
```

Now you will be making HTTP requests with the current token for the named service, or the default token is no specific token is known.

### Step 5: Request token escalation and retry

In the normal flow for token escalation, un-escalated tokens will trigger a 403 response.  After a 403 the client is expected to reach out
to an endpoint typically `/authorize` and get a new token.

Continuation of the snippet above:

```typescript
import { RetryWithEscalation } from '@terminus/fe-jwt';

  ...

  constructor(
    public http: HttpClient, // Only works with HttpClient
    public retryer: RetryWithEscalation<ClaimMap>, // Only works with HttpClient
  ) { }

  ...

  .pipe(
    this.retryer.retryWithEscalation('Service 1'),
  )
```

This has the effect of catching 403, requesting escalation and waiting for escalation success.

*If escalation is successful*, the stream the retry is attached to will be restarted.

Don't forget how RxJS handles retries, it will retry the entire observable stream as is. That means that if your stream needs to fetch a new
token for each retry a new Observable needs to be created.  A helper method is provided to support this scenario: `regenerateOnRetry(() =>
Observable<any>)` which can be used to create a new observable on every retry.

*If escalation fails* an error with be thrown. It will wait for a maximum of 30 seconds for success, then it will throw.

> Note: You are using an [http retryer][http-retryer] too right?

### Step 6: Escalate a token when requested

After the first `403` is received, you need to provide instructions on how to escalate the token.

In an effect file which makes sense for your application

```typescript
import { TokenEscalator } from '@terminus/fe-jwt';

  constructor(
    public tokenEscalator: TokenEscalator,
    public envService: EnvService,
  ) { }

  ...

  @Effect()
  public escalateService1$ = this.tokenEscalator.escalateToken({
    tokenName: 'Service 1',
    authorizeUrl: this.envService.pipe(                       // AuthorizeURL requires an observable,
      map((env) => `${env.SERVICE_1_HOSTNAME}/v1/authorize`), // but can be a single omission observable
    ),                                                        // if that makes sense for your usage
  })
```

### Step 7: Profit!

At this point you have a full suite of helpers to manage JWT Escalation.

## Initial Acquisition of a token

A common pattern for sharing the JWT Token between services on a common top level domain is store the token in a Cookie. This module will
eager load the value of the cookie and store it as the default token & the token named on module setup (See the forRoot call in step 1).

NOTE: This token will only be stored if the JWT Token Management module state is in it's initial state, if you are storing the state in
localStorage, it will only pick up the cookie once.

## Other common patterns

### Ensure a JWT Token is present

The library exports a DefaultTokenRequired route guard which can be used to ensure a JWT Token has been loaded. This guard ONLY checks for
the presence of a default token.

```typescript
import { DefaultTokenRequired } from '@terminus/fe-jwt';

const routes = [
  {
    path: '/only_for_loggedin_visitors',
    component: SomeComponent,
    canActivate: [DefaultTokenRequired],
  },
]
```

This guard will prevent route activation if the default JWT token is not set.  It will wait to respond until the Cookie has had a chance to
have been read.

If the route fails to activate, the guard will dispatch an event `FailedToActivateRoute`. You will likely want to redirect the user to the
login page when this happens.

```typescript
import { JwtTokenManagmentActions } from '@terminus/fe-jwt';

@Effect()
navigatedWithoutToken$ = this.actions.pipe(
  ofType(JwtTokenManagmentActions.FailedToActivateRoute)
  tap(() => this.router.redirect('/login'))
)
```

**WARNING**: The default token required waits for the state to transition from uninitialized. If you are using meta reducers that clear the
state (such as on logout), you should be restoring the JWT Module state to an empty state. If you do not do this, you will need to
re-initialize the module yourself (unsupported).

```typescript
import { jwtEmptyStateReset } from '@terminus/fe-jwt';

export function clearStateOnLogout(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(
    state: AppState,
    action: Action,
  ) {
    if (action.type === ActionTypes.Clear) {
      return reducer({
        ...jwtEmptyStateReset,
      }, action);
    } else {
      return reducer(state, action);
    }
  }
}
```

### Renewal of a token

```typescript
import {
  JwtTokenManagementActionTypes,
  JwtTokenNearingExpiration,
  TokenEscalator,
  tokenFor,
} from '@terminus/fe-jwt';

@Effect()
public renewService$ = this.actions$
  .pipe(
    ofType<JwtTokenNearingExpiration<ClaimMap>>(JwtTokenManagementActionTypes.TokenNearingExpiration),
    filter((a) => a.tokenName === 'Service1'), // Limit work to only  the service we care about
    withLatestFrom(this.store.select(tokenFor<ClaimMap, 'Service1'>('Service1'))),
    filter(([a, existingToken]) => a.token === existingToken), // If the token nearing expiration isn't the current one
                                                               // don't waste time on it
    switchMap(([_, existingToken]) => this.http.get(
      '/new_token',
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${existingToken}`
        })
      })
      .pipe(
        this.tokenExtractor.extractJwtToken({tokenName: 'Service1'}),
      )
      .pipe(catchError(() => of(NullAction))), // What a failure means is unique to your application
    ),
  )
```

### Take action when all tokens expire

```typescript
import {
  AllJwtTokensExpired,
  JwtTokenManagementActionTypes,
  TokenEscalator,
  tokenFor,
} from '@terminus/fe-jwt';

@Effect()
public logoutWhenAllTokensExpire$ = this.actions$
  .pipe(
    ofType<AllJwtTokensExpired>(JwtTokenManagementActionTypes.AllTokensExpired),
    map(() => new Logout()), // Take any actions required to log the user out)
  )
```

### Pre-escalation of a token

```typescript
import {
  JwtTokenManagementActions,
  tokenForWithoutDefault,
} from '@terminus/fe-jwt';

@Effect()
preescalateToken$ = this.actions$
 .pipe(
   ofType<SomeAction>(SomeActionType),
   withLatestFrom(this.store.select(tokenForWithoutDefault('Service1'))),
   filter(([_, token]) => !token),
   map(() => new JwtTokenManagementActions<ClaimMap>.EscalateToken('Service1'))
 )
```

## Testing Mocks

Some testing mocks are included to provide quick hooks into captured tokens.

> Note: Mocks are imported from `@terminus/fe-jwt/testing`

### RetryWithEscalationMock

This mock will track all token names which have had escalation requested in the array `tokenEscalationsRequested`. You may also simulate
failure and success (the default) by triggering `escalationSuccessful`.

```typescript
import { RetryWithEscalationMock } from '@terminus/fe-jwt/testing';

TestBed.configureTestingModule({
  providers: [
    ...
    RetryWithEscalationMock.forTestBed(),
  ],
});

retryMock = TestBed.inject(RetryWithEscalation);
```

### TokenExtractorMock

This mock will run through the process of extracting a token and store found tokens in the array `extractedTokens`. It will throw if it
fails to find a token.

```typescript
import { TokenExtractorMock } from '@terminus/fe-jwt/testing';

TestBed.configureTestingModule({
  providers: [
    ...
    TokenExtractorMock.forTestBed(),
  ],
});

extractorMock = TestBed.inject(TokenExtractor);
```

### Default Token

A default token is not required, but is recommended. When no token is present for the token named, the default (un-escalated token) will be
used.

## Selectors

JwtTokenManagmentModule provides selectors for inspecting the current token for a given named token.

### `tokenFor<ClaimMap, ServiceName>(serviceName)`

Provides the specific token for the provided service name, or the default token if no specific token is known.

**Inputs**

|               |                                                |
|---------------|------------------------------------------------|
| `serviceName` | Must be a known key of `ClaimMap`              |

**Return Value**

String of the token, or undefined if no default token is known.

### `claimsFor<ClaimMap, ServiceName>(serviceName)` selector

Provides the specific token for the provided service name, or the default token if no specific token is known.

**Inputs**

|               |                                                |
|---------------|------------------------------------------------|
| `serviceName` | Must be a known key of `ClaimMap`              |

**Return Value**

If the token is valid: The data shape of the `ClaimMap[ServiceName]` interface definition.
If the token is invalid: `null`

A valid token is one that can be decoded without respect to expiration date.

### `claimValue<ClaimMap, ServiceName, ClaimName>(serviceName, claimName)`

Provides the specific token for the provided service name, or the default token if no specific token is known.

**Inputs**

|               |                                                |
|---------------|------------------------------------------------|
| `serviceName` | Must be a known key of `ClaimMap`              |
| `claimName`   | Must be a known key of `ClaimMap[ServiceName]` |

**Return Value**

If the token is valid: The data shape of the `ClaimMap[ServiceName][ClaimName]` interface definition.
If the token is invalid: `null`

A valid token is one that can be decoded without respect to expiration date.

## Actions

### `StoreToken<ClaimMap>`

Provides a new token for storage in the JWT Managment system.

### `claimsFor<ClaimMap, ServiceName>(serviceName)` action

Provides the specific token for the provided service name, or the default token if no specific token is known.

**Inputs**

|               |                                   |
|---------------|-----------------------------------|
| `serviceName` | Must be a known key of `ClaimMap` |

**Inputs / Properties**

|                  |                                                              |
|------------------|--------------------------------------------------------------|
| `tokenName`      | Must be a key of the [ClaimMap](#step-1-setup-your-claim-map)                  |
| `token`          | String of the encoded token                                  |
| `isDefaultToken` | Indicates that this token is to be used as the default token |

### `TokenNearingExpiration<ClaimMap>`

This action is emitted when the named token is nearing expiration.

**Inputs / Properties**

|             |                                             |
|-------------|---------------------------------------------|
| `tokenName` | Must be a key of the [ClaimMap](#step-1-setup-your-claim-map) |
| `token`     | String of the encoded token                 |

### `EscalateToken<ClaimMap>`

This action is emitted when escalation has been determined to be necessary.

**Inputs / Properties**

|             |                                             |
|-------------|---------------------------------------------|
| `tokenName` | Must be a key of the [ClaimMap](#step-1-setup-your-claim-map) |

### `EscalationSuccess<ClaimMap>`

This action is emitted when escalation has been completed successfully.

**Inputs / Properties**

|             |                                             |
|-------------|---------------------------------------------|
| `tokenName` | Must be a key of the [ClaimMap](#step-1-setup-your-claim-map) |

### `EscalationFailed<ClaimMap>`

This action is emitted when escalation has failed.

**Inputs / Properties**

|             |                                             |
|-------------|---------------------------------------------|
| `tokenName` | Must be a key of the [ClaimMap](#step-1-setup-your-claim-map) |

## Claim Map

The claim map provides typings for all of the known tokens your application uses. These typings are used to verify consistent and limited
naming.

The use of a single claim map is recommended across the entire application.

**NOTE:** Consider the token life cycle during the escalation process. Ensure claims that are to be added after hitting the `/authorize`
endpoint are listed as potentially undefined.

### Example

```typescript
import { ClaimMap } from '@terminus/fe-jwt';

export interface AppClaimMap implements ClaimMap {
  'Application': {
    'sub': string;
    'claim_foo'?: boolean;
  };
  'Other Application': {
    'sub': string;
    'other thing'?: number;
  }
}
```


<!-- Links -->
[http-retryer]:        https://github.com/GetTerminus/terminus-oss/blob/release/libs/fe-utilities/src/lib/general/README.md#httpretryer
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/fe-jwt.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/fe-jwt
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg?flag=feJwt
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/fe-jwt/index.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/fe-jwt@*/index.js
