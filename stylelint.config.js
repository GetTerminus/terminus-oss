module.exports = {
  extends: '@terminus/stylelint-config-frontend',
  rules: {
    // TODO: remove once package is released
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
  },
};
