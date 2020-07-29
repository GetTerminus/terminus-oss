module.exports = {
  name: 'fe-utilities',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/fe-utilities',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
