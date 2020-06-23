module.exports = {
  name: 'ui-utilities',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/utilities',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  roots: [
    './src/lib',
    '../../../specs/ui-utilities',
  ],
};
