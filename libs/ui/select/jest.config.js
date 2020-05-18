module.exports = {
  name: 'ui-select',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/select',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
