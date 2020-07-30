import {
  claimsFor,
  claimValue,
  getTokens,
  JwtTokenProviderState,
  JWT_TOKEN_MANAGEMENT_STATE_TOKEN,
  State,
  tokenFor,
} from '@terminus/fe-jwt';

interface MockClaimMap {
  foo: { fooClaim: string };
  bar: { barClaim: string };
}

interface MinimumStoreRequirements {
  [JWT_TOKEN_MANAGEMENT_STATE_TOKEN]: {
    jwtTokens: JwtTokenProviderState<MockClaimMap>;
  };
}

type MockState = MinimumStoreRequirements | State;

describe('JWT Selectors', function() {
  let state: MockState;
  let tokenStorageState: JwtTokenProviderState<MockClaimMap>;

  beforeEach(() => {
    tokenStorageState = {
      initialTokenStatus: 'loaded',
      tokens: {},
    };
    state = { [JWT_TOKEN_MANAGEMENT_STATE_TOKEN]: { jwtTokens: tokenStorageState } };
  });

  describe('getTokens', () => {
    test(`returns all tokens`, () => {
      tokenStorageState.tokens.bar = 'FooBar';

      expect(
        getTokens<MockClaimMap>()(state as State),
      ).toEqual({ bar: 'FooBar' });
    });
  });

  describe('tokenFor', () => {
    test(`returns the token for the specific service`, () => {
      tokenStorageState.tokens.foo = 'FooBar';

      expect(
        tokenFor<MockClaimMap, 'foo'>('foo')(state as State),
      ).toEqual('FooBar');
    });

    test(`returns the default token if the service token is unset`, () => {
      tokenStorageState.defaultToken = 'FooBarBaz';

      expect(
        tokenFor<MockClaimMap, 'foo'>('foo')(state as State),
      ).toEqual('FooBarBaz');
    });
  });

  describe(`claimsFor`, () => {
    test(`provides the decoded claims`, () => {
      // eslint-disable-next-line max-len
      tokenStorageState.defaultToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb29DbGFpbSI6IjEyMzQ1In0.50A0G9bhMCl27gUlLEJ0PsK0Ce3hnrR71dZ9oh62DqA';

      expect(
        claimsFor<MockClaimMap, 'foo'>('foo')(state as State),
      ).toEqual({ fooClaim: '12345' });
    });

    test(`should return null if no token is set`, () => {
      expect(
        claimsFor<MockClaimMap, 'foo'>('foo')(state as State),
      ).toEqual(null);
    });

    test(`should be null if the token is garbage`, () => {
      tokenStorageState.defaultToken = 'foo.bar.baz';

      expect(
        claimsFor<MockClaimMap, 'foo'>('foo')(state as State),
      ).toEqual(null);
    });
  });

  describe(`claimValue`, () => {
    test(`provides the decoded claims`, () => {
      // eslint-disable-next-line max-len
      tokenStorageState.defaultToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb29DbGFpbSI6IjEyMzQ1In0.50A0G9bhMCl27gUlLEJ0PsK0Ce3hnrR71dZ9oh62DqA';

      const selector = claimValue<MockClaimMap, 'foo', 'fooClaim'>('foo', 'fooClaim');

      expect(
        selector(state as State),
      ).toEqual('12345');
    });

    test(`should return null if no token is set`, () => {
      const selector = claimValue<MockClaimMap, 'foo', 'fooClaim'>('foo', 'fooClaim');

      expect(
        selector(state as State),
      ).toEqual(null);
    });

    test(`should be null if the token is garbage`, () => {
      tokenStorageState.defaultToken = 'foo.bar.baz';

      const selector = claimValue<MockClaimMap, 'foo', 'fooClaim'>('foo', 'fooClaim');

      expect(
        selector(state as State),
      ).toEqual(null);
    });
  });
});
