module.exports = {
  stories: [
    '../../../../libs/**/*.stories.@(ts|js)',
    '../../../../stories/**/*.stories.@(ts|js)',
  ],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
  ],
}
