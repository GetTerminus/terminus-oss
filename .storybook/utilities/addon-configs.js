module.exports = {
  addonsNoEssentials: [
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
  ],
  essentialsNoDocs: [
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      },
    },
  ],
};
