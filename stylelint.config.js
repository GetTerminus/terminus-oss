module.exports = {
  extends: '@terminus/stylelint-config-frontend',
  rules: {
    'no-eol-whitespace': [true, { ignore: 'empty-lines' }],
    // This was causing too many warnings once product started the LPS project
    'plugin/stylelint-no-indistinguishable-colors': null,
    // TODO: remove once stylelint config is updated
    'scale-unlimited/declaration-strict-value': null,
  },
};
