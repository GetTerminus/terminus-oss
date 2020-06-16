module.exports = {
  name: 'ui-search',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/search',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};