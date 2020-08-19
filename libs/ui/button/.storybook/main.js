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
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-storysource',
    'storybook-addon-paddings',
    '@ergosign/storybook-addon-pseudo-states-angular/register',
  ],
}

module.exports = {
  ...globalConfig,
  ...customConfig,
};
