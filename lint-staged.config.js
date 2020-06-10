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
  '**/*.{ts,js,json}': files => {
    const match = micromatch.not(files, IGNORE);
    return [
      `eslint --fix ${match.join(' ')}`,
    ]
  },

  // Target library SCSS files
  'libs/**/!(*.spec).scss': files => [
    `stylelint --fix ${files.map(f => `"${f}"`).join(' ')}`,
  ],
};
