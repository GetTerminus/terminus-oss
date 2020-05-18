module.exports = {
  name: 'ui-tooltip',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/tooltip',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
