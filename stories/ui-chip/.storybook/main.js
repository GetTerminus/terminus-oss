const addonConfigs = require('../../../../.storybook/utilities/addon-configs');

module.exports = {
  addons: [
    ...addonConfigs.addonsNoEssentials,
    ...addonConfigs.essentialsNoDocs,
  ],
  stories: ['../src/**/*.stories.@(js|ts|mdx)'],
};
