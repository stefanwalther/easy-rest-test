const helmet = require('helmet');

module.exports = {
  name: 'helmet',
  configure: app => {
    console.log('[middleware:helmet]');

    app.use(helmet());
  }
};
