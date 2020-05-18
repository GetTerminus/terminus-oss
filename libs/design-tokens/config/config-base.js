module.exports = {
  source: ['libs/design-tokens/src/lib/base/**/*.js'],
  platforms: {
    css: {
      buildPath: 'dist/libs/design-tokens/css/',
      files: [{
        destination: 'design-tokens.css',
        format: 'css/variables',
      }],
      prefix: 'ts',
      transformGroup: 'ts/css',
    },
    sassMap: {
      buildPath: 'dist/libs/design-tokens/css/',
      files: [{
        destination: 'design-tokens-map.scss',
        format: 'scss/map-flat',
      }],
      prefix: 'ts',
      transformGroup: 'scss',
    },
    sassVars: {
      buildPath: 'dist/libs/design-tokens/css/',
      files: [{
        destination: 'design-tokens.scss',
        format: 'scss/variables',
      }],
      prefix: 'ts',
      transformGroup: 'scss',
    },
    js: {
      buildPath: 'dist/libs/design-tokens/js/',
      files: [{
        destination: 'design-tokens.js',
        format: 'javascript/es6',
      }],
      prefix: 'ts',
      transformGroup: 'ts/js',
    },
    jsModule: {
      buildPath: 'dist/libs/design-tokens/js/',
      files: [{
        destination: 'design-tokens-tree.js',
        format: 'javascript/module',
      }],
      prefix: 'ts',
      transformGroup: 'ts/js',
    },
  },
};
