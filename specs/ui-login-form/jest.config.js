module.exports = {
  name: 'ui-login-form',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/login-form',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};