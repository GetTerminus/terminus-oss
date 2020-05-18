module.exports = {
  include: ['libs/design-tokens/src/lib/base/**/*.js'],
  source: ['libs/design-tokens/src/lib/ui-library-tokens/typography/compound.js'],
  platforms: {
    sketchTypography: {
      buildPath: 'dist/libs/design-tokens/sketch/',
      files: [{
        destination: 'typographyDesignTokens.json',
        format: 'ts-format-sketch-typography',
      }],
      prefix: 'ts',
      transformGroup: 'ts/sketch/typography',
    },
  },
};
