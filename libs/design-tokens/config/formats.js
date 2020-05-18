/**
 * Custom formats for StyleDictionary
 *
 * These are functions that alter the format of the output file
 */
const formats = [
  /**
   * Format for shared typography styles
   */
  {
    name: 'ts-format-sketch-typography',
    formatter(dictionary) {
      const temp = dictionary.properties.typography.compound.display;
      const arr = [];
      for (let i = 0; i < Object.keys(temp).length; i += 1) {
        arr.push(temp[Object.keys(temp)[i]]);
      }
      return `{
        "styles": ${JSON.stringify(arr, null, 2)}
      }`;
    },
  },
];


module.exports = { formats };
