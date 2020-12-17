const addonConfigs = require('../../../.storybook/utilities/addon-configs');
const path = require('path');

module.exports = {
  addons: [
    ...addonConfigs.addonsNoEssentials,
    ...addonConfigs.essentialsNoDocs,
  ],
  stories: ['../**/*.stories.@(js|ts|mdx)'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../../../libs/ui/styles/src/lib/'),
    });

    // Return the altered config
    return config;
  },
};
