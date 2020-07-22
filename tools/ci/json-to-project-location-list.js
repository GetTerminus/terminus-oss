/* eslint-disable no-console */
try {
  const data = require('../../CHANGED.json');
  const packages = data.map(p => p.location).join(',');
  console.log(packages);
} catch (ex) {
  console.log('CHANGED.json not found. ', ex);
}
