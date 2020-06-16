module.exports = {
  name: 'ui-validators',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/validators',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};