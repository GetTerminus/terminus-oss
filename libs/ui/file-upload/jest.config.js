module.exports = {
  name: 'ui-file-upload',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/file-upload',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  roots: [
    './src/lib',
    '../../../specs/ui-file-upload',
  ],
};
