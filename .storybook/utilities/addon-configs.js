module.exports = {
  addonsNoEssentials: [
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
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
