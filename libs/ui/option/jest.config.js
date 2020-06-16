module.exports = {
  name: 'ui-option',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/options',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  roots: [
    './src/lib',
    '../../../specs/ui-option',
  ],
};
