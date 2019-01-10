const errorHandler = require('./../middleware/errorHandler');

module.exports = {
  name: 'error-handler',
  after: 'log-errors',
  configure: app => {
    console.log('[middleware:error-handler]');
    app.use(errorHandler);
  }
};
