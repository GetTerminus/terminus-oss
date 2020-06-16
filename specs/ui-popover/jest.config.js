module.exports = {
  name: 'ui-popover',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/popover',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};