module.exports = {
  branches: ['master'],
  // commitPaths: ['./libs/', './apps/'],
  plugins: [
    '@semantic-release/commit-analyzer',
    ['@semantic-release/release-notes-generator', {
      preset: 'angular',
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
      },
      writerOpts: {
        commitsSort: ['subject', 'scope'],
      },
    }],
    '@semantic-release/git',
  ],
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  prepare: [
    ['@semantic-release/changelog', {
      changelogFile: 'CHANGELOG.md',
    }],
    ['@semantic-release/npm', { addChannel: 'next' }],
    ['@semantic-release/git', {
      assets: ['CHANGELOG.md'],
      // eslint-disable-next-line no-template-curly-in-string
      message: 'Build: ${nextRelease.gitTag} [skip ci]',
    }],
  ],
  publish: [
    {
      path: '@semantic-release/npm',
      npmPublish: true,
    },
    {
      path: '@semantic-release/github',
      assets: ['CHANGELOG.md'],
    },
  ],
}
