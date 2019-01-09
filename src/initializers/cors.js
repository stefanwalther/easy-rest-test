const cors = require('cors');

module.exports = {
  name: 'cors',
  configure: app => {
    console.log('[middleware:cors]');
    app.use(cors());
  }
};
