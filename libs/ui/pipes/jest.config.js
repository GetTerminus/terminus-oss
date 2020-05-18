module.exports = {
  name: 'ui-pipes',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/pipes',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
