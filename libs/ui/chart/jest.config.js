module.exports = {
  name: 'ui-chart',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/chart',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
