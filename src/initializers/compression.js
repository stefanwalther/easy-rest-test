const compression = require('compression');

module.exports = {
  name: 'compression',
  configure: app => {
    console.log('[middleware:compression]');
    app.use(compression());
  }
};
