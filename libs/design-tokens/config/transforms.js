const utilities = require('./utilities');


/**
 * Custom transforms
 *
 * These functions format a property name or value.
 */
const transforms = [
  /**
   * Adds 'ms' to the end of non-zero values.
   *
   * @example
   * ```
   * // Matches: type: time
   * // Returns:
   * 200 => "200ms"
   * ```
   */
  {
    name: 'ts/time/milliseconds',
    type: 'value',
    matcher(prop) {
      const matches = prop.attributes.type === 'time';
      const nonZeroValue = prop.original.value !== 0;
      return matches && nonZeroValue;
    },
    transformer: prop => `${prop.original.value}ms`,
  },

  /**
   * Adds 'px' to the end of non-zero values.
   *
   * @example
   * ```
   * // Matches: type: size|lineHeight, category: space
   * // Returns:
   * 12 => "12px"
   * ```
   */
  {
    name: 'ts/type/size/px',
    type: 'value',
    matcher: utilities.needsPx,
    transformer: prop => `${prop.original.value}px`,
  },

  /**
   * Creates a kebab/camel case name.
   *
   * NOTE: This will kebab case all item paths but will not kebab case individual keys.
   * NOTE: If you define a prefix on the platform in your config, it will prepend with your prefix
   *
   * @example
   * ```
   * // Matches: all
   * // Returns:
   * "color-background-button-primary-active"
   * "typography-lineHeight-600"
   * ```
   */
  {
    name: 'ts/name/cti/kebabCamel',
    type: 'name',
    transformer: (prop, options) => `${options.prefix}-${prop.path.join('-')}`,
  },

  /**
   * Creates typography styles formatted for sketch
   *
   * See: https://github.com/nilshoenson/shared-text-styles
   *
   * @example
   * ```
   * // Matches: typography.compound
   * // Returns:
   * {red: 0.8276, green: 0.27, blue: 0.31229, alpha: 1}
   * ```
   */
  // {
  //   name: 'ts/sketch/typography/color',
  //   type: 'value',
  //   matcher(prop) {
  //     if (prop.attributes.category === 'typography') {
  //       console.log('type: compound?: ', prop.attributes.type);
  //       console.log('prop: ', prop.attributes);
  //     }
  //     return false;
  //   },
  //   transformer(prop) {
  //     return utilities.hexToRgba(prop.original.value);
  //   },
  // },
];


/**
 * TODO: Currently unable to correctly build a gradient with inherited colors.
 */
// {
//   name: 'color/gradient',
//   type: 'value',
//   matcher(prop) {
//     return prop.attributes.subitem === 'gradient';
//   },
//   transformer(prop) {
//     const og = prop.original.value;
//     const gradient = `${og.type}(${og.direction}, ${og.start} 0%, ${og.end} 100%)`;
//     console.log('prop.attributes: ', prop.attributes);
//     console.log('prop.original.value: ', prop.original.value);
//     return JSON.stringify(gradient);
//   },
// }


module.exports = { transforms };
