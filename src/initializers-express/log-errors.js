const logErrors = require('./../middleware/logErrors');

module.exports = {
  name: 'log-errors',
  after: 'routes',
  configure: app => {
    console.log('[middleware:log-errors]');
    app.use(logErrors);
  }
};
