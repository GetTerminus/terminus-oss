/**
 * Convert a Hex color to RGBA
 *
 * NOTE: This is slightly different than the hex>rgb function in the Demo app.
 *
 * @param hex - The hex string
 * @returns number[] array of RGBA color values
 */
const hexToRgba = function(hex) {
  let r = 0;
  let g = 0;
  let b = 0;
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

  return [+r, +g, +b, 1];
};


/**
 * Determine if the prop should be a `px` value
 *
 * @param prop - Object of properties and attributes
 * @returns boolean
 */
const needsPx = function(prop) {
  const isPxRadius = prop.attributes.category === 'border' && prop.attributes.subitem === 'percent';
  const isSpacing = prop.attributes.category === 'space';
  const isSize = prop.attributes.type === 'size';
  const isLineHeight = prop.attributes.type === 'lineHeight';
  return isSize || isSpacing || isLineHeight || isPxRadius;
};


module.exports = {
  hexToRgba,
  needsPx,
};
