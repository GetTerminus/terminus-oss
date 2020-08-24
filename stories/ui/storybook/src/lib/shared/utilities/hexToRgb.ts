/**
 * Convert a Hex color to RGB
 *
 * @param hex - The hex string
 * @returns The RGB string
 */
export function hexToRGB(hex: string): string {
  let r: string | number = 0;
  let g: string | number = 0;
  let b: string | number = 0;
  const shortHexLength = 4;
  const longHexLength = 7;

  // 3 digits
  if (hex.length === shortHexLength) {
    r = `0x${hex[1]}${hex[1]}`;
    g = `0x${hex[2]}${hex[2]}`;
    b = `0x${hex[3]}${hex[3]}`;
  }

  // 6 digits
  if (hex.length === longHexLength) {
    r = `0x${hex[1]}${hex[2]}`;
    g = `0x${hex[3]}${hex[4]}`;
    b = `0x${hex[5]}${hex[6]}`;
  }

  return `rgb(${+r}, ${+g}, ${+b})`;
}
