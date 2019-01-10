const favicon = require('serve-favicon');
const path = require('path');

module.exports = {
  name: 'favicon',
  configure: app => {
    console.log('[middleware:favicon]');
    app.use(favicon(path.join(__dirname, './../public', 'favicon.ico')));
  }
};
