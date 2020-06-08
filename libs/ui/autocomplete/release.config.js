module.exports = {
  extends: ['../../../release.config.js'],
  publish: [
    {
      path: '@semantic-release/npm',
      npmPublish: true,
      pkgRoot: '../../../dist/libs/ui/autocomplete',
    },
  ],
};
