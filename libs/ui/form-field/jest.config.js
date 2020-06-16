module.exports = {
  name: 'ui-form-field',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/form-field',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  roots: [
    './src/lib',
    '../../../specs/ui-form-field',
  ],
};
