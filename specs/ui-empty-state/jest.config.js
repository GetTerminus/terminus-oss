module.exports = {
  name: 'ui-empty-state',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/empty-state',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
