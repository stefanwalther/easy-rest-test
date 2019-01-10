const koaBody = require('koa-body');

module.exports = {
  priority: 1000,
  execute(app) {
    app.use(koaBody({
      jsonLimit: '1kb'
    }));
  }
};
