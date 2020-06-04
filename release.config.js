module.exports = {
  extends: ['semantic-release-monorepo'],
  branches: ['master'],
  monorepo: {
    plugins: [
      '@semantic-release/commit-analyzer',
      [
        '@semantic-release/release-notes-generator',
        {
          parserOpts: {
            noteKeywords: [
              'BREAKING CHANGE',
              'BREAKING CHANGES',
              'BREAKING',
            ],
          },
          writerOpts: {
            commitsSort: [
              'subject',
              'scope',
            ],
          },
        },
      ],
      [
        '@semantic-release/changelog',
        { changelogFile: 'CHANGELOG.md' },
      ],
      [
        '@semantic-release/npm',
        { addChannel: 'next' },
      ],
      [
        '@semantic-release/git',
        {
          assets: ['CHANGELOG.md', 'package.json', 'packages/*/*/package.json'],
          // eslint-disable-next-line no-template-curly-in-string
          message: 'Build: ${nextRelease.gitTag} [skip ci]',
        },
      ],
      '@semantic-release/github',
    ],
    verifyConditions: [
      '@semantic-release/changelog',
      '@semantic-release/npm',
      '@semantic-release/git',
      '@semantic-release/github',
    ],
    prepare: [
      {
        path: '@semantic-release/changelog',
        changelogFile: 'CHANGELOG.md',
      },
      {
        path: '@semantic-release/git',
        // eslint-disable-next-line no-template-curly-in-string
        message: 'Add ${nextRelease.version} release notes [skip ci]',
      },
    ],
  },
}
