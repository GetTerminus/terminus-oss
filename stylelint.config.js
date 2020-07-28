module.exports = {
  extends: '@terminus/stylelint-config-frontend',
  rules: {
    // TODO: remove once stylelint config is updated
    'plugin/stylelint-no-indistinguishable-colors': null,
    'scale-unlimited/declaration-strict-value': null,
  },
};
