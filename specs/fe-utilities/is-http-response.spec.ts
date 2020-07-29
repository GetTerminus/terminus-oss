import { isHttpResponse } from '@terminus/fe-utilities';

describe(`isHttpResponse`, function() {
  const validResponses = [
    { headers: {} },
    { headers: 2 },
    {
      foo: 'bar',
      test: () => {},
      headers: true,
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
      expect(isHttpResponse(test)).toEqual(true);
    }
  });

  test(`should return false for non-valid responses`, () => {
    for (const test of invalidResponses) {
      expect(isHttpResponse(test as any)).toEqual(false);
    }
  });
});
