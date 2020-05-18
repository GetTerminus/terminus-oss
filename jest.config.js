module.exports = {
  clearMocks: true,
  coverageReporters: [
    'html',
    // [
    //   'jest-junit',
    //   {
    //     outputDirectory: '/coverage/junit/',
    //     outputName: 'report.xml',
    //   },
    // ],
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
