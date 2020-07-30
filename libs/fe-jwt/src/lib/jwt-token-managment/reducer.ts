import * as JwtTokenProviderActions from './actions';
import { ClaimMap } from './claim-map';


export type Tokens<C> = { [P in Extract<keyof C, string>]?: string };


export interface JwtTokenProviderState<C = ClaimMap>  {
  initialTokenStatus: 'uninitialized' | 'loaded' | 'empty';
  defaultToken?: string;
  tokens: Tokens<C>;
}


export const initialState: JwtTokenProviderState = {
  initialTokenStatus: 'uninitialized',
  tokens: {},
};


/**
 * @param state
 * @param action
 */
export function jwtTokenProviderReducer<C = ClaimMap>(
  state = initialState,
  action: JwtTokenProviderActions.Actions<C>,
): JwtTokenProviderState {
  switch (action.type) {
    case JwtTokenProviderActions.ActionTypes.InitialTokenExtracted: {
      if (state.initialTokenStatus !== 'uninitialized') {
        return state;
      }

      if (action.token.length === 0) {
        return {
          initialTokenStatus: 'empty',
          tokens: {},
        };
      }
      return {
        initialTokenStatus: 'loaded',
        defaultToken: action.token,
        tokens: {},
      };

    }
    case JwtTokenProviderActions.ActionTypes.StoreToken: {
      const newState: JwtTokenProviderState = {
        ...state,
        tokens: { ...state.tokens },
      };


      if (action.isDefaultToken) {
        newState.defaultToken = action.token;
        newState.tokens = {};
      }

      newState.tokens[action.tokenName] = action.token;

      return newState;
    }
    case JwtTokenProviderActions.ActionTypes.TokenExpired: {
      const newState = {
        ...state,
        tokens: { ...state.tokens },
      };

      if (state.defaultToken && state.defaultToken === action.token) {
        delete newState.defaultToken;
      }

      for (const k in state.tokens) {
        if (state.tokens[k] && state.tokens[k] === action.token) {
          delete newState.tokens[k];
        }
      }

      return newState;
    }
    default: {
      return state;
    }
  }
}
