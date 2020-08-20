module.exports = {
  stories: ['../src/lib/**/*.stories.@(ts|js)'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-storysource',
    'storybook-addon-paddings',
  ],
}
