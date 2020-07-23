module.exports = {
  // Please do NOT commit any change to this `stories` attribute.
  // It is used to replace with nx affected projects dynamically in the ci script.
  stories: [STORIES],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-storysource',
    'storybook-addon-paddings',
  ],
};
