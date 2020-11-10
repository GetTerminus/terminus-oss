const addonConfigs = require('../../../.storybook/utilities/addon-configs');

module.exports = {
  addons: [
    ...addonConfigs.addonsNoEssentials,
    ...addonConfigs.essentialsNoDocs,
  ],
  stories: ['../**/*.stories.@(js|ts|mdx)'],
};
