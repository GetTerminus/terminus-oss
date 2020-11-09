module.exports = {
  name: 'ui-storybook',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ui-storybook',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
