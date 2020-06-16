module.exports = {
  name: 'ui-expansion-panel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/expansion-panel',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};