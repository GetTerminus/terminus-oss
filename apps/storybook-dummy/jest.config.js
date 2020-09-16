module.exports = {
  name: 'storybook-dummy',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/storybook-dummy',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
