import { roundNumber } from '@terminus/fe-utilities';

describe(`roundNumber`, function() {
  test(`should correctly round the number`, () => {
    expect(roundNumber(1.050)).toEqual(1);
    expect(roundNumber(1.050, 1)).toEqual(1.1);
    expect(roundNumber(1.005, 2)).toEqual(1.01);
    expect(roundNumber(10123123123, -2)).toEqual(10123123100);

    const exponentialNumber: string = Number.parseFloat('123456').toExponential(2);
    expect(roundNumber(exponentialNumber as any, -4)).toEqual(120000);

    expect(roundNumber(3456.3456,  3)).toEqual(3456.346);
    expect(roundNumber(3456.3456,  2)).toEqual(3456.35);
    expect(roundNumber(3456.3456,  1)).toEqual(3456.3);
    expect(roundNumber(3456.3456,  0)).toEqual(3456);
    expect(roundNumber(3456.3456, -1)).toEqual(3460);
    expect(roundNumber(3456.3456, -2)).toEqual(3500);
    expect(roundNumber(3456.3456, -3)).toEqual(3000);
  });

  test(`should return undefined for missing or incorrect parameters`, () => {
    const invalidCases = [
      [undefined, 1],
      [null, 1],
      ['a', 1],
    ];

    for (const v of invalidCases) {
      expect(roundNumber(v[0] as any, v[1] as any)).toEqual(undefined);
    }
  });
});
