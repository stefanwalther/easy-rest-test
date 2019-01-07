const initializer = require('express-initializers');
const _ = require('lodash');
const path = require('path');
const express = require('express');
const logger = require('winster').instance();

const defaultConfig = require('./config/server-config.js');

class AppServer {

  constructor(config) {
    this.config = _.extend(defaultConfig, _.clone(config) || {});

    this.app = null;
    this.server = null;

    this.app = express();
  }

  async start() {

    await initializer(this.app, {directory: path.join(__dirname, 'initializers')});

    this.app.use(express.static('files'));

    try {
      this.server = await this.app.listen(this.config.PORT);
      logger.info(`[app-server] Express server listening on port ${this.config.PORT} in "${this.config.NODE_ENV}" mode`);
    } catch (err) {
      logger.fatal('[app-server] Cannot start express server', err);
      throw err;
    }
  }

  async stop() {

    if (this.server) {
      try {
        await this.server.close();
        logger.info('[app-server] Server closed');
      } catch (err) {
        logger.error('[app-server] Could not close server', err);
        throw err;
      }
    } else {
      logger.trace('[app-server]  No server to close');
    }

  }
}

module.exports = AppServer;
