const _ = require('lodash');
const path = require('path');
const logger = require('winster').instance();

const Koa = require('koa');
const initializer = require('koa-initializer');
const index = require('./routes');

const defaultConfig = require('./config/server-config.js');

class AppServer {

  constructor(config) {
    this.config = _.extend(defaultConfig, _.clone(config) || {});

    this.app = null;
    this.server = null;

    this.app = new Koa();
  }

  async start() {

    await initializer(this.app, path.join(__dirname, './initializers'));
    this.app.use(index.routes(), index.allowedMethods());

    try {
      this.server = await this.app.listen(this.config.PORT);
      logger.info(`[app-server] Koa server listening on port ${this.config.PORT} in "${this.config.NODE_ENV}" mode`);
    } catch (err) {
      logger.fatal('[app-server] Cannot start koa server', err);
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
