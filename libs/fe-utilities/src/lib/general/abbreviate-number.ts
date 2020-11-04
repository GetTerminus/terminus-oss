import { coerceNumberProperty } from '../coercion/number-property';

/**
 * Helper function to abbreviate a number
 *
 * @param value - The number to be abbreviated.
 * @param decimalPlace - The decimals users define for final abbreviated number. Default to 1.
 * @param allowTrailingZeros - Whether trailing zeros should be stripped
 * @returns The abbreviated number
 *
 * @example
 * abbreviateNumber(1264)           // Returns: '1.3K'
 * abbreviateNumber(1200, 3)        // Returns: '1.200K'
 * abbreviateNumber(1200, 3, false) // Returns: '1.2K'
 */
export function abbreviateNumber(value: number | string | null, decimalPlace = 1, allowTrailingZeros = true): string {
  const input = coerceNumberProperty(value);
  const SCALE_NUMBER = 3;
  const MATH_POWER = 10;

  if (!input) {
    return '';
  }
  const baseNumberAndExponent = input
    .toExponential()
    .split('e+')
    .map(el => +el);

  if (baseNumberAndExponent[1] < SCALE_NUMBER) {
    return input.toString();
  }

  const scaleLevel = baseNumberAndExponent[1] % SCALE_NUMBER;
  baseNumberAndExponent[0] = baseNumberAndExponent[0] * Math.pow(MATH_POWER, scaleLevel);
  const calculatedScale = [
    '',
    'K',
    'M',
    'B',
    'T',
  ][(baseNumberAndExponent[1] - scaleLevel) / SCALE_NUMBER];
  const newNumber = baseNumberAndExponent[0].toFixed(decimalPlace).toString();
  return (allowTrailingZeros ? newNumber : parseFloat(newNumber).toString()) + calculatedScale;
}

