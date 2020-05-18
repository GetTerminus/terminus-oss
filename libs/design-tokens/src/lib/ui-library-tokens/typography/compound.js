/**
 * Compound styles used for importing to Sketch
 */
module.exports = {
  typography: {
    compound: {
      display: {
        100: {
          name: 'Display 1',
          // TODO: should be an object for rgba
          color: '{color.base.black.value}',
          font: '{typography.family.base.roboto.value}',
          lineHeight: '{typography.lineHeight.600.value}',
          paragraphSpacing: null,
          size: '{typography.size.700.value}',
          spacing: null,
          strikethrough: null,
          textTransform: null,
          underline: null,
          weight: 500,
        },
        200: {
          name: 'Display 2',
          // TODO: should be an object for rgba
          color: {},
          font: '{typography.stack.base.roboto.value}',
          lineHeight: '{typography.lineHeight.800.value}',
          paragraphSpacing: null,
          size: '{typography.size.800.value}',
          spacing: null,
          strikethrough: null,
          textTransform: null,
          underline: null,
          weight: 500,
        },
      },
    },
  },
};

