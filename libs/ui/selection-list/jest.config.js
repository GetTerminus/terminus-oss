module.exports = {
  name: 'ui-selection-list',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/selection-list',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
