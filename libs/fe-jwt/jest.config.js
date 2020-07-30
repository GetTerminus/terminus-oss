module.exports = {
  name: 'fe-jwt',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/fe-jwt',
  roots: [
    './src/lib',
    '../../specs/fe-jwt',
  ],
};
