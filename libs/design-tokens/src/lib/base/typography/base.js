module.exports = {
  typography: {
    family: {
      base: {
        roboto: { value: 'Roboto' },
        monospaced: { value: '\'Roboto Mono\'' },
      },
    },
    stack: {
      base: {
        roboto: { value: '{typography.family.base.roboto.value}, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Ubuntu, \'Droid'
            + ' Sans\', \'Helvetica Neue\', sans-serif' },
        // HACK: 'monospace' should be declared twice. See: https://stackoverflow.com/a/36540436/722367
        monospaced: { value: '{typography.family.base.monospaced.value}, \'Open Sans\', monaco, monospace, monospace' },
      },
    },
  },
};
