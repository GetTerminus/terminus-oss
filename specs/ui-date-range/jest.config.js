module.exports = {
  name: 'ui-date-range',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/date-range',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};