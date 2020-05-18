module.exports = {
  name: 'showcase-tokens',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/showcase-tokens',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
