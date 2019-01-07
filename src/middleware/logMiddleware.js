const logger = require('winster').instance();

function log(req, res, next) {
  logger.trace('----');
  logger.trace('OK, we are logging a request:');
  logger.trace('req.headers', req.headers);
  logger.trace('req.body', req.body || '<null>');
  next();
}

module.exports = log;
