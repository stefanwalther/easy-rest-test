const bodyParser = require('body-parser');

module.exports = {
  name: 'body-parser',
  configure: app => {
    console.log('[middleware:body-parser]');
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
  }
};
