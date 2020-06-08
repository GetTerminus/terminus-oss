module.exports = {
  extends: ['semantic-release-monorepo'],
  publish: [
    {
      path: '@semantic-release/npm',
      npmPublish: true,
      pkgRoot: '/dist/libs/ui/autocomplete',
    },
  ],
};
