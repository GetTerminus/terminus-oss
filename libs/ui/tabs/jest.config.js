module.exports = {
  name: 'ui-tabs',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/tabs',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  roots: [
    './src/lib',
    '../../../specs/ui-tabs',
  ],
};
