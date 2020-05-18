module.exports = {
  include: ['libs/design-tokens/src/lib/base/**/*.js'],
  source: ['libs/design-tokens/src/lib/ui-library-tokens/typography/compound.js'],
  platforms: {
    css: {
      buildPath: 'dist/libs/design-tokens/css/',
      files: [{
        destination: 'library-design-tokens.css',
        format: 'css/variables',
      }],
      prefix: 'ts',
      transformGroup: 'ts/css',
    },
  },
};
