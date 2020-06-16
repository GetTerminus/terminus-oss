module.exports = {
  name: 'ui-paginator',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/paginator',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};