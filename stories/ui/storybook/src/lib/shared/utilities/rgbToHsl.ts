/**
 * Convert an RGB color to HSL
 *
 * For more info: https://css-tricks.com/converting-color-spaces-in-javascript/
 *
 * @param rgb - The rgb string
 * @returns The HSL string
 */
export function rgbToHsl(rgb: string): string {
  const prefixLength = 4;
  const rgbFraction = 255;
  const rgbArray: string[] = rgb.substring(prefixLength, rgb.length - 1).replace(/ /g, '').split(',');
  const allPossibleDegrees = 360;
  const degreeMultiplier = 60;

  // Make r, g, and b fractions of 1
  const r = parseInt(rgbArray[0], 10) / rgbFraction;
  const g = parseInt(rgbArray[1], 10) / rgbFraction;
  const b = parseInt(rgbArray[2], 10) / rgbFraction;

  // Find greatest and smallest channel values
  const channelMin = Math.min(r, g, b);
  const channelMax = Math.max(r, g, b);
  const delta = channelMax - channelMin;
  let h = 0;
  let s = 0;
  let l = 0;

  // Calculate hue
  if (delta === 0) {
    // No difference
    h = 0;
  } else if (channelMax === r) {
    // Red is max
    h = ((g - b) / delta) % 6;
  } else if (channelMax === g) {
    // Green is max
    h = ((b - r) / delta) + 2;
  } else {
    // Blue is max
    h = ((r - g) / delta) + 4;
  }

  h = Math.round(h * degreeMultiplier);

  // Make negative hues positive behind 360°
  if (h < 0) {
    h += allPossibleDegrees;
  }

  // Calculate lightness
  // eslint-disable-next-line no-magic-numbers
  l = (channelMax + channelMin) / 2;

  // Calculate saturation
  // eslint-disable-next-line no-magic-numbers
  s = delta === 0 ? 0 : delta / (1 - Math.abs((2 * l) - 1));

  // Multiply l and s by 100 to convert to a percentage
  /* eslint-disable no-magic-numbers */
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  /* eslint-enable no-magic-numbers */

  return `hsl(${h}, ${s}%, ${l}%)`;
}
