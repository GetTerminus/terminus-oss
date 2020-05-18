module.exports = {
  name: 'showcase-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/showcase-ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
