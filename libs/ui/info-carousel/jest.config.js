module.exports = {
  name: 'ui-info-carousel',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/info-carousel',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  roots: [
    './src/lib',
    '../../../specs/ui-info-carousel',
  ],
};