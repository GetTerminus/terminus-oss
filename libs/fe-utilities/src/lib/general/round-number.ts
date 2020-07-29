import { isNumber } from '@terminus/ngx-tools/type-guards';


/**
 * Round a number
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round#A_better_solution
 *
 * @param num - The number to round (also accepting strings for exponential support)
 * @param precision - How precise to make the rounding
 * @returns The rounded number
 *
 * @example
 * roundNumber(1.050, 1)      // Returns: `1.1`
 * roundNumber(3456.3456, 1)  // Returns: `3456.3`
 * roundNumber(3456.3456, -2) // Returns: `3500`
 * roundNumber('1.23e+5', -4) // Returns: `120000`
 */
export function roundNumber(num: number | string, precision = 0): number | undefined {
  if (!isNumber(num)) {
    return undefined;
  }

  const shift = function(innerNum: number | string, innerPrecision: number): number {
    const numArray = innerNum.toString().split('e');
    return +(`${numArray[0]}e${numArray[1] ? (+numArray[1] + innerPrecision) : innerPrecision}`);
  };

  return shift(Math.round(shift(num, +precision)), -precision);
}
