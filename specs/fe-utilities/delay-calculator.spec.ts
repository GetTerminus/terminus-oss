import { exponentialBackoffDelayCalculator as calculator } from '@terminus/fe-utilities';

describe(`exponentialBackoffDelaycalculatorulator`, function() {
  const baseParams = {
    baseWaitTime: 100,
    jitter: false,
    jitterFactor: 0.3,
    backOffFactor: 2,
  };

  test(`should have sane defaults`, () => {
    expect(calculator({})(1)).toBeLessThanOrEqual(200);
  });

  test(`should increase the time exponentially`, () => {
    expect(
      calculator({ ...baseParams })(1),
    ).toEqual(200);

    expect(
      calculator({ ...baseParams })(2),
    ).toEqual(400);

    expect(
      calculator({ ...baseParams })(3),
    ).toEqual(800);
  });

  test(`should allow for jitter customization`, () => {
    const expected1 = calculator({
      ...baseParams,
      jitter: false,
    })(1);
    expect(expected1).toEqual(200);

    const expected2 = calculator({
      ...baseParams,
      jitter: true,
    })(1);
    expect(expected2).toBeLessThan(200);
  });
});
