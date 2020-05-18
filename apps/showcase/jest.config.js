module.exports = {
  name: 'showcase',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/showcase',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
