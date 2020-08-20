module.exports = {
  // Please do NOT commit any change to this `stories` attribute.
  // It is used to replace with nx affected projects dynamically in the ci script.
  stories: [STORIES],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
  ],
};
