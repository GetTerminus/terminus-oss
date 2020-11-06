module.exports = {
  name: 'ui-page-header',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/page-header',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
