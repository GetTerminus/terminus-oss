const addonConfigs = require('../../../../.storybook/utilities/addon-configs');
const globalConfig = require('../../../../stories/ui/storybook/.storybook/main');

module.exports = {
  ...globalConfig,
  addons: [
    ...addonConfigs.addonsNoEssentials,
    ...addonConfigs.essentialsNoDocs,
  ],
  stories: ['../src/**/*.stories.@(js|ts|mdx)'],
};
