module.exports = {
  stories: ['../stories/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-storysource',
  ],
};
