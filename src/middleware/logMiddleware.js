const logger = require('winster').instance();


function log(req, res, next) {
  logger.trace('OK, we are logging a request');
  logger.trace('req.headers', req.headers);
  next();
}

module.exports = log;
