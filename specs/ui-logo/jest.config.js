module.exports = {
  name: 'ui-logo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/logo',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};