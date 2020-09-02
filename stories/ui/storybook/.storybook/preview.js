import { setCompodocJson } from '@storybook/addon-docs/angular';
import { customStorySort } from '../../../../.storybook/preview';
import docJson from '../../../../docs/documentation.json';

setCompodocJson(docJson);

export const parameters = {
  options: {
    storySort: customStorySort,
  },
};

export const decorators = [];
