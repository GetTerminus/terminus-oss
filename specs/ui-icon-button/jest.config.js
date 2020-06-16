module.exports = {
  name: 'ui-icon-button',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/icon-button',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};