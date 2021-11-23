module.exports = {
  name: 'ui-wizard-step-wrapper',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui/wizard-step-wrapper',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
