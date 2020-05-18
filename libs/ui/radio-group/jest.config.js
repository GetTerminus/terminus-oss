module.exports = {
  name: 'ui-radio-group',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/radio-group',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
