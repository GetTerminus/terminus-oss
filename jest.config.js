module.exports = {
  cacheDirectory: `${__dirname}/.jest-cache`,
  clearMocks: true,
  coverageReporters: [
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
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@ngrx|popper)',
  ],
};


// [coverage-badge]: https://codecov.io/gh/ethereumjs/ethereumjs-vm/branch/master/graph/badge.svg
// [account-coverage-badge]: https://codecov.io/gh/ethereumjs/ethereumjs-vm/branch/master/graph/badge.svg?flag=account
