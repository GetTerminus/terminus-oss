import { Action } from '@ngrx/store';

import { defineTypeEnum } from '@terminus/fe-utilities';

export enum ActionTypes  {
  StoreToken             = '[ngx-tools-jwt-token-provider] Store Token',
  TokenNearingExpiration = '[ngx-tools-jwt-token-provider] Token Nearing Expiration',
  TokenExpired           = '[ngx-tools-jwt-token-provider] Token Expired',
  EscalateToken          = '[ngx-tools-jwt-token-provider] Escalate Token',
  EscalationSuccess      = '[ngx-tools-jwt-token-provider] Escalation Success',
  EscalationFailed       = '[ngx-tools-jwt-token-provider] Escalation Failed',
  AllTokensExpired       = '[ngx-tools-jwt-token-provider] All Tokens have Expired',
  InitialTokenExtracted  = '[ngx-tools-jwt-token-provider] Initial Token Extracted',
  FailedToActivateRoute  = '[ngx-tools-jwt-token-provider] Failed To Activate Route',
}

defineTypeEnum(ActionTypes);

export interface StoreTokenConstructor<C> {
  tokenName: Extract<keyof C, string>;
  token: string;
  isDefaultToken?: boolean;
}

/**
 * InitialTokenExtracted
 */
export class InitialTokenExtracted implements Action {
  public type: typeof ActionTypes.InitialTokenExtracted = ActionTypes.InitialTokenExtracted;

  constructor(public token: string) { }
}

/**
 * FailedToActivateRoute
 */
export class FailedToActivateRoute implements Action {
  public type: typeof ActionTypes.FailedToActivateRoute = ActionTypes.FailedToActivateRoute;
}

/**
 * StoreToken
 */
export class StoreToken<C> implements Action {
  public type: typeof ActionTypes.StoreToken = ActionTypes.StoreToken;
  public tokenName: Extract<keyof C, string>;
  public token: string;
  public isDefaultToken: boolean;

  constructor(
    {
      tokenName,
      token,
      isDefaultToken,
    }: StoreTokenConstructor<C>,
  ) {
    this.tokenName = tokenName;
    this.token = token;
    this.isDefaultToken = !!isDefaultToken;
  }
}

/**
 * TokenExpired
 */
export class TokenExpired<C> implements Action {
  public type: typeof ActionTypes.TokenExpired = ActionTypes.TokenExpired;

  public tokenName: Extract<keyof C, string>;
  public token: string;

  constructor(
    {
      tokenName,
      token,
    }: {tokenName: Extract<keyof C, string>; token: string},
  ) {
    this.tokenName = tokenName;
    this.token = token;
  }
}

/**
 * AllTokensExpired
 */
export class AllTokensExpired implements Action {
  public type: typeof ActionTypes.AllTokensExpired = ActionTypes.AllTokensExpired;
}

/**
 * TokenNearingExpiration
 */
export class TokenNearingExpiration<C> implements Action {
  public type: typeof ActionTypes.TokenNearingExpiration = ActionTypes.TokenNearingExpiration;
  public tokenName: Extract<keyof C, string>;
  public token: string;

  constructor(
    {
      tokenName,
      token,
    }: {tokenName: Extract<keyof C, string>; token: string},
  ) {
    this.tokenName = tokenName;
    this.token = token;
  }
}

/**
 * EscalateToken
 */
export class EscalateToken<C> implements Action {
  public type: typeof ActionTypes.EscalateToken = ActionTypes.EscalateToken;

  constructor(public tokenName: Extract<keyof C, string>) {}
}

/**
 * EscalationSuccess
 */
export class EscalationSuccess<C> implements Action {
  public type: typeof ActionTypes.EscalationSuccess = ActionTypes.EscalationSuccess;

  constructor(public tokenName: Extract<keyof C, string>) {}
}

/**
 * EscalationFailed
 */
export class EscalationFailed<C> implements Action {
  public type: typeof ActionTypes.EscalationFailed = ActionTypes.EscalationFailed;

  constructor(public tokenName: Extract<keyof C, string>) {}
}

export type Actions<C>
  = AllTokensExpired
  | EscalateToken<C>
  | EscalationFailed<C>
  | EscalationSuccess<C>
  | InitialTokenExtracted
  | StoreToken<C>
  | TokenExpired<C>
  | TokenNearingExpiration<C>
;
