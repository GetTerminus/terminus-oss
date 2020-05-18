module.exports = {
  source: ['libs/design-tokens/src/lib/base/**/*.js'],
  platforms: {
    sketchColor: {
      buildPath: 'dist/libs/design-tokens/sketch/',
      files: [{
        destination: 'colorDesignTokens.sketchpalette',
        format: 'sketch/palette/v2',
        filter: { attributes: { category: 'color' } },
      }],
      prefix: 'ts',
      transformGroup: 'ts/sketch/color',
    },
  },
};
