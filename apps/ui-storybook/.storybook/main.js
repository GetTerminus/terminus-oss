const addonConfigs = require('../../../.storybook/utilities/addon-configs');

module.exports = {
  stories: [
    '../../../libs/**/*.stories.@(js|ts|mdx)',
    '../src/**/*.stories.@(js|ts|mdx)',
    '../../../stories/**/*.stories.@(js|ts|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    ...addonConfigs.addonsNoEssentials,
  ],
}
