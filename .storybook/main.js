module.exports = {
  stories: ['../stories/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-storysource',
    'storybook-addon-paddings',
  ],
};
