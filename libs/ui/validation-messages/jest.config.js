module.exports = {
  name: 'ui-validation-messages',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/validation-messages',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  roots: [
    './src/lib',
    '../../../specs/ui-validation-messages',
  ],
};
