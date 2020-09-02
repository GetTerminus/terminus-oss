module.exports = {
  stories: [
    '../../../../libs/**/*.stories.@(js|ts|mdx)',
    '../../../../stories/**/*.stories.@(js|ts|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
  ],
}
