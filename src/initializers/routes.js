const routesConfig = require('./../config/routes-config');

module.exports = {
  configure: app => {
    // Todo: refactor
    app.use(routesConfig);
  }
};
