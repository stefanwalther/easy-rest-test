const AppServer = require('./app-server.js');
const logger = require('winster').instance();

const config = {};

let appServer = new AppServer(config);

(async () => {
  try {
    await appServer.start();
  } catch (err) {
    logger.error('Error starting the server: ', err);
  }
})();
