module.exports = {
  cacheDirectory: `${__dirname}/.jest-cache`,
  clearMocks: true,
  collectCoverageFrom: [
    `**/*.{ts,js}`,
    `libs/**/*.ts`,
    `!**/*.stories.ts`,
    `!**/stories/*`,
    `!**/*.module.ts`,
    `!**/testing/**`,
    `!**/index.ts`,
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageReporters: [
    'text',
    'json',
    'html',
  ],
  moduleFileExtensions: ['ts', 'js', 'html'],
  moduleNameMapper: {
    '^@terminus/ui-(.*)/testing$': `${__dirname}/libs/ui/$1/testing/src/index.ts`,
    '^@terminus/ui-(.*)$': `${__dirname}/libs/ui/$1/src/index.ts`,
  },
  resolver: '@nrwl/jest/plugins/resolver',
  testMatch: [
    '**/+(*.)+(spec|test).+(ts|js)?(x)',
    '**/jest-mocks/*',
  ],
  testPathPattern: '^(libs|specs)/**/*.spec.ts',
  transform: { '^.+\\.(ts|js|html)$': 'ts-jest' },
  transformIgnorePatterns: ['/node_modules/(?!@ngrx|popper|@terminus/design-tokens)'],
};
