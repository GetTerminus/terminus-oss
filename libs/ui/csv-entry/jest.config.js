module.exports = {
  name: 'ui-csv-entry',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/csv-entry',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
