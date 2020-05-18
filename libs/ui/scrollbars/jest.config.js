module.exports = {
  name: 'ui-scrollbars',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/scrollbars',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
