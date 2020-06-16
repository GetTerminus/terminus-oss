module.exports = {
  name: 'ui-copy',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/copy',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};