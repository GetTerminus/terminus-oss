module.exports = {
  name: 'ui-cohort-date-range',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/cohort-date-range',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  roots: [
    './src/lib',
    '../../../specs/ui-cohort-date-range',
  ],
};
