import { isTokenResponse } from '@terminus/fe-utilities';

describe(`isTokenResponse`, function() {
  const validResponses = [
    { token: {} },
    { token: 2 },
    {
      foo: 'bar',
      test: () => {},
      token: true,
    },
  ];
  const invalidResponses = [
    {},
    null,
    undefined,
    1,
    true,
    { foo: 'bar' },
  ];

  test(`should return true for a valid response`, function() {
    for (const test of validResponses) {
      expect(isTokenResponse(test)).toEqual(true);
    }
  });

  test(`should return false for non-valid responses`, () => {
    for (const test of invalidResponses) {
      expect(isTokenResponse(test as any)).toEqual(false);
    }
  });
});
