import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { jwtDecode } from '../jwt-decode/jwt-decode';
import { Tokens } from './reducer';
import {
  JWT_TOKEN_MANAGEMENT_STATE_TOKEN,
  State,
} from './state';


export const getJwtTokenRoot = <CM>() => createFeatureSelector<State<CM> | undefined>(JWT_TOKEN_MANAGEMENT_STATE_TOKEN);

/**
 * Return all current tokens
 */
export const getTokens = <CM>() => createSelector(
  getJwtTokenRoot<CM>(),
  (jwtTokenState): Tokens<CM> => (jwtTokenState ? jwtTokenState.jwtTokens.tokens : {}),
);

export const getDefaultToken = () => createSelector(
  getJwtTokenRoot(),
  jwtTokenState => (jwtTokenState ? jwtTokenState.jwtTokens.defaultToken : undefined),
);

export const tokenForWithoutDefault =
  <CM, ServiceName extends Extract<keyof CM, string>>(serviceName: ServiceName) => createSelector(
    getTokens<CM>(),
    (userState): string | undefined => userState[serviceName],
  );

export const tokenFor = <CM, ServiceName extends Extract<keyof CM, string>>(serviceName: ServiceName) => createSelector(
  getDefaultToken(),
  tokenForWithoutDefault<CM, ServiceName>(serviceName),
  (defaultToken, serviceToken): string | undefined => serviceToken || defaultToken,
);

export const claimsFor = <CM, ServiceName extends Extract<keyof CM, string>>(serviceName: ServiceName) => createSelector(
  tokenFor<CM, ServiceName>(serviceName),
  (token): CM[ServiceName] | null =>  {
    if (token) {
      try {
        return jwtDecode<CM[ServiceName]>(token);
      } catch (e) {
        if (e.name === 'InvalidTokenError') {
          return null;
        }
        throw e;
      }
    } else {
      return null;
    }
  },
);

export const claimValue = <CM, ServiceName extends Extract<keyof CM, string>, ClaimName extends keyof CM[ServiceName]>(
  serviceName: ServiceName,
  claimName: ClaimName,
) => createSelector(
    claimsFor<CM, ServiceName>(serviceName),
    (claims): CM[ServiceName][ClaimName] | null => (claims ? claims[claimName] : null),
  );
