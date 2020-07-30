module.exports = {
  name: 'fe-testing',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/fe-testing',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
