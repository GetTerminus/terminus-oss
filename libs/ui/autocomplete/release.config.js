module.exports = {
  extends: ['../../../release.config.js'],
  publish: [
    {
      path: '@semantic-release/npm',
      pkgRoot: '../../../dist/libs/ui/autocomplete',
    },
  ],
};
