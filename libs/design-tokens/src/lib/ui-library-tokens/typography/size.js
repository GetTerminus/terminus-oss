module.exports = {
  typography: {
    size: {
      display: {
        100: { value: '{typography.size.700.value}' },
        200: { value: '{typography.size.800.value}' },
        300: { value: '{typography.size.900.value}' },
        400: { value: '{typography.size.1000.value}' },
      },
      headline: { 500: { value: '{typography.size.600.value}' } },
      title: { 500: { value: '{typography.size.500.value}' } },
      subhead: { 500: { value: '{typography.size.400.value}' } },
      body: {
        100: { value: '{typography.size.300.value}' },
        // TODO: This should actually be 14 but currently it is 16 in use.
        200: { value: '{typography.size.300.value}' },
      },
      caption: { 500: { value: '{typography.size.200.value}' } },
      hint: { 500: { value: '{typography.size.200.value}' } },
    },
  },
};

