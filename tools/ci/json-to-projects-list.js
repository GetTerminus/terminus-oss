/* eslint-disable no-console */
const data = require('../../CHANGED.json');
if (Array.isArray(data)) {
  const packages = data.map(p => p.name.substring(p.name.indexOf('/') + 1, p.name.length)).join(',');
  console.log(packages);
}
