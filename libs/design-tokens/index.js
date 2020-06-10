const StyleDictionary = require('style-dictionary');

const formats = require('./config/formats').formats;
const transformGroups = require('./config/transformGroups').transformGroups;
const transforms = require('./config/transforms').transforms;

// Define the collection of configurations that StyleDictionary should build
const configs = [
  {
    name: 'base',
    config: require('./config/config-base.js'),
  },
  {
    name: 'library',
    config: require('./config/config-ui-library'),
  },
  {
    name: 'sketch-color',
    config: require('./config/config-sketch-color'),
  },
  {
    name: 'sketch-typography',
    config: require('./config/config-sketch-typography'),
  },
  // TODO
  // {
  //   name: 'compound',
  //   config: require('./config/compound'),
  // },
];

// Register custom transforms
transforms.forEach(transform => StyleDictionary.registerTransform(transform));

// Register custom transform groups
transformGroups.forEach(group => StyleDictionary.registerTransformGroup(group));

// Register custom formats
formats.forEach(format => StyleDictionary.registerFormat(format));

// Build all configurations
configs.map(function(config) {
  const updatedDictionary = StyleDictionary.extend(config.config);
  updatedDictionary.buildAllPlatforms();
});

