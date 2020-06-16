module.exports = {
  name: 'ui-drawer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/drawer',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};