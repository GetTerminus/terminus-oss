module.exports = {
  typography: {
    family: {
      base: {
        roboto: { value: 'roboto' },
        monospaced: { value: '\'Roboto Mono\'' },
      },
    },
    stack: {
      base: {
        roboto: { value: '{typography.family.base.roboto.value}, \'helvetica neue\', helvetica, arial, sans-serif' },
        // HACK: 'monospace' should be declared twice. See: https://stackoverflow.com/a/36540436/722367
        monospaced: { value: '{typography.family.base.monospaced.value}, \'Open Sans\', monaco,  monospace, monospace' },
      },
    },
  },
};
