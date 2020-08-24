const globalConfig = require('../../../../stories/ui/storybook/.storybook/main');

const customConfig = {
  presets: [
    {
      name:'@ergosign/storybook-addon-pseudo-states-angular/preset-postcss',
      options: {
        postCssLoaderPseudoClassesPluginOptions: {
          blacklist: [':enabled', ':not'],
        },
      },
    },
  ],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@ergosign/storybook-addon-pseudo-states-angular',
  ],
}

module.exports = {
  ...globalConfig,
  ...customConfig,
};
