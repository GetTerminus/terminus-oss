/** If the string contains a phrase, prefix it. This is useful for making ordering sections */
const prefix = (phrase, prefix) => (value) => {
  const index = value.indexOf(phrase);
  return index > -1 ? value.substr(0, index) + prefix + value.substr(index) : value;
};
const pipe = (...fns) => value => fns.reduce((result, fn) => fn(result), value);

// Functionality snagged from: https://github.com/Workday/canvas-kit/blob/master/.storybook/config.js
function storySort(a, b) {
  const prefixFn = pipe(
    prefix('welcome-', '0'),
    prefix('getting-started', 'a'),
    prefix('tokens-', '1'),
    prefix('components-', '2'),
    // prefix('labs-', '3'),
    // prefix('default', 'aa'),
    // prefix('visual-testing', 'zz')
  );
  const left = prefixFn(a[0]);
  const right = prefixFn(b[0]);
  return left === right ? 0 : left.localeCompare(right);
}

export const parameters = {
  options: {
    storySort,
  },
};

export const decorators = [];
