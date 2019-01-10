const routesConfig = require('./../config/routes-config');

module.exports = {
  name: 'routes',
  after: 'method-override',
  configure: app => {
    // Todo: refactor
    console.log('[middleware:routes]');
    app.use(routesConfig);
  }
};
