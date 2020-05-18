/**
 * Custom transform groups
 *
 * These are collections of formatters that can be applied as a group.
 */
const transformGroups = [
  /**
   * The collection of transforms used for CSS generation
   */
  {
    name: 'ts/css',
    transforms: [
      'attribute/cti',
      'color/css',
      'ts/name/cti/kebabCamel',
      'ts/time/milliseconds',
      'ts/type/size/px',
    ],
  },

  /**
   * The collection of transforms used for Sketch color generation
   *
   * See: https://github.com/andrewfiorillo/sketch-palettes
   */
  {
    name: 'ts/sketch/color',
    transforms: [
      'attribute/cti',
      'color/sketch',
      'ts/name/cti/kebabCamel',
    ],
  },

  /**
   * The collection of transforms used for Sketch typography generation
   *
   * See https://github.com/nilshoenson/shared-text-styles
   */
  {
    name: 'ts/sketch/typography',
    transforms: [
      'attribute/cti',
      // 'ts/sketch/typography/color',
      'ts/name/cti/kebabCamel',
    ],
  },

  /**
   * The collection of transforms used for SCSS
   */
  {
    name: 'ts/scss',
    transforms: [
      'attribute/cti',
      'color/css',
      'ts/name/cti/kebabCamel',
      'ts/time/milliseconds',
      'ts/type/size/px',
    ],
  },

  /**
   * The collection of transforms used for JavaScript generation
   */
  {
    name: 'ts/js',
    transforms: [
      'attribute/cti',
      'color/hex',
      'name/cti/constant',
      'ts/time/milliseconds',
      'ts/type/size/px',
    ],
  },
];


module.exports = { transformGroups };
