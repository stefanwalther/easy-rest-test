const methodOverride = require('method-override');

module.exports = {
  name: 'method-override',
  after: 'body-parser',
  configure: app => {
    console.log('[middleware:method-override]');
    app.use(methodOverride());
  }
};
