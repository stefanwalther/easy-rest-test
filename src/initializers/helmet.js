const helmet = require('koa-helmet');

module.exports = {
  priority: 1000,
  execute(app) {
    app.use(helmet());
  }
};
