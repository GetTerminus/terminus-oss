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
};
