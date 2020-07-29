module.exports = {
  name: 'fe-utilities',
  preset: '../../jest.config.js',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/fe-utilities',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  roots: [
    './src/lib',
    '../../specs/fe-utilities',
  ],
};
