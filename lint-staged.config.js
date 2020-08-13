const micromatch = require('micromatch');
const IGNORE = [
  'dist/**',
  'docs/**',
  'coverage/**',
  'node_modules/**',
  'package.json',
  'yarn.lock',
  '.jest-cache/**',
  'cypress/**',
];

module.exports = {
  '**/*.{ts,js}': files => {
    const match = micromatch.not(files, IGNORE);
    return [
      `node --max_old_space_size=8192 node_modules/eslint/bin/eslint.js --fix ${match.join(' ')}`,
    ]
  },

  // Target library SCSS files
  'libs/**/!(*.spec).scss': files => [
    `stylelint --fix ${files.map(f => `"${f}"`).join(' ')}`,
  ],

  // Target top level files
  '*.md': files => {
    const nonChangelogFiles = micromatch.not(files, '**/CHANGELOG.md');
    // NOTE: 'invalid number of arguments' is from a backwards compat hack. This does work.
    const changelogFiles = micromatch.match(files, '**/CHANGELOG.md');
    return [
      `node_modules/.bin/markdownlint ${nonChangelogFiles.map(f => `"${f}"`).join(' ')} --fix`,
      `node_modules/.bin/markdownlint ${changelogFiles.map(f => `"${f}"`).join(' ')} --fix -c ./.markdownlint.changelogs.json`,
      `yarn run docs:toc`,
    ];
  },
};
