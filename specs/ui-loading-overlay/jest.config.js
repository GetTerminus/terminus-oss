module.exports = {
  name: 'ui-loading-overlay',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/loading-overlay',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};