const path = require('path');

const DIST = 'dist';
const DIST_PATH = path.resolve(__dirname, '..', '..', DIST);
const ENTRY = path.resolve(__dirname, '..', '..', 'src', 'api');

module.exports = {
  DIST_PATH,
  ENTRY,
};
