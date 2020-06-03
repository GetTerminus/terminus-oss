module.exports = {
  extends: ['../../../release.config.js'],
  monorepo: {
    publish: [
      {
        path: '@semantic-release/npm',
        pkgRoot: 'dist/libs/ui/styles',
      },
    ],
  },
};
