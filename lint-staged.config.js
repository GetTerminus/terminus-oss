const micromatch = require('micromatch');
const IGNORE = [
  'dist/**',
  'docs/**',
  'coverage/**',
  'node_modules/**',
  'package.json',
  'yarn.lock',
];

module.exports = {
  // Target all TS & JS files
  '**/*.{js,ts}': filenames => [
    `eslint --fix ${removeDirectories(filenames).map(f => `"${f}"`).join(' ')}`,
  ],

  // Target library SCSS files
  'libs/**/!(*.spec).scss': files => [
    `stylelint --fix ${files.map(f => `"${f}"`).join(' ')}`,
  ],
};


/**
 * Function to remove any testing or demo files and return an array containing all file names
 *
 * @param files
 * @returns Array
 */
const removeDirectories = files => micromatch.not(files, [
  ...IGNORE,
  '**/testing/**',
  '**/demo/**',
  '**/cypress/**',
  '**/vr/**',
]);

